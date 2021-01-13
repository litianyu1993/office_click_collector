const es = [];
console.debug("Starting to record... :D");

console.debug("Content loaded");
// console.debug(document.getElementById("PageContentContainer"), document.getElementById("PageContentContainer").childNodes.length);
document.addEventListener("click", e => console.debug(`${e.timeStamp}, (${e.clientX},${e.clientY})`));
document.addEventListener("mousedown", e => console.debug(`M: ${e.timeStamp}, (${e.clientX},${e.clientY})`));
document.addEventListener("keydown", e => console.debug(`K: ${e.timeStamp}, (${e.key})`, e));

//const $$panel = document.getElementById("WACViewPanel");
//
//const containerObserver = new MutationObserver(
//  () => {
//    const $$pageContent = $$panel.querySelector("#PageContentContainer");
//
//    // console.debug("----", $$pageContent.querySelector(".SlideView"));
//
//    if (!$$pageContent.querySelector(".SlideView")) return;
//
//    $$pageContent.querySelector(".SlideView").addEventListener("click", e => console.debug(`P: ${e.timeStamp}, (${e.clientX},${e.clientY})`));
//
//  }
//);
//
//containerObserver.observe($$panel, { subtree: false, childList: true })