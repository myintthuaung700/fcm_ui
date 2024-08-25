importScripts('https://www.gstatic.com/firebasejs/10.13.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.0/firebase-messaging-compat.js');

// Initialize Firebase with your configuration
const firebaseConfig = {
    apiKey: "AIzaSyDNp8jIFQuVEgTz0_FQwAK9R77VuGp8T54",
    authDomain: "fcm-ui-d2d96.firebaseapp.com",
    projectId: "fcm-ui-d2d96",
    storageBucket: "fcm-ui-d2d96.appspot.com",
    messagingSenderId: "142896678357",
    appId: "1:142896678357:web:09895b33ec7dfc04fea95c",
    measurementId: "G-5H9E7PD3V5"
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
