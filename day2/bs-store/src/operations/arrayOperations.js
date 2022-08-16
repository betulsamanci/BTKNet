const arr =[1,2,3,4,5];

let newArr=[];
let selectedıtem=2;
// döngü kur ve (3) numarayı ele 

for (const item of arr) {
    if (item!==selectedıtem) {
        newArr.push(item);
    }
}

const newFilterArr=arr.filter(num=>num!==selectedıtem); //yukarıdaki forla aynı işi yapıyor




console.log(arr);
console.log(newArr);
console.log(newFilterArr);
