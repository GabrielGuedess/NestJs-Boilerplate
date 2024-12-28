import { cpf } from 'cpf-cnpj-validator';
import {
  registerDecorator,
  ValidatorConstraint,
  type ValidationOptions,
  type ValidationArguments,
  type ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ async: false })
class IsCpfConstraint implements ValidatorConstraintInterface {
  validate(value: string): boolean {
    return cpf.isValid(value);
  }

  defaultMessage(args: ValidationArguments) {
    return `${args.property} must be a CPF`;
  }
}

export const IsCPF =
  (validationOptions?: ValidationOptions) =>
  (object: { constructor: Function }, propertyName: string): void => {
    registerDecorator({
      propertyName,
      name: 'isCPF',
      constraints: [],
      target: object.constructor,
      options: validationOptions,
      validator: IsCpfConstraint,
    });
  };
