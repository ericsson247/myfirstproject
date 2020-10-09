 function signup(){
    confirm('Are you sure you want to submit the form?');
}

function submitInfo() {
    this.signup();
    var yourName = '';
    var email = '';
    var yourMessage = '';

    yourName = document.getElementById('yourName').value;
    console.log('your Name:' + yourName);
    
    email = document.getElementById('email').value;
    console.log('email:' + email);

    yourMessage = document.getElementById('yourMessage').value;
    console.log('your Message:' + yourMessage);

    if(yourName == '' || email == '' || yourMessage == '') {
        alert('Input Missing Field');
    } else {
        alert('Form has been submitted');
    }
}