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
    name:"Aayat",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/arijit+singh/Aayat.mp3",
    img:"https://images.discovery-prod.axs.com/2021/05/arijit-singh-rescheduled-tickets_08-28-21_17_6098eb51cbeb3.jpg",
    singer:"Arijit Singh"
  },
  {
    name:"Ae Dil Hai Mushkil",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/arijit+singh/Ae+Dil+Hai+Mushkil.mp3",
    img:"https://images.discovery-prod.axs.com/2021/05/arijit-singh-rescheduled-tickets_08-28-21_17_6098eb51cbeb3.jpg",
    singer:"Arijit Singh"
  },
  {
    name:"Chahun Main Ya Naa",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/arijit+singh/Chahun+Main+Ya+Naa.mp3",
    img:"https://images.discovery-prod.axs.com/2021/05/arijit-singh-rescheduled-tickets_08-28-21_17_6098eb51cbeb3.jpg",
    singer:"Arijit Singh"
  },

  {
    name:"Darkhaast",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/arijit+singh/Darkhaast.mp3",
    img:"https://images.discovery-prod.axs.com/2021/05/arijit-singh-rescheduled-tickets_08-28-21_17_6098eb51cbeb3.jpg",
    singer:"Arijit Singh"
  },
  {
    name:"Dekha Hazaro Dafaa",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/arijit+singh/Dekha+Hazaro+Dafaa.mp3",
    img:"https://images.discovery-prod.axs.com/2021/05/arijit-singh-rescheduled-tickets_08-28-21_17_6098eb51cbeb3.jpg",
    singer:"Arijit Singh"
  },
  {
    name:"First Class",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/arijit+singh/First+Class.mp3",
    img:"https://images.discovery-prod.axs.com/2021/05/arijit-singh-rescheduled-tickets_08-28-21_17_6098eb51cbeb3.jpg",
    singer:"Arijit Singh"
  },

  {
    name:"Ik Vaari Aa",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/arijit+singh/Ik+Vaari+Aa.mp3",
    img:"https://images.discovery-prod.axs.com/2021/05/arijit-singh-rescheduled-tickets_08-28-21_17_6098eb51cbeb3.jpg",
    singer:"Arijit Singh"
  },
  {
    name:"Ilahi",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/arijit+singh/Ilahi.mp3",
    img:"https://images.discovery-prod.axs.com/2021/05/arijit-singh-rescheduled-tickets_08-28-21_17_6098eb51cbeb3.jpg",
    singer:"Arijit Singh"
  },
  {
    name:"kabhi Jo Badal Barse",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/arijit+singh/Kabhi+Jo+Badal+Barse.mp3",
    img:"https://images.discovery-prod.axs.com/2021/05/arijit-singh-rescheduled-tickets_08-28-21_17_6098eb51cbeb3.jpg",
    singer:"Arijit Singh"
  },
  {
    name:"Kabira",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/arijit+singh/Kabira.mp3",
    img:"https://images.discovery-prod.axs.com/2021/05/arijit-singh-rescheduled-tickets_08-28-21_17_6098eb51cbeb3.jpg",
    singer:"Arijit Singh"
  },
  {
    name:"Kalank",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/arijit+singh/Kalank.mp3",
    img:"https://images.discovery-prod.axs.com/2021/05/arijit-singh-rescheduled-tickets_08-28-21_17_6098eb51cbeb3.jpg",
    singer:"Arijit Singh"
  },
  {
    name:"Laal Ishq",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/arijit+singh/Laal+Ishq.mp3",
    img:"https://images.discovery-prod.axs.com/2021/05/arijit-singh-rescheduled-tickets_08-28-21_17_6098eb51cbeb3.jpg",
    singer:"Arijit Singh"
  },
  {
    name:" Mast Magan",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/arijit+singh/Mast+Magan.mp3",
    img:"https://images.discovery-prod.axs.com/2021/05/arijit-singh-rescheduled-tickets_08-28-21_17_6098eb51cbeb3.jpg",
    singer:"Arijit Singh"
  },
  {
    name:"Phir Le Aya Dil",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/arijit+singh/Phir+Le+Aya+Dil.mp3",
    img:"https://images.discovery-prod.axs.com/2021/05/arijit-singh-rescheduled-tickets_08-28-21_17_6098eb51cbeb3.jpg",
    singer:"Arijit Singh"
  },
  {
    name:"Qaafirana",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/arijit+singh/Qaafirana.mp3",
    img:"https://images.discovery-prod.axs.com/2021/05/arijit-singh-rescheduled-tickets_08-28-21_17_6098eb51cbeb3.jpg",
    singer:"Arijit Singh"
  },
  {
    name:"Raabta",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/arijit+singh/Raabta.mp3",
    img:"https://images.discovery-prod.axs.com/2021/05/arijit-singh-rescheduled-tickets_08-28-21_17_6098eb51cbeb3.jpg",
    singer:"Arijit Singh"
  },
  {
    name:"Raat Bhar",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/arijit+singh/Raat+Bhar.mp3",
    img:"https://images.discovery-prod.axs.com/2021/05/arijit-singh-rescheduled-tickets_08-28-21_17_6098eb51cbeb3.jpg",
    singer:"Arijit Singh"
  },
  {
    name:"Sooraj Dooba Hai",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/arijit+singh/Sooraj+Dooba+Hai.mp3",
    img:"https://images.discovery-prod.axs.com/2021/05/arijit-singh-rescheduled-tickets_08-28-21_17_6098eb51cbeb3.jpg",
    singer:"Arijit Singh"
  },
  {
    name:"Tera Yaar Hoon Main",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/arijit+singh/Tera+Yaar+Hoon+Main.mp3",
    img:"https://images.discovery-prod.axs.com/2021/05/arijit-singh-rescheduled-tickets_08-28-21_17_6098eb51cbeb3.jpg",
    singer:"Arijit Singh"
  },
  {
    name:"Tujhe Kitna Chahne Lage Hum",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/arijit+singh/Tujhe+Kitna+Chahne+Lage.mp3",
    img:"https://images.discovery-prod.axs.com/2021/05/arijit-singh-rescheduled-tickets_08-28-21_17_6098eb51cbeb3.jpg",
    singer:"Arijit Singh"
  },
  {
    name:"Tum Hi Ho",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/arijit+singh/Tum+Hi+Ho.mp3",
    img:"https://images.discovery-prod.axs.com/2021/05/arijit-singh-rescheduled-tickets_08-28-21_17_6098eb51cbeb3.jpg",
    singer:"Arijit Singh"
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
