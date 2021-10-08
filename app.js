//Order data
db.collection("userInfo").orderBy('username')
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach(doc =>{
        console.log(doc.data())
    })
  })
  .catch((error) => {
    console.log("Error getting documents: ", error);
  });

//limit data
db.collection("userInfo").limit(1)
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
    });
  })
  .catch((error) => {
    console.log("Error getting documents: ", error);
  });
