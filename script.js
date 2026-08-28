// ==========================
// Cute Album
// ==========================

// ====== LIST FOTO ======
const album = [

    {type:"image",file:"1.jpg"},
    {type:"image",file:"2.jpg"},
    {type:"image",file:"3.jpg"},
    {type:"image",file:"4.jpg"},
    {type:"video",file:"2879e433900f40d285f4e82fdde8b2d6.mp4"},
    {type:"image",file:"5.jpg"},
    {type:"image",file:"6.jpg"},
    {type:"image",file:"7.jpg"},
    {type:"video",file:"2.mp4"},
    {type:"image",file:"8.jpg"},
    {type:"image",file:"9.jpg"},
    {type:"video",file:"cc4cd507f3d14461ae690aa66093e65c.mp4"},
    {type:"image",file:"10.jpg"},
    {type:"image",file:"11.jpg"},
    {type:"image",file:"12.jpg"},
    {type:"video",file:"4.mp4"},
    {type:"image",file:"13.jpg"},
    {type:"image",file:"14.jpg"},
    {type:"image",file:"15.jpg"},
    {type:"image",file:"16.jpg"},
    {type:"image",file:"17.jpg"},
    {type:"image",file:"18.jpg"},
    {type:"image",file:"19.jpg"},
    {type:"image",file:"20.jpg"},
    {type:"image",file:"21.jpg"},
    {type:"image",file:"22.jpg"},
    {type:"image",file:"23.jpg"},
    {type:"image",file:"24.jpg"},
    {type:"image",file:"25.jpg"},
    {type:"image",file:"26.jpg"},
    {type:"image",file:"27.jpg"},
    {type:"image",file:"28.jpg"},
    {type:"image",file:"29.jpg"},
    {type:"image",file:"31.jpg"},
    {type:"image",file:"32.jpg"},
    {type:"image",file:"33.jpg"},
    {type:"image",file:"34.jpg"},
    {type:"image",file:"35.jpg"},
    {type:"image",file:"36.jpg"},
    {type:"image",file:"37.jpg"},
    {type:"image",file:"38.jpg"},
    {type:"image",file:"39.jpg"},
    {type:"image",file:"40.jpg"},
    {type:"image",file:"41.jpg"},
    {type:"image",file:"42.jpg"},
    {type:"image",file:"43.jpg"},
    {type:"image",file:"44.jpg"},
    {type:"image",file:"45.jpg"},
    {type:"image",file:"46.jpg"},
    {type:"image",file:"47.jpg"},
    {type:"image",file:"48.jpg"},
    {type:"image",file:"49.jpg"},
    {type:"image",file:"50.jpg"},
    {type:"image",file:"51.jpg"},
    {type:"image",file:"52.jpg"},
    {type:"image",file:"53.jpg"},
    {type:"image",file:"54.jpg"},
    {type:"image",file:"55.jpg"},
    {type:"image",file:"56.jpg"},
    {type:"image",file:"57.jpg"},
    {type:"image",file:"58.jpg"},
    {type:"image",file:"59.jpg"},
    {type:"image",file:"60.jpg"},
    {type:"image",file:"61.jpg"},
    {type:"image",file:"62.jpg"},
    {type:"image",file:"63.jpg"},

];

// ====== ELEMENT ======
const pages = document.querySelectorAll(".page");

const img = document.getElementById("albumImage");
const title = document.getElementById("photoTitle");
const number = document.getElementById("photoNumber");

const indicator = document.getElementById("pageIndicator");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");

// ====== PAGE ======
let page = 0;

// 0 = Cover
// 1 = Photo
// 2 = Ending

let photoIndex = 0;


// =====================
// SHOW PAGE
// =====================

function showPage(index){

    pages.forEach(p=>p.classList.remove("active"));

    pages[index].classList.add("active");

}


// =====================
// LOAD PHOTO
// =====================

 const video=document.getElementById("albumVideo");
const videoSource=document.getElementById("videoSource");

function loadPhoto(){

    video.pause();

    if(album[photoIndex].type==="image"){

        img.style.display="block";
        video.style.display="none";

        img.src="images/"+album[photoIndex].file;

    }else{

        img.style.display="none";
        video.style.display="block";

        videoSource.src="videos/"+album[photoIndex].file;

        video.load();

    }

    title.textContent="Memory "+(photoIndex+1);

    number.textContent=
        (photoIndex+1)+" / "+album.length;

    indicator.textContent=
        (photoIndex+1)+" / "+album.length;

}


// =====================
// OPEN ALBUM
// =====================

startBtn.onclick = ()=>{

    page=1;

    photoIndex=0;

    loadPhoto();

    showPage(1);

};


// =====================
// NEXT
// =====================

nextBtn.onclick = ()=>{

    if(page==0){

        startBtn.click();

        return;

    }

    if(page==1){

        if(photoIndex<album.length-1){

            photoIndex++;

            loadPhoto();

        }else{

            page=2;

            showPage(2);

            indicator.textContent="Finish";

        }

    }

};


// =====================
// PREVIOUS
// =====================

prevBtn.onclick = ()=>{

    if(page==2){

        page=1;

        showPage(1);

        loadPhoto();

        return;

    }

    if(page==1){

        if(photoIndex>0){

            photoIndex--;

            loadPhoto();

        }else{

            page=0;

            showPage(0);

            indicator.textContent="Cover";

        }

    }

};


// =====================
// RESTART
// =====================

restartBtn.onclick=()=>{

    page=0;

    photoIndex=0;

    indicator.textContent="Cover";

    showPage(0);

};


// =====================
// KEYBOARD
// =====================

document.addEventListener("keydown",(e)=>{

    if(e.key==="ArrowRight"){

        nextBtn.click();

    }

    if(e.key==="ArrowLeft"){

        prevBtn.click();

    }

});


// =====================
// SWIPE
// =====================

let startX=0;

document.addEventListener("touchstart",(e)=>{

    startX=e.touches[0].clientX;

});

document.addEventListener("touchend",(e)=>{

    let endX=e.changedTouches[0].clientX;

    if(startX-endX>50){

        nextBtn.click();

    }

    if(endX-startX>50){

        prevBtn.click();

    }

});


// =====================
// SPARKLES
// =====================

const sparkleContainer=document.querySelector(".sparkles");

const emoji=["✨","🤍","🌸","⭐","💖","🧸"];

function createSparkle(){

    const s=document.createElement("span");

    s.innerHTML=
    emoji[
        Math.floor(Math.random()*emoji.length)
    ];

    s.style.left=Math.random()*100+"%";

    s.style.fontSize=
    (18+Math.random()*18)+"px";

    s.style.animationDuration=
    (8+Math.random()*6)+"s";

    sparkleContainer.appendChild(s);

    setTimeout(()=>{

        s.remove();

    },14000);

}

setInterval(createSparkle,400);


// =====================
// START
// =====================

showPage(0);
indicator.textContent="Cover";

/* =========================   MUSIC CONTROL========================= */
.music-control{    position:fixed;
    top:20px;    right:20px;
    display:flex;    align-items:center;    gap:10px;
    background:rgba(255,255,255,.9);
    padding:10px 15px;
    border-radius:50px;
    box-shadow:0 8px 25px rgba(0,0,0,.12);
    z-index:9999;
    backdrop-filter:blur(10px);}
#musicButton{    width:42px;    height:42px;
    border:none;    border-radius:50%;
    background:#ff8dc2;
    color:white;
    font-size:20px;
    cursor:pointer;
    transition:.3s;}
#musicButton:hover{    transform:scale(1.08);}
#volumeSlider{    width:90px;
    accent-color:#ff8dc2;
    cursor:pointer;}
#volumeText{    min-width:38px;
    font-size:13px;
    font-weight:700;
    color:#ff6ca8;}
@media(max-width:600px){
    .music-control{        top:10px;        right:10px;
        padding:7px 10px;    }
    #musicButton{        width:38px;        height:38px;    }
    #volumeSlider{        width:70px;    }}
