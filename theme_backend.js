const x = document.getElementById("colorchange");
x.addEventListener("click",()=>{
    if(x.value==="Dark"){
        document.body.style.backgroundColor="black";
        x.value = "White";
    }
    else{
        document.body.style.backgroundColor="white";
        x.value = "Dark";
    }
});
