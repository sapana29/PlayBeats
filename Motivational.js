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
    name:"Aas Paas Khuda",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Motivational/Aas+Paas+Khuda.mp3",
    img:"https://weneedfun.com/wp-content/uploads/2015/09/Motivational-Quotes-20.jpg",
    singer:"Theme: Motivational Songs"
  },
  {
    name:"Aashaayein",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Motivational/Aashaayein.mp3",
    img:"https://weneedfun.com/wp-content/uploads/2015/09/Motivational-Quotes-20.jpg",
    singer:"Theme: Motivational Songs"
  },
  {
    name:"Apna Time Aayega",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Motivational/Apna+Time+Aayega.mp3",
    img:"https://weneedfun.com/wp-content/uploads/2015/09/Motivational-Quotes-20.jpg",
    singer:"Theme: Motivational Songs"
  },
  {
    name:"Asmaan Di Pari",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Motivational/Asmaan+Di+Pari.mp3",
    img:"https://weneedfun.com/wp-content/uploads/2015/09/Motivational-Quotes-20.jpg",
    singer:"Theme: Motivational Songs"
  },

  {
    name:"Bandeya",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Motivational/Bandeya.mp3",
    img:"https://weneedfun.com/wp-content/uploads/2015/09/Motivational-Quotes-20.jpg",
    singer:"Theme: Motivational Songs"
  },

  {
    name:"Bharat Ki Beti",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Motivational/Bharat+Ki+Beti.mp3",
    img:"https://weneedfun.com/wp-content/uploads/2015/09/Motivational-Quotes-20.jpg",
    singer:"Theme: Motivational Songs"
  },

  {
    name:"Brothers Anthem",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Motivational/Brothers+Anthem.mp3",
    img:"https://weneedfun.com/wp-content/uploads/2015/09/Motivational-Quotes-20.jpg",
    singer:"Theme: Motivational Songs"
  },
  {
    name:"Chak De India",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Motivational/Chak+De+India.mp3",
    img:"https://weneedfun.com/wp-content/uploads/2015/09/Motivational-Quotes-20.jpg",
    singer:"Theme: Motivational Songs"
  },
  {
    name:"Challa",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Motivational/Challa.mp3",
    img:"https://weneedfun.com/wp-content/uploads/2015/09/Motivational-Quotes-20.jpg",
    singer:"Theme: Motivational Songs"
  },
  {
    name:"Dhaakad",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Motivational/Dhaakad.mp3",
    img:"https://weneedfun.com/wp-content/uploads/2015/09/Motivational-Quotes-20.jpg",
    singer:"Theme: Motivational Songs"
  },
  {
    name:"Haanikaarak-Bapu",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Motivational/Haanikaarak-Bapu.mp3",
    img:"https://weneedfun.com/wp-content/uploads/2015/09/Motivational-Quotes-20.jpg",
    singer:"Theme: Motivational Songs"
  },
  {
    name:"Kandhon Se",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Motivational/Kandhon+Se.mp3",
    img:"https://weneedfun.com/wp-content/uploads/2015/09/Motivational-Quotes-20.jpg",
    singer:"Theme: Motivational Songs"
  },
  {
    name:"Kar Har Maidaan Fateh",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Motivational/Kar+Har+Maidaan+Fateh.mp3",
    img:"https://weneedfun.com/wp-content/uploads/2015/09/Motivational-Quotes-20.jpg",
    singer:"Theme: Motivational Songs"
  },
  {
    name:"Kholo Kholo",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Motivational/Kholo+Kholo.mp3",
    img:"https://weneedfun.com/wp-content/uploads/2015/09/Motivational-Quotes-20.jpg",
    singer:"Theme: Motivational Songs"
  },
  {
    name:"Manja",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Motivational/Manja.mp3",
    img:"https://weneedfun.com/wp-content/uploads/2015/09/Motivational-Quotes-20.jpg",
    singer:"Theme: Motivational Songs"
  },

  {
    name:"Nadaan Parinde",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Motivational/Nadaan+Parinde.mp3",
    img:"https://weneedfun.com/wp-content/uploads/2015/09/Motivational-Quotes-20.jpg",
    singer:"Theme: Motivational Songs"
  },
  {
    name:"Phir Se Ud Chala",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Motivational/Phir+Se+Ud+Chala.mp3",
    img:"https://weneedfun.com/wp-content/uploads/2015/09/Motivational-Quotes-20.jpg",
    singer:"Theme: Motivational Songs"
  },
  {
  name:"Rekha O Rekha",
  path:"https://playbeets.s3.ap-south-1.amazonaws.com/Motivational/Rekha+O+Rekha.mp3",
  img:"https://weneedfun.com/wp-content/uploads/2015/09/Motivational-Quotes-20.jpg",
  singer:"Theme: Motivational Songs"
  },
  {
    name:"Sadda Haq",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Motivational/Sadda+Haq.mp3",
    img:"https://weneedfun.com/wp-content/uploads/2015/09/Motivational-Quotes-20.jpg",
    singer:"Theme: Motivational Songs"
  },
  {
    name:"Yun Hi Chala Chala",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Motivational/Yun+Hi+Chala+Chala.mp3",
    img:"https://weneedfun.com/wp-content/uploads/2015/09/Motivational-Quotes-20.jpg",
    singer:"Theme: Motivational Songs"
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
