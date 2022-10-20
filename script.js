function display(val){
    document.getElementById("result").value += val;
    return val;
}
function solve() {
    let x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value = y;
    return y;
}
function clearScreen() {
    document.getElementById("result").value = "";
}
function squareFunction() {
    let p = document.getElementById("result").value;
    let q = Math.pow(p,2);
    document.getElementById("result").value = q;
    return q;
}
function rootFunction() {
    let s = document.getElementById("result").value;
    let r = Math.sqrt(s,2);
    document.getElementById("result").value = r;
    return r;
}
function cubeFunction() {
    let m = document.getElementById("result").value;
    let n = Math.pow(m,3);
    document.getElementById("result").value = n;
    return n;
}