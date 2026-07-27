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
