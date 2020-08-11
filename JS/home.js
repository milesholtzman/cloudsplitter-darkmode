// var lastScrollTop = 0;

// // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
// window.addEventListener("wheel", function(){ // or window.addEventListener("scroll"....
//    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
//    if (st > lastScrollTop){
//       console.log("up")
//    } else {
//       console.log("down")
//    }
//    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
// }, false);


let numberOfScrolls = 0

var scrollableElement = document.body; //document.getElementById('scrollableElement');

var welcomeTextOpacityInit = .90;
scrollableElement.addEventListener('wheel', scrollEvent);

function scrollEvent(event) {
  if (scrollDirection(event)) {
    // console.log('Up');
    console.log(numberOfScrolls);
    numberOfScrolls++;
    document.getElementById("welcomeText").style.opacity = (0 + (numberOfScrolls*.001));
  } else {
    console.log('Down');
    console.log(numberOfScrolls);
    numberOfScrolls++;
    document.getElementById("welcomeText").style.opacity = (welcomeTextOpacityInit - (numberOfScrolls*.01));
  }
}

function scrollDirection(event) {
  if (event.wheelDelta) {
    return event.wheelDelta > 0;
  }
  return event.deltaY < 0;
}