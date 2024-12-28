import { cnpj } from 'cpf-cnpj-validator';
import {
  registerDecorator,
  ValidatorConstraint,
  type ValidationOptions,
  type ValidationArguments,
  type ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ async: false })
class IsCnpjConstraint implements ValidatorConstraintInterface {
  validate(value: string): boolean {
    return cnpj.isValid(value);
  }

  defaultMessage(args: ValidationArguments) {
    return `${args.property} must be a CNPJ`;
  }
}

export const IsCNPJ =
  (validationOptions?: ValidationOptions) =>
  (object: unknown, propertyName: string): void => {
    registerDecorator({
      propertyName,
      name: 'isCNPJ',
      constraints: [],
      target: object.constructor,
      options: validationOptions,
      validator: IsCnpjConstraint,
    });
  };
