const signupform = document.querySelector('#signupform')
signupform.addEventListener('submit',  (e) =>{
    e.preventDefault()
    const name = document.querySelector('#name').value
    const apellido = document.querySelector('#apellido').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const sexo = document.querySelector('#sexo').value
    
    const Users = JSON.parse(localStorage.getItem('users')) || []
    const isUserRegistered = Users.find(user => user.email === email )
    if(isUserRegistered){
        return alert('el usuario ya esta registrado')
    }
    Users.push({name: name,apellido: apellido,email: email, password: password,sexo:sexo})
    
    localStorage.setItem('users', JSON.stringify(Users))
    alert('registro exitoso!') 
    redirectToLogin()
    
})



function redirectToLogin(){
    const a = document.createElement("a")
    a.href = "inicio.html"
    a.click()
  }

