import { readFileSync } from 'node:fs';

const parseModels = schema => {
  let match;

  const modelRegex = /model (\w+) {([\S\s]*?)^}/gm;

  const models = [];

  while ((match = modelRegex.exec(schema)) !== null) {
    const modelName = match[1];
    const modelBody = match[2];

    const fields = modelBody
      .trim()
      .split('\n')
      .filter(line => line && !line.startsWith('@') && !line.startsWith('@@'))
      .map(line => {
        const [name, type] = line.trim().split(/\s+/);

        const isUnique = line.includes('@unique');
        const isObjectId = line.includes('@db.ObjectId');

        if (name.includes('@@')) {
          return null;
        }

        return { name, type, isUnique, isObjectId };
      })
      .filter(field => field !== null);

    const tableMappingMatch = modelBody.match(/@@map\(["'](.+?)["']\)/);
    const tableName = tableMappingMatch ? tableMappingMatch[1] : undefined;

    const uniqueConstraints = [];

    const uniqueRegex = /@@unique\(\[([^\]]+)]\)/g;

    let uniqueMatch;

    while ((uniqueMatch = uniqueRegex.exec(modelBody)) !== null) {
      const fields = uniqueMatch[1].split(',').map(field => field.trim());
      uniqueConstraints.push({ fields });
    }

    const indexes = [];

    const indexRegex = /@@index\(\[([^\]]+)]\)/g;

    let indexMatch;

    while ((indexMatch = indexRegex.exec(modelBody)) !== null) {
      const fields = indexMatch[1].split(',').map(field => field.trim());
      indexes.push({ fields });
    }

    models.push({
      fields,
      indexes,
      tableName,
      name: modelName,
      uniqueConstraints,
    });
  }

  return models;
};

export const parsePrismaSchema = schemaPath => {
  const schema = readFileSync(schemaPath, 'utf8');

  return parseModels(schema);
};
