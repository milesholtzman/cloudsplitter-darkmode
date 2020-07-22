// let firstHeading = document.getElementById("first-heading");
// console.log(firstHeading);
// console.log(firstHeading.getBoundingClientRect());

// let numberOfScans = 1

function isVisible(element) {
    let elementBox = element.getBoundingClientRect();
    let distanceFromTop = 0; 

    if(elementBox.top - window.innerHeight < distanceFromTop) {
        return true;
    } else {
        return false;
    }
}

function scanDocument() {
    let sectionList = document.querySelectorAll('.hidden');
    sectionList.forEach(function(section) {
        if(isVisible(section)) {
            section.classList.remove('hidden');
        };
    });

    // console.log(numberOfScans);
    // numberOfScans++;
}


document.addEventListener("scroll", scanDocument);


// function throttle(fn, wait) {
//     var time = Date.now();
//     return function() {
//       if ((time + wait - Date.now()) < 0) {
//         fn();
//         time = Date.now();
//       }
//     }
//   }
