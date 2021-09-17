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
    name:"Aankhon Mein Tum",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Bappi/Aankhon+Mein+Tum.mp3",
    img:"https://www.bizasialive.com/wp/wp-content/uploads/2018/11/bappilahiri001-696x443.jpg",
    singer:"Bappi Lehri"
  },
  {
    name:"Arey Pyaar Kar Le",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Bappi/Arey+Pyaar+Kar+Le.mp3",
    img:"https://www.bizasialive.com/wp/wp-content/uploads/2018/11/bappilahiri001-696x443.jpg",
    singer:"Bappi Lehri"
  },
  {
    name:"Auva Auva Koi Yahan",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Bappi/Auva+Auva+Koi+Yahan.mp3",
    img:"https://www.bizasialive.com/wp/wp-content/uploads/2018/11/bappilahiri001-696x443.jpg",
    singer:"Bappi Lehri"
  },
  {
    name:"Jaana Kahan Hai",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Bappi/Jaana+Kahan+Hai.mp3",
    img:"https://www.bizasialive.com/wp/wp-content/uploads/2018/11/bappilahiri001-696x443.jpg",
    singer:"Bappi Lehri"
  },

  {
    name:"Jee Le Le",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Bappi/Jee+Le+Le.mp3",
    img:"https://www.bizasialive.com/wp/wp-content/uploads/2018/11/bappilahiri001-696x443.jpg",
    singer:"Bappi Lehri"
  },

  {
    name:"Kisi Ko Daulat Ki",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Bappi/Kisi+Ko+Daulat+Ki.mp3",
    img:"https://www.bizasialive.com/wp/wp-content/uploads/2018/11/bappilahiri001-696x443.jpg",
    singer:"Bappi Lehri"
  },
  {
    name:"Ooh La La",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Bappi/Ooh+La+La.mp3",
    img:"https://www.bizasialive.com/wp/wp-content/uploads/2018/11/bappilahiri001-696x443.jpg",
    singer:"Bappi Lehri"
  },
  {
    name:"Raat Aaye",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Bappi/Raat+Aaye.mp3",
    img:"https://www.bizasialive.com/wp/wp-content/uploads/2018/11/bappilahiri001-696x443.jpg",
    singer:"Bappi Lehri"
  },
  {
    name:"Raat Baaki Baat Baaki",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Bappi/Raat+Baaki+Baat+Baaki.mp3",
    img:"https://www.bizasialive.com/wp/wp-content/uploads/2018/11/bappilahiri001-696x443.jpg",
    singer:"Bappi Lehri"
  },
  {
    name:"Super Dancer",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Bappi/Super+Dancer.mp3",
    img:"https://www.bizasialive.com/wp/wp-content/uploads/2018/11/bappilahiri001-696x443.jpg",
    singer:"Bappi Lehri"
  },
  {
    name:"Taqdeer Ka Badshah",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Bappi/Taqdeer+Ka+Badshah.mp3",
    img:"https://www.bizasialive.com/wp/wp-content/uploads/2018/11/bappilahiri001-696x443.jpg",
    singer:"Bappi Lehri"
  },
  {
    name:"Tu Mujhe Jaan Se Bhi",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Bappi/Tu+Mujhe+Jaan+Se+Bhi.mp3",
    img:"https://www.bizasialive.com/wp/wp-content/uploads/2018/11/bappilahiri001-696x443.jpg",
    singer:"Bappi Lehri"
  },
  {
    name:"Yaad Aa Raha Hai ",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Bappi/Yaad+Aa+Raha+Hai.mp3",
    img:"https://www.bizasialive.com/wp/wp-content/uploads/2018/11/bappilahiri001-696x443.jpg",
    singer:"Bappi Lehri"
  },
  {
    name:"Yaar Bina Chain",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Bappi/Yaar+Bina+Chain.mp3",
    img:"https://www.bizasialive.com/wp/wp-content/uploads/2018/11/bappilahiri001-696x443.jpg",
    singer:"Bappi Lehri"
  },
  {
    name:"You Are My Chicken",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Bappi/You+Are+My+Chicken.mp3",
    img:"https://www.bizasialive.com/wp/wp-content/uploads/2018/11/bappilahiri001-696x443.jpg",
    singer:"Bappi Lehri"
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
