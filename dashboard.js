// checking if user is signed in or not
auth.onAuthStateChanged(user => {
    if (user) {
        console.log('user is signed in at users.html');
    } else {
        alert('your login session has expired or you have logged out, login again to continue');
        location = "index.html";
    }
})

function logout() {
    auth.signOut();
}