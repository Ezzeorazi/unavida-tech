const form = document.getElementById('form')
const user_name = document.getElementById('name')
const user_email = document.getElementById('email')
const user_tel = document.getElementById('phone')
const user_msg = document.getElementById('message')

const alert_name = document.getElementById('alert-name')
const alert_email = document.getElementById('alert-email')
const alert_tel = document.getElementById('alert-tel')
const alert_msg = document.getElementById('alert-msg')
const alert_success = document.getElementById('alert-success')

const regUser_name = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/
const regUser_email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
const regUser_tel = /^\d+$/
const regUser_msg = /^[A-Za-z0-9\s]+$/



const clearForm = () => {
    // Limpiar los valores de los campos de entrada
    user_name.value = '';
    user_email.value = '';
    user_tel.value = '';
    user_msg.value = '';

    // Ocultar todos los mensajes de error
    alert_name.classList.add('d-none');
    alert_email.classList.add('d-none');
    alert_tel.classList.add('d-none');
    alert_msg.classList.add('d-none');
}


const mensajeExito = () => {
    alert_success.textContent = 'Formulario enviado con éxito!'
    alert_success.classList.remove('d-none')

    clearForm()
}

const showError = (errors) => {
    errors.forEach((item) => {
        item.tipo.classList.remove('d-none')
        item.tipo.textContent = item.msg
    })
}

form.addEventListener('submit', (e)=> {
    e.preventDefault()
    alert_success.classList.add('d-none')

    
    const errors = []
    if (!regUser_name.test(user_name.value) || !user_name.value.trim()){
        errors.push({
            tipo: alert_name,
            msg: 'Formato de nombre no valido.'
        }) 
    }else {
        alert_name.classList.add('d-none')
    }

    if (!regUser_email.test(user_email.value) || !user_email.value.trim()){
        errors.push({
            tipo: alert_email,
            msg: 'Formato de email no valido.'
        })
    }else {
        alert_email.classList.add('d-none')
    }
   
    if (!regUser_tel.test(user_tel.value) || !user_tel.value.trim()){
        errors.push({
            tipo: alert_tel,
            msg: 'Formato de teléfono no valido.'
        })
    }else {
        alert_tel.classList.add('d-none')
    }
    if (!regUser_msg.test(user_msg.value) || !user_msg.value.trim()){
        errors.push({
            tipo: alert_msg,
            msg: 'Formato de mensaje no valido.'
        })
    }else {
        alert_msg.classList.add('d-none')
    }
    if (errors.length !== 0){
        showError(errors)
        return
    }
    
    mensajeExito()
    })