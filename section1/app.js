//premiere etape
//initier notre requete
let xhr= new XMLHttpRequest();
console.log(xhr.readyState);
console.log(xhr.status);
console.log(xhr);
//Creation d'une fonction pour gerer la reponse lorsqu'elle est recue
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200)
    document.write("good job");
    console.log(xhr.readyState,xhr.status);
}






//ouvrir et envoyer la requete
xhr.open('GET', 'http://jsonplaceholder.typicode.com/posts');
xhr.send();
//2eme etape