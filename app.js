const dateofbirth=document.querySelector("#date-of-birth")

const luckynumber=document.querySelector("#lucky-number")

const button=document.querySelector("#btncheck")

// now taking input from the user
function checkisbirthdaylucky(){
    const dob=dateofbirth.value;
    // console.log(dob);

    const sum=calculatesum(dob);
    console.log(sum);
    


}

function calculatesum(dob){
    dob=dob.replaceAll("-","")
    console.log(dob);

}





button.addEventListener("click",checkisbirthdaylucky)
