import { DBLCLICK, CLICK, KEY_PRESS } from "../constants/EVENTS.js"

try{
    window.addEventListener(KEY_PRESS, keyPressed)
    window.addEventListener(DBLCLICK, doubleClicked)
    window.addEventListener(CLICK, mouseClicked)
}catch(err){

}