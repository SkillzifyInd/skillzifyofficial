import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyA3FcUoQZ811vygR9oDITUwwiCDALYJ5zE",
    authDomain: "skillzify2024.firebaseapp.com",
    projectId: "skillzify2024",
    storageBucket: "skillzify2024.firebasestorage.app",
    messagingSenderId: "502836069827",
    appId: "1:502836069827:web:db3ff7fd2fd161c4d6a976",
    measurementId: "G-EMJ8DSPWYE"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Export auth for use in other modules
export { auth };

// Check auth state and update UI
onAuthStateChanged(auth, (user) => {
    const loginLink = document.getElementById("login-link");
    if (user) {
        if (loginLink) {
            loginLink.innerHTML = `<button id="logout-btn">Logout</button>`;
            document.getElementById("logout-btn").addEventListener("click", () => {
                signOut(auth).then(() => {
                    window.location.href = "index.html";
                });
            });
        }
    } else {
        if (loginLink) {
            loginLink.innerHTML = `<a href="login.html"><b>Login</b></a>`;
        }
    }
});
