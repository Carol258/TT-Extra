// CONFIGURACIONES DE FIREBASE
const { initializeApp } = require('firebase/app')
const { getStorage } = require('firebase/storage');


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaDMAUl5vmSv6GWECPI_aN-trCvDcAVmg",
  authDomain: "tt-ii-b3735.firebaseapp.com",
  projectId: "tt-ii-b3735",
  storageBucket: "tt-ii-b3735.appspot.com",
  messagingSenderId: "1075476087521",
  appId: "1:1075476087521:web:46ffc391f34c89d39eada0"
};


const app = initializeApp(firebaseConfig);
const storage = getStorage(app);



module.exports = { storage }