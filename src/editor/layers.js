import htm from '/web_modules/htm.js';
import { Component, createElement } from '/web_modules/preact.js';
const html = htm.bind(createElement);

/**
 * Represents a single layer in the layers panel.
 * @param {string} props.id Unique ID for this layer.
 * @param {string} [props.name] User-set name of the layer.
 * @param {string} props.type Type of the layer (Image, Clipart, Color).
 */
const Layer = props => html`
    <li class="layer__listitem">
        <button class="layer" id=${props.id}>
            <span class="layer__name">${props.name}</span>
            <span class="layer__type">(${props.type})</span>
        </button>
    </li>
`;

export class LayersPanel extends Component {
    onAddClick() {}

    onLayerClick() {}

    render() {
        const layers = [
            { id: 'foo', type: 'Image' },
            { id: 'bar', type: 'Color' },
        ];

        return html`
            <aside class="layers__panel panel">
                <h2 class="panel__title">Layers</h2>
                <button class="layers__add" onClick=${this.onAddClick}>
                    Add Layer
                </button>
                <ul class="layers__list" onClick=${this.onLayerClick}>
                    ${layers.map(
                        layer => html`
                            <${Layer} ...${layer} />
                        `,
                    )}
                </ul>
            </aside>
        `;
    }
}
