import { readFileSync } from 'node:fs';

const parseModels = (schema) => {
  const modelRegex = /model (\w+) {([\S\s]*?)^}/gm;

  const modelNames = [...schema.matchAll(/model (\w+) {/g)].map(([, name]) => name);

  const models = [];
  let match;

  while ((match = modelRegex.exec(schema)) !== null) {
    const modelName = match[1];
    const modelBody = match[2];

    const rawLines = modelBody.trim().split('\n');
    const fields = [];

    for (let i = 0; i < rawLines.length; i++) {
      const currentLine = rawLines[i].trim();

      if (
        !currentLine ||
        currentLine.startsWith('@') ||
        currentLine.startsWith('@@') ||
        currentLine.startsWith('///')
      ) {
        continue;
      }

      const previousLine = rawLines[i - 1]?.trim();
      const isHideField = previousLine && previousLine.includes('@HideField');

      const parts = currentLine.split(/\s+/);
      if (parts.length < 2) continue;

      const name = parts[0];
      const type = parts[1];

      const cleanType = type.replace('?', '').replace('[]', '');
      const isRelation = modelNames.includes(cleanType);
      if (isRelation) continue;

      const isUnique = currentLine.includes('@unique');
      const isObjectId = currentLine.includes('@db.ObjectId');
      const hasDefault = currentLine.includes('@default');
      const isOptional = type.includes('?');

      let defaultValue = null;
      const defaultMatch = currentLine.match(/@default\(([^)]+)\)/);
      if (defaultMatch) {
        defaultValue = defaultMatch[1]
          .replace(/now\(\)/, 'new Date()')
          .replace(/uuid\(\)/, 'uuidv7()')
          .replace(/uuid\(7\)/, 'uuidv7()')
          .replace(/true/, 'true')
          .replace(/false/, 'false');
      }

      const isEnum = schema.includes(`enum ${cleanType}`);
      let enumType = [];
      if (isEnum) {
        const enumRegex = new RegExp(`enum ${cleanType} \\{([\\S\\s]+?)\\}`, 'g');
        const enumMatch = enumRegex.exec(schema);
        if (enumMatch) {
          enumType = enumMatch[1]
            .split('\n')
            .map((val) => val.trim())
            .filter(Boolean);
        }
      }

      const field = {
        name,
        type,
        isUnique,
        isObjectId,
        hasDefault,
        defaultValue,
        isOptional,
        isHideField,
        isEnum,
        enumType,
      };

      fields.push(field);
    }

    const tableMappingMatch = modelBody.match(/@@map\(["'](.+?)["']\)/);
    const tableName = tableMappingMatch ? tableMappingMatch[1] : undefined;

    const uniqueConstraints = [];
    const uniqueRegex = /@@unique\(\[([^\]]+)]\)/g;
    let uniqueMatch;
    while ((uniqueMatch = uniqueRegex.exec(modelBody)) !== null) {
      const fields = uniqueMatch[1].split(',').map((f) => f.trim());
      uniqueConstraints.push({ fields });
    }

    const indexes = [];
    const indexRegex = /@@index\(\[([^\]]+)]\)/g;
    let indexMatch;
    while ((indexMatch = indexRegex.exec(modelBody)) !== null) {
      const fields = indexMatch[1].split(',').map((f) => f.trim());
      indexes.push({ fields });
    }

    models.push({
      name: modelName,
      tableName,
      fields,
      uniqueConstraints,
      indexes,
    });
  }

  return models;
};

export const parsePrismaSchema = (schemaPath) => {
  const schema = readFileSync(schemaPath, 'utf8');
  return parseModels(schema);
};
