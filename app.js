db.collection("userInfo").where('username', '==', 'Ihechikara')
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach(doc =>{
        console.log(doc.data())
    })
  })
  .catch((error) => {
    console.log("Error getting documents: ", error);
  });