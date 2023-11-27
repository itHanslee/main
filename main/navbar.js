const infoUsuario = document.getElementById("usuario");

function MostrarNombre() {
  UsuarioLogueado = localStorage.getItem("login_success");
  if (UsuarioLogueado) {
    const p = document.createElement("p");
    const iniciarSesion = document.getElementById("sesion")
    const user = JSON.parse(UsuarioLogueado);
    const logout = document.getElementById("logout");
    p.textContent = user.name;
    infoUsuario.style.display="block"
    iniciarSesion.style.display="none"
    logout.style.display="block"
    infoUsuario.appendChild(p);
    
    logout.addEventListener("click", () => {
      p.textContent = "";
      infoUsuario.style.display="none"
      logout.style.display="none"
      iniciarSesion.style.display="block"
      window.location.href = './index.html'
     
      localStorage.removeItem("login_success");
      
      
    });
  }
}

MostrarNombre();