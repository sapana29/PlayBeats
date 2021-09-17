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
    name:"Aankh Marey",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Party/Aankh+Marey.mp3",
    img:"https://media.timeout.com/images/105347841/image.jpg",
    singer:"Theme: Party Songs"
  },
  {
    name:"Abhi Toh Party",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Party/Abhi+Toh+Party.mp3",
    img:"https://media.timeout.com/images/105347841/image.jpg",
    singer:"Theme: Party Songs"
  },
  {
    name:"Badtameez Dil",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Party/Badtameez+Dil.mp3",
    img:"https://media.timeout.com/images/105347841/image.jpg",
    singer:"Theme: Party Songs"
  },
  {
    name:"Chogada",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Party/Chogada.mp3",
    img:"https://media.timeout.com/images/105347841/image.jpg",
    singer:"Theme: Party Songs"
  },
  {
    name:"Criminal",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Party/Criminal.mp3",
    img:"https://media.timeout.com/images/105347841/image.jpg",
    singer:"Theme: Party Songs"
  },

  {
    name:"Dheeme Dheeme",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Party/Dheeme+Dheeme.mp3",
    img:"https://media.timeout.com/images/105347841/image.jpg",
    singer:"Theme: Party Songs"
  },

  {
    name:"Gallan Goodiyaan",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Party/Gallan+Goodiyaan.mp3",
    img:"https://media.timeout.com/images/105347841/image.jpg",
    singer:"Theme: Party Songs"
  },
  {
    name:"Ghungroo",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Party/Ghungroo.mp3",
    img:"https://media.timeout.com/images/105347841/image.jpg",
    singer:"Theme: Party Songs"
  },
  {
    name:"Iski Uski",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Party/Iski+Uski.mp3",
    img:"https://media.timeout.com/images/105347841/image.jpg",
    singer:"Theme: Party Songs"
  },
  {
    name:"Jalebi Baby",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Party/Jalebi+Baby.mp3",
    img:"https://media.timeout.com/images/105347841/image.jpg",
    singer:"Theme: Party Songs"
  },
  {
    name:"Kamariya",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Party/Kamariya.mp3",
    img:"https://media.timeout.com/images/105347841/image.jpg",
    singer:"Theme: Party Songs"
  },
  {
    name:"Kar Gayi Chull",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Party/Kar+Gayi+Chull.mp3",
    img:"https://media.timeout.com/images/105347841/image.jpg",
    singer:"Theme: Party Songs"
  },
  {
    name:"O Saki Saki",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Party/O+Saki+Saki.mp3",
    img:"https://media.timeout.com/images/105347841/image.jpg",
    singer:"Theme: Party Songs"
  },
  {
    name:"Offo",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Party/Offo.mp3",
    img:"https://media.timeout.com/images/105347841/image.jpg",
    singer:"Theme: Party Songs"
  },
  {
    name:"Senorita",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Party/Senorita.mp3",
    img:"https://media.timeout.com/images/105347841/image.jpg",
    singer:"Theme: Party Songs"
  },
  {
    name:"Sooraj Ki Baahon Mein",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Party/Sooraj+Ki+Baahon+Mein.mp3",
    img:"https://media.timeout.com/images/105347841/image.jpg",
    singer:"Theme: Party Songs"
  },
  {
    name:"Subha Hone Na De",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Party/Subha+Hone+Na+De.mp3",
    img:"https://media.timeout.com/images/105347841/image.jpg",
    singer:"Theme: Party Songs"
  },
  {
    name:"Tu Aake Dekhle",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Party/Tu+Aake+Dekhle.mp3",
    img:"https://media.timeout.com/images/105347841/image.jpg",
    singer:"Theme: Party Songs"
  },
  {
    name:"Tumhi Ho Bandhu",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Party/Tumhi+Ho+Bandhu.mp3",
    img:"https://media.timeout.com/images/105347841/image.jpg",
    singer:"Theme: Party Songs"
  },
  {
    name:"Urvashi",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Party/Urvashi.mp3",
    img:"https://media.timeout.com/images/105347841/image.jpg",
    singer:"Theme: Party Songs"
  },
  {
    name:"Zingaat",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Party/Zingaat.mp3",
    img:"https://media.timeout.com/images/105347841/image.jpg",
    singer:"Theme: Party Songs"
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
