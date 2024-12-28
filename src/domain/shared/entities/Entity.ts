import { Notification } from 'domain/shared/notification/Notification';

export abstract class Entity {
  protected notification: Notification;

  constructor() {
    this.notification = new Notification();
  }
}
