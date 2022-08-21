import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  confirmationResult,
} from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDJ5bEtxTMVYOAF7-ZsganzdtdiLGFIx48",
  authDomain: "magiclife-77dbd.firebaseapp.com",
  projectId: "magiclife-77dbd",
  storageBucket: "magiclife-77dbd.appspot.com",
  messagingSenderId: "288774838203",
  appId: "1:288774838203:web:9098c7ac1e422706c1969e",
  measurementId: "G-9C6B52MCYJ",
};

initializeApp(firebaseConfig)

const auth = getAuth();
auth.languageCode = "en";

window.recaptchaVerifier = new RecaptchaVerifier(
  "send",
  {
    size: "invisible",
    callback: (response) => {
      // reCAPTCHA solved, allow signInWithPhoneNumber.
      console.log('problema yechildi !')
    },
  },
  auth
);

document.querySelector('#send').addEventListener('click',(e)=>{
  const phoneNumber = document.querySelector("#numberPhone").value;
  const appVerifier = window.recaptchaVerifier;
  signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      console.log(confirmationResult)
      console.log('kod ketdi!')
      window.confirmationResult = confirmationResult;
      
    })
    .catch((error) => {
      console.log("error bor",error)
    });
})

document.querySelector("#verify").addEventListener('click',()=>{
  
  const code = document.querySelector("#verificationCode").value;
  window.confirmationResult
    .confirm(code)
    .then((result) => {
      // User signed in successfully.
      console.log(result)
      alert("Siz tizimga successful kirdingiz !");
      // ...
    })
    .catch((error) => {
      // User couldn't sign in (bad verification code?)
      alert("Siz tizimga successful kirolmadingiz !");
      // ...
    });
});
