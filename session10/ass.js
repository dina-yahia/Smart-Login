signList=[];

if (localStorage.getItem("signList")==null){
    var signList=[];
}else{
    signList=JSON.parse(localStorage.getItem("signList"))
    console.log(signList);
}

document.addEventListener("DOMContentLoaded",()=>{
     loginForm=document.querySelector("#login");
     createAccountForm=document.querySelector("#createAccount");

     document.querySelector("#linkCreateAcc").addEventListener("click",()=>{
        loginForm.classList.add("d-none")
        createAccountForm.classList.replace('d-none','d-block')
     });

     document.querySelector("#linkLogin").addEventListener("click",()=>{
        loginForm.classList.add("d-none")
        createAccountForm.classList.replace('d-none','d-block')
     });
});