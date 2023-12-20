let index = 0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let progressbar = document.getElementById('progressbar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let songitems = Array.from(document.getElementsByClassName("songitem"));
let songs = [
    { songName: "Style", filePath: "songs/1.mp3" ,coverPath: "covers/1.jpeg"},
    { songName: "As it was", filePath: "songs/2.mp3" ,coverPath: "covers/2.jpg" },
    { songName: "Sweat", filePath: "songs/3.mp3" ,coverPath: "covers/3.jpg" },
    { songName: "Sunflower", filePath: "songs/4.mp3" ,coverPath: "covers/4.jpg" },
    { songName: "Die for you", filePath: "songs/5.mp3" ,coverPath: "covers/5.webp" },
    { songName: "Fein", filePath: "songs/6.mp3" ,coverPath: "covers/6.png"},
]

songitems.forEach((element, i)=>{
    console.log(element, i)
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
})

masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
    
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100)
    
    progressbar.value = progress;

})
progressbar.addEventListener('change',()=>{
    audioElement.currentTime = progressbar.value * audioElement.duration/100;
})

const makeallplays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeallplays();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');  
        audioElement.src = `songs/${index+1}.mp3`;
        mastersongname.innerHTML = songs[index].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(index>=6){
        index = 0;
    }
    else{
        index += 1;
    }
    audioElement.src = `songs/${index+1}.mp3`;
    mastersongname.innerHTML = songs[index].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity=1;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');  
})
document.getElementById('previous').addEventListener('click',()=>{
    if(index<0){
        index = 0;
    }
    else{
        index -= 1;
    }
    audioElement.src = `songs/${index+1}.mp3`;
    mastersongname.innerHTML = songs[index].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity=1;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');  
})