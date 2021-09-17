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
    name:"Aa Zara",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/sunidhi/Aa+Zara.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.PXZH0eDRfBvzee4TWX98YAHaEK&pid=Api&P=0&w=325&h=184",
    singer:"Sunidhi Chauhan"
  },
  {
    name:"Aaja Nachle",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/sunidhi/Aaja+Nachle.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.PXZH0eDRfBvzee4TWX98YAHaEK&pid=Api&P=0&w=325&h=184",
    singer:"Sunidhi Chauhan"
  },
  {
    name:"Ae Watan",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/sunidhi/Ae+Watan.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.PXZH0eDRfBvzee4TWX98YAHaEK&pid=Api&P=0&w=325&h=184",
    singer:"Sunidhi Chauhan"
  },

  {
    name:"Badal Pe Paon Hain",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/sunidhi/Badal+Pe+Paon+Hain.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.PXZH0eDRfBvzee4TWX98YAHaEK&pid=Api&P=0&w=325&h=184",
    singer:"Sunidhi Chauhan"
  },
  {
    name:"Bhaage Re Mann",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/sunidhi/Bhaage+Re+Mann.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.PXZH0eDRfBvzee4TWX98YAHaEK&pid=Api&P=0&w=325&h=184",
    singer:"Sunidhi Chauhan"
  },
  {
    name:"Chhaliya Chhaliya",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/sunidhi/Chhaliya+Chhaliya.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.PXZH0eDRfBvzee4TWX98YAHaEK&pid=Api&P=0&w=325&h=184",
    singer:"Sunidhi Chauhan"
  },

  {
    name:"Crazy Kiya Re",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/sunidhi/Crazy+Kiya+Re.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.PXZH0eDRfBvzee4TWX98YAHaEK&pid=Api&P=0&w=325&h=184",
    singer:"Sunidhi Chauhan"
  },
  {
    name:"Dhoom Machale",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/sunidhi/Dhoom+Machale.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.PXZH0eDRfBvzee4TWX98YAHaEK&pid=Api&P=0&w=325&h=184",
    singer:"Sunidhi Chauhan"
  },
  {
    name:"Gun Gun Guna ",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/sunidhi/Gun+Gun+Guna.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.PXZH0eDRfBvzee4TWX98YAHaEK&pid=Api&P=0&w=325&h=184",
    singer:"Sunidhi Chauhan"
  },
  {
    name:"Halka Halka",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/sunidhi/Halka+Halka.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.PXZH0eDRfBvzee4TWX98YAHaEK&pid=Api&P=0&w=325&h=184",
    singer:"Sunidhi Chauhan"
  },
  {
    name:"Ishq Sufiyana",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/sunidhi/Ishq+Sufiyana.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.PXZH0eDRfBvzee4TWX98YAHaEK&pid=Api&P=0&w=325&h=184",
    singer:"Sunidhi Chauhan"
  },
  {
    name:"Je T'aime",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/sunidhi/Je+T+aime.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.PXZH0eDRfBvzee4TWX98YAHaEK&pid=Api&P=0&w=325&h=184",
    singer:"Sunidhi Chauhan"
  },
  {
    name:"Lae Dooba",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/sunidhi/Lae+Dooba.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.PXZH0eDRfBvzee4TWX98YAHaEK&pid=Api&P=0&w=325&h=184",
    singer:"Sunidhi Chauhan"
  },
  {
    name:"Mere Sang",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/sunidhi/Mere+Sang.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.PXZH0eDRfBvzee4TWX98YAHaEK&pid=Api&P=0&w=325&h=184",
    singer:"Sunidhi Chauhan"
  },
  {
    name:"Parda",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/sunidhi/Parda.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.PXZH0eDRfBvzee4TWX98YAHaEK&pid=Api&P=0&w=325&h=184",
    singer:"Sunidhi Chauhan"
  },
  {
    name:"Sajna Ve Sajna",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/sunidhi/Sajna+Ve+Sajna.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.PXZH0eDRfBvzee4TWX98YAHaEK&pid=Api&P=0&w=325&h=184",
    singer:"Sunidhi Chauhan"
  },
  {
    name:"Te Amo",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/sunidhi/Te+Amo.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.PXZH0eDRfBvzee4TWX98YAHaEK&pid=Api&P=0&w=325&h=184",
    singer:"Sunidhi Chauhan"
  },
  {
    name:"Udi",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/sunidhi/Udi.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.PXZH0eDRfBvzee4TWX98YAHaEK&pid=Api&P=0&w=325&h=184",
    singer:"Sunidhi Chauhan"
  },
  {
    name:"Ye Mera Dil",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/sunidhi/Ye+Mera+Dil.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.PXZH0eDRfBvzee4TWX98YAHaEK&pid=Api&P=0&w=325&h=184",
    singer:"Sunidhi Chauhan"
  },
  {
    name:"Zinda",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/sunidhi/Zinda.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.PXZH0eDRfBvzee4TWX98YAHaEK&pid=Api&P=0&w=325&h=184",
    singer:"Sunidhi Chauhan"
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
