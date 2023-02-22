// login function

const login = document.querySelector('#sub');
login.onclick = (e) => {
    e.preventDefault();
    // cautch the valu which is type user login page
    const emailAddress = document.getElementById("email1").value;
    const passWord = document.getElementById("pass1").value;


    // let's get value in localstorage which store user in registration field
    const Email = localStorage.getItem("Email");
    const Password = localStorage.getItem("Password");


    if(emailAddress == Email && passWord == Password){
            alert(
                'login successful!',
                'success'
            );
            setTimeout(()=>{
                location.href='connect.html';
                },1000);
    }
    else
    {
     	alert(
                'verifier votre email ou le mot de passe',
            );       
    }

};