import { KEY_DOWN, MOUSE_PRESSED } from "../constants/EVENTS.js";

window.addEventListener(KEY_DOWN,_keyTyped)
// window.addEventListener(KEY_PRESS, keyPressed)
// window.addEventListener(DBLCLICK, doubleClicked)
// window.addEventListener(CLICK, mouseClicked)
window.addEventListener(MOUSE_PRESSED,_mousePressed)


function _keyTyped(evt){
    if(!window.keyTyped){
        return
    }
    window.key = evt.key
    keyTyped()
    window.key = undefined
}

function _mousePressed(){
    if(!window.mousePressed){
        return
    } 
    mousePressed()
}