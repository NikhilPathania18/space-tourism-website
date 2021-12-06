
function firstButton()
{
    let btn1=document.getElementById('button1')
    let btn2=document.getElementById('button2')
    let btn3=document.getElementById('button3')
  let technologyHeading=document.getElementById('technologyHeading')  
  let technologyVehicle=document.getElementById('technologyVehicle')
  let vehicleDescription=document.getElementById('vehicleDescription')
  technologyVehicle.innerHTML='SPACEPORT'
  vehicleDescription.innerHTML='A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.'
  let technologyPhoto=document.getElementById('technologyPhoto')
  technologyPhoto.innerHTML='<img src="assets/technology/image-spaceport-portrait.jpg" alt="">'
  setButtonColorToDefault();
  btn1.style.background='white'
  btn1.style.color='black'
  
}
function secondButton(){
    let btn1=document.getElementById('button1')
    let btn2=document.getElementById('button2')
    let btn3=document.getElementById('button3')
    let technologyHeading=document.getElementById('technologyHeading')  
    let technologyVehicle=document.getElementById('technologyVehicle')
    let vehicleDescription=document.getElementById('vehicleDescription')
    technologyVehicle.innerHTML='CAPSULE'
    vehicleDescription.innerHTML=`A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
    capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
    you'll spend your time during the flight. It includes a space gym, cinema, 
    and plenty of other activities to keep you entertained.`
    let technologyPhoto=document.getElementById('technologyPhoto')
    technologyPhoto.innerHTML='<img src="assets/technology/image-space-capsule-portrait.jpg" alt="">'
    setButtonColorToDefault();
    btn2.style.background='white'
  btn2.style.color='black'
}
function thirdButton(){
    let btn1=document.getElementById('button1')
    let btn2=document.getElementById('button2')
    let btn3=document.getElementById('button3')
    let technologyHeading=document.getElementById('technologyHeading')  
    let technologyVehicle=document.getElementById('technologyVehicle')
    let vehicleDescription=document.getElementById('vehicleDescription')
    technologyVehicle.innerHTML='LAUNCH VEHICLE'
    vehicleDescription.innerHTML=`A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
    payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
    WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
    it's quite an awe-inspiring sight on the launch pad!`
    let technologyPhoto=document.getElementById('technologyPhoto')
    technologyPhoto.innerHTML='<img src="assets/technology/image-launch-vehicle-portrait.jpg" alt="">'
    setButtonColorToDefault()
    btn3.style.background='white'
  btn3.style.color='black'

}
function setButtonColorToDefault()
{
    let btn1=document.getElementById('button1')
    let btn2=document.getElementById('button2')
    let btn3=document.getElementById('button3')
    btn1.style.background='transparent'
    btn2.style.background='transparent'
    btn3.style.background='transparent'
    btn1.style.color='white'
    btn2.style.color='white'
    btn3.style.color='white'
}

