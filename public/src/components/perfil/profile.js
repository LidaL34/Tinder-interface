class MyProfile extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }
    
    static get observedAttributes(){
        return ['pp','name','age', 'job', 'location', 'distance'];
    }
    
    attributeChangedCallback (propName,oldValue,newValue){
        this[propName] = newValue
        this.mount();
    }
    
    connectedCallback(){
        this.mount();
    }
    
    mount(){
        this.render();
    }
    
    render(){
        this.shadowRoot.innerHTML = `
        <link href="./src/components/perfil/profile.css" rel="stylesheet">

        <section class="fontType">
        <div class="background">
            
            <img src="./img/icons/tinder.png" class="logo">
            <img src="./img/icons/bar.png" class="bar">

            <div class="infoPic" style="background-image: url(${this.pp})">

            <span style="font-size: 12px;" class="name"> ${this.name} </span><span style="font-size: 6px;" class="age"> ${this.age} </span>
            <p class="job"> ${this.job} </p>
            <p class="location"> ${this.location} </p>
            <p class="distance"> ${this.distance} Km Away </p>

            <img src="./img/icons/smallicons.png" class="smallIcons">
            <img src="./img/icons/bigicons.png" class="bigIcons">

        </div>

        <img src="./img/icons/LowBttns.png" class="LowBttns">
    
    </section>
        
        `;
    }  
    
}

customElements.define('my-profile',MyProfile)
export default MyProfile;