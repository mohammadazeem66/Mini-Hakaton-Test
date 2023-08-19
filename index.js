import { db } from "../JS/firbase.mjs";
import { addDoc, collection,getDocs,doc,deleteDoc } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";

let btn = document.getElementById("Publishbtn");
 
let show = document.getElementById('showblog');


 btn.addEventListener('click',async()=>{
     
    let input = document.getElementById("inpt").value;
    let discription = document.getElementById("discript").value;

    
    try {
        
        const docRef = await addDoc(collection(db, 'BlogPublish'), {
            
            title: input,
            discription: discription,
            
            
           });
           
           
           console.log("Document written with ID: ", docRef.id);
           
       } catch (e) {
           console.error("Error adding document: ", e);
       }

    })



    const querySnapshot = await getDocs(collection(db, "BlogPublish"));
    querySnapshot.forEach((doc) => {
        
       
    
    showblog.innerHTML += `<div id="showblogb"> 

    <div id="ablogerimgdiv">

    <img src="" id="blogerpic">

    </div>

 <h1 class="blogtitle">${(doc.data().title)}</h1>
 
 <h1>${(doc.data().discription)}</h1>
 <button class="editbtn" onclick="edit('${doc.id}')">Edit</button>
 <button class="delbtn" onclick="del('${doc.id}')">Delete</button>
 </div>`
    
    console.log(doc.data(),"data");
    console.log(doc.id , "id");
    console.log(doc , "doc");
    
    
   });



    const edit = async(id) => {
        
    console.log(id);
    const editList = doc(db, "BlogPublish", id);

    var editTitle = prompt('Enter Your UpdateTitle');
    var editDescript = prompt('Enter Your Update Deicription');
    
    // Set the "capital" field of the city 'DC'
    await updateDoc(editList, {
        
        txt: editTitle,
        discription: editDescript,
        
    }).then(() => {
        
        window.location.reload();
    });
}

const del = async(id) =>{
     await deleteDoc(doc(db, "BlogPublish", id))
     
     .then(() => {
      window.location.reload();
  });

}
window.del=del;
window.edit=edit;