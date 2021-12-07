//enviar email////////////////////////////////

const $form = document.querySelector('#form');
const $boton = document.querySelector('#sendemail');

$form.addEventListener('submit', sendEmail);

function sendEmail(e){
    e.preventDefault();
    const form = new FormData (this);
    $boton.setAttribute('href', `mailto:antoniog.devel@gmail.com?subject=${form.get('name')} ${form.get('email')}&body=${form.get('message')}`);
    $boton.click();
}


// Boton ir al cielo //////////////////////////////////

