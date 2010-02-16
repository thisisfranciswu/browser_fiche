bStyle = document.getElementsByTagName("body")[0].style
bStyle.width = "120%";
bStyle.height = "120%";
bStyle.margin = "10% auto";

// function fMouseMoveHandler(e) {
//   console.log(e.pageX + " " + e.pageY);
// }
// 
// function fMouseDownHandler() {
//   window.onmousemove = fMouseMoveHandler;
//   console.log("MouseDown");
// }
// function fKeyDownHandler(e) {
//   if (e.keyCode == 70) {
//     if (bStyle.cursor != "move") bStyle.cursor = "move";
//     window.onmousedown = fMouseDownHandler;
//     console.log("Ctrl")
//   }
// }
// function fKeyUpHandler(e) {
//   bStyle.cursor = "auto";
// }
// window.onkeydown = fKeyDownHandler;
// window.onkeyup = fKeyUpHandler;