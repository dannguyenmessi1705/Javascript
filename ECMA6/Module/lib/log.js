import { TYPE_LOG } from "./constants.js"

const print = (log, TYPE = TYPE_LOG) => {
    console[TYPE](log)
}
export default print