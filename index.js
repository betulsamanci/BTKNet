console.log("Hello World");
document.getElementById("root").innerHTML='Merhaba';

for(i=1;i<3;i++){
    const element=document.createElement("div");
    element.innerHTML=i;
    document.getElementById("root").append(element);
    console.log(i);

   
}

