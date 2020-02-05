///const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
///const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

function scrollFunction() {
    const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    const scroll = document.documentElement.scrollTop;
    const initialFontSize = vh * 0.45;

    let newFontSize = initialFontSize - (scroll);
    if (newFontSize < (vh/12    )) newFontSize = vh/12;
    document.getElementById('logo').style.fontSize = newFontSize+'px';

    const initialNavbarSize = vh * 0.435;
    let newNavbarSize = initialNavbarSize - (scroll);
    if (newNavbarSize < (vh/8)) newNavbarSize = vh/8;
    document.getElementById('navbar').style.height = newNavbarSize+'px';

    const newSpacerSize = vh - (scroll);
    document.getElementById('navbar-spacer').style.height = newSpacerSize+'px';

    document.getElementById('herobox').style.transform = `translate(${scroll} 0px)`;
} 

window.onscroll = function() {scrollFunction()};