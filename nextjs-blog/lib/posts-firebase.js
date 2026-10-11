Post-firebase
// Import the firebase app instance
import { db } from './firebase'; // load from firebase.js in same dir
import { collection, getDocs, query, where, documentId } from 'firebase/firestore';

export async function getSortedPostsData() {
    const myCollectionRef = collection(db, "posts");
    const querySnapshot = await getDocs(myCollectionRef);
    const jsonObj = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    
    jsonObj.sort(function (a, b) {
        return a.title.localeCompare(b.title);
    });
   
    return jsonObj.map(item => {
        return {
          id: item.id.toString(),
          title: item.title,
          date: item.date
        }
      });
}

export async function getAllPostIds() {
}

export async function getPostData(id) {

}
