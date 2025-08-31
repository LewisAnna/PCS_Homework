const dayOfWeek = (function(){
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','שבת'];

  function get(){
  }
    return {
      getDayName(index){
        return days[index - 1];
      },  
      getDayNumber(day){
        return days.findIndex(d => d === day) + 1;
      }
    };
  }());

console.log(dayOfWeek.getDayName(7));
console.log(dayOfWeek.getDayNumber('Thursday'));