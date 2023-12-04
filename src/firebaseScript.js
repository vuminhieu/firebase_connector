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
const locationRef2 = ref(database, "longitude");
console.log('latitude' + locationRef)
console.log('longitude' + locationRef)

async function fetchData() {
    var locationData = [];

    try {
        const snapshot1 = await get(locationRef);
        if (snapshot1.val()) {
            const heartRateData = snapshot1.val();
            console.log('Data - Latitude:', heartRateData);
            document.getElementById('heartRate').innerHTML = `Nhịp Tim: ${heartRateData} bpm`;
            locationData.unshift(heartRateData)
        } else {
            console.log('Null data - Latitude.');
        }

        const snapshot2 = await get(locationRef2);
        if (snapshot2.val()) {
            const breathRateData = snapshot2.val();
            console.log('Data - Longitude:', breathRateData);
            document.getElementById('breathRate').innerHTML = `Sp02: ${breathRateData} %`;
            locationData.unshift(breathRateData)
        } else {
            console.log('Null data - Longitude.');
        }

        console.log('Location Data:', locationData);
    } catch (error) {
        console.error('Error:', error);
    }

}

// Gọi hàm fetchData để thực hiện các tác vụ
fetchData();
