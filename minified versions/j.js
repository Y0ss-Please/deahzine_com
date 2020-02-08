document.getElementById('contact').addEventListener('click',(e)=>contactBtnClick(e));document.getElementById('contact-form').addEventListener('submit',contactSubmit);window.onscroll=function(){scrollFunction()};window.onresize=function(){scrollFunction()};window.onload=function(){scrollFunction();hideOverlay()}
function scrollFunction(){const vh=Math.max(document.documentElement.clientHeight,window.innerHeight||0);const vw=Math.max(document.documentElement.clientWidth,window.innerWidth||0);const aspect=(vw>=vh)?!0:!1;const scroll=document.documentElement.scrollTop;let atMinimum=!1;const initialFontSize=aspect?vh*0.45:vw*0.38;const minimumFontSize=initialFontSize/5.4;let newFontSize=initialFontSize-(scroll);if(newFontSize<(minimumFontSize)){newFontSize=minimumFontSize;atMinimum=!0}else{atMinimum=!1}
document.getElementById('logo').style.fontSize=newFontSize+'px';const initialNavbarSize=aspect?vh*0.435:vw*0.37;const minimumNavbarSize=initialNavbarSize/3.5;let newNavbarSize=initialNavbarSize-(scroll);if(atMinimum)newNavbarSize=minimumNavbarSize;document.getElementById('navbar').style.height=newNavbarSize+'px';if(scroll<300){hideContactBtn()}else{showContactBtn()}}
function hideOverlay(){const overlay=document.getElementById('overlay');overlay.style.backgroundColor='rgb(63, 63, 61, 0)';overlay.addEventListener('webkitTransitionEnd',function(event){overlay.style.display='none'},!1)}
function showContactBtn(){const contact=document.getElementById('contact');contact.style.bottom="0"}
function hideContactBtn(){const contact=document.getElementById('contact');contact.style.bottom="-100%"}
function contactBtnClick(e){showContactModal()}
function showContactModal(){const overlay=document.getElementById('modal-overlay');const container=document.getElementById('modal-container');const header=document.getElementById('modal-header');const body=document.getElementById('modal-body');overlay.classList.remove('hide-modal');overlay.addEventListener('webkitTransitionEnd',changeHeaderSize);function changeHeaderSize(){header.style.height='15%';body.style.height='85%'}
document.getElementById('close-modal').addEventListener('click',closeContactModal);function closeContactModal(){overlay.classList.add('hide-modal');header.style.height='100%';body.style.height='0%';overlay.removeEventListener('webkitTransitionEnd',changeHeaderSize)}}
let testVar=''
function contactSubmit(e){const sub=e.target[0].value;const email=e.target[1].value;const msg=e.target[2].value;e.preventDefault();const xhttp=new XMLHttpRequest();xhttp.onreadystatechange=function(){if(this.readyState==4&&this.status==200){mailResponse(this.responseText)}};xhttp.open("GET",`contact.php?sub=${sub}&email=${email}&msg=${msg}`,!0);xhttp.send();mailSent()}
function mailSent(){const body=document.getElementById('modal-body');body.innerHTML='<h2>Sending...</h2>'}
function mailResponse(res){const body=document.getElementById('modal-body');console.log(res);if(res=='sent'){body.innerHTML='<h2>Sent!</h2>';setTimeout(()=>{document.getElementById('close-modal').click();setTimeout(()=>{body.innerHTML=`<form id="contact-form">
                            <h3>What you want?</h3>
                            <input name="sub" type="text" required>
                            <h3>Yer email.</h3>
                            <input name="email" type="email" placeholder="Only needed if you expect a response.">
                            <h3>Message:</h3>
                            <textarea name="msg" placeholder="Put some of your words here." required></textarea>
                            <input id="submit-btn" type="submit" value="send">
                        </form>`},2000)},1000)}else{body.innerHTML='<h2>Failed.</h2><p>Please refresh and try again, or send a message to mail@deahzine.com</p>'}}