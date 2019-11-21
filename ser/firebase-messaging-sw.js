importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');
const firebaseConfig = {
    apiKey: "AIzaSyA-JgzRMNqZh8e1puDEvUPlwBG3idMIs24",
    authDomain: "pntest-d32ab.firebaseapp.com",
    databaseURL: "https://pntest-d32ab.firebaseio.com",
    projectId: "pntest-d32ab",
    storageBucket: "pntest-d32ab.appspot.com",
    messagingSenderId: "244254845020",
    appId: "1:244254845020:web:13a79099e09663a60e9e99",
    measurementId: "G-2TLX2E8HVT"
  };

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();