import html from "../core.js";
import { connect } from "../store.js";

const connecter = connect() // Đẩy state vào connecter

function App({players}) {
    return html`
        <ul>
            ${players.map(player => `<li>${player}</li>`)}
        </ul>
        <button onclick="dispatch('ADD', 'Ronaldo')">ADD</button>
        `
}
export default connecter(App) // Đẩy hết state vào component App