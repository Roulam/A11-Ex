//premiere etape
//initier notre requete
let xhr= new XMLHttpRequest();
console.log(xhr.readyState);
console.log(xhr.status);
console.log(xhr);
//Creation d'une fonction pour gerer la reponse lorsqu'elle est recue
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
    //afficer l'objet xhr pour voir responseText
    console.log(xhr);
    //Recuperer le contenu de la propriete responseText
    //recuperer le premier element [0]
    let data =JSON.parse(xhr.responseText)[0];
    //document.write(xhr.responseText);

    //console.log(data);
    //console.log(xhr.readyState,xhr.status);
    document.write(JSON.stringify(data));
    }
}





//ouvrir et envoyer la requete
xhr.open('GET', 'https://randomuser.me/api/');
xhr.send();
//2eme etape