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
    name:"Aur Ho",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/AR+Rahman/Aur+Ho.mp3",
    img:"https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/01/30/Pictures/_5c2f3bd8-05b2-11e8-8132-ce8c29606b52.jpg",
    singer:"A R Rahman"
  },
  {
    name:"Chale Chalo",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/AR+Rahman/Chale+Chalo.mp3",
    img:"https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/01/30/Pictures/_5c2f3bd8-05b2-11e8-8132-ce8c29606b52.jpg",
    singer:"A R Rahman"
  },
  {
    name:"Choti Si Aasha",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/AR+Rahman/Choti+Si+Aasha.mp3",
    img:"https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/01/30/Pictures/_5c2f3bd8-05b2-11e8-8132-ce8c29606b52.jpg",
    singer:"A R Rahman"
  },

  {
    name:"Dil Bechara",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/AR+Rahman/Dil+Bechara.mp3",
    img:"https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/01/30/Pictures/_5c2f3bd8-05b2-11e8-8132-ce8c29606b52.jpg",
    singer:"A R Rahman"
  },
  {
    name:"Dil Se Re",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/AR+Rahman/Dil+Se+Re.mp3",
    img:"https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/01/30/Pictures/_5c2f3bd8-05b2-11e8-8132-ce8c29606b52.jpg",
    singer:"A R Rahman"
  },

  {
    name:"Hosanna",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/AR+Rahman/Hosanna.mp3",
    img:"https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/01/30/Pictures/_5c2f3bd8-05b2-11e8-8132-ce8c29606b52.jpg",
    singer:"A R Rahman"
  },
  {
    name:"Jai Ho",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/AR+Rahman/Jai+Ho.mp3",
    img:"https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/01/30/Pictures/_5c2f3bd8-05b2-11e8-8132-ce8c29606b52.jpg",
    singer:"A R Rahman"
  },
  {
    name:"Jo Bhi Main",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/AR+Rahman/Jo+Bhi+Main.mp3",
    img:"https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/01/30/Pictures/_5c2f3bd8-05b2-11e8-8132-ce8c29606b52.jpg",
    singer:"A R Rahman"
  },
  {
    name:"Kabhi Neem Neem",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/AR+Rahman/Kabhi+Neem+Neem.mp3",
    img:"https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/01/30/Pictures/_5c2f3bd8-05b2-11e8-8132-ce8c29606b52.jpg",
    singer:"A R Rahman"
  },
  {
    name:"Khalbali",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/AR+Rahman/Khalbali.mp3",
    img:"https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/01/30/Pictures/_5c2f3bd8-05b2-11e8-8132-ce8c29606b52.jpg",
    singer:"A R Rahman"
  },
  {
    name:"Khwaja Mere Khwaja",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/AR+Rahman/Khwaja+Mere+Khwaja.mp3",
    img:"https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/01/30/Pictures/_5c2f3bd8-05b2-11e8-8132-ce8c29606b52.jpg",
    singer:"A R Rahman"
  },
  {
    name:"Kun Faaya Kun",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/AR+Rahman/Kun+Faaya+Kun.mp3",
    img:"https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/01/30/Pictures/_5c2f3bd8-05b2-11e8-8132-ce8c29606b52.jpg",
    singer:"A R Rahman"
  },
  {
    name:"Nadaan Parindey",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/AR+Rahman/Nadaan+Parindey.mp3",
    img:"https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/01/30/Pictures/_5c2f3bd8-05b2-11e8-8132-ce8c29606b52.jpg",
    singer:"A R Rahman"
  },
  {
    name:"O Saya",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/AR+Rahman/O+Saya.mp3",
    img:"https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/01/30/Pictures/_5c2f3bd8-05b2-11e8-8132-ce8c29606b52.jpg",
    singer:"A R Rahman"
  },
  {
    name:"Rubaroo",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/AR+Rahman/Rubaroo.mp3",
    img:"https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/01/30/Pictures/_5c2f3bd8-05b2-11e8-8132-ce8c29606b52.jpg",
    singer:"A R Rahman"
  },
  {
    name:"Tu Bole Main Boloon",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/AR+Rahman/Tu+Bole+Main+Boloon.mp3",
    img:"https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/01/30/Pictures/_5c2f3bd8-05b2-11e8-8132-ce8c29606b52.jpg",
    singer:"A R Rahman"
  },
  {
    name:"Tu Hai",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/AR+Rahman/Tu+Hai.mp3",
    img:"https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/01/30/Pictures/_5c2f3bd8-05b2-11e8-8132-ce8c29606b52.jpg",
    singer:"A R Rahman"
  },
  {
    name:"Tu Meri Dost Hain ",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/AR+Rahman/Tu+Meri+Dost+Hain.mp3",
    img:"https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/01/30/Pictures/_5c2f3bd8-05b2-11e8-8132-ce8c29606b52.jpg",
    singer:"A R Rahman"
  },
  {
    name:"Tum Ho ",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/AR+Rahman/Tum+Ho.mp3",
    img:"https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/01/30/Pictures/_5c2f3bd8-05b2-11e8-8132-ce8c29606b52.jpg",
    singer:"A R Rahman"
  },
  {
    name:"Yeh Haseen Vaadiyan ",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/AR+Rahman/Yeh+Haseen+Vaadiyan.mp3",
    img:"https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/01/30/Pictures/_5c2f3bd8-05b2-11e8-8132-ce8c29606b52.jpg",
    singer:"A R Rahman"
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
