// Write your solution here!
const drivers =["Milo", "Otis", "Garfield"]; 

function destructivelyAppendDriver(name){
  drivers.push("Ralph"); 
}
function destructivelyPrependDriver(name){
  drivers.unshift("Bob"); 
}
function destructivelyRemoveLastDriver(){
  drivers.pop(); 
}
function destructivelyRemoveFirstDriver(){
  drivers.shift(); 
}
function appendDriver(name){
 var drivers1 = []; 
 drivers1 = drivers.slice(0); 
  drivers1.push(name); 
  return(drivers1); 
}

function prependDriver(name){
 var drivers2 = []; 
 drivers2 = drivers.slice(0); 
  drivers2.unshift(name); 
  return(drivers2); 
}
function (name){
 var drivers2 = []; 
 drivers2 = drivers.slice(0); 
  drivers2.unshift(name); 
  return(drivers2); 
}
function prependDriver(name){
 var drivers2 = []; 
 drivers2 = drivers.slice(0); 
  drivers2.unshift(name); 
  return(drivers2); 
}
