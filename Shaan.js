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
    name:"Aao Milo Chale",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Shaan/Aao+Milo+Chalo.mp3",
    img:"https://images.indiawords.com/wp-content/uploads/2018/02/hot-smiling-pics-of-Shaan.jpg",
    singer:"Shaan"
  },
  {
    name:"Chaar Kadam",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Shaan/Chaar+Kadam.mp3",
    img:"https:/images.indiawords.com/wp-content/uploads/2018/02/hot-smiling-pics-of-Shaan.jpg",
    singer:"Shaan"
  },
  {
    name:"Chand Sifarish",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Shaan/Chand+Sifarish.mp3",
    img:"https://images.indiawords.com/wp-content/uploads/2018/02/hot-smiling-pics-of-Shaan.jpg",
    singer:"Shaan"
  },

  {
    name:"Dastaan-E",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Shaan/Dastaan-E.mp3",
    img:"https://images.indiawords.com/wp-content/uploads/2018/02/hot-smiling-pics-of-Shaan.jpg",
    singer:"Shaan"
  },
  {
    name:"Do You Know",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Shaan/Do+You+Know.mp3",
    img:"https://images.indiawords.com/wp-content/uploads/2018/02/hot-smiling-pics-of-Shaan.jpg",
    singer:"Shaan"
  },
  {
    name:"Hey Shona",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Shaan/Hey+Shona.mp3",
    img:"https://images.indiawords.com/wp-content/uploads/2018/02/hot-smiling-pics-of-Shaan.jpg",
    singer:"Shaan"
  },

  {
    name:"I Love You",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Shaan/I+Love+You.mp3",
    img:"https://images.indiawords.com/wp-content/uploads/2018/02/hot-smiling-pics-of-Shaan.jpg",
    singer:"Shaan"
  },
  {
    name:"In Panchhiyon",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Shaan/In+Panchhiyon.mp3",
    img:"https://images.indiawords.com/wp-content/uploads/2018/02/hot-smiling-pics-of-Shaan.jpg",
    singer:"Shaan"
  },
  {
    name:"Jab Se Tere Naina",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Shaan/Jab+Se+Tere+Naina.mp3",
    img:"https://images.indiawords.com/wp-content/uploads/2018/02/hot-smiling-pics-of-Shaan.jpg",
    singer:"Shaan"
  },
  {
    name:"Jadu Hai Nasha Hai",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Shaan/Jadu+Hai+Nasha+Hai.mp3",
    img:"https://images.indiawords.com/wp-content/uploads/2018/02/hot-smiling-pics-of-Shaan.jpg",
    singer:"Shaan"
  },
  {
    name:"Kuch Kum",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Shaan/Kuch+Kum.mp3",
    img:"https://images.indiawords.com/wp-content/uploads/2018/02/hot-smiling-pics-of-Shaan.jpg",
    singer:"Shaan"
  },
  {
    name:"Kuch To Hua Hai",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Shaan/Kuch+To+Hua+Hai.mp3",
    img:"https://images.indiawords.com/wp-content/uploads/2018/02/hot-smiling-pics-of-Shaan.jpg",
    singer:"Shaan"
  },
  {
    name:" Lets Rock Soniye",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Shaan/Lets+Rock+Soniye.mp3",
    img:"https://images.indiawords.com/wp-content/uploads/2018/02/hot-smiling-pics-of-Shaan.jpg",
    singer:"Shaan"
  },
  {
    name:"Main Hoon Don",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Shaan/Main+Hoon+Don.mp3",
    img:"https://images.indiawords.com/wp-content/uploads/2018/02/hot-smiling-pics-of-Shaan.jpg",
    singer:"Shaan"
  },
  {
    name:"Musu Musu",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Shaan/Musu+Musu.mp3",
    img:"https://images.indiawords.com/wp-content/uploads/2018/02/hot-smiling-pics-of-Shaan.jpg",
    singer:"Shaan"
  },
  {
    name:"My Dil Goes Mmm",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Shaan/My+Dil+Goes+Mmm.mp3",
    img:"https://images.indiawords.com/wp-content/uploads/2018/02/hot-smiling-pics-of-Shaan.jpg",
    singer:"Shaan"
  },
  {
    name:"Shikdum",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Shaan/Shikdum.mp3",
    img:"https://images.indiawords.com/wp-content/uploads/2018/02/hot-smiling-pics-of-Shaan.jpg",
    singer:"Shaan"
  },
  {
    name:"Tum Jo Mile",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Shaan/Tum+Jo+Mile.mp3",
    img:"https://images.indiawords.com/wp-content/uploads/2018/02/hot-smiling-pics-of-Shaan.jpg",
    singer:"Shaan"
  },
  {
    name:"Where's The Party Tonight",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Shaan/Where+The+Party+Tonight.mp3",
    img:"https://images.indiawords.com/wp-content/uploads/2018/02/hot-smiling-pics-of-Shaan.jpg",
    singer:"Shaan"
  },
  {
    name:"Woh Ladki Hai Kahan",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Shaan/Woh+Ladki+Hai+Kahan.mp3",
    img:"https://images.indiawords.com/wp-content/uploads/2018/02/hot-smiling-pics-of-Shaan.jpg",
    singer:"Shaan"
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
