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
    name:"Albela Sajan",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Classical/Albela+Sajan.mp3",
    img:"http://1.bp.blogspot.com/-DI_r5ztB0sM/T6N1U4xR8lI/AAAAAAAAAKQ/04LLPLPf5Ws/w1200-h630-p-k-no-nu/Classical+Violin+Music.jpg",
    singer:"Theme: Indian Classical Songs"
  },
  {
    name:"Bairi Piya",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Classical/Bairi+Piya.mp3",
    img:"http://1.bp.blogspot.com/-DI_r5ztB0sM/T6N1U4xR8lI/AAAAAAAAAKQ/04LLPLPf5Ws/w1200-h630-p-k-no-nu/Classical+Violin+Music.jpg",
    singer:"Theme: Indian Classical Songs"
  },
  {
    name:"Bhola Bhandari",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Classical/Bhola-Bhandari.mp3",
    img:"http://1.bp.blogspot.com/-DI_r5ztB0sM/T6N1U4xR8lI/AAAAAAAAAKQ/04LLPLPf5Ws/w1200-h630-p-k-no-nu/Classical+Violin+Music.jpg",
    singer:"Theme: Indian Classical Songs"
  },
  {
    name:"Dhara Hogi",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Classical/Dhara+Hogi.mp3",
    img:"http://1.bp.blogspot.com/-DI_r5ztB0sM/T6N1U4xR8lI/AAAAAAAAAKQ/04LLPLPf5Ws/w1200-h630-p-k-no-nu/Classical+Violin+Music.jpg",
    singer:"Theme: Indian Classical Songs"
  },
  {
    name:"Dil Ki Tapish",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Classical/Dil-Ki-Tapish.mp3",
    img:"http://1.bp.blogspot.com/-DI_r5ztB0sM/T6N1U4xR8lI/AAAAAAAAAKQ/04LLPLPf5Ws/w1200-h630-p-k-no-nu/Classical+Violin+Music.jpg",
    singer:"Theme: Indian Classical Songs"
  },

  {
    name:"Din Gele",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Classical/Din+Gele.mp3",
    img:"http://1.bp.blogspot.com/-DI_r5ztB0sM/T6N1U4xR8lI/AAAAAAAAAKQ/04LLPLPf5Ws/w1200-h630-p-k-no-nu/Classical+Violin+Music.jpg",
    singer:"Theme: Indian Classical Songs"
  },
  {
    name:"Garaj Garaj",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Classical/Din+Gele.mp3",
    img:"http://1.bp.blogspot.com/-DI_r5ztB0sM/T6N1U4xR8lI/AAAAAAAAAKQ/04LLPLPf5Ws/w1200-h630-p-k-no-nu/Classical+Violin+Music.jpg",
    singer:"Theme: Indian Classical Songs"
  },

  {
    name:"Ghei Chhand",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Classical/Ghei+Chhand.mp3",
    img:"http://1.bp.blogspot.com/-DI_r5ztB0sM/T6N1U4xR8lI/AAAAAAAAAKQ/04LLPLPf5Ws/w1200-h630-p-k-no-nu/Classical+Violin+Music.jpg",
    singer:"Theme: Indian Classical Songs"
  },

  {
    name:"Labb Par Aaye",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Classical/Labb+Par+Aaye.mp3",
    img:"http://1.bp.blogspot.com/-DI_r5ztB0sM/T6N1U4xR8lI/AAAAAAAAAKQ/04LLPLPf5Ws/w1200-h630-p-k-no-nu/Classical+Violin+Music.jpg",
    singer:"Theme: Indian Classical Songs"
  },
  {
    name:"Lagi Karejwa Katar",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Classical/Lagi+Karejwa+Katar.mp3",
    img:"http://1.bp.blogspot.com/-DI_r5ztB0sM/T6N1U4xR8lI/AAAAAAAAAKQ/04LLPLPf5Ws/w1200-h630-p-k-no-nu/Classical+Violin+Music.jpg",
    singer:"Theme: Indian Classical Songs"
  },
  {
    name:"Man Mandira",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Classical/Man-Mandira.mp3",
    img:"http://1.bp.blogspot.com/-DI_r5ztB0sM/T6N1U4xR8lI/AAAAAAAAAKQ/04LLPLPf5Ws/w1200-h630-p-k-no-nu/Classical+Violin+Music.jpg",
    singer:"Theme: Indian Classical Songs"
  },
  {
    name:"Muralidhar Shyam",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Classical/Muralidhar+Shyam.mp3",
    img:"http://1.bp.blogspot.com/-DI_r5ztB0sM/T6N1U4xR8lI/AAAAAAAAAKQ/04LLPLPf5Ws/w1200-h630-p-k-no-nu/Classical+Violin+Music.jpg",
    singer:"Theme: Indian Classical Songs"
  },
  {
    name:"Nainowale Ne",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Classical/Nainowale+Ne.mp3",
    img:"http://1.bp.blogspot.com/-DI_r5ztB0sM/T6N1U4xR8lI/AAAAAAAAAKQ/04LLPLPf5Ws/w1200-h630-p-k-no-nu/Classical+Violin+Music.jpg",
    singer:"Theme: Indian Classical Songs"
  },
  {
    name:"Padharo Maare Des",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Classical/Padharo+Maare+Des.mp3",
    img:"http://1.bp.blogspot.com/-DI_r5ztB0sM/T6N1U4xR8lI/AAAAAAAAAKQ/04LLPLPf5Ws/w1200-h630-p-k-no-nu/Classical+Violin+Music.jpg",
    singer:"Theme: Indian Classical Songs"
  },
  {
    name:"Sajan Bin",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Classical/Sajan+Bin.mp3",
    img:"http://1.bp.blogspot.com/-DI_r5ztB0sM/T6N1U4xR8lI/AAAAAAAAAKQ/04LLPLPf5Ws/w1200-h630-p-k-no-nu/Classical+Violin+Music.jpg",
    singer:"Theme: Indian Classical Songs"
  },
  {
    name:"Tejonidhi Lohagol",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Classical/Tejonidhi+Lohagol.mp3",
    img:"http://1.bp.blogspot.com/-DI_r5ztB0sM/T6N1U4xR8lI/AAAAAAAAAKQ/04LLPLPf5Ws/w1200-h630-p-k-no-nu/Classical+Violin+Music.jpg",
    singer:"Theme: Indian Classical Songs"
  },
  {
    name:"Viraah",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Classical/Virah.mp3",
    img:"http://1.bp.blogspot.com/-DI_r5ztB0sM/T6N1U4xR8lI/AAAAAAAAAKQ/04LLPLPf5Ws/w1200-h630-p-k-no-nu/Classical+Violin+Music.jpg",
    singer:"Theme: Indian Classical Songs"
  },
  {
    name:"Yaar Illahi",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Classical/Yaar+Illahi.mp3",
    img:"http://1.bp.blogspot.com/-DI_r5ztB0sM/T6N1U4xR8lI/AAAAAAAAAKQ/04LLPLPf5Ws/w1200-h630-p-k-no-nu/Classical+Violin+Music.jpg",
    singer:"Theme: Indian Classical Songs"
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
