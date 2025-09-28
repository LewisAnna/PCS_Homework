var app = {
createCounter : () => {
    var count = 0;

    return {
        increment : function(){
        count++;
        },

        getCount : function(){
        return count;
        }
    };
    }
    
    };

const counter1 = app.createCounter();


const counter2 = app.createCounter();

const counter3 = app.createCounter();

function increaseSpecific(name, amount) {
  for (let i = 0; i < amount; i++) {
  name.increment();
}
}

increaseSpecific(counter1, 10);
increaseSpecific(counter2, 5);
increaseSpecific(counter3, 15);

console.log(counter1.getCount());
console.log(counter2.getCount());
console.log(counter3.getCount());