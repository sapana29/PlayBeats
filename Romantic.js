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
    name:"Afreen Afreen",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Romantic/Afreen+Afreen.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.YvwGub33FWxmyINcO2CalwHaEo&pid=Api&P=0&w=264&h=166",
    singer:"Theme: Romantic Songs"
  },
  {
    name:"Chaandaniya",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Romantic/Chaandaniya.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.YvwGub33FWxmyINcO2CalwHaEo&pid=Api&P=0&w=264&h=166",
    singer:"Theme: Romantic Songs"
  },
  {
    name:"Gazab Ka Hai Din-Dil Junglee",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Romantic/Gazab+Ka+Hai+Din+-+Dil+Juunglee.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.YvwGub33FWxmyINcO2CalwHaEo&pid=Api&P=0&w=264&h=166",
    singer:"Theme: Romantic Songs"
  },
  {
    name:"Gazab Ka Hai Yeh Din-Sanam Re",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Romantic/Gazab+Ka+Hai+Yeh+Din+-+Sanam+Re.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.YvwGub33FWxmyINcO2CalwHaEo&pid=Api&P=0&w=264&h=166",
    singer:"Theme: Romantic Songs"
  },

  {
    name:"Gerua",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Romantic/Gerua.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.YvwGub33FWxmyINcO2CalwHaEo&pid=Api&P=0&w=264&h=166",
    singer:"Theme: Romantic Songs"
  },

  {
    name:"Ishq Wala Love",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Romantic/Ishq+Wala+Love.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.YvwGub33FWxmyINcO2CalwHaEo&pid=Api&P=0&w=264&h=166",
    singer:"Theme: Romantic Songs"
  },

  {
    name:"Janam Janam",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Romantic/Janam+Janam.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.YvwGub33FWxmyINcO2CalwHaEo&pid=Api&P=0&w=264&h=166",
    singer:"Theme: Romantic Songs"
  },
  {
    name:"Kaho Na Kaho",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Romantic/Kaho+Na+Kaho.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.YvwGub33FWxmyINcO2CalwHaEo&pid=Api&P=0&w=264&h=166",
    singer:"Theme: Romantic Songs"
  },
  {
    name:"Lat Lag Gayi",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Romantic/Lat+Lag+Gayi.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.YvwGub33FWxmyINcO2CalwHaEo&pid=Api&P=0&w=264&h=166",
    singer:"Theme: Romantic Songs"
  },
  {
    name:"Main Kya Karoon",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Romantic/Main+Kya+Karoon.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.YvwGub33FWxmyINcO2CalwHaEo&pid=Api&P=0&w=264&h=166",
    singer:"Theme: Romantic Songs"
  },
  {
    name:"Main Rang Sharbaton Ka",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Romantic/Main+Rang+Sharbaton+Ka.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.YvwGub33FWxmyINcO2CalwHaEo&pid=Api&P=0&w=264&h=166",
    singer:"Theme: Romantic Songs"
  },
  {
    name:"Mere Naam Tu",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Romantic/Mere+Naam+Tu.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.YvwGub33FWxmyINcO2CalwHaEo&pid=Api&P=0&w=264&h=166",
    singer:"Theme: Romantic Songs"
  },
  {
    name:"Pani Da Rang",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Romantic/Pani+Da+Rung.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.YvwGub33FWxmyINcO2CalwHaEo&pid=Api&P=0&w=264&h=166",
    singer:"Theme: Romantic Songs"
  },
  {
    name:"Pee Loon",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Romantic/Pee+Loon.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.YvwGub33FWxmyINcO2CalwHaEo&pid=Api&P=0&w=264&h=166",
    singer:"Theme: Romantic Songs"
  },
  {
    name:"Raanjhanaa",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Romantic/Raanjhanaa.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.YvwGub33FWxmyINcO2CalwHaEo&pid=Api&P=0&w=264&h=166",
    singer:"Theme: Romantic Songs"
  },
    {
      name:"Raatan Lambiyan",
      path:"https://playbeets.s3.ap-south-1.amazonaws.com/Romantic/Raatan+Lambiyan.mp3",
      img:"https://tse3.mm.bing.net/th?id=OIP.YvwGub33FWxmyINcO2CalwHaEo&pid=Api&P=0&w=264&h=166",
      singer:"Theme: Romantic Songs"
  },
  {
    name:"SubhanAllah",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Romantic/SubhanAllah.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.YvwGub33FWxmyINcO2CalwHaEo&pid=Api&P=0&w=264&h=166",
    singer:"Theme: Romantic Songs"
  },
  {
    name:"Sun Saathiya",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Romantic/Sun+Saathiya.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.YvwGub33FWxmyINcO2CalwHaEo&pid=Api&P=0&w=264&h=166",
    singer:"Theme: Romantic Songs"
  },
  {
    name:"Tera Hone Laga Hoon",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Romantic/Tera+Hone+Laga+Hoon.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.YvwGub33FWxmyINcO2CalwHaEo&pid=Api&P=0&w=264&h=166",
    singer:"Theme: Romantic Songs"
  },
  {
    name:"Toota Jo Kabhi Tara",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Romantic/Toota+Jo+Kabhi+Tara.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.YvwGub33FWxmyINcO2CalwHaEo&pid=Api&P=0&w=264&h=166",
    singer:"Theme: Romantic Songs"
  },
  {
    name:"Tu Hi Meri Shab Hai",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Romantic/Tu+Hi+Meri+Shab+Hai.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.YvwGub33FWxmyINcO2CalwHaEo&pid=Api&P=0&w=264&h=166",
    singer:"Theme: Romantic Songs"
  },
  {
    name:"Tu Jo Mila",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Romantic/Tu+Jo+Mila.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.YvwGub33FWxmyINcO2CalwHaEo&pid=Api&P=0&w=264&h=166",
    singer:"Theme: Romantic Songs"
  },
  {
    name:"Tumse Hi",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Romantic/Tumse+Hi.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.YvwGub33FWxmyINcO2CalwHaEo&pid=Api&P=0&w=264&h=166",
    singer:"Theme: Romantic Songs"
  },
  {
    name:"Vaaste",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Romantic/Vaaste.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.YvwGub33FWxmyINcO2CalwHaEo&pid=Api&P=0&w=264&h=166",
    singer:"Theme: Romantic Songs"
  },
  {
    name:"Zara Sa",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Romantic/Zara+Sa.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.YvwGub33FWxmyINcO2CalwHaEo&pid=Api&P=0&w=264&h=166",
    singer:"Theme: Romantic Songs"
  },
  {
    name:"Zehnaseeb",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Romantic/Zehnaseeb.mp3",
    img:"https://tse3.mm.bing.net/th?id=OIP.YvwGub33FWxmyINcO2CalwHaEo&pid=Api&P=0&w=264&h=166",
    singer:"Theme: Romantic Songs"
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
