// code your solution here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}
console.log(saturdayFun()); 
console.log(saturdayFun("go hiking"));

const mondayWork = function(activity = 'go to the office') {
  return `This Monday, I will ${activity}.`;
};
console.log(mondayWork()); 
console.log(mondayWork('work from home')); 

function wrapAdjective(highlight = '*') {
  return function(adjective) {
    return `You are ${highlight}${adjective}${highlight}!`;
  };
}
const starWrapper = wrapAdjective('*');
const doublePipeWrapper = wrapAdjective('||');

console.log(starWrapper('awesome'));
console.log(doublePipeWrapper('fantastic'));
