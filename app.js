const dateofbirth=document.querySelector("#date-of-birth")

const luckynumber=document.querySelector("#lucky-number")

const button=document.querySelector("#btncheck")

button.addEventListener("click",function getvalues(){
    console.log(dateofbirth.value,luckynumber.value);

})