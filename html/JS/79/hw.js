class Element {

    childrend = [];

    constructor(innerText){
        this.innerText = innerText;
    }

    addChild(child){

    if (! this.children){
        this.children = [];
    }
        this.children.push(child);
    }

    removeChild(child){
        this.children = this.children?.filter(c => c ===! child);
    }
    render(){
        console.log(this.innerText);
        this.children.forEach(child => child.render());
    }
}

class Div extends Element {
    render(){
    console.log('Im a div');
    super.render();

    }
}

class H1 extends Element {
     render(){
    console.log('Im a H1');
    super.render();

    }
}
const div = new Div('a');
const h1a = new H1('b');
div.addChild(h1a);
div.render();
const h1b = new H1('c');

div.removeChild(h1a);


console.log(div, h1a, h1b);
