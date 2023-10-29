class NotificationSubscriber {
    constructor({ notificationService }) {
      notificationService.subscribe(
        "order.placed",
        "mailer-send"
      )
    }
    // ...
  }
  
  export default NotificationSubscriber
