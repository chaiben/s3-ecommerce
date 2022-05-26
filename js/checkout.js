
// Exercise 7

function validate() {
	
	var error = 0;
	var checkOnlyNumbers = /^[0-9]+$/;
	var checkOnlyLetters = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜüçÇ]+$/;
	var checkEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	// var checkPassword = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/;
	var checkPassword = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;

	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
	var fLastN = document.getElementById("fLastN");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");
	var errorAddress = document.getElementById("errorAddress");
	var errorLastN = document.getElementById("errorLastN");
	var errorPassword = document.getElementById("errorPassword");
	var errorPhone = document.getElementById("errorPhone"); 

	// Reset input state
	fName.classList.remove("is-invalid");
	fEmail.classList.remove("is-invalid");
	fAddress.classList.remove("is-invalid");
	fLastN.classList.remove("is-invalid");
	fPassword.classList.remove("is-invalid");
	fPhone.classList.remove("is-invalid");

	// Check if all fields are filled
	if(fName.value.length < 3 || !fName.value.match(checkOnlyLetters)){
		fName.classList.add("is-invalid");
		error++;
	}
	if(fEmail.value.length < 3 || !fEmail.value.match(checkEmail)){
		fEmail.classList.add("is-invalid");
		error++;
	}
	if(fAddress.value.length < 3){
		fAddress.classList.add("is-invalid");
		error++;
	}
	if(fLastN.value.length < 3 || !fLastN.value.match(checkOnlyLetters)){
		fLastN.classList.add("is-invalid");
		error++;
	}
	if(!fPassword.value.match(checkPassword)){
		fPassword.classList.add("is-invalid");
		error++;
	}
	if(fPhone.value.length < 9 || !fPhone.value.match(checkOnlyNumbers)){
		fPhone.classList.add("is-invalid");
		error++;
	}

	if(error > 0){
		return false;
	}
	return true;
}
