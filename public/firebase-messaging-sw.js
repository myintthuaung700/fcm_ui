importScripts('https://www.gstatic.com/firebasejs/10.13.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.0/firebase-messaging-compat.js');

// Initialize Firebase with your configuration
const firebaseConfig = {
    //here is the config 
};
firebase.initializeApp(firebaseConfig);

// Retrieve Firebase Messaging instance
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage(function(payload) {
    console.log('Received background message: ', payload);

    // Ensure payload contains notification properties
    const notificationTitle = payload.notification?.title || 'Default Title';
    const notificationOptions = {
        body: payload.notification?.body || 'Default Body',
        icon: '/firebase-logo.png',
        data: {
            click_action: payload.notification?.click_action || 'https://fcm-ui-d2d96.web.app/'
        }
    };

    // Show the notification
    // self.registration.showNotification(notificationTitle, notificationOptions).catch(error => {
    //     console.error('Error showing notification:', error);
    // });
});

// Handle notification click event
// self.addEventListener('notificationclick', function(event) {
//     console.log('Notification click received: ', event);

//     event.notification.close(); // Close the notification

//     event.waitUntil(
//         clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(clientList) {
//             for (let i = 0; i < clientList.length; i++) {
//                 let client = clientList[i];
//                 if (client.url === event.notification.data.click_action && 'focus' in client) {
//                     return client.focus();
//                 }
//             }
//             if (clients.openWindow) {
//                 return clients.openWindow(event.notification.data.click_action);
//             }
//         }).catch(error => {
//             console.error('Error handling notification click:', error);
//         })
//     );
// });
