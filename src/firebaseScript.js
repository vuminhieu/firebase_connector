// firebaseScript.js
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import {getDatabase, set, ref,get, update} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";


var firebaseConfig = {
    apiKey: "AIzaSyCsJBR0Mm23RUBqmdjEhvY8huGOU0egqAs",
    authDomain: "iot-weather-f35d1.firebaseapp.com",
    databaseURL: "https://iot-weather-f35d1-default-rtdb.firebaseio.com",
    projectId: "iot-weather-f35d1",
    storageBucket: "iot-weather-f35d1.appspot.com",
    messagingSenderId: "581915043211",
    appId: "1:581915043211:web:0ef0b32593561c677f3b8e",
    measurementId: "G-FP2D1M48SG"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
console.log(database)
const locationRef = ref(database, "latitude");
console.log('latitude' + locationRef)
get(locationRef)
    .then((snapshot) => {
        if (snapshot.val()) {
            const locationData = snapshot.val();
            console.log('Dữ liệu vị trí hiện tại:', locationData);
            document.getElementById('heartRate').innerHTML = `Nhịp Tim: ${locationData} bpm`;
        } else {
            console.log('Không có dữ liệu vị trí.');
        }
    })
    .catch((error) => {
        console.error('Lỗi khi đọc dữ liệu vị trí:', error);
    });

const locationRef2 = ref(database, "longitude");
console.log('longitude' + locationRef)
get(locationRef2)
    .then((snapshot) => {
        if (snapshot.val()) {
            const locationData = snapshot.val();
            console.log('Dữ liệu vị trí hiện tại:', locationData);
            document.getElementById('breathRate').innerHTML = `Nhịp Tim: ${locationData} %`;
        } else {
            console.log('Không có dữ liệu vị trí.');
        }
    })
    .catch((error) => {
        console.error('Lỗi khi đọc dữ liệu vị trí:', error);
    });