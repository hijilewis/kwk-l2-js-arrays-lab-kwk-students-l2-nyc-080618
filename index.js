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
 drivers1 = drivers; 
  drivers1.push(name); 
  return(driver); 
}
