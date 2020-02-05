window.onload = function () {
    element = document.getElementById('overlay');
    element.style.opacity = '0';
    element.addEventListener('webkitTransitionEnd', function( event ) { 
        element.style.display = 'none';
   }, false );
}
    
  
function scrollFunction() {
    const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const aspect = (vw >= vh) ? true : false ;
    const scroll = document.documentElement.scrollTop;
    let atMinimum = false;

    const initialFontSize = aspect ? vh * 0.45 : vw * 0.38;
    const minimumFontSize = initialFontSize/5.4;
    let newFontSize = initialFontSize - (scroll);
    if (newFontSize < (minimumFontSize)) {
        newFontSize = minimumFontSize;
        atMinimum = true;
    } else { 
        atMinimum = false;
    }
    document.getElementById('logo').style.fontSize = newFontSize+'px';

    const initialNavbarSize = aspect ? vh * 0.435 : vw * 0.37;
    const minimumNavbarSize = initialNavbarSize/3.5;
    let newNavbarSize = initialNavbarSize - (scroll);
    if (atMinimum) newNavbarSize = minimumNavbarSize;
    document.getElementById('navbar').style.height = newNavbarSize+'px';

    const contact = document.getElementById('contact');
    if (scroll < 350){
        contact.style.bottom = "-100%";
    } else {
        contact.style.bottom = "0";
        contact.addEventListener('click', (e) => {
            window.location.href = 'mailto:mail@deazine.com';
        });
    }
} 

window.onscroll = function() {scrollFunction()};
window.onresize = function() {scrollFunction()};

scrollFunction();