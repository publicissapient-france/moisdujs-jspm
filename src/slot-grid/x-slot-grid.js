import './x-slot-grid.css!';
import template from './x-slot-grid.html!text';

class XSlotGrid extends HTMLElement {

  createdCallback() {
    this.innerHTML = template;
  }

  attributeChangedCallback(attribute, oldVal, newVal) {
    if (attribute == 'data' && newVal) {
      this.onDataChanged(JSON.parse(newVal));
    }
  }

  onDataChanged(slots) {
    const nbRows = Math.max(
      slots[1].length,
      slots[2].length,
      slots[3].length,
      slots[4].length);

    let rows = '';
    for (let i = 0; i < nbRows; i++) {
      rows +=
        `<tr>
          <td>${slots[1][i] || ''}</td>
          <td>${slots[2][i] || ''}</td>
          <td>${slots[3][i] || ''}</td>
          <td>${slots[4][i] || ''}</td>
        </tr>`;
    }

    this.querySelector('#rows').innerHTML = rows;
  }
}

document.registerElement('x-slot-grid', XSlotGrid);