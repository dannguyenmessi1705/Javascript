import { createStore } from "./core.js";
import reducer from "./reducer.js";

const { attach, connect, dispatch } = createStore(reducer);
window.dispatch = dispatch; // Đặt dispatch làm biến global toàn thư viện
export { attach, connect };
