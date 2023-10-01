const num=document.getElementById("input");
const text=document.getElementById("text");
let finalNum=1;
function resetText(){
if(finalNum==1){
    text.innerHTML=null;
}
}

//Recursion
function recuringFunction(){
if(num.value==0){
    text.innerHTML+=" = "+finalNum;
    finalNum=1;
   num.value=null;
     return;
}
if(text.innerHTML==""){
    text.innerHTML+=num.value;
}
else{
    text.innerHTML+=" x "+num.value;
}
finalNum*=num.value;
num.value--;
recuringFunction();
}



