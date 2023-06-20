var signUpName = document.getElementById('signUpName')
var signUpEmail = document.getElementById('signUpEmail')
var signUpPass = document.getElementById('signUpPass')
var signInEmail = document.getElementById('signInEmail')
var signInPass = document.getElementById('signInPass')
var home1=document.getElementById('log')
var lo=document.getElementById('in')
signList=[];

if (localStorage.getItem("signList")!=null){
    var signList=[];
}else{
    signList=JSON.parse(localStorage.getItem("signList"))
    console.log(signList);

}
 lo.addEventListener("submit",(e)=>{
    e.preventDefault()
    var signInEmail = lo.signInEmail.value
     var signInPass = lo.signInPass.value
     var auther=auther( signInEmail, signInPass )
     if(auther){
        alert("correct")
     }else{
        alert("wrong")
     }
 })
 function auther( signInEmail,signInPass){
if(signInEmail==="admin"&& signInPass==="password"){
    return true
}else{
    return false
}
 }
// login

function fav(){
    console.log(signList);
  if(validatesignInEmail ()==true& validatesignInPass()==true){
    for(var i=0;i<signList.length;i++){
        if((signList[i].signUpEmail==signInEmail.value)&&(signList[i].signUpPass==signInPass.value)){
            console.log("done");
            // i can’t connect login with logout form
            login.classList.add("d-none")
           log.classList.replace('d-none','d-block')
           
            
        }
    }
    var rose={
        email:signInEmail.value,
        pass:signInPass.value,
       }
       signList.push(rose);
    console.log("hello",signList);
    localStorage.setItem("signList",JSON.stringify(signList));
  }else{
    alert("invalid name")
  }
}
// signup
function fa(){
    if(validatesignUpPass()==true& validatesignUpName ()==true& validatesignUpEmail()==true){
      var rose={
          name:signUpName.value,
          email2:signUpEmail.value,
          pass2:signUpPass.value,
         }
         signList.push(rose);
      console.log("hello",signList);
      localStorage.setItem("signList",JSON.stringify(signList));
    }else{
        // m4 btban fe alert 
      alert("invalid input")
    }
  }


// switch
var dina=document.querySelector("#anchorIn")
function test(){
    console.log("hello");
  var signup=  document.querySelector("#up")
  var login=document.querySelector("#in")
  login.classList.add("d-none")
  signup.classList.replace('d-none','d-block')
}
dina.addEventListener("click",test);

// validation
var wrongName=document.querySelector("#incorrect")
var correctName=document.querySelector('#correct')

function validatesignUpName(){
    var regex=/[A-Z][a-z]/;
    if(regex.test(signUpName.value)==true){
       wrongName.classList.add("d-none")
       correctName.classList.remove("d-none")
        return true
    }else{
       wrongName.classList.remove("d-none")
       correctName.classList.add("d-none")
        return false
    }
}

function validatesignUpEmail(){
    var regex=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(regex.test(signUpEmail.value)==true){
       wrongName.classList.add("d-none")
       correctName.classList.remove("d-none")
        return true
    }else{
       wrongName.classList.remove("d-none")
       correctName.classList.add("d-none")
        return false
    }
}

function validatesignUpPass(){
    var regex=/[A-Z][a-z]{3,7}/;
    if(regex.test(signUpPass.value)==true){
       wrongName.classList.add("d-none")
       correctName.classList.remove("d-none")
        return true
    }else{
       wrongName.classList.remove("d-none")
       correctName.classList.add("d-none")
        return false
    }
}

function validatesignInEmail(){
    var regex=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(regex.test(signInEmail.value)==true){
       wrongName.classList.add("d-none")
       correctName.classList.remove("d-none")
        return true
    }else{
       wrongName.classList.remove("d-none")
       correctName.classList.add("d-none")
        return false
    }
}
function validatesignInPass(){
    var regex=/[A-Z][a-z]{3,7}/;
    if(regex.test(signInPass.value)==true){
       wrongName.classList.add("d-none")
       correctName.classList.remove("d-none")
        return true
    }else{
       wrongName.classList.remove("d-none")
       correctName.classList.add("d-none")
        return false
    }
}



