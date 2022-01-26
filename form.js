const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const copassword = document.getElementById('copassword');

//add event

form.addEventListener('submit',(event) =>{
	event.preventDefault();
    validate();
})

       //more email validity

    const isEmail=(emailval) =>{
    	var atsymbol = emailval.indexOf("@")
    	if(atsymbol <=1) return false;
    	var dot = emailVal.lastIndexOf('.');
    	if(dot <= atsymbol + 2) return false;
    	if(dot === emailVal.length - 1) return false;
    	return true;

    }    
        //define the validity function

    const validate = () => {
    	const usernameVal = username.value.trim();
        const emailVal = email.value.trim();
        const phoneVal = phone.value.trim();
        const passwordVal = password.value.trim();
        const copasswordVal = copassword.value.trim();

    //validity username
    if(usernameVal === ""){
    	setErrorMsg(username,'username can not be blank');
    }else if(usernameVal.length <=2){
    	setErrorMsg(username,'username should be more than two words');
    }else{
    	setSuccessMsg(username);
    }

     //validity email
    if(emailVal === ""){
    	setErrorMsg(email,'email can not be blank');
    }else if(!isEmail(emailVal)){
    	setErrorMsg(emailVal,'not a valid Email');
    }else{
    	setSuccessMsg(email);
    }

}
     
     function setErrorMsg(input,errormsgs){
     	const formControl = input.parentElement;
     	const small = formControl.querySelecter('small');
     	formControl.className = "form-control error";
     	small.innerText = errormsgs;
     }

