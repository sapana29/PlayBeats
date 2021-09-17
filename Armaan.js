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
    name:"Besabriyaan",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Armaan/Besabriyaan.mp3",
    img:"https://newsd.in/wp-content/uploads/2019/07/846097-armaanmalik-070919-1280x720.jpg",
    singer:"Armaan Malik"
  },
  {
    name:"Bol Do Na Zara",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Armaan/Bol+Do+Na+Zara.mp3",
    img:"https://newsd.in/wp-content/uploads/2019/07/846097-armaanmalik-070919-1280x720.jpg",
    singer:"Armaan Malik"
  },
  {
    name:"Buddhu Sa Mann",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Armaan/Buddhu+Sa+Mann.mp3",
    img:"https://newsd.in/wp-content/uploads/2019/07/846097-armaanmalik-070919-1280x720.jpg",
    singer:"Armaan Malik"
  },

  {
    name:"Chale Aana",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Armaan/Chale+Aana.mp3",
    img:"https://newsd.in/wp-content/uploads/2019/07/846097-armaanmalik-070919-1280x720.jpg",
    singer:"Armaan Malik"
  },

  {
    name:"Dil Mein Chhupa Loonga",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Armaan/Dil+Mein+Chhupa+Loonga.mp3",
    img:"https://newsd.in/wp-content/uploads/2019/07/846097-armaanmalik-070919-1280x720.jpg",
    singer:"Armaan Malik"
  },
  {
    name:"Dil Mein Ho Tum",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Armaan/Dil+Mein+Ho+Tum.mp3",
    img:"https://newsd.in/wp-content/uploads/2019/07/846097-armaanmalik-070919-1280x720.jpg",
    singer:"Armaan Malik"
  },
  {
    name:"Ghar Se Nikalte Hi",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Armaan/Ghar-Se-Nikalte-Hi-.mp3",
    img:"https://newsd.in/wp-content/uploads/2019/07/846097-armaanmalik-070919-1280x720.jpg",
    singer:"Armaan Malik"
  },
  {
    name:"Hua Hain Aaj Pehli Baar",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Armaan/Hua+Hain+Aaj+Pehli+Baar.mp3",
    img:"https://newsd.in/wp-content/uploads/2019/07/846097-armaanmalik-070919-1280x720.jpg",
    singer:"Armaan Malik"
  },
  {
    name:"Khali Khali Dil",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Armaan/Khali+Khali+Dil.mp3",
    img:"https://newsd.in/wp-content/uploads/2019/07/846097-armaanmalik-070919-1280x720.jpg",
    singer:"Armaan Malik"
  },
  {
    name:"Mein Hoon Hero Tera",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Armaan/Main+Hoon+Hero+Tera.mp3",
    img:"https://newsd.in/wp-content/uploads/2019/07/846097-armaanmalik-070919-1280x720.jpg",
    singer:"Armaan Malik"
  },
  {
    name:"Mujhko Barsaat Bana Lo ",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Armaan/Mujhko+Barsaat+Bana+Lo.mp3",
    img:"https://newsd.in/wp-content/uploads/2019/07/846097-armaanmalik-070919-1280x720.jpg",
    singer:"Armaan Malik"
  },
  {
    name:"Naina",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Armaan/Naina.mp3",
    img:"https://newsd.in/wp-content/uploads/2019/07/846097-armaanmalik-070919-1280x720.jpg",
    singer:"Armaan Malik"
  },
  {
    name:"Pehla Pyaar",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Armaan/Pehla+Pyaar.mp3",
    img:"https://newsd.in/wp-content/uploads/2019/07/846097-armaanmalik-070919-1280x720.jpg",
    singer:"Armaan Malik"
  },
  {
    name:"Sab Tera",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Armaan/Sab+Tera.mp3",
    img:"https://newsd.in/wp-content/uploads/2019/07/846097-armaanmalik-070919-1280x720.jpg",
    singer:"Armaan Malik"
  },
  {
    name:"Sau Aasmaan",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Armaan/Sau+Aasmaan.mp3",
    img:"https://newsd.in/wp-content/uploads/2019/07/846097-armaanmalik-070919-1280x720.jpg",
    singer:"Armaan Malik"
  },
  {
    name:"Tere Dil Mein",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Armaan/Tere+Dil+Mein.mp3",
    img:"https://newsd.in/wp-content/uploads/2019/07/846097-armaanmalik-070919-1280x720.jpg",
    singer:"Armaan Malik"
  },
  {
    name:"Theher Ja",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Armaan/Theher+Ja.mp3",
    img:"https://newsd.in/wp-content/uploads/2019/07/846097-armaanmalik-070919-1280x720.jpg",
    singer:"Armaan Malik"
  },
  {
    name:"Tumhe Apna Banane Ka ",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Armaan/Tumhe+Apna+Banane+Ka.mp3",
    img:"https://newsd.in/wp-content/uploads/2019/07/846097-armaanmalik-070919-1280x720.jpg",
    singer:"Armaan Malik"
  },
  {
    name:"Uff Yeh Noor",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Armaan/Uff+Yeh+Noor.mp3",
    img:"https://newsd.in/wp-content/uploads/2019/07/846097-armaanmalik-070919-1280x720.jpg",
    singer:"Armaan Malik"
  },
  {
    name:"Wajah Tum Ho",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Armaan/Wajah+Tum+Ho.mp3",
    img:"https://newsd.in/wp-content/uploads/2019/07/846097-armaanmalik-070919-1280x720.jpg",
    singer:"Armaan Malik"
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
