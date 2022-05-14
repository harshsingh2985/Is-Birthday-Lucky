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
    // console.log(dob);

    let sum=0;

    for(let index=0;index<dob.length;index++){
        // sum =sum+dob(charAt(index)) this will not work becuz we cannnot add string to a number
        sum =sum +Number(dob.charAt(index));

    }

    return sum;

}





button.addEventListener("click",checkisbirthdaylucky)
