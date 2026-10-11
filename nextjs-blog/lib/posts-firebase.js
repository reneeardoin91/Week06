// This file contains helper functions for reading blog post data from Firebase. // File overview.
import { db } from './firebase'; // Load the shared database object from firebase.js in the same directory.
import { collection, getDocs, query, where, documentId } from 'firebase/firestore'; // Import Firestore helpers for reading documents.
export async function getSortedPostsData() { // Start the function that returns sorted post data.
    const myCollectionRef = collection(db, "posts"); // Reference the posts collection in Firestore.
    const querySnapshot = await getDocs(myCollectionRef); // Fetch all documents from that collection.
    const jsonObj = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })); // Convert each doc into a plain object with its id.
    jsonObj.sort(function (a, b) { // Sort post objects alphabetically by title.
        return a.title.localeCompare(b.title); // Compare titles using locale-aware sorting.
    }); // End sort.
    return jsonObj.map(item => { // Map the sorted posts to a simpler list of fields.
        return { // Start a post summary object.
          id: item.id.toString(), // Convert the Firestore document ID to a string for routing.
          title: item.title, // Keep the post title for display.
          date: item.date // Keep the published date for display.
        } // Close the post summary object.
      }); // End the map callback and return the final array.
} // Close getSortedPostsData.
export async function getAllPostIds() { // Start the function used to fetch all post IDs.
    // TODO: implement the logic to fetch all post IDs. // Placeholder for future implementation.
} // Close getAllPostIds.
export async function getPostData(id) { // Start the function used to fetch one post by ID.
    // TODO: implement the logic to fetch one post by its ID. // Placeholder for future implementation.
} // Close getPostData.

