const interest = (function(){
  const rate = .3;
  const years = 5;
  function getInterest(){
  }
    return { 
      calculateInterest(amount){
          return (amount*rate*years);
      }
    };
  }());
  console.log(interest.calculateInterest(100));