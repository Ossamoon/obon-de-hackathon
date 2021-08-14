import firebase from "./firebase";
import { Omen } from "../interfaces/omen";

// type Omen = {
//   author: string;
//   name: string;
//   src: string;
//   tag: string[];
// };

export const getAllOmenData = async () => {
  const db = firebase.firestore();
  let res: Omen[] = [];

  await db
    .collection("omens")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        res.push(doc.data() as Omen);
      });
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });

  return res;
};
