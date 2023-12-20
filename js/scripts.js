// Array di membri
var membri = [
      {
          nome: "Wayne Barnett",
          ruolo: "Founder & CEO",
          foto: "img/wayne-barnett-founder-ceo.jpg"
      },
      {
          nome: "Angela Caroll",
          ruolo: "Chief Editor",
          foto: "img/angela-caroll-chief-editor.jpg"
      },
      {
          nome: "CWalter Gordon",
          ruolo: "Office Manager",
          foto: "img/walter-gordon-office-manager.jpg"
      },
      {
          nome: "Angela Lopez",
          ruolo: "Social Media Manager",
          foto: "img/angela-lopez-social-media-manager.jpg"
      },
      {
          nome: "Scott Estrada",
          ruolo: "Developer",
          foto: "img/scott-estrada-developer.jpg"
      },
      {
          nome: "Barbara Ramos",
          ruolo: "Graphic Designer",
          foto: "img/barbara-ramos-graphic-designer.jpg"
      }
];

// Ottieni il riferimento al contenitore del team nel documento HTML
var teamContainer = document.getElementById('team-container');

// Itera attraverso l'array dei membri
for (var i = 0; i < membri.length; i++) {
    // Creazione di elementi HTML per ogni membro
    var divMembro = document.createElement('div');
    divMembro.className = 'team-member';

    var imgMembro = document.createElement('img');
    imgMembro.src = membri[i].foto;
    imgMembro.alt = membri[i].nome;

    var nomeMembro = document.createElement('p');
    nomeMembro.textContent = membri[i].nome;

    var ruoloMembro = document.createElement('p');
    ruoloMembro.textContent = membri[i].ruolo;

    // Aggiungi gli elementi al contenitore del team
    divMembro.appendChild(imgMembro);
    divMembro.appendChild(nomeMembro);
    divMembro.appendChild(ruoloMembro);
    teamContainer.appendChild(divMembro);
}