let songIndex=0;
let audioElement = new Audio('song/451.mp3');
let masterPlay = document.getElementById('masterPlay');
let first = document.getElementById('first');
let myProgessBar = document.getElementById('myprogressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let reached=100;

let songs = [
    {songName: "Tum Mile (Pritam, Neeraj Shridhar)", filePath: "song/451.mp3"},
    {songName: "Dil Ibaadat (Pritam, KK)", filePath: "song/452.mp3"},
    {songName: "Tu Hi Haqeeqat (Pritam, Javed Ali, Irshan Ashraf)", filePath: "song/453.mp3"},
    {songName: "O Meri Jaan (Pritam, KK)", filePath: "song/454.mp3"}
]

function changeToNext(){
    if(songIndex>=3){
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
    audioElement.src = `song/45${songIndex+1}.mp3`;
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
            audioElement.src = `song/45${songIndex+1}.mp3`;
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
    if(songIndex>=3){
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
    audioElement.src = `song/45${songIndex+1}.mp3`;
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
    audioElement.src = `song/45${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    first.classList.remove('fa-circle-play');
    first.classList.add('fa-circle-pause');
})