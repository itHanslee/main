const signupform = document.querySelector('#signupform')
signupform.addEventListener('submit',  (e) =>{
    e.preventDefault()
    const name = document.querySelector('#nombre').value
    const apellido = document.querySelector('#apellido').value
    const email = document.querySelector('#correo').value
    const password = document.querySelector('#contraseña').value
    const genero = document.querySelector('#genero').value
    
    const Users = JSON.parse(localStorage.getItem('users')) || []
    const isUserRegistered = Users.find(user => user.email === email )
    if(isUserRegistered){
        return alert('el usuario ya esta registrado')
    }
    Users.push({name: name,apellido: apellido,email: email, password: password,genero:genero})
    
    localStorage.setItem('users', JSON.stringify(Users))
    alert('registro exitoso!') 
    window.location.href = 'inicio.html'
    
})

