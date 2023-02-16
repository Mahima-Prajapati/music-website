let songIndex=0;
let audioElement = new Audio('song/331.mp3');
let masterPlay = document.getElementById('masterPlay');
let first = document.getElementById('first');
let myProgessBar = document.getElementById('myprogressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let reached=100;

let songs = [
    {songName: "Aaj Zid (Arijit Singh)", filePath: "song/331.mp3"},
    {songName: "Muskurane (Jeet Gannguli, Arijit Singh)", filePath: "song/332.mp3"},
    {songName: "O Saathi (Arijit Singh)", filePath: "song/333.mp3"}, 
    {songName: "Tera Chehra (Arijit Singh)", filePath: "song/334.mp3"},
    {songName: "Tera Hoke Rahengay (Arijit Singh)", filePath: "song/335.mp3"}
]

function changeToNext(){
    if(songIndex>=4){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    makeAllPlays();
    console.log(songIndex);
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
        if(element.id==songIndex){
            element.classList.remove('fa-circle-play');
            element.classList.add('fa-circle-pause');
        }
    })
    audioElement.src = `song/33${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    first.classList.remove('fa-circle-play');
    first.classList.add('fa-circle-pause');
}

songItems.forEach((element,i)=>{
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// audioElement.play();
first.addEventListener('click',()=>{
    makeAllPlays();
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        first.classList.remove('fa-circle-play');
        first.classList.add('fa-circle-pause');
        Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
            if(element.id==songIndex){
                element.classList.remove('fa-circle-play');
                element.classList.add('fa-circle-pause');
            }
        })
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        first.classList.remove('fa-circle-pause');
        first.classList.add('fa-circle-play');
    }
})
masterPlay.addEventListener('click',()=>{
    makeAllPlays();
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        first.classList.remove('fa-circle-play');
        first.classList.add('fa-circle-pause');
        Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
            if(element.id==songIndex){
                element.classList.remove('fa-circle-play');
                element.classList.add('fa-circle-pause');
            }
        })
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        first.classList.remove('fa-circle-pause');
        first.classList.add('fa-circle-play');
    }
})
audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgessBar.value = progress;
    if(myProgessBar.value==reached)
        changeToNext();
})
myProgessBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgessBar.value*audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
    makeAllPlays();
    songIndex = parseInt(e.target.id);
        if(audioElement.paused || audioElement.currentTime<=0){
            audioElement.src = `song/33${songIndex+1}.mp3`;
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add("fa-circle-pause");
            audioElement.play();
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
            first.classList.remove('fa-circle-play');
            first.classList.add('fa-circle-pause');
        }
        else{
            audioElement.pause();
            masterPlay.classList.remove('fa-circle-pause');
            masterPlay.classList.add('fa-circle-play');
            first.classList.remove('fa-circle-pause');
            first.classList.add('fa-circle-play');
        }
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=4){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    makeAllPlays();
    console.log(songIndex);
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
        if(element.id==songIndex){
            element.classList.remove('fa-circle-play');
            element.classList.add('fa-circle-pause');
        }
    })
    audioElement.src = `song/33${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    first.classList.remove('fa-circle-play');
    first.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    makeAllPlays();
    console.log(songIndex);
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
        if(element.id==songIndex){
            element.classList.remove('fa-circle-play');
            element.classList.add('fa-circle-pause');
        }
    })
    audioElement.src = `song/33${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    first.classList.remove('fa-circle-play');
    first.classList.add('fa-circle-pause');
})