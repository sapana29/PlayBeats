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
    name:"Aaoge Jab Tum",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Sad/Aaoge+Jab+Tum.mp3",
    img:"https://tse1.mm.bing.net/th?id=OIP.Inr_fpS2Rl0Rrp7HLa-qgAHaEo&pid=Api&P=0&w=247&h=155",
    singer:"Theme-Blues"
  },
  {
    name:"Bhekhayali",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Sad/Bekhayali.mp3",
    img:"https://tse1.mm.bing.net/th?id=OIP.Inr_fpS2Rl0Rrp7HLa-qgAHaEo&pid=Api&P=0&w=247&h=155",
    singer:"Theme-Blues"
  },
  {
    name:"Bulleya",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Sad/Bulleya.mp3",
    img:"https://tse1.mm.bing.net/th?id=OIP.Inr_fpS2Rl0Rrp7HLa-qgAHaEo&pid=Api&P=0&w=247&h=155",
    singer:"Theme-Blues"
  },

  {
    name:"Der Lagi Lekin",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Sad/Der+Lagi+Lekin.mp3",
    img:"https://tse1.mm.bing.net/th?id=OIP.Inr_fpS2Rl0Rrp7HLa-qgAHaEo&pid=Api&P=0&w=247&h=155",
    singer:"Theme-Blues"
  },
  {
    name:"Hamari Adhuri Kahani",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Sad/Hamari+Adhuri+Kahani.mp3",
    img:"https://tse1.mm.bing.net/th?id=OIP.Inr_fpS2Rl0Rrp7HLa-qgAHaEo&pid=Api&P=0&w=247&h=155",
    singer:"Theme-Blues"
  },
  {
    name:"Jo Bheji Thi Dua",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Sad/Jo+Bejhi+Thi+Dua.mp3",
    img:"https://tse1.mm.bing.net/th?id=OIP.Inr_fpS2Rl0Rrp7HLa-qgAHaEo&pid=Api&P=0&w=247&h=155",
    singer:"Theme-Blues"
  },

  {
    name:"Judai",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Sad/Judai.mp3",
    img:"https://tse1.mm.bing.net/th?id=OIP.Inr_fpS2Rl0Rrp7HLa-qgAHaEo&pid=Api&P=0&w=247&h=155",
    singer:"Theme-Blues"
  },
  {
    name:"Kabira",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Sad/Kabira.mp3",
    img:"https://tse1.mm.bing.net/th?id=OIP.Inr_fpS2Rl0Rrp7HLa-qgAHaEo&pid=Api&P=0&w=247&h=155",
    singer:"Theme-Blues"
  },
  {
    name:"Kahin To Hogi Woh",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Sad/Kahin+To+Hogi+Ho.mp3",
    img:"https://tse1.mm.bing.net/th?id=OIP.Inr_fpS2Rl0Rrp7HLa-qgAHaEo&pid=Api&P=0&w=247&h=155",
    singer:"Theme-Blues"
  },
  {
    name:"Khariyat",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Sad/Khairiyat.mp3",
    img:"https://tse1.mm.bing.net/th?id=OIP.Inr_fpS2Rl0Rrp7HLa-qgAHaEo&pid=Api&P=0&w=247&h=155",
    singer:"Theme-Blues"
  },
  {
    name:"Main Rahoon Ya Na Rahoon",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Sad/Main+Rahoon+Ya+Na+Rahoon.mp3",
    img:"https://tse1.mm.bing.net/th?id=OIP.Inr_fpS2Rl0Rrp7HLa-qgAHaEo&pid=Api&P=0&w=247&h=155",
    singer:"Theme-Blues"
  },
  {
    name:"Manchala",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Sad/Manchala.mp3",
    img:"https://tse1.mm.bing.net/th?id=OIP.Inr_fpS2Rl0Rrp7HLa-qgAHaEo&pid=Api&P=0&w=247&h=155",
    singer:"Theme-Blues"
  },
  {
    name:"Mar Jaiyan",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Sad/Mar+Jaiyan.mp3",
    img:"https://tse1.mm.bing.net/th?id=OIP.Inr_fpS2Rl0Rrp7HLa-qgAHaEo&pid=Api&P=0&w=247&h=155",
    singer:"Theme-Blues"
  },
  {
    name:"Phir Le Aya Dil",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Sad/Phir+Le+Aya+Dil.mp3",
    img:"https://tse1.mm.bing.net/th?id=OIP.Inr_fpS2Rl0Rrp7HLa-qgAHaEo&pid=Api&P=0&w=247&h=155",
    singer:"Theme-Blues"
  },
  {
    name:"Shayad",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Sad/Shayad.mp3",
    img:"https://tse1.mm.bing.net/th?id=OIP.Inr_fpS2Rl0Rrp7HLa-qgAHaEo&pid=Api&P=0&w=247&h=155",
    singer:"Theme-Blues"
  },
  {
    name:"Tanhayee",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Sad/Tanhayee.mp3",
    img:"https://tse1.mm.bing.net/th?id=OIP.Inr_fpS2Rl0Rrp7HLa-qgAHaEo&pid=Api&P=0&w=247&h=155",
    singer:"Theme-Blues"
  },
  {
    name:"Tose Naina",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Sad/Tose+Naina.mp3",
    img:"https://tse1.mm.bing.net/th?id=OIP.Inr_fpS2Rl0Rrp7HLa-qgAHaEo&pid=Api&P=0&w=247&h=155",
    singer:"Theme-Blues"
  },
  {
    name:"Tujhe Bhula Diya",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Sad/Tujhe+Bhula+Diya+Phir.mp3",
    img:"https://tse1.mm.bing.net/th?id=OIP.Inr_fpS2Rl0Rrp7HLa-qgAHaEo&pid=Api&P=0&w=247&h=155",
    singer:"Theme-Blues"
  },
  {
    name:"Tujhe Kitna Chahne Lage Hum",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Sad/Tujhe+Kitna+Chahein+Aur.mp3",
    img:"https://tse1.mm.bing.net/th?id=OIP.Inr_fpS2Rl0Rrp7HLa-qgAHaEo&pid=Api&P=0&w=247&h=155",
    singer:"Theme-Blues"
  },
  {
    name:"Tum Hi Ana",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Sad/Tum+Hi+Aana.mp3",
    img:"https://tse1.mm.bing.net/th?id=OIP.Inr_fpS2Rl0Rrp7HLa-qgAHaEo&pid=Api&P=0&w=247&h=155",
    singer:"Theme-Blues"
  },
  {
    name:"Woh Lamhe Woh Batein",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Sad/Woh+Lamhe+Woh+Bate.mp3",
    img:"https://tse1.mm.bing.net/th?id=OIP.Inr_fpS2Rl0Rrp7HLa-qgAHaEo&pid=Api&P=0&w=247&h=155",
    singer:"Theme-Blues"
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
