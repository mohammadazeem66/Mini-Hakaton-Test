
import{ auth, db,storage } from "./firbase.mjs"


import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
import { addDoc, collection } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";
import { ref, uploadBytes } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";

let btn = document.getElementById("signupbtn").addEventListener("click", ()=>{


    let firstname = document.getElementById("fname").value
    let lastname = document.getElementById("lname").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let repeatpassword = document.getElementById("repeatpassword").value
    let file = document.getElementById("file").files;

if( repeatpassword === password ){

createUserWithEmailAndPassword(auth, email, password,firstname,lastname,repeatpassword)

  .then(async(userCredential) => {
    const user = userCredential.user;
    try {
        const docRef = await addDoc(collection(db, "user"), {

          first: firstname,
          last: lastname,
          email: email,
          password: password,
          Reppassword: repeatpassword,
          
        });

        const storageRef = ref(storage, 'some-child');
        
        uploadBytes(storageRef, file[0]).then((snapshot) => {
          console.log('Uploaded a blob or file!');
        });
        console.log("Document written with ID: ", docRef.id)



window.location.href ="./loginhtml"

      } catch (e) {
        console.error("Error adding document: ", e);
      }



     
    // ...

  })
  .catch((error) => {

    const errorCode = error.code;
    const errorMessage = error.message;

    console.log(errorCode)
    console.log(errorMessage)

    // ..

  });

}

else{
    
 alert("Please Enter Correct Repeat..!")

}


});




