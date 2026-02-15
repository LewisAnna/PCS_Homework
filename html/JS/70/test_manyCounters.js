//part 2
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

const aCounter = app.createCounter();
aCounter.increment();
aCounter.getCount();