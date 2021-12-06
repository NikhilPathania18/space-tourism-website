let homeIcon = document.getElementById("home");
let destinationIcon = document.getElementById("destination");
let crewIcon = document.getElementById("crew");
let technologyIcon = document.getElementById("technology");
home();
function setIconToDefault() {
  homeIcon.style = "border-bottom: none";
  destinationIcon.style = "border-bottom: none";
  crewIcon.style = "border-bottom: none";
  technologyIcon.style = "border-bottom: none";
}

function home() {
  let mainDiv = document.getElementById("mainDiv");
  document.body.style =
    "background-image: url('assets/home/background-home-desktop.jpg');";
  mainDiv.innerHTML =
    ' <div class="space"><div class="first"><h2 id="headline">SO, YOU WANT TO TRAVEL TO</h2><h1 id="spaceHeading">SPACE</h1><p id="spacePara">Let' +
    "'" +
    "s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. We" +
    "'" +
    'll sit back, and relax because we will give you a truly out of this world experience! </p></div><div class="second"><button id="explore">EXPLORE</button></div></div>';
  document.title = "SPACE";
  setIconToDefault();
  homeIcon.style = "border-bottom: 5px solid white";
}
function destination() {
  document.title = "DESTINATION";
  let mainDiv = document.getElementById("mainDiv");
  document.body.style =
    "background-image: url('assets/destination/background-destination-desktop.jpg');";
  mainDiv.innerHTML =
    '<div class="destination" id="destination"><div class="photoMars"><h1 id="pickDestination"><span class="number">01</span> PICK YOUR DESTINATION</h1><div class="planetImage" id="planetImage"><img src="assets/destination/image-titan.png" alt="Moon"></div></div><div class="descriptionSecond" id="descriptionSecond"><div class="navMars"><button class="planets" id="moon" onclick="provideMoon()">MOON</button><button class="planets" id="mars"onclick="provideMars()">MARS</button><button class="planets" id="europa" onclick="provideEuropa()">EUROPA</button><button class="planets" id="titan" onclick="provideTitan()">TITAN</button></div><div class="description" id="description"></div></div></div>';
  provideMoon();
  setIconToDefault();
  destinationIcon.style = "border-bottom: 5px solid white";
}
function crew() {
  document.title = "CREW";
  let mainDiv = document.getElementById("mainDiv");
  document.body.style =
    "background-image: url('assets/crew/background-crew-desktop.jpg');";
  mainDiv.innerHTML =
    '<div class="crew"><div class="intro"><h1 id=crewHeading><span id="crewNumber">02</span>MEET YOUR CREW</h1><div class="mainBox"><div class="crewDetails"><div id="crewPost"></div><h1 id="crewName"></h1><p id="crewDescription"></p></div></div><div class="buttonBar"><button class="toggleButton"id="commander" onclick="commander()"></button><button class="toggleButton"id="engineer" onclick="engineer()"></button><button class="toggleButton" id="pilot"onclick="pilot()"></button><button class="toggleButton" id="specialist" onclick="specialist()"></button></div></div><div class="crewPhoto"id="crewPhoto"></div></div>';
  setIconToDefault();
  crewIcon.style = "border-bottom: 5px solid white";
  commander();
}

function technology() {
  document.title = "TECHNOLOGY";
  let mainDiv = document.getElementById("mainDiv");
  document.body.style =
    "background-image: url('assets/technology/background-technology-desktop.jpg')";
  mainDiv.innerHTML = `<div class="introBar">
    
    <span id="numberTechnology">03</span>
    SPACE LAUNCH 101
</div>
<div class="mainBody">
    <div class="numberButtonBar">
        <button class="numberButton" id='button1'onclick="firstButton()">1</button><button class="numberButton" onclick="secondButton()"id='button2'>2</button><button class="numberButton" onclick="thirdButton()"id='button3'>3</button>
    </div>
    <div class="technologyDescription">
        <h2 id="technologyHeading">THE TERMINOLOGY...</h2>
        <h1 id="technologyVehicle"></h1>
        <p id="vehicleDescription"></p>
    </div>
    <div id="technologyPhoto">
        
    </div>
</div>`;
  setIconToDefault();
  technologyIcon.style = "border-bottom: 5px solid white";
  firstButton();
}
