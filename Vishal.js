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
    name:"Adhoore",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/vishal-shekhar/Adhoore.mp3",
    img:"https://static.toiimg.com/photo/imgsize-703462,msid-71834871/71834871.jpg",
    singer:"Vishal Dadlani"
  },
  {
    name:"Anjaana",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/vishal-shekhar/Anjaana.mp3",
    img:"https://static.toiimg.com/photo/imgsize-703462,msid-71834871/71834871.jpg",
    singer:"Vishal-Shekhar"
  },
  {
    name:"Balam Pichkari",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/vishal-shekhar/Balam+Pichkari.mp3",
    img:"https://static.toiimg.com/photo/imgsize-703462,msid-71834871/71834871.jpg",
    singer:"Vishal-Shekhar"
  },

  {
    name:"Dildaara",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/vishal-shekhar/Dildaara.mp3",
    img:"https://static.toiimg.com/photo/imgsize-703462,msid-71834871/71834871.jpg",
    singer:"Vishal-Shekhar"
  },

  {
    name:"Dooriyan Hain Zaroori",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/vishal-shekhar/Dooriyan+Hain+Zaroori.mp3",
    img:"https://static.toiimg.com/photo/imgsize-703462,msid-71834871/71834871.jpg",
    singer:"Vishal Dadlani"
  },
  {
    name:"Gulaabo",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/vishal-shekhar/Gulaabo.mp3",
    img:"https://static.toiimg.com/photo/imgsize-703462,msid-71834871/71834871.jpg",
    singer:"Vishal-Shekhar"
  },
  {
    name:"Har Funn Maula",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/vishal-shekhar/Har+Funn+Maula.mp3",
    img:"https://static.toiimg.com/photo/imgsize-703462,msid-71834871/71834871.jpg",
    singer:"Vishal Dadlani"
  },
  {
    name:"I Feel Good",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/vishal-shekhar/I+Feel+Good.mp3",
    img:"https://static.toiimg.com/photo/imgsize-703462,msid-71834871/71834871.jpg",
    singer:"Vishal-Shekhar"
  },
  {
    name:"Jaane Kyun",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/vishal-shekhar/Jaane+Kyun.mp3",
    img:"https://static.toiimg.com/photo/imgsize-703462,msid-71834871/71834871.jpg",
    singer:"Vishal-Shekhar"
  },
  {
    name:"Jab Mila Tu",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/vishal-shekhar/Jab+mila+tu.mp3",
    img:"https://static.toiimg.com/photo/imgsize-703462,msid-71834871/71834871.jpg",
    singer:"Vishal Dadlani"
  },
  {
    name:"Jai Jai Shivshankar",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/vishal-shekhar/Jai+Jai+Shivshankar.mp3",
    img:"https://static.toiimg.com/photo/imgsize-703462,msid-71834871/71834871.jpg",
    singer:"Vishal Dadlani"
  },
  {
    name:"Jee Le Zaraa",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/vishal-shekhar/Jee+Le+Zaraa.mp3",
    img:"https://static.toiimg.com/photo/imgsize-703462,msid-71834871/71834871.jpg",
    singer:"Vishal Dadlani"
  },
  {
    name:"Khabar Nahin",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/vishal-shekhar/Khabar+Nahin.mp3",
    img:"https://static.toiimg.com/photo/imgsize-703462,msid-71834871/71834871.jpg",
    singer:"Vishal-Shekhar"
  },
  {
    name:"Kurbaan Hua",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/vishal-shekhar/Kurbaan+Hua.mp3",
    img:"https://static.toiimg.com/photo/imgsize-703462,msid-71834871/71834871.jpg",
    singer:"Vishal Dadlani"
  },
  {
    name:"Malhari",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/vishal-shekhar/Malhari.mp3",
    img:"https://static.toiimg.com/photo/imgsize-703462,msid-71834871/71834871.jpg",
    singer:"Vishal Dadlani"
  },
  {
    name:"Meherbaan",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/vishal-shekhar/Meherbaan.mp3",
    img:"https://static.toiimg.com/photo/imgsize-703462,msid-71834871/71834871.jpg",
    singer:"Shekhar Ravjiani"
  },
  {
    name:"Saaiyaan",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/vishal-shekhar/Saaiyaan.mp3",
    img:"https://static.toiimg.com/photo/imgsize-703462,msid-71834871/71834871.jpg",
    singer:"Vishal Dadlani"
  },
  {
    name:"Swag Se Swagat",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/vishal-shekhar/Swag+Se+Swagat.mp3",
    img:"https://static.toiimg.com/photo/imgsize-703462,msid-71834871/71834871.jpg",
    singer:"Vishal Dadlani"
  },
  {
    name:"The Jawaani Song",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/vishal-shekhar/The+Jawaani+Song.mp3",
    img:"https://static.toiimg.com/photo/imgsize-703462,msid-71834871/71834871.jpg",
    singer:"Vishal-Shekhar"
  },
  {
    name:"Tu Meri",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/vishal-shekhar/Tu+Meri.mp3",
    img:"https://static.toiimg.com/photo/imgsize-703462,msid-71834871/71834871.jpg",
    singer:"Vishal Dadlani"
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
