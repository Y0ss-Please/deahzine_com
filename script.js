document.getElementById('contact').addEventListener('click', (e) => contactBtnClick(e));

window.onscroll = function() {scrollFunction()};
window.onresize = function() {scrollFunction()};

window.onload = function () {
    scrollFunction();
    hideOverlay();
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

    if (scroll < 300){
        hideContactBtn();
    } else {
        showContactBtn();
    }
} 

function hideOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.style.backgroundColor = 'rgb(63, 63, 61, 0)';
    overlay.addEventListener('webkitTransitionEnd', function( event ) { 
        overlay.style.display = 'none';
   }, false );
}

function showContactBtn(){
    const contact = document.getElementById('contact');
    contact.style.bottom = "0";
}

function hideContactBtn() {
    const contact = document.getElementById('contact');
    contact.style.bottom = "-100%";
}

function contactBtnClick(e) {
    showContactModal();
}

function showContactModal() {
    const overlay = document.getElementById('modal-overlay');
    const container = document.getElementById('modal-container');
    const header = document.getElementById('modal-header');
    const body = document.getElementById('modal-body');

    overlay.classList.remove('hide-modal');

    overlay.addEventListener('webkitTransitionEnd', changeHeaderSize);
   function changeHeaderSize() {
        header.style.height = '15%';
        body.style.height = '85%';
   }

   document.getElementById('close-modal').addEventListener('click', closeContactModal);

   function closeContactModal() {
    overlay.classList.add('hide-modal');
    header.style.height = '100%';
    body.style.height = '0%';
    overlay.removeEventListener('webkitTransitionEnd', changeHeaderSize);
    }

    /*
    const showContainer = setInterval(showContainerAnim, 5);
    let containerPos = -120;
    function showContainerAnim() {
        if (containerPos >= 0){
            clearInterval(showContainer);
        } else {
            containerPos += (Math.cos(3.14*8) + 1) / 2;
            container.style.transform = `translateY(${containerPos}%)`;
        }
    }
    */
}