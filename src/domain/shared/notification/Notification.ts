export abstract class NotificationErrorContext {
  message: string;
  context: string;
}

export class Notification {
  private errors: NotificationErrorContext[] = [];

  hasErrors(): boolean {
    return this.errors.length > 0;
  }

  getErrors(): NotificationErrorContext[] {
    return this.errors;
  }

  addError(error: NotificationErrorContext) {
    this.errors.push(error);
  }

  messages(context?: string): string {
    return this.errors
      .filter(error => error.context === context || context === undefined)
      .map(error => `${error.context}: ${error.message}`)
      .join(', ');
  }
}
