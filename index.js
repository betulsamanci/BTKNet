console.log("Hello World");
document.getElementById("root").innerHTML='Merhaba';

for(i=1;i<5;i++){
    const element=document.createElement("div");
    element.innerHTML=`${person.id} ${person.name} ${person.age}`;
    document.getElementById("root").append(element);

}


