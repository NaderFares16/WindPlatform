import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAu6XP9VnKjmEsX2QCYCeiammv5rg2SJ0o",
  authDomain: "wind-platform-c7ec0.firebaseapp.com",
  projectId: "wind-platform-c7ec0",
  storageBucket: "wind-platform-c7ec0.appspot.com",
  messagingSenderId: "884542294104",
  appId: "1:884542294104:web:68fa4e803e4e527d58622d",
  measurementId: "G-LM6YBST31F"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert('Login bem-sucedido!');
            window.location.href = 'index.html';
        })
        .catch((error) => {
            errorMessage.textContent = error.message;
        });
});
