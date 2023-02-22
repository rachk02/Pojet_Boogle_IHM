const submit_button = document.querySelector("#button");
bouton.onclick = (e) => {
    e.preventDefault();
    const prenom = document.getElementById("prenom").value;
    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    const ville = document.getElementById("ville").value;

    localStorage.setItem('FirstName', prenom);
    localStorage.setItem('LastName', nom);
    localStorage.setItem('Email', email);
    localStorage.setItem('Password', pass);
    localStorage.setItem('ville', ville);
    if(prenom != "" && nom != "" && email != "" && pass != "" && ville != ""){
        alert(
                'Good job!',
                'Inscription Réussie !',
                'success'
            );
            setTimeout(()=>{
                    location.href='login.html';
                    },2000)
        }
        else{
        	alert('Veuillez remplir tous les champs')
        }
}
    