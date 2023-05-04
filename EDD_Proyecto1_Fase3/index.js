function checkLogin(event) {
	imprimirArbolDesdeLocalStorage();
	console.log(cargarArbolDesdeLocalStorage());
	event.preventDefault();
	
	// Obtener los valores de entrada de usuario y contraseña
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	// Verificar si el usuario y la contraseña son correctos
	if (username === "admin" && password === "admin") {
		// Redirigir al usuario a la página de admin
		window.location.replace("admin.html");
	} else {
		// Mostrar un mensaje de error
		pruebalo = isPasswordValid(username,password)
		if (pruebalo = true){
			iniciarSesion(username,password);
		}
		else{
			alert("Error, usuario o contraseña incorrectos")
		}
		
		
	}
}

var loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", checkLogin);
function caesarCipher(str, shift) {
	return str
	  .split("")
	  .map((char) => {
		let code = char.charCodeAt(0);
		if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
		  let base = code < 97 ? 65 : 97;
		  return String.fromCharCode(((code - base + shift) % 26) + base);
		}
		return char;
	  })
	  .join("");
  }
  
  function encrypt(password, shift = 3) {
	return caesarCipher(password, shift);
  }
  
  function decrypt(encrypted, shift = 3) {
	return caesarCipher(encrypted, -shift);
  }
  
  function isPasswordValid(carnet, password) {
	let hashTable = JSON.parse(localStorage.getItem("tablaHash"));
	let userObj = hashTable.find((user) => user && user.carnet === carnet);
  
	if (userObj) {
	  let decryptedPassword = decrypt(userObj.password);
	  return decryptedPassword === password;
	}
  
	return false;
  }