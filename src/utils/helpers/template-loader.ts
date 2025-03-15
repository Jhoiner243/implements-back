import fs from 'fs';
import Handlebars from 'handlebars';
import path from 'path';

export const templateLoader = (templateName: string, data: Record<string, unknown>): string => {
	const filePath = path.resolve(__dirname, `../templates/${templateName}.hbs`);
  const templateContent = fs.readFileSync(filePath, "utf8")
  const template = Handlebars.compile(templateContent)

  return template(data)
}