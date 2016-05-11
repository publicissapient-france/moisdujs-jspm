(function () {

    const owner = document.currentScript.ownerDocument;

    class XSlotForm extends HTMLElement {
        createdCallback() {
            this.setupComponent();
        }

        setupComponent() {
            const template = owner.querySelector('#x-slot-form');
            const clone = template.content.cloneNode(true);
            this.appendChild(clone);

            this.slotColumn = this.querySelector('#slot-column');
            this.slotName = this.querySelector('#slot-name');

            this.querySelector('#add-slot')
                .addEventListener('click', this.onClickAddSlot.bind(this), false);
            this.querySelector('#add-slot')
                .addEventListener('submit', this.onClickAddSlot.bind(this), false);
        }

        onClickAddSlot(e) {
            e.preventDefault();
            const event = new CustomEvent('add-slot', {
                detail: {
                    slot: this.slotColumn.value,
                    name: this.slotName.value
                }
            });
            if (event.detail.name && event.detail.slot) {
                this.dispatchEvent(event);
                this.reset();
            }
        }

        reset() {
            this.slotColumn.value = 1;
            this.slotName.value = '';
        }
    }

    document.registerElement('x-slot-form', XSlotForm);

})();
