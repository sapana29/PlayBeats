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
    name:"Aao Na Gale Lagao Na ",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Aao+Na+Gale+Lagao+Na.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.fnHTCgSf9p2J0N_omc8gYgHaFp&pid=Api&P=0&w=235&h=180",
    singer:"Asha Bhosle"
  },
  {
    name:"Chhod Do Aanchal ",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Chhod+Do+Aanchal.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.fnHTCgSf9p2J0N_omc8gYgHaFp&pid=Api&P=0&w=235&h=180",
    singer:"Asha Bhosle"
  },
  {
    name:"Deewana Hua Badal ",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Diwana+Hua+Badal.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.fnHTCgSf9p2J0N_omc8gYgHaFp&pid=Api&P=0&w=235&h=180",
    singer:"Asha Bhosle"
  },

  {
    name:"Duniya Mein Logon Ko ",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Duniya+Mein+Logon.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.fnHTCgSf9p2J0N_omc8gYgHaFp&pid=Api&P=0&w=235&h=180",
    singer:"Asha Bhosle"
  },
  {
    name:"Haal Kaisa Hai Janab Ka ",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Haal+Kaisa+Hai+Janab+Ka.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.fnHTCgSf9p2J0N_omc8gYgHaFp&pid=Api&P=0&w=235&h=180",
    singer:"Asha Bhosle"
  },
  {
    name:"Hungama Ho Gaya ",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Hungama+Ho+Gaya.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.fnHTCgSf9p2J0N_omc8gYgHaFp&pid=Api&P=0&w=235&h=180",
    singer:"Asha Bhosle"
  },

  {
    name:"Kajra Mohabbat ",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Kajra+Mohabbat.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.fnHTCgSf9p2J0N_omc8gYgHaFp&pid=Api&P=0&w=235&h=180",
    singer:"Asha Bhosle"
  },
  {
    name:"Khullam Khulla Pyar ",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Khullam+Khulla+Pyar.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.fnHTCgSf9p2J0N_omc8gYgHaFp&pid=Api&P=0&w=235&h=180",
    singer:"Asha Bhosle"
  },
  {
    name:"Kitne Bhi Tu ",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Kitne+Bhi+Tu.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.fnHTCgSf9p2J0N_omc8gYgHaFp&pid=Api&P=0&w=235&h=180",
    singer:"Asha Bhosle"
  },
  {
    name:"Mausam Mastana ",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Mausam+Mastana.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.fnHTCgSf9p2J0N_omc8gYgHaFp&pid=Api&P=0&w=235&h=180",
    singer:"Asha Bhosle"
  },
  {
    name:"Mud Mud Ke Na Dekh ",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Mud+Mud+Ke+Na+Dekh.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.fnHTCgSf9p2J0N_omc8gYgHaFp&pid=Api&P=0&w=235&h=180",
    singer:"Asha Bhosle"
  },
  {
    name:"Nahin Nahin Abhi Nahin ",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Nahin+Nahin+Abhi+Nahin.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.fnHTCgSf9p2J0N_omc8gYgHaFp&pid=Api&P=0&w=235&h=180",
    singer:"Asha Bhosle"
  },
  {
    name:"O Maria O Maria ",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/O+Maria+O+Maria.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.fnHTCgSf9p2J0N_omc8gYgHaFp&pid=Api&P=0&w=235&h=180",
    singer:"Asha Bhosle"
  },
  {
    name:"Parde Mein Rehne Do ",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/parde+mein+rahne+do.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.fnHTCgSf9p2J0N_omc8gYgHaFp&pid=Api&P=0&w=235&h=180",
    singer:"Asha Bhosle"
  },
  {
    name:"Pehle Pehle ",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Pehle+Pehle.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.fnHTCgSf9p2J0N_omc8gYgHaFp&pid=Api&P=0&w=235&h=180",
    singer:"Asha Bhosle"
  },
  {
    name:"Piya Tu Ab To Aaja ",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Piya+Tu+Ab+To+Aaja.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.fnHTCgSf9p2J0N_omc8gYgHaFp&pid=Api&P=0&w=235&h=180",
    singer:"Asha Bhosle"
  },
  {
    name:"Rangeela Re ",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Rangeela+Re.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.fnHTCgSf9p2J0N_omc8gYgHaFp&pid=Api&P=0&w=235&h=180",
    singer:"Asha Bhosle"
  },
  {
    name:"Se Re Ke Sa Re ",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Sa+Re+Ke+Sa+Re.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.fnHTCgSf9p2J0N_omc8gYgHaFp&pid=Api&P=0&w=235&h=180",
    singer:"Asha Bhosle"
  },
  {
    name:"Ye Ladki Zarasi Diwani Lagti Hai ",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Ye+Ladki+Zarasi+Diwani+Lagti+Hai.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.fnHTCgSf9p2J0N_omc8gYgHaFp&pid=Api&P=0&w=235&h=180",
    singer:"Asha Bhosle"
  },
  {
    name:"Yeh Parda Hata Do ",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Yeh+Parda+Hata+Do.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.fnHTCgSf9p2J0N_omc8gYgHaFp&pid=Api&P=0&w=235&h=180",
    singer:"Asha Bhosle"
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
