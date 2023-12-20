// Membri
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

var teamContainer = document.getElementById('team-container');

for (var i = 0; i < membri.length; i++) {
    var divMembro = document.createElement('div');
    divMembro.className = 'team-member';

    var imgMembro = document.createElement('img');
    imgMembro.src = membri[i].foto;
    imgMembro.alt = membri[i].nome;

    var nomeMembro = document.createElement('p');
    nomeMembro.textContent = membri[i].nome;

    var ruoloMembro = document.createElement('p');
    ruoloMembro.textContent = membri[i].ruolo;

    divMembro.appendChild(imgMembro);
    divMembro.appendChild(nomeMembro);
    divMembro.appendChild(ruoloMembro);

    teamContainer.appendChild(divMembro);

    console.log("Nome: " + membri[i].nome);
    console.log("Ruolo: " + membri[i].ruolo);
    console.log("Foto: " + membri[i].foto);
    console.log("--------------------"); // Separatore tra i membri
}