// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-3rSWo8xUDMMVIqlMuh_pQc_QIvNpWV0",
  authDomain: "universo-paralelo-c29a6.firebaseapp.com",
  projectId: "universo-paralelo-c29a6",
  storageBucket: "universo-paralelo-c29a6.appspot.com",
  messagingSenderId: "188939322660",
  appId: "1:188939322660:web:aa03a67f4d02f0f8081fb1",
  measurementId: "G-0W5DYHNBTT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//Get products trae toda la lista de la base de datos
async function getProducts(db) {
  const productsCol = collection(db, "noticias");
  const prductsSnapshot = await getDocs(productsCol);
  const productsList = prductsSnapshot.docs.map((doc) => {
    const product = doc.data();
    product.id = doc.id;
    return product;
  });
  return productsList;
}

export { db, collection, getDocs, getProducts };
