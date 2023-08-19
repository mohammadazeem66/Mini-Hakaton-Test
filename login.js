
import{ auth, db } from "./firbase.mjs"

import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
import { addDoc, collection } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";



let btn = document.getElementById("loginbtn").addEventListener("click", ()=>{



    let email = document.getElementById("email").value
    let password = document.getElementById("password").value


signInWithEmailAndPassword(auth, email, password)

  .then(async(userCredential) => {

    // Signed in 

    const user = userCredential.user;


    


    try {
        const docRef = await addDoc(collection(db, "user"), {

  
          email: email,
          password: password,
    
          
        });

        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }






    window.location.href ="./index.html"

    // ...

  })

  .catch((error) => {

    const errorCode = error.code;
    const errorMessage = error.message;

    console.log(errorCode)
    console.log(errorMessage)

  });

});