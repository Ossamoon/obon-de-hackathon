import firebase from "./firebase";

export const uploadOmen = async (
  file: File,
  name: string,
  author: string,
  tag: string[]
) => {
  const filename = Math.random().toString(32).substring(2) + "_" + file.name;
  const ref = firebase
    .storage()
    .ref()
    .child("images/" + filename);

  await ref.put(file).then(function (snapshot) {
    console.log("Uploaded a file!");
  });

  const db = firebase.firestore();
  const src: string = await ref.getDownloadURL();
  let status: string = "init";

  await db
    .collection("omens")
    .add({
      name: name,
      author: author,
      src: src,
      tag: tag,
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      status = "complete";
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
      status = "error";
    });

  return status;
};
