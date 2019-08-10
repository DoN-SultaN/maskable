import htm from '/web_modules/htm.js';
import { Component, createElement } from '/web_modules/preact.js';
const html = htm.bind(createElement);

/**
 * @typedef {object} Props
 * @property {'Image' | 'Clipart' | 'Color'} type
 */

export class ControlsPanel extends Component {
    /**
     * @param {Props} props
     */
    render(props) {
        return html`
            <aside class="controls__panel panel">
                <h2 class="panel__title">${props.type}</h2>
                <div class="control">
                    <label for="color-control">Color</label>
                    <input type="color" name="color" id="color-control" />
                </div>
            </aside>
        `;
    }
}
