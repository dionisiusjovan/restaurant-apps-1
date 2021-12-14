class Resto extends HTMLElement {
    set resto(resto) {
        this._resto = resto;
        this.render();
    }

    render() {
        this.innerHTML = `
        <article class="post-item">
            <img class="post-item__thumbnail"
                    src="${this._resto.pictureId}"
                    alt="Suasana dari ${this._resto.name}">
            <div class="post-item__content">
                <p class="post-item__rating"><span class="fa fa-star checked" style="color:orange;"></span> ${this._resto.rating}
                <h1 class="post-item__title"><a href="#">${this._resto.name}</a></h1>
                <p class="post-item__city"><a href="#" class="post-item__city">${this._resto.city}</a></p>
                <p class="post-item__description">${this._resto.description}</p>
            </div>
        </article>`;
    }
}
customElements.define("resto-item", Resto);