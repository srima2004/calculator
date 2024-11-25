const display=document.getElementById("display");

function calculate(){
    try{
        display.value=eval(display.value)
    }
catch(error){
   display.value="error";
}
}
function appendToDisplay(input){
display.value=display.value+input;
}

function clearDisplay(){
display.value="";
}