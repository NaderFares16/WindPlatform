// Importar as funções necessárias do Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Configurações do Firebase (copiadas do seu Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyAu6XP9VnKjmEsX2QCYCeiammv5rg2SJ0o",
  authDomain: "wind-platform-c7ec0.firebaseapp.com",
  projectId: "wind-platform-c7ec0",
  storageBucket: "wind-platform-c7ec0.appspot.com",
  messagingSenderId: "884542294104",
  appId: "1:884542294104:web:68fa4e803e4e527d58622d",
  measurementId: "G-LM6YBST31F"
};

// Inicializando o Firebase
const app = initializeApp(firebaseConfig);

// Inicializando o serviço de autenticação
const auth = getAuth(app);

// Função para lidar com o envio do formulário de login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Autenticação com email e senha usando Firebase Auth
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert('Login bem-sucedido!');
            // Redirecionar para outra página após login
            window.location.href = 'index.html';
        })
        .catch((error) => {
            // Exibir mensagem de erro no formulário
            errorMessage.textContent = error.message;
        });
});
