function requestListener(){
    //console.log("Apres la requete: " ,this);
    //conversion en Json
    let data = JSON.parse(this.responseText);
    console.log(data);
    //recuperer le premier element de la liste
    let user=data.results[0];
    console.log(user);
    //recuperer le prenom et le nom et image
    let firstName = user.name.first;
    let lastName = user.name.last;
    let src = user.picture.large;
    //afficher dans le DOM element
    let li =document.createElement('li');
    let img  =document.createElement('img');
    let p = document.createElement('p');
    img.src = src;
    p.innerHTML = `${firstName}${lastName}`;
    //Attacher l'element au html
    document.getElementById("users").appendChild(li);
    li.appendChild(img);
    li.appendChild(p);
}
function requestError(){
    console.log("ops.... erreur!");

}

//initier notre requete
let url="https://randomuser.me/api/";
let methode="GET"
//instancier l'ojet XMLHTTP request
let xhr= new XMLHttpRequest(); // les echanges d'informations anciennes restent XML, car le nouvelle nomination est json
//afficher dans la console
//console.log("avant la requete :",xhr);

//ouvrir la requete
xhr.open(methode,url, true); //true le rend asynchrone
//Ecrire une fonction qui va gerer la reponse donne du serveur

xhr.onload=requestListener; // c'est une fonction callback

//methode qui va gerer les exceptions
xhr.onerror=requestError;

//faire un send
xhr.send();





