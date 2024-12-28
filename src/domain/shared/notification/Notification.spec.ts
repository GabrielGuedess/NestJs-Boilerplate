import { Notification } from 'domain/shared/notification/Notification';

describe('Unit tests for notifications', () => {
  it('should create errors', () => {
    const notification = new Notification();

    const error = {
      context: 'user',
      message: 'error message',
    };

    notification.addError(error);

    expect(notification.messages('user')).toBe('user: error message');

    const secondError = {
      context: 'user',
      message: 'second error message',
    };

    notification.addError(secondError);

    expect(notification.messages('user')).toBe(
      'user: error message, user: second error message',
    );

    const thirdError = {
      context: 'order',
      message: 'third error message',
    };

    notification.addError(thirdError);

    expect(notification.messages('order')).toBe('order: third error message');

    expect(notification.messages()).toBe(
      'user: error message, user: second error message, order: third error message',
    );
  });

  it('should check if notification has at least one error', () => {
    const notification = new Notification();

    const error = {
      context: 'user',
      message: 'error message',
    };

    notification.addError(error);

    expect(notification.hasErrors()).toBeTruthy();
  });

  it('should get all errors props', () => {
    const notification = new Notification();

    const error = {
      context: 'user',
      message: 'error message',
    };

    notification.addError(error);

    expect(notification.getErrors()).toEqual([error]);
  });
});
