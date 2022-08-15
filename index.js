console.log("Hello World");
//document.getElementById("root").innerHTML='Merhaba';
const arr=[
    {
    id:1,
    name:"Betül Samancı",
    age:19,
},
{
    id:2,
    name:"Ahmet Güne",
    age:39,
},
{
    id:3,
    name:"Faruk Kurtuluş",
    age:22,
}
]
for(let person of arr){
    const element=document.createElement("div");
    element.innerHTML=`${person.id} ${person.name} ${person.age}`;
    document.getElementById("root").append(element);

}

