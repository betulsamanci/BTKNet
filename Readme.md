# İçerik 

*HTML
*CSS
*Javascript

##npm
>npm init
* Node Package Management için package.json dosyası oluşturur.

>Script
* start(npm start)
* server (npm run server)

|Script|Açıklama|
|------|--------|
|**start**|npm start komutu ile birlikte çalıştırılacak script belirler.|
|**server**|npm run server  komutu ile birlikte çalıştırılacak script belirler.|

#Git
> git init

> git config --global user.email "email"

> git config --global user.name "name"

> git switch -c "branchname"

> git branch -a

> git checkout "branchname"

> git merge "branchname"

> git branch -d "branchname"

> git push origin -d "branchname"

##JavaScript

###Array Üzerinde Dolaşma
```js
for(let person of arr){
    const element=document.createElement("div");
    element.innerHTML=`${person.id} ${person.name} ${person.age}`;
    document.getElementById("root").append(element);
}
```
