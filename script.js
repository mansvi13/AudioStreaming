console.log("welcome");
let songIndex = 0;
let audioElement = new Audio('C:/Users/mansi/Documents/SpotifyClone/AudioStreamingClone/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementByIdClassName('songItem'));

let songs = [
    {songName: "Snap",filePath:"songs/1.mp3",coverPath:"cC:/Users/mansi/Documents/SpotifyClone/AudioStreamingClone/1.jpg"},
    {songName: "Dandelions",filePath:"songs/2.mp3",coverPath:"C:/Users/mansi/Documents/SpotifyClone/AudioStreamingClone/1.jpg"},
    {songName: "NightChanges",filePath:"songs/3.mp3",coverPath:"C:/Users/mansi/Documents/SpotifyClone/AudioStreamingClone/1.jpg"},
]
songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByTagName("songName")[0].innerText = songs[i].songName;

})
//audioElement.p  lay( ); 
//handle play/pause
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }
})
//listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress; 
})
myProgressBar.addEventListener('change',()=>{
audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    e.target.classList.add('fa-circle-pause');
    Array.from(document.getElementByIdClassName('songItemPlay')).forEach((element)=>{
        element.classlist.remove('fa-circle-pause');
        element.classlist.add('fa-circle-play');
    })
}

Array.from(document.getElementsByIdClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.tardet.id);
        e.target.classlist.remove('fa-circle-play');
        e.target.classlist.add('fa-circle-pause');
        audioElement.src ='songs/${songIndex+1}.mp3';
        audioElement.element.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

    })
})

document.getElementById('next ').addEventListener('click',()=>{
    if(songIndex>=2){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src ='songs/${songIndex+1}.mp3';
    audioElement.element.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src ='songs/${songIndex+1}.mp3';
    audioElement.element.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})