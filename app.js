const username = document.getElementById('username');
const about = document.getElementById('about');
const btn = document.getElementById('btn');

btn.addEventListener('click', ()=>{
    db.collection('userInfo').add({
        username: username.value,
        bio: about.value
    });
    username.value = '';
    about.value = '';
})