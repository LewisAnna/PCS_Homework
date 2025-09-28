var app = {
counter : (function() {
    var count = 0;

    return {
        increment : function(){
        count++;
        },

        getCount : function(){
        return count;
        }
    };
    })()
    
    };

//outcome
app.counter.increment()
app.counter.getCount()