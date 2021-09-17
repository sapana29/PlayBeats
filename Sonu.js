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
    name:"Abhi Mujh Mein Kahin",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Sonu+/Abhi+Mujh+Mein+Kahin.mp3",
    img:"https://s1.ticketm.net/dam/a/cf9/756aa497-8af2-47c4-938f-f67884a56cf9_684621_TABLET_LANDSCAPE_LARGE_16_9.jpg",
    singer:"Sonu Nigam"
  },
  {
    name:"Dekho Na",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Sonu+/Dekho+Na.mp3",
    img:"https://s1.ticketm.net/dam/a/cf9/756aa497-8af2-47c4-938f-f67884a56cf9_684621_TABLET_LANDSCAPE_LARGE_16_9.jpg",
    singer:"Sonu Nigam"
  },
  {
    name:"Dil Dooba",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Sonu+/Dil+Dooba.mp3",
    img:"https://s1.ticketm.net/dam/a/cf9/756aa497-8af2-47c4-938f-f67884a56cf9_684621_TABLET_LANDSCAPE_LARGE_16_9.jpg",
    singer:"Sonu Nigam"
  },
  {
    name:"Guzarish",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Sonu+/Guzarish.mp3",
    img:"https://s1.ticketm.net/dam/a/cf9/756aa497-8af2-47c4-938f-f67884a56cf9_684621_TABLET_LANDSCAPE_LARGE_16_9.jpg",
    singer:"Sonu Nigam"
  },
  {
    name:"Kal Ho Naa Ho",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Sonu+/Kal+Ho+Naa+Ho.mp3",
    img:"https://s1.ticketm.net/dam/a/cf9/756aa497-8af2-47c4-938f-f67884a56cf9_684621_TABLET_LANDSCAPE_LARGE_16_9.jpg",
    singer:"Sonu Nigam"
  },

  {
    name:"Kasto Mazza Hai",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Sonu+/Kasto+Mazza+hai.mp3",
    img:"https://s1.ticketm.net/dam/a/cf9/756aa497-8af2-47c4-938f-f67884a56cf9_684621_TABLET_LANDSCAPE_LARGE_16_9.jpg",
    singer:"Sonu Nigam"
  },
  {
    name:"Main Agar Kahoon",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Sonu+/Main+Agar+Kahoon.mp3",
    img:"https://s1.ticketm.net/dam/a/cf9/756aa497-8af2-47c4-938f-f67884a56cf9_684621_TABLET_LANDSCAPE_LARGE_16_9.jpg",
    singer:"Sonu Nigam"
  },
  {
    name:"Main Badhiya",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Sonu+/Main+Badhiya+Tu+Bhi+Badhiya.mp3",
    img:"https://s1.ticketm.net/dam/a/cf9/756aa497-8af2-47c4-938f-f67884a56cf9_684621_TABLET_LANDSCAPE_LARGE_16_9.jpg",
    singer:"Sonu Nigam"
  },
  {
    name:"Main Hoon Na",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Sonu+/Main+Hoon+Na.mp3",
    img:"https://s1.ticketm.net/dam/a/cf9/756aa497-8af2-47c4-938f-f67884a56cf9_684621_TABLET_LANDSCAPE_LARGE_16_9.jpg",
    singer:"Sonu Nigam"
  },
  {
    name:"Mere Haath Main",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Sonu+/Mere+Haath+Main.mp3",
    img:"https://s1.ticketm.net/dam/a/cf9/756aa497-8af2-47c4-938f-f67884a56cf9_684621_TABLET_LANDSCAPE_LARGE_16_9.jpg",
    singer:"Sonu Nigam"
  },
  {
    name:"Nagada Nagada",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Sonu+/Nagada+Nagada.mp3",
    img:"https://s1.ticketm.net/dam/a/cf9/756aa497-8af2-47c4-938f-f67884a56cf9_684621_TABLET_LANDSCAPE_LARGE_16_9.jpg",
    singer:"Sonu Nigam"
  },
  {
    name:"Saathiya",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Sonu+/Saathiya.mp3",
    img:"https://s1.ticketm.net/dam/a/cf9/756aa497-8af2-47c4-938f-f67884a56cf9_684621_TABLET_LANDSCAPE_LARGE_16_9.jpg",
    singer:"Sonu Nigam"
  },
  {
    name:"Salaam E Ishq",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Sonu+/Salaam+E+Ishq.mp3",
    img:"https://s1.ticketm.net/dam/a/cf9/756aa497-8af2-47c4-938f-f67884a56cf9_684621_TABLET_LANDSCAPE_LARGE_16_9.jpg",
    singer:"Sonu Nigam"
  },
  {
    name:"Sapna Jahan",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Sonu+/Sapna+Jahan.mp3",
    img:"https://s1.ticketm.net/dam/a/cf9/756aa497-8af2-47c4-938f-f67884a56cf9_684621_TABLET_LANDSCAPE_LARGE_16_9.jpg",
    singer:"Sonu Nigam"
  },
  {
    name:"Shukran Allah",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Sonu+/Shukran+Allah.mp3",
    img:"https://s1.ticketm.net/dam/a/cf9/756aa497-8af2-47c4-938f-f67884a56cf9_684621_TABLET_LANDSCAPE_LARGE_16_9.jpg",
    singer:"Sonu Nigam"
  },
  {
    name:"Soniyo",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Sonu+/Soniyo.mp3",
    img:"https://s1.ticketm.net/dam/a/cf9/756aa497-8af2-47c4-938f-f67884a56cf9_684621_TABLET_LANDSCAPE_LARGE_16_9.jpg",
    singer:"Sonu Nigam"
  },
  {
    name:"Tenu Leke",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Sonu+/Tenu+Leke.mp3",
    img:"https://s1.ticketm.net/dam/a/cf9/756aa497-8af2-47c4-938f-f67884a56cf9_684621_TABLET_LANDSCAPE_LARGE_16_9.jpg",
    singer:"Sonu Nigam"
  },
  {
    name:"Tu Jahan",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Sonu+/Tu+Jahan.mp3",
    img:"https://s1.ticketm.net/dam/a/cf9/756aa497-8af2-47c4-938f-f67884a56cf9_684621_TABLET_LANDSCAPE_LARGE_16_9.jpg",
    singer:"Sonu Nigam"
  },
  {
    name:"Tumhi Dekho Naa",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Sonu+/Tumhi+Dekho+Naa.mp3",
    img:"https://s1.ticketm.net/dam/a/cf9/756aa497-8af2-47c4-938f-f67884a56cf9_684621_TABLET_LANDSCAPE_LARGE_16_9.jpg",
    singer:"Sonu Nigam"
  },
  {
    name:"You Are My Soniya",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Sonu+/You+Are+My+Soniya.mp3",
    img:"https://s1.ticketm.net/dam/a/cf9/756aa497-8af2-47c4-938f-f67884a56cf9_684621_TABLET_LANDSCAPE_LARGE_16_9.jpg",
    singer:"Sonu Nigam"
  },
  {
    name:"Zoobi Doobi",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Sonu+/Zoobi+Doobi.mp3",
    img:"https://s1.ticketm.net/dam/a/cf9/756aa497-8af2-47c4-938f-f67884a56cf9_684621_TABLET_LANDSCAPE_LARGE_16_9.jpg",
    singer:"Sonu Nigam"
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
