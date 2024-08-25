# FCM Test Project

This project demonstrates how to integrate Firebase Cloud Messaging (FCM) for web push notifications and display notifications using Alertify.js.

## Project Structure

- `index.html`: Main HTML file that initializes Firebase and handles notifications on the webpage.
- `firebase-messaging-sw.js`: Service Worker script that handles background notifications.
- `manifest.json`: Web app manifest for the Firebase Cloud Messaging service.

## Setup Instructions

### 1. Firebase Configuration

Ensure you have Firebase set up for your project. Replace the Firebase configuration object in both `index.html` and `firebase-messaging-sw.js` with your own Firebase project's configuration.

### 2. Firebase Cloud Messaging Setup

- Make sure you've added your Firebase project's public VAPID key in the `getToken` method within the `index.html` file.
- The `firebaseConfig` in both `index.html` and `firebase-messaging-sw.js` should match your Firebase project's configuration.

### 3. Service Worker Setup

The `firebase-messaging-sw.js` file handles background notifications. Ensure it is correctly registered in your Firebase project's settings.

### 4. Display Notifications

The `index.html` file demonstrates how to request notification permissions and display notifications using Alertify.js.

### Dependencies

- [Firebase JavaScript SDK](https://firebase.google.com/docs/web/setup)
- [Alertify.js](https://alertifyjs.com/)

### How to Use

1. **Set Up Firebase**: Ensure Firebase is properly set up in your project and replace the configuration details in the `index.html` and `firebase-messaging-sw.js` files.

2. **Run Your Application**:
   - Host your project on a web server or Firebase Hosting.
   - Open your `index.html` file in a web browser.
   - Allow notification permissions when prompted.
   - Use the console to check for the FCM token and any received messages.

3. **Test Notifications**:
   - You can use Firebase Console or your backend to send test notifications to the FCM token received in the console.

### Common Issues

- **Notifications Not Showing**: Ensure that `firebase-messaging-sw.js` is correctly registered and accessible from your Firebase project settings.
- **Service Worker Errors**: Verify that `firebase-messaging-sw.js` is correctly imported and has no syntax errors.

### Example of Notification Handling

```javascript
// Service Worker (firebase-messaging-sw.js)
messaging.onBackgroundMessage(function(payload) {
    console.log('Received background message: ', payload);
    const notificationTitle = payload.notification?.title || 'Default Title';
    const notificationOptions = {
        body: payload.notification?.body || 'Default Body',
        icon: '/firebase-logo.png',
        data: {
            click_action: payload.notification?.click_action || 'https://fcm-ui-d2d96.web.app/'
        }
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});
For more information on Firebase Cloud Messaging and Alertify.js, refer to their official documentation:

Firebase Cloud Messaging
https://firebase.google.com/docs/cloud-messaging

Alertify.js
https://alertifyjs.com/

### Note
You will need to allow the browser to show the notification on your machine in the setting.



Feel free to adjust the README according to your specific project needs and any additional information you may have.
