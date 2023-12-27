var abc = document.getElementById("toastbox");
let smsg = "<img src='s.svg'>"+"Sucessfully Submitted!";
let emsg = "<img src='e.svg'>"+"Please fix the errors!";
let imsg = "<img src='i.svg'>"+"Invalid Input , Check Again!";

function noti(msg){
    var abc1 = document.createElement('div');
    abc1.classList.add("toastnoti");
    abc1.innerHTML = msg;
    abc.appendChild(abc1);

    if(msg.includes('errors')){
        abc1.classList.add("error"); 
    }
    if(msg.includes('Invalid')){
        abc1.classList.add("Invalid"); 
    }

    setTimeout(()=>{
        abc1.remove();
    },5000)
}