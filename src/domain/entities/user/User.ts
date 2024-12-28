import { uuidv7 } from 'uuidv7';

import { Entity } from 'domain/shared/entities/Entity';
import { type Replace } from 'domain/shared/helpers/Replace';
import { NotificationError } from 'domain/shared/notification/NotificationError';

export type UserRoleProps = 'USER' | 'ADMIN';

interface IUser {
  email: string;
  password: string;
  document: string;
  full_name: string;
  validated: boolean;
  avatar_url?: string;
  role: UserRoleProps;
  active: boolean;
  updated_at: Date;
  created_at: Date;
}

export class User extends Entity {
  private _id: string;

  private props: IUser;

  constructor(
    props: Replace<
      IUser,
      {
        validated?: boolean;
        role?: UserRoleProps;
        active?: boolean;
        updated_at?: Date;
        created_at?: Date;
      }
    >,
    id?: string,
  ) {
    super();

    this._id = id ?? uuidv7();
    this.props = {
      ...props,
      role: props.role ?? 'USER',
      validated: props.validated ?? false,
      active: props.active ?? true,
      updated_at: props.updated_at ?? new Date(),
      created_at: props.created_at ?? new Date(),
    };

    this.validate();

    if (this.notification.hasErrors()) {
      const errors = this.notification.getErrors();

      throw new NotificationError(errors);
    }
  }

  private validate() {
    if (
      this.document === undefined ||
      this.document === null ||
      this.document === ''
    ) {
      this.notification.addError({
        context: 'user',
        message: 'document is required!',
      });
    }

    if (
      this.password === undefined ||
      this.password === null ||
      this.password === ''
    ) {
      this.notification.addError({
        context: 'user',
        message: 'Password is required!',
      });
    }
  }

  public set active(active: boolean) {
    this.props.active = active;
  }

  public get active(): boolean {
    return this.props.active;
  }

  public set avatarUrl(avatarUrl: string) {
    this.props.avatar_url = avatarUrl;
  }

  public get avatarUrl(): string {
    return this.props.avatar_url;
  }

  public get createdAt(): Date {
    return this.props.created_at;
  }

  public set document(document: string) {
    this.props.document = document;
  }

  public get document(): string {
    return this.props.document;
  }

  public set email(email: string) {
    this.props.email = email;
  }

  public get email(): string {
    return this.props.email;
  }

  public set fullName(fullName: string) {
    this.props.full_name = fullName;
  }

  public get fullName(): string {
    return this.props.full_name;
  }

  public get id(): string {
    return this._id;
  }

  public set password(password: string) {
    this.props.password = password;
  }

  public get password(): string {
    return this.props.password;
  }

  public set role(role: UserRoleProps) {
    this.props.role = role;
  }

  public get role(): UserRoleProps {
    return this.props.role;
  }

  public set updatedAt(updatedAt: Date) {
    this.props.updated_at = updatedAt;
  }

  public get updatedAt(): Date {
    return this.props.updated_at;
  }

  public set validated(validated: boolean) {
    this.props.validated = validated;
  }

  public get validated(): boolean {
    return this.props.validated;
  }
}
