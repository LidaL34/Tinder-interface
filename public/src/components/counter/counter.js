class MyCounter extends HTMLElement {
    constructor (){
        super();
        this.attachShadow({mode: 'open'});
        this.onButtonClicked = this.onButtonClicked.bind(this);
        
    }

    static get observedAttributes(){
        return ['count'];
    }

    attributeChangedCallback (propName, oldValue, newValue){
        this[propName] = newValue
        this.mount();
    }

    connectedCallback (){
        console.log ('connected to html');
        this.mount();
    }

    disconnectedCallback (){
        console.log ('disconnected from html');
        this.removeEventListener();
    }

    mount(){
        this.render();
        this.addEventListener();
    }

    render (){
        this.shadowRoot.innerHTML = `
        <link href="./src/components/counter/style.css" rel="stylesheet">

        <section class= 'counter'>
        ${this.count || 0}
        </section>
        <button class= "button"></button>
        `;
    }

    removeEventListener(){
        this.shadowRoot.querySelector('button').removeEventListener('click',this.onButtonClicked);
    }
    addEventListener(){
        this.shadowRoot.querySelector('button').addEventListener('click',this.onButtonClicked);
    }


    onButtonClicked(){
        const currentValue = Number(this.getAttribute('count'));
        this.setAttribute('count',currentValue + 1);
    }


}

customElements.define('my-counter',MyCounter)
export default MyCounter;