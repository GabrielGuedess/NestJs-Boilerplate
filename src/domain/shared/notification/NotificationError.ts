import { type NotificationErrorContext } from 'domain/shared/notification/Notification';

export class NotificationError extends Error {
  constructor(public errors: NotificationErrorContext[]) {
    super(errors.map(error => `${error.context}: ${error.message}`).join(', '));
  }
}
