document.getElementById('login-submit').addEventListener('click',function(){
    var userEmail = document.getElementById('user-email');
    var email = userEmail.value;
    var userPassword = document.getElementById('user-password');
    var password = userPassword.value;

    if(email=='saif' && password=='saif'){
        window.location.href = 'banking.html'
    }
    
});
