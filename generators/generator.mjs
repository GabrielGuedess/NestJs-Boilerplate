// generator.mjs
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
      .filter(line => line && !line.trim().startsWith('@') && !line.trim().startsWith('@@') && !line.trim().startsWith('///'))
      .map(line => {
        const parts = line.trim().split(/\s+/);
        if (parts.length < 2) return null;

        const name = parts[0];
        const type = parts[1];
        const isUnique = line.includes('@unique');
        const isObjectId = line.includes('@db.ObjectId');
        const hasDefault = line.includes('@default');

        // Extrai o valor padrão
        let defaultValue = null;
        const defaultMatch = line.match(/@default\(([^)]+)\)/);
        if (defaultMatch) {
          defaultValue = defaultMatch[1]
            .replace(/now\(\)/, 'new Date()')
            .replace(/uuid\(\)/, 'uuidv7()')
            .replace(/uuid\(7\)/, 'uuidv7()')
            .replace(/true/, 'true')
            .replace(/false/, 'false');
        }

        const isOptional = type && type.includes('?');

        return {
          name,
          type: type || 'unknown',
          isUnique,
          isObjectId,
          hasDefault,
          defaultValue,
          isOptional
        };
      })
      .filter(field => field !== null && field.name && field.type);

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
