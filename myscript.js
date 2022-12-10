/* Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
Consigli del giorno:
Ragioniamo come sempre a step. Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
Buon lavoro! */

/* Wayne Barnett  Founder & CEO     wayne-barnett-founder-ceo.jpg
   Angela Caroll  Chief Editor      angela-caroll-chief-editor.jpg
   Walter Gordon  Office Manager    walter-gordon-office-manager.jpg
   Angela Lopez   Social Media      Manager  angela-lopez-social-media-manager.jpg
   Scott Estrada  Developer         scott-estrada-developer.jpg
   Barbara Ramos  Graphic Designer  barbara-ramos-graphic-designer.jpg */

const teamList = [
    {
        firstname: 'Wayne',
        lastname: 'Barnett',
        role: 'Founder, CEO',
        image: 'wayne-barnett-founder-ceo.jpg',

    },
    {
        firstname: 'Angela',
        lastname: 'Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',

    },
    {
        firstname: 'Walter',
        lastname: 'Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',

    },
    {
        firstname: 'Angela',
        lastname: 'Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',

    },
    {
        firstname: 'Scott',
        lastname: 'Estrada',
        role: 'developer',
        image: 'scott-estrada-developer.jpg',

    },
    {
        firstname: 'Barbara',
        lastname: 'Ramos',
        role: 'Graphic designer',
        image: 'barbara-ramos-graphic-designer.jpg',

    },
]
//MILESTONE1:
for(let i = 0; i < teamList.length; i++){
    console.log(teamList[i]);
}

//recupero div dal dom per stampare info in pagina:
const myDiv = document.querySelector('.team_members');


//MILESTONE2:
 for (let i = 0; i < teamList.length; i++){
     myDiv.innerHTML+=
     
     `<h2>${teamList[i].firstname} ${teamList[i].lastname} </h2>
     <h2>${teamList[i].role} </h2>
     
     
     `
     

 }
    
    

    
 


    



