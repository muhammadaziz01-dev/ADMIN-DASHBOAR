"use stric"

//---------HTML ELAMENTS------------------
let loginForm = $('#form-login'),
    userName = $('#username'),
    userPasword = $('#username');



//------GLLOBOL VERAYBLIS ---------------

const besURL = 'https://fakestoreapi.com';
// -----   (   /auth/login    )



//----LOGIN ACTION--------
async function autharization() {
    const user = {
        username: userName.value,
        password: userPasword.value,
    }

    try{
        if(user.password.trim().length == 0 || user.username.trim().length == 0){
            alert("Janob formani to'liq toldiring !!")
        }else{
            let respons = await fetch(`${besURL}/auth/login`,{
                method: 'POST',
                headers:{
                 "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            }); 

            let result = await respons.json();
            console.log(result);
        }
    }catch(err){
        console.log(err);
    }
}

loginForm.addEventListener('submit' , (e)=>{
    e.preventDefault();
    autharization();
})