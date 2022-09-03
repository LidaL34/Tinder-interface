import * as components from './components/indexCom.js'
import data from './components/data.js'

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        data.forEach((element)=>{
            this.shadowRoot.innerHTML += `
            <div>
                <my-profile
                pp= '${element.pp}'
                name= '${element.name}' 
                age= '${element.age}' 
                job= '${element.job}' 
                location= '${element.location}' 
                distance= '${element.distance}'>
                </my-profile>
                <my-counter></my-counter>
            </div>
            `;
        })

        
    }
}

customElements.define('app-container',AppContainer);