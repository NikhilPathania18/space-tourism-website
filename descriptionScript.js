// let currentStatus="MOON";


var moon, mars, europa, titan;
function provideMoon(){
    let description=document.getElementById('description')
    description.innerHTML='<h1 class="planetHeading">MOON</h1><p class="planetDescription"> See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>';
    let image=document.getElementById('planetImage')
    image.innerHTML='<img src="assets/destination/image-moon.png" alt="Moon">';
    setPlanetBorderToDefault();
    moon.style='border-bottom: 5px solid white'

    
}
function provideMars(){
    let description=document.getElementById('description')
    description.innerHTML='<h1 class="planetHeading">MARS</h1><p class="planetDescription"> Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!</p>';
    let image=document.getElementById('planetImage')
    image.innerHTML='<img src="assets/destination/image-mars.png" alt="Mars Photo" >';
    setPlanetBorderToDefault();
    mars.style='border-bottom: 5px solid white'
}
function provideEuropa(){
    let description=document.getElementById('description')
    description.innerHTML='<h1 class="planetHeading">EUROPA</h1><p class="planetDescription">The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin. </p>';
    let image=document.getElementById('planetImage')
    image.innerHTML='<img src="assets/destination/image-europa.png" alt="Europa">';
    setPlanetBorderToDefault();
    europa.style='border-bottom: 5px solid white'
}
function provideTitan(){
    let description=document.getElementById('description')
    description.innerHTML='<h1 class="planetHeading">TITAN</h1><p class="planetDescription"> The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.</p>';
    let image=document.getElementById('planetImage')
    image.innerHTML='<img src="assets/destination/image-titan.png" alt="Moon">';
    setPlanetBorderToDefault();
    titan.style='border-bottom: 5px solid white'
}

function setPlanetBorderToDefault()
{
     moon=document.getElementById('moon')
 mars=document.getElementById('mars')
 europa=document.getElementById('europa')
 titan=document.getElementById('titan')
    moon.style='border-bottom: none'
    mars.style='border-bottom: none'
    europa.style='border-bottom: none'
    titan.style='border-bottom: none'
}