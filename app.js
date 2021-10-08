const lists = document.getElementById("lists");

db.collection("userInfo")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      let li = document.createElement("li");
      let username = document.createElement("h4");
      let bio = document.createElement("p");

      username.textContent = doc.data().username;
      bio.textContent = doc.data().bio;

      li.appendChild(username);
      li.appendChild(bio);

      lists.appendChild(li);
    });
  })
  .catch((error) => {
    console.log("Error getting documents: ", error);
  });