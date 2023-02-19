let songIndex=0;
let audioElement = new Audio('song/151.mp3');
let masterPlay = document.getElementById('masterPlay');
let first = document.getElementById('first');
let myProgessBar = document.getElementById('myprogressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let reached=100;

let songs = [
    {songName: "Alif Allah-Jugni (Arif Lohar, Harshdeep Kaur)", filePath: "song/151.mp3"},
    {songName: "Angreji Beat (Honey Singh, Gippy Grewal)", filePath: "song/152.mp3"},
    {songName: "Daaru Desi (Benny Dayal, Shalmali Kholgade)", filePath: "song/153.mp3"},
    {songName: "Luttna-Saif UI Malook (Masuma Anwar, Sahir Ali, Anupam Amod)", filePath: "song/154.mp3"},
    {songName: "Luttna-Version 2 (Masuma Anwar, Sahir Ali, Anupam Amod)", filePath: "song/155.mp3"},
    {songName: "Main Sharabi (Honey Singh)", filePath: "song/156.mp3"}, 
    {songName: "Second Hand Jawaani (Miss Pooja, Neha Kakkar, Nakkash Aziz)", filePath: "song/157.mp3"},
    {songName: "Tera Naam Japdi Phiran (Javed Bashir, Nikhil Dsouza, Shefali Alvares)", filePath: "song/158.mp3"} ,
    {songName: "Tera Naam Japdi Phiran-Remix (Javed Bashir, Nikhil Dsouza, Shefali Alvares)", filePath: "song/159.mp3"},
    {songName: "Tumhi Ho Bandhu (Neeraj Shridhar, Kavita Seth)", filePath: "song/1510.mp3"},
    {songName: "Yaariyan (Mohan Kannan, Shilpa Rao)", filePath: "song/1511.mp3"},
    {songName: "Yaariyan-Reprise (Arijit Singh, Sunidhi Chauhan)", filePath: "song/1512.mp3"}
]

function changeToNext(){
    if(songIndex>=11){
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
    audioElement.src = `song/15${songIndex+1}.mp3`;
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
            audioElement.src = `song/15${songIndex+1}.mp3`;
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
    if(songIndex>=11){
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
    audioElement.src = `song/15${songIndex+1}.mp3`;
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
    audioElement.src = `song/15${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    first.classList.remove('fa-circle-play');
    first.classList.add('fa-circle-pause');
})