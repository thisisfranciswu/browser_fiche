bStyle = document.getElementsByTagName("body")[0].style;
bStyle.width = "120%";
bStyle.height = "120%";
bStyle.padding = "10%";

function getCursorPosition(e) {
  e = e || window.event;
  var cursor = {x:0, y:0};
  if (e.pageX || e.pageY) {
    cursor.x = e.pageX;
    cursor.y = e.pageY;
  } 
  else {
    cursor.x = e.clientX + 
      (document.documentElement.scrollLeft || 
      document.body.scrollLeft) - 
      document.documentElement.clientLeft;
    cursor.y = e.clientY + 
      (document.documentElement.scrollTop || 
      document.body.scrollTop) - 
      document.documentElement.clientTop;
  }
  return cursor;
}

bfPreviousCursorPosition = {x:0, y:0};
bfCurrentCursorPosition = {x:0, y:0};
bfCursorPositionDelta = {x:0, y:0};
bfMouseDown = false;
bfKeyDown = false;

function bfMouseMoveHandler(e) {
  if (bfMouseDown) {
    if (bStyle.cursor != "move") bStyle.cursor = "move";
    bfCurrentCursorPosition = getCursorPosition(e);
    bfCursorPositionDelta.x = bfPreviousCursorPosition.x - bfCurrentCursorPosition.x;
    bfCursorPositionDelta.y = bfPreviousCursorPosition.y - bfCurrentCursorPosition.y;
    window.scrollBy(bfCursorPositionDelta.x, bfCursorPositionDelta.y);
    console.log(bfCursorPositionDelta.x + " " + bfCursorPositionDelta.y);
    bfPreviousCursorPosition = getCursorPosition(e);
    return false;
  } else {
    bStyle.cursor = "auto";
  }
}

function bfMouseDownHandler(e) {
  console.log("bfMouseDown");
  bfMouseDown = true;
  return false;
}
function bfMouseUpHandler(e) {
  console.log("bfMouseUp");
  bfMouseDown = false
  return false;
}

function bfKeyDownHandler(e) {
  if (e.keyCode == 70) {
    // console.log("bfKeyDown");
    bfKeyDown = true
  }
}
function bfKeyUpHandler(e) {
  // console.log("bfKeyUp");
  if (bfKeyDown) bfKeyDown = false;
}

// window.onmousedown = bfMouseDownHandler;
// window.onmouseup = bfMouseUpHandler;
// window.onmousemove = bfMouseMoveHandler;
// window.onkeydown = bfKeyDownHandler;
// window.onkeyup = bfKeyUpHandler;






