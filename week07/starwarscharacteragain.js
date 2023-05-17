import {html, css, LitElement} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class StarWarsCharacterAgain extends LitElement{
    static styles = css `
    
    `;
    static properties = {
        url: {type:URL},
        _data:{state: true} 
    }
    connectedCallback(){
        super.connectedCallback()
        this.getData()
    }
    update(){
        this.getData()
    }
    getData(){
        fetch(this.url)
            .then(response => response.json())
            .then(data => this._data = data)
    }
    render(){
        return html `
            <div>My name is ${this._data.name}</div>
            <div>My mass is ${this._data.mass}</div>
        
        `
    }
}

customElements.define('sw-characteragain', StarWarsCharacterAgain)