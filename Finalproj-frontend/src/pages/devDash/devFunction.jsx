
import './dev.css'

import {
    getFirestore, collection, doc,updateDoc, getDocs,deleteField
  } from 'firebase/firestore'; 
import Topbar from '../../components/topbar/Topbar';



 
async function addArrayToDocuments(e)  {
  console.log("uncomment and write code ");
    try {
      //    const db = getFirestore();
        
      //  const querySnapshot = await getDocs(collection(db, "users"));
      //  querySnapshot.forEach(async(cdoc) => {
      //    const ref = doc(db, "users",cdoc.id);
   
      //  await updateDoc(ref, {
      //    requests:deleteField()
      //  });
      //  });
      
  
       console.log('data added to all documents successfully.');
    } catch (error) {
      console.error('Error adding array to documents:', error);
    }
  }

  

 
  export default function DevDash(){
   
    return(<div>
        <Topbar/>
        <h2>DevDash</h2>
        <div class="btn"  onClick={addArrayToDocuments}>Add</div>
      
    </div>)
  }



  