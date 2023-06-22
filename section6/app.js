/** Seance du 22/06/2023

 */
fetch("https://randomuser.me/api/").then(function(response) {
    //fetch renvoit une promesse
    //convertir la reponse en un objet js
    return response.json();
    //methode .json qui retounr une promesse que l'on doit gerer
 
} ).then(function(data) {



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
).catch(function(error) {

console.error.log("oups.... erreur!");
}
);