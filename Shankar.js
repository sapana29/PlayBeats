let previous=document.querySelector('#pre');
let play=document.querySelector('#play');
let next=document.querySelector('#next');
let title=document.querySelector('#title');
let recent_vloume=document.querySelector('#volume');
let volume_show=document.querySelector('#volume_show');
let slider=document.querySelector('#duration_slider');
let show_duration=document.querySelector('#show_duration');
let trac_image=document.querySelector('#track_image');
let auto_play=document.querySelector('#auto');
let present=document.querySelector('#present');
let total=document.querySelector('#total');
let artist=document.querySelector('#artist');
//console.log(artist);
//console.log(title);
//console.log(response);
let timer;
let autoplay=0;
let index_no=0;
let playing_song=false;
//create audio element
let track=document.createElement('audio');
let All_song=[
  {
    name:"Aaj Kal Zindagi",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Shankar/Aaj+Kal+Zindagi.mp3",
    img:"https://tse1.mm.bing.net/th?id=OIP._OhXURbcE7iD2p1mNz8b5gHaEI&pid=Api&P=0&w=293&h=164",
    singer:"Shankar Mahadevan"
  },
  {
    name:"Breathless",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Shankar/Breathless.mp3",
    img:"https://tse1.mm.bing.net/th?id=OIP._OhXURbcE7iD2p1mNz8b5gHaEI&pid=Api&P=0&w=293&h=164",
    singer:"Shankar Mahadevan"
  },
  {
    name:"Dil Chahta hai",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Shankar/Dil+Chahta+Hai.mp3",
    img:"https://tse1.mm.bing.net/th?id=OIP._OhXURbcE7iD2p1mNz8b5gHaEI&pid=Api&P=0&w=293&h=164",
    singer:"Shankar Mahadevan"
  },

  {
    name:"Ghei Chhand",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Shankar/Ghei+Chhand.mp3",
    img:"https://tse1.mm.bing.net/th?id=OIP._OhXURbcE7iD2p1mNz8b5gHaEI&pid=Api&P=0&w=293&h=164",
    singer:"Shankar Mahadevan"
  },
  {
    name:"Lakshya",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Shankar/Lakshya.mp3",
    img:"https://tse1.mm.bing.net/th?id=OIP._OhXURbcE7iD2p1mNz8b5gHaEI&pid=Api&P=0&w=293&h=164",
    singer:"Shankar Mahadevan"
  },
  {
    name:"Maa Tujhe Salaam",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Shankar/Maa+Tujhe+Salaam.mp3",
    img:"https://tse1.mm.bing.net/th?id=OIP._OhXURbcE7iD2p1mNz8b5gHaEI&pid=Api&P=0&w=293&h=164",
    singer:"Shankar Mahadevan"
  },

  {
    name:"Main Ek Khwab",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Shankar/Main+Ek+Khwab.mp3",
    img:"https://tse1.mm.bing.net/th?id=OIP._OhXURbcE7iD2p1mNz8b5gHaEI&pid=Api&P=0&w=293&h=164",
    singer:"Shankar Mahadevan"
  },
  {
    name:"Man Mohini",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Shankar/Man+Mohini.mp3",
    img:"https://tse1.mm.bing.net/th?id=OIP._OhXURbcE7iD2p1mNz8b5gHaEI&pid=Api&P=0&w=293&h=164",
    singer:"Shankar Mahadevan"
  },
  {
    name:"Man-Mandira",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Shankar/Man-Mandira.mp3",
    img:"https://tse1.mm.bing.net/th?id=OIP._OhXURbcE7iD2p1mNz8b5gHaEI&pid=Api&P=0&w=293&h=164",
    singer:"Shankar Mahadevan"
  },
  {
    name:"Meri Maa",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Shankar/Meri+Maa.mp3",
    img:"https://tse1.mm.bing.net/th?id=OIP._OhXURbcE7iD2p1mNz8b5gHaEI&pid=Api&P=0&w=293&h=164",
    singer:"Shankar Mahadevan"
  },
  {
    name:"Noor E Khuda",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Shankar/Noor+E+Khuda.mp3",
    img:"https://tse1.mm.bing.net/th?id=OIP._OhXURbcE7iD2p1mNz8b5gHaEI&pid=Api&P=0&w=293&h=164",
    singer:"Shankar Mahadevan"
  },
  {
    name:"Pretty Woman",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Shankar/Pretty+Woman.mp3",
    img:"https://tse1.mm.bing.net/th?id=OIP._OhXURbcE7iD2p1mNz8b5gHaEI&pid=Api&P=0&w=293&h=164",
    singer:"Shankar Mahadevan"
  },
  {
    name:"Rock-N-Roll",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Shankar/Rock-N-Roll.mp3",
    img:"https://tse1.mm.bing.net/th?id=OIP._OhXURbcE7iD2p1mNz8b5gHaEI&pid=Api&P=0&w=293&h=164",
    singer:"Shankar Mahadevan"
  },
  {
    name:"Sajda",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Shankar/Sajdaa.mp3",
    img:"https://tse1.mm.bing.net/th?id=OIP._OhXURbcE7iD2p1mNz8b5gHaEI&pid=Api&P=0&w=293&h=164",
    singer:"Shankar Mahadevan"
  },
  {
    name:"Sapnon Se Bhare Naina",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Shankar/Sapnon+Se+Bhare+Naina.mp3",
    img:"https://tse1.mm.bing.net/th?id=OIP._OhXURbcE7iD2p1mNz8b5gHaEI&pid=Api&P=0&w=293&h=164",
    singer:"Shankar Mahadevan"
  },
  {
    name:"Shree Ganeshay",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Shankar/Shree+Ganeshay.mp3",
    img:"https://tse1.mm.bing.net/th?id=OIP._OhXURbcE7iD2p1mNz8b5gHaEI&pid=Api&P=0&w=293&h=164",
    singer:"Shankar Mahadevan"
  },
  {
    name:"Sur Niragas Ho",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Shankar/Sur+Niragas+Ho.mp3",
    img:"https://tse1.mm.bing.net/th?id=OIP._OhXURbcE7iD2p1mNz8b5gHaEI&pid=Api&P=0&w=293&h=164",
    singer:"Shankar Mahadevan"
  },
  {
    name:"Tere Naina",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Shankar/Tere+Naina.mp3",
    img:"https://tse1.mm.bing.net/th?id=OIP._OhXURbcE7iD2p1mNz8b5gHaEI&pid=Api&P=0&w=293&h=164",
    singer:"Shankar Mahadevan"
  },
  {
    name:"Uff Teri Adaa",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Shankar/Uff+Teri+Adaa.mp3",
    img:"https://tse1.mm.bing.net/th?id=OIP._OhXURbcE7iD2p1mNz8b5gHaEI&pid=Api&P=0&w=293&h=164",
    singer:"Shankar Mahadevan"
  },
  {
    name:"Wake Up Sid",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Shankar/Wake+Up+Sid.mp3",
    img:"https://tse1.mm.bing.net/th?id=OIP._OhXURbcE7iD2p1mNz8b5gHaEI&pid=Api&P=0&w=293&h=164",
    singer:"Shankar Mahadevan"
}
];

function load_track(index_no){
  track.src= All_song[index_no].path;
  title.innerHTML= All_song[index_no].name;
  track_image.src= All_song[index_no].img;
  artist.innerHTML= All_song[index_no].singer;
  track.load();
    timer=setInterval(range_slider,1000);
    total.innerHTML=All_song.length;
    present.innerHTML=index_no+1;
}
load_track(index_no);
//mute sound function
function mute_sound()
{
  track.volume=0;
  volume.value=0;
  volume_show.innerHTML=0;
}
//to check if song is playing_song
function justplay()
{
  if(playing_song==false)
  {
  playsong();
}else {
    pausesong();}
}
//reset song slider_position
function reset_slider()
{
  slider.value=0;
}
function playsong()
  {
    track.play();
    playing_song=true;
    play.innerHTML='<i class="fas fa-pause"></i>';
  }
  function pausesong()
    {
      track.pause();
      playing_song=false;
      play.innerHTML='<i class="fas fa-play"></i>';
    }

// next song
function next_song(){
	if(index_no < All_song.length - 1){
		index_no += 1;
		load_track(index_no);
		playsong();
	}else{
		index_no = 0;
		load_track(index_no);
		playsong();

	}
}


// previous song
function previous_song(){
	if(index_no > 0){
		index_no -= 1;
		load_track(index_no);
		playsong();

	}else{
		index_no = All_song.length;
		load_track(index_no);
		playsong();
	}
}


// change volume
//function volume_change(){

//volume_show.innerHTML = recent_volume.value;
//	track.volume = recent_volume.value / 100;
//}

// change slider position
function change_duration(){
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}

// autoplay function
function autoplay_switch(){
	if (autoplay==1){
       autoplay = 0;
       auto_play.style.background = "rgba(255,255,255,0.2)";
	}else{
       autoplay = 1;
       auto_play.style.background = "#FF8A65";
	}
}


function range_slider(){
	let position = 0;

        // update slider position
		if(!isNaN(track.duration)){
		   position = track.currentTime * (100 / track.duration);
		   slider.value =  position;
	      }


       // function will run when the song is over
       if(track.ended){
       	 play.innerHTML = '<i class="fas fa-play" aria-hidden="true"></i>';
           if(autoplay==1){
		       index_no += 1;
		       load_track(index_no);
		       playsong();
           }
	    }
    }
