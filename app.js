const signupForm = document.getElementById("signup-form");
signupForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = signupForm['name'].value;
    const email = signupForm['email'].value;
    const password = signupForm['password'].value;
    console.log(name, email, password);
    signupForm.reset();
    auth.createUserWithEmailAndPassword(email, password).then((cred) => {
        return db.collection('users').doc(cred.user.uid).set({
            Name: name,
            Email: email,
            Password: password
        }).then(() => {
            console.log('success');
            location = "dashboard.html";
        }).catch(err => {
            console.log(err.message);
            const signupError = document.getElementById("signupError");
            signupError.innerText = err.message;
        })
    }).catch(err => {
        console.log(err.message);
        const signupError2 = document.getElementById("signupError2");
        signupError2.innerText = err.message;
    })
})