class FixmeTodo extends HTMLElement {
	static get observedAttributes() { return ["who"]; }

	attributeChangedCallback(name, oldValue, newValue) {
		switch (name) {
			case "who": this._update(); break;
		}
	}

	connectedCallback() {
		this._update();
	}

	_update() {
		let name = this.nodeName.toUpperCase().replace("-", "");
		this.textContent = (this.who ? `${name} ${this.who}` : name);
	}

	get who() { return this.getAttribute("who"); }
	set who(who) { return this.setAttribute("who", who); }
}

customElements.define("fix-me", class extends FixmeTodo {});
customElements.define("to-do", class extends FixmeTodo {});
