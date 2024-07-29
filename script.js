const inputEl = document.getElementById("pounds");
const resultEl = document.getElementById("result");
const erroEl = document.getElementById("error");

let errorTime;
let resultTime;

function updateResult(){{
    if(inputEl.value<=0 || isNaN(inputEl.value)){
        erroEl.innerText="Wrong input value..";
        clearTimeout(errorTime);

        errorTime=setTimeout(()=>{
            erroEl.innerText="";
            inputEl.value="";
        },2000);
    }else{
        resultEl.innerText=(+inputEl.value/2.2).toFixed(2);
        clearTimeout(resultTime);

        resultTime=setTimeout(()=>{
            resultEl.innerText="";
            inputEl.value="";
        },10000);
    }
}}

inputEl.addEventListener("input",updateResult);
