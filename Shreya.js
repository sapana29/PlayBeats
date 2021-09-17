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
    name:"Aahista-Aahista",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Shreya/Aahista-Aahista.mp3",
    img:"http://1.bp.blogspot.com/-tyHYOeSYWcU/Ut0UmA0561I/AAAAAAAAFHQ/q4cyQNeb1TI/s1600/Singer+Shreya+Ghosal+HD+Wallpaper.jpg",
    singer:"Shreya Ghoshal"
  },
  {
    name:"Deewani Mastani",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Shreya/Deewani+Mastani.mp3",
    img:"http://1.bp.blogspot.com/-tyHYOeSYWcU/Ut0UmA0561I/AAAAAAAAFHQ/q4cyQNeb1TI/s1600/Singer+Shreya+Ghosal+HD+Wallpaper.jpg",
    singer:"Shreya Ghoshal"
  },
  {
    name:"Ghar More Pardesiya",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Shreya/Ghar+More+Pardesiya.mp3",
    img:"http://1.bp.blogspot.com/-tyHYOeSYWcU/Ut0UmA0561I/AAAAAAAAFHQ/q4cyQNeb1TI/s1600/Singer+Shreya+Ghosal+HD+Wallpaper.jpg",
    singer:"Shreya Ghoshal"
  },
  {
    name:"Ghoomar",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Shreya/Ghoomar.mp3",
    img:"http://1.bp.blogspot.com/-tyHYOeSYWcU/Ut0UmA0561I/AAAAAAAAFHQ/q4cyQNeb1TI/s1600/Singer+Shreya+Ghosal+HD+Wallpaper.jpg",
    singer:"Shreya Ghoshal"
  },
  {
    name:"Kaise Mujhe",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Shreya/Kaise+Mujhe.mp3",
    img:"http://1.bp.blogspot.com/-tyHYOeSYWcU/Ut0UmA0561I/AAAAAAAAFHQ/q4cyQNeb1TI/s1600/Singer+Shreya+Ghosal+HD+Wallpaper.jpg",
    singer:"Shreya Ghoshal"
  },
  {
    name:"Manwa Laage",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Shreya/Manwa+Laage.mp3",
    img:"http://1.bp.blogspot.com/-tyHYOeSYWcU/Ut0UmA0561I/AAAAAAAAFHQ/q4cyQNeb1TI/s1600/Singer+Shreya+Ghosal+HD+Wallpaper.jpg",
    singer:"Shreya Ghoshal"
  },
  {
    name:"Mere Dholna",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Shreya/Mere+Dholna.mp3",
    img:"http://1.bp.blogspot.com/-tyHYOeSYWcU/Ut0UmA0561I/AAAAAAAAFHQ/q4cyQNeb1TI/s1600/Singer+Shreya+Ghosal+HD+Wallpaper.jpg",
    singer:"Shreya Ghoshal"
  },
  {
    name:"Mohe Rang Do Laal",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Shreya/Mohe+Rang+Do+Laal.mp3",
    img:"http://1.bp.blogspot.com/-tyHYOeSYWcU/Ut0UmA0561I/AAAAAAAAFHQ/q4cyQNeb1TI/s1600/Singer+Shreya+Ghosal+HD+Wallpaper.jpg",
    singer:"Shreya Ghoshal"
  },
  {
    name:"Pal Pal Har Pal",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Shreya/Pal+Pal+Har+Pal.mp3",
    img:"http://1.bp.blogspot.com/-tyHYOeSYWcU/Ut0UmA0561I/AAAAAAAAFHQ/q4cyQNeb1TI/s1600/Singer+Shreya+Ghosal+HD+Wallpaper.jpg",
    singer:"Arijit Singh"
  },
  {
    name:"Param Sundari",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Shreya/Param-Sundari.mp3",
    img:"http://1.bp.blogspot.com/-tyHYOeSYWcU/Ut0UmA0561I/AAAAAAAAFHQ/q4cyQNeb1TI/s1600/Singer+Shreya+Ghosal+HD+Wallpaper.jpg",
    singer:"Shreya Ghoshal"
  },
  {
    name:"Pinga",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Shreya/Pinga.mp3",
    img:"http://1.bp.blogspot.com/-tyHYOeSYWcU/Ut0UmA0561I/AAAAAAAAFHQ/q4cyQNeb1TI/s1600/Singer+Shreya+Ghosal+HD+Wallpaper.jpg",
    singer:"Shreya Ghoshal"
  },
  {
    name:"Piya O Re Piya",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Shreya/Piya+O+Re+Piya.mp3",
    img:"http://1.bp.blogspot.com/-tyHYOeSYWcU/Ut0UmA0561I/AAAAAAAAFHQ/q4cyQNeb1TI/s1600/Singer+Shreya+Ghosal+HD+Wallpaper.jpg",
    singer:"Shreya Ghoshal"
  },

  {
    name:"Piyu Bole",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Shreya/Piyu+Bole.mp3",
    img:"http://1.bp.blogspot.com/-tyHYOeSYWcU/Ut0UmA0561I/AAAAAAAAFHQ/q4cyQNeb1TI/s1600/Singer+Shreya+Ghosal+HD+Wallpaper.jpg",
    singer:"Shreya Ghoshal"
  },
  {
    name:"Radha",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Shreya/Radha.mp3",
    img:"http://1.bp.blogspot.com/-tyHYOeSYWcU/Ut0UmA0561I/AAAAAAAAFHQ/q4cyQNeb1TI/s1600/Singer+Shreya+Ghosal+HD+Wallpaper.jpg",
    singer:"Shreya Ghoshal"
  },
  {
    name:"Rozana",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Shreya/Rozana.mp3",
    img:"http://1.bp.blogspot.com/-tyHYOeSYWcU/Ut0UmA0561I/AAAAAAAAFHQ/q4cyQNeb1TI/s1600/Singer+Shreya+Ghosal+HD+Wallpaper.jpg",
    singer:"Shreya Ghoshal"
  },
  {
    name:"Saibo",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Shreya/Saibo.mp3",
    img:"http://1.bp.blogspot.com/-tyHYOeSYWcU/Ut0UmA0561I/AAAAAAAAFHQ/q4cyQNeb1TI/s1600/Singer+Shreya+Ghosal+HD+Wallpaper.jpg",
    singer:"Shreya Ghoshal"
  },
  {
    name:"Sun Raha Hai",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Shreya/Sunn+Raha+Hai.mp3",
    img:"http://1.bp.blogspot.com/-tyHYOeSYWcU/Ut0UmA0561I/AAAAAAAAFHQ/q4cyQNeb1TI/s1600/Singer+Shreya+Ghosal+HD+Wallpaper.jpg",
    singer:"Shreya Ghoshal"
  },
  {
    name:"Teri Ore",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Shreya/Teri+Ore.mp3",
    img:"http://1.bp.blogspot.com/-tyHYOeSYWcU/Ut0UmA0561I/AAAAAAAAFHQ/q4cyQNeb1TI/s1600/Singer+Shreya+Ghosal+HD+Wallpaper.jpg",
    singer:"Shreya Ghoshal"
  },
  {
    name:"Thodi Der",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Shreya/Thodi+Der.mp3",
    img:"http://1.bp.blogspot.com/-tyHYOeSYWcU/Ut0UmA0561I/AAAAAAAAFHQ/q4cyQNeb1TI/s1600/Singer+Shreya+Ghosal+HD+Wallpaper.jpg",
    singer:"Shreya Ghoshal"
  },
  {
    name:"Yeh Ishq Hai",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Shreya/Yeh+Ishq+Hai.mp3",
    img:"http://1.bp.blogspot.com/-tyHYOeSYWcU/Ut0UmA0561I/AAAAAAAAFHQ/q4cyQNeb1TI/s1600/Singer+Shreya+Ghosal+HD+Wallpaper.jpg",
    singer:"Shreya Ghoshal"
  },
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
