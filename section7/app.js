/** Seance du 22/06/2023
exo random
 */
//creer une variable de requete
let url = "https://randomuser.me/api/";

//utiliser fetch api
/* let response = fetch(url);
console.log(response); */
//Comme le detch retounr une promesse, il peut la gerer, then lorsquecelle est fullfilled et catch pour exception

fetch(url)
.then(response => response.json())
//console.log(response);

//fction callblack anonyme
.then(function (data)
{
    let user = data.results[0];
    //console.log(user);
    //creer des elts html pour afficher les informations dans le DOM element
    let li =document.createElement('li');
    let img  =document.createElement('img');
    let p = document.createElement('p');
    //Assigner a l'image les donnees recuperer par web elt
    img.src = user.picture.large;
    p.innerHTML = `${user.name.first} ${user.name.last}`;
    //placer les elts html dans la liste ul
    li.appendChild(img);
    li.appendChild(p);
    document.getElementById("users").appendChild(li);



}).catch(error => console.log(".... ops something wrong", error)) //catch pour gerer les promesses qui ne sont pas fullfilled
