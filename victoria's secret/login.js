

document.addEventListener('DOMContentLoaded', (event) => {
   
    console.log("Login Script Loaded.");

  
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault(); 

        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        
        if (!validateEmail(email)) {
            alert('Veuillez entrer une adresse email valide.');
            return;
        }

        if (password.length < 6) {
            alert('Le mot de passe doit contenir au moins 6 caractères.');
            return;
        }

       
        alert(`Connexion réussie pour ${email}`);
        
    });

    
    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
});
