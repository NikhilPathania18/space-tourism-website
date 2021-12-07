

var commanderButton,engineerButton,pilotButton,specialistButton

function commander()
{
  let crewPost=document.getElementById('crewPost')  
  let crewName=document.getElementById('crewName')
  let crewDescription=document.getElementById('crewDescription')
  let crewPhoto=document.getElementById('crewPhoto')   
  crewPost.innerHTML="COMMANDER"
  crewName.innerHTML="Douglas Hurley"
  crewDescription.innerHTML='Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.'
  crewPhoto.innerHTML='<img class="crewImage" src="assets/crew/image-douglas-hurley.png" alt="Douglas Harley">'
  setButtonToDefault();
  commanderButton.style.background='white';
}
function engineer()
{
  let crewPost=document.getElementById('crewPost')  
let crewName=document.getElementById('crewName')
let crewDescription=document.getElementById('crewDescription')
let crewPhoto=document.getElementById('crewPhoto')
  crewPost.innerHTML="FLIGHT ENGINEER"
  crewName.innerHTML="ANOUSHEH ANSARI"
  crewDescription.innerHTML='Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.'
  crewPhoto.innerHTML='<img class="crewImage" src="assets/crew/image-anousheh-ansari.png" alt="">'
  setButtonToDefault();
  
  engineerButton.style.background='white';
}
function pilot()
{
  let crewPost=document.getElementById('crewPost')  
let crewName=document.getElementById('crewName')
let crewDescription=document.getElementById('crewDescription')
let crewPhoto=document.getElementById('crewPhoto')
  crewPost.innerHTML="PILOT"
  crewName.innerHTML="VICTOR GLOVER"
  crewDescription.innerHTML='Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.';
  crewPhoto.innerHTML='<img class="crewImage" src="assets/crew/image-victor-glover.png" alt="">'
  setButtonToDefault();
  pilotButton.style.background='white';
  
}
function specialist()
{
  let crewPost=document.getElementById('crewPost')  
let crewName=document.getElementById('crewName')
let crewDescription=document.getElementById('crewDescription')
let crewPhoto=document.getElementById('crewPhoto')
  crewPost.innerHTML="MISSION SPECIALIST"
  crewName.innerHTML="MARK SHUTTLEWORTH"
  crewDescription.innerHTML='Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.'
  crewPhoto.innerHTML='<img class="crewImage" src="assets/crew/image-mark-shuttleworth.png" alt="">'
  setButtonToDefault();
  specialistButton.style.background='white';
  
}

function setButtonToDefault()
{
   commanderButton=document.getElementById('commander')
   engineerButton=document.getElementById('engineer')
   pilotButton=document.getElementById('pilot')
   specialistButton=document.getElementById('specialist')
    commanderButton.style.background='gray';
    engineerButton.style.background='gray';
    pilotButton.style.background='gray';
    specialistButton.style.background='gray';
}