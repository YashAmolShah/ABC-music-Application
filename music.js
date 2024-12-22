const songsDetails=[
{
   id:1,
   genre:"Hindi-Rock-sanam",
   name:"Chala Jata Hoon - Sanam puri",
   audioSrc:"music/128-Chala Jata Hoon - Sanam (Band) 128 Kbps.mp3",
   imgSrc:"asset img/chala jata hu.jpg"
},
{
   id:2,
   genre:"Hindi-Rock-SRK",
   name:"Koi Mil Gaya - SRK",
   audioSrc:"music/128-Koi Mil Gaya - Kuch Kuch Hota Hai 128 Kbps.mp3",
   imgSrc:"asset img/koil mil gaya.jpg"
},
{
   id:3,
   genre:"Hindi-Rock-sanam",
   name:"Kya Hua Tera Wada - Sanam puri",
   audioSrc:"music/128-Kya Hua Tera Wada - Sanam (Band) 128 Kbps.mp3",
   imgSrc:"asset img/tera vada.jfif"
},
{
   id:4,
   genre:"Hindi-Rock-sanam",
   name:"Likhe Jo Khat Tuje - Sanam puri",
   audioSrc:"music/128-Likhe Jo Khat Tujhe - Sanam 128 Kbps.mp3",
   imgSrc:"asset img/likhe jo khat tuje.jfif"
},
{
   id:5,
   genre:"Hindi-Rock-SRK",
   name:"Ragu pati ragav raja ram - SRK",
   audioSrc:"music/128-Raghupati Raghav - Kuch Kuch Hota Hai 128 Kbps.mp3",
   imgSrc:"asset img/ragu.jfif"
},{
   id:6,
   genre:"Marathi",
   name:"Ashi hi banva banvi",
   audioSrc:"music/Ashi-Hi-Banwa-Banwi-Suresh-Wadkar-Shailendra-Singh-Amit-Kumar-Sachin-Pilgaonkar.mp3",
   imgSrc:"asset img/banva banvi.jfif"
},{
   id:7,
   genre:"Hindi-Rock-SRK",
   name:"Badsha O Badsha",
   audioSrc:"music/Badshah O Badshah Baadshah 128 Kbps.mp3",
   imgSrc:"asset img/badshah.jfif"
},{
   id:8,
   genre:"Hindi-Rock-Akshay",
   name:"Bhul bhulia",
   audioSrc:"music/Bhool Bhulaiyaa Pritam 128 Kbps.mp3",
   imgSrc:"asset img/bhulbhulia.jfif"
},{
   id:9,
   genre:"Marathi",
   name:"Dum dum damro waje - navara maja navasach-2",
   audioSrc:"music/Dum Dum Dum Dum Damroo Vaje.mp3",
   imgSrc:"asset img/navara maja navasacha.jfif"
},{
   id:10,
   genre:"Marathi",
   name:"Hirva nisarg",
   audioSrc:"music/Hirwa-Nisarga-Sonu-Nigam.mp3",
   imgSrc:"asset img/hirvanisarg.jfif"
}

]
/*****************************************************************************************/
const genreSet = new Set();

const toggleSwitch=document.querySelector('#flexSwitchCheckDefault');

const h1 = document.querySelector('.title');
const allSongDiv = document.querySelector(`.allSong`);
const cardDiv = document.querySelector(`.card`);
const playlistDiv= document.querySelector(`.playlist`);
const toggleLabel = document.querySelector(".form-check-label");
/*****************************************************************************************/
let tempAllSongs =[...songsDetails];
genreSet.add("All songs");
songsDetails.forEach((genreData)=>{
   genreSet.add(genreData.genre);
 
});

console.log(genreSet);
const labelFilterSong = document.createElement('label');
labelFilterSong.classList.add('filterSongLabel');
labelFilterSong.style.fontWeight=600;
labelFilterSong.textContent='Filter by genere :';
const filterSong = document.createElement('select');
filterSong.classList.add('filterGenre');
filterSong.setAttribute("name","Filter by genere");



let genereFilterSong=tempAllSongs.filter((s)=>{
   if(genreSet.has(s.genre)){
      return s;
   }
})

genreSet.forEach((genere)=>{
   const genereOptions  = document.createElement('option');
genereOptions.classList.add('genereOption');
genereOptions.textContent=genere;
filterSong.append(genereOptions);
})

allSongDiv.append(labelFilterSong,filterSong);
const allSongh2 =document.createElement("h4");
allSongh2.textContent="Songs";
allSongDiv.append(allSongh2);

let sondId =1;
let songBtn;

genereFilterSong.forEach((song)=>{
      
    songBtn= document.createElement("button");
   songBtn.classList.add (song.name.split(' ')[0]);
   songBtn.classList.add ("allSongDivBtn");
   songBtn.textContent = song.name;
   songBtn.addEventListener('click',()=>{
      createCardDiv(song);
      sondId = song.id;
   })

 allSongDiv.append(songBtn);
 
})

filterSong.addEventListener("change",()=>{
      document.querySelectorAll('.allSongDivBtn').forEach((ele)=>{
         ele.remove();
      })
  if(filterSong.value=="All songs"){
   let count =0;
   genereFilterSong=tempAllSongs.filter((s)=>{
      
         count++;
         s.id = count;
         return s;     
   })
} else{
   let count =0;
genereFilterSong=tempAllSongs.filter((s)=>{
   if(filterSong.value==s.genre){
      count++;
      s.id = count;
      return s;
   }
})

}

 sondId =1;
 songBtn.remove();
genereFilterSong.forEach((song)=>{
      
    songBtn= document.createElement("button");
   songBtn.classList.add (song.name.split(' ')[0]);
   songBtn.classList.add ("allSongDivBtn");
   songBtn.textContent = song.name;
   songBtn.addEventListener('click',()=>{
      createCardDiv(song);
      sondId = song.id;
   })

 allSongDiv.append(songBtn);
 
})
   
})
/*****************************************************************************************/
const songImg =  document.createElement('img');
songImg.className="songImg";
 songImg.src=genereFilterSong[0].imgSrc;
 songImg.alt="image";
 const nameOfsongs = document.createElement('h4');
 nameOfsongs.textContent='Name: '+genereFilterSong[0].name;
 const genereOfSong = document.createElement('h5');
 genereOfSong.textContent='Genere: '+genereFilterSong[0].genre;
 const songAudio = document.createElement('audio');
 songAudio.className="audioSong";
 songAudio.src = genereFilterSong[0].audioSrc;
 songAudio.controls=true;

 cardDiv.append(songImg,nameOfsongs,genereOfSong,songAudio);

 const arrowDiv = document.createElement('div');
arrowDiv.className="arrowDiv";
const nextImg = document.createElement('img');
nextImg.src ="asset img/right-arrow.png";
nextImg.className="rarrow";
const prevImg = document.createElement('img');
prevImg.src ="asset img/left-arrow.png";
prevImg.className="larrow";
const addToPlayListBtn = document.createElement('button');
addToPlayListBtn.textContent = "Add to playList";
addToPlayListBtn.className="playlistBtn";
cardDiv.append(prevImg,nextImg,addToPlayListBtn);

function createCardDiv(song){
   songImg.remove();
   nameOfsongs.remove();
   genereOfSong.remove();
   songAudio.remove();
songImg.className="songImg";
 songImg.src=song.imgSrc;
 songImg.alt="image";
 nameOfsongs.textContent='Name: '+song.name;
 genereOfSong.textContent ='Genere: '+song.genre;
 songAudio.className="audioSong";
 songAudio.src = song.audioSrc;
 songAudio.controls=true;
 songAudio.autoplay=true;
 sondId=song.id;
 cardDiv.append(songImg,nameOfsongs,genereOfSong,songAudio,prevImg,nextImg,addToPlayListBtn);
   


}


nextImg.addEventListener('click',()=>{
   if(sondId==genereFilterSong.length){
      createCardDiv(genereFilterSong[0]);
   } else{
      createCardDiv(genereFilterSong[sondId]);
   }
})
prevImg.addEventListener('click',()=>{
   if(sondId==1){
      createCardDiv(genereFilterSong[songsDetails.length-1]);
   } else{
      createCardDiv(genereFilterSong[sondId-2]);
   }
})


const playListHead =document.createElement("h4");
playListHead.textContent="My Playlist";
playlistDiv.append(playListHead);

const playBtn = document.createElement('button');
playBtn.textContent="Play";
playBtn.className="playlistPlay";
playlistDiv.append(playBtn);
let playListObj=[];
let playListsongBtn;

addToPlayListBtn.addEventListener('click',()=>{
   playBtn.style.display='inline';
   if(!playListObj.includes(genereFilterSong[sondId-1])){
      document.querySelectorAll('.playlistSong').forEach((ele)=>{
         ele.remove();
      })
  playListObj.push(genereFilterSong[sondId-1]);
   

  playListObj.forEach((song)=>{
   playListsongBtn=document.createElement('button');
   playListsongBtn.textContent=song.name;
   playListsongBtn.className="playlistSong";
   playListsongBtn.addEventListener('click',()=>{
      createCardDiv(song);
      sondId = song.id;
   })
   playlistDiv.append(playListsongBtn);
  })
}


})

playBtn.addEventListener('click',()=>{
   createCardDiv(playListObj[0]);
   let count =0;
genereFilterSong=playListObj.filter((s)=>{
   
      count++;
      s.id = count;
      return s;     
})
})

/*****************************************************************************************/
 toggleSwitch.addEventListener('change',()=>{
   let songBtn = document.querySelectorAll(".allSongDivBtn");
   if(toggleSwitch.checked){
     toggleLabel.textContent="Dark Theme"
    document.body.style.backgroundColor=`gray`
    h1.style.color ='white'
      allSongDiv.style.backgroundColor='white'
     cardDiv.style.backgroundColor='white'
        playlistDiv.style.backgroundColor='white'
        allSongh2.style.color='black'
        filterSong.style.backgroundColor='gray'
      
        
        songBtn.forEach((b)=>{
          b.style.backgroundColor="gray"
        b.style.color ="white"
       
        })
     
        document.querySelectorAll('.playlistSong').forEach((ele)=>{
         ele.style.backgroundColor="gray";
         ele.style.color ="white"
      })
      addToPlayListBtn.style.backgroundColor="gray";
      addToPlayListBtn.style.color="white"
    
        

   
   } else{
        toggleLabel.textContent="Color Theme"
    document.body.style.backgroundColor='white'
      h1.style.color ='orangered'
       allSongDiv.style.backgroundColor='lightseagreen'
            cardDiv.style.backgroundColor='lightseagreen'
        playlistDiv.style.backgroundColor='lightseagreen'
             allSongh2.style.color='red'
        filterSong.style.backgroundColor='lightgreen'
        songBtn = document.querySelectorAll(".allSongDivBtn");
               
        songBtn.forEach((b)=>{
          b.style.backgroundColor="palevioletred"
        b.style.color ="black"
       
       
        })
       
       document.querySelectorAll('.playlistSong').forEach((ele)=>{
         ele.style.backgroundColor="palevioletred";
         ele.style.color ="black"
      })
      addToPlayListBtn.style.backgroundColor="palevioletred";
      addToPlayListBtn.style.color="black"
       
        songImg.style.borderColor="green";
        
      
      
   }
})

/*****************************************************************************************/
