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
    name:"Aabhas Ha",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Marathi/Aabhas+ha.mp3",
    img:"https://www.safwallpapers.com/files/1521555119_Indian-village-nature-wallpaper.jpg",
    singer:"Theme: Marathi Songs"
  },
  {
    name:"Aali Thumkata Naar",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Marathi/Aali-Thumkat-Naar.mp3",
    img:"https://www.safwallpapers.com/files/1521555119_Indian-village-nature-wallpaper.jpg",
    singer:"Theme: Marathi Songs"
  },
  {
    name:"Aatach Baya Ka Baavarla",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Marathi/Aatach+Baya+Ka+Baavarla.mp3",
    img:"https://www.safwallpapers.com/files/1521555119_Indian-village-nature-wallpaper.jpg",
    singer:"Theme: Marathi Songs"
  },
  {
    name:"Antari Vajati",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Marathi/Antari+Vajati.mp3",
    img:"https://www.safwallpapers.com/files/1521555119_Indian-village-nature-wallpaper.jpg",
    singer:"Theme: Marathi Songs"
  },
  {
    name:"Chimba Bhijalele",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Marathi/Chimbh-Bhijalele.mp3",
    img:"https://www.safwallpapers.com/files/1521555119_Indian-village-nature-wallpaper.jpg",
    singer:"Theme: Marathi Songs"
  },
  {
    name:"Gulabachi Kali",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Marathi/Gulabachi-Kali.mp3",
    img:"https://www.safwallpapers.com/files/1521555119_Indian-village-nature-wallpaper.jpg",
    singer:"Theme: Marathi Songs"
  },

  {
    name:"Hrudayat Vaje Something",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Marathi/Hrudayat+Vaje+Something.mp3",
    img:"https://www.safwallpapers.com/files/1521555119_Indian-village-nature-wallpaper.jpg",
    singer:"Theme: Marathi Songs"
  },
  {
    name:"Jara Jara",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Marathi/Jara+Jara.mp3",
    img:"https://www.safwallpapers.com/files/1521555119_Indian-village-nature-wallpaper.jpg",
    singer:"Theme: Marathi Songs"
  },

  {
    name:"Ka Kalena",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Marathi/Ka+Kalena.mp3",
    img:"https://www.safwallpapers.com/files/1521555119_Indian-village-nature-wallpaper.jpg",
    singer:"Theme: Marathi Songs"
  },

  {
    name:"Kadhi Tu",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Marathi/Kadhi+Tu.mp3",
    img:"https://www.safwallpapers.com/files/1521555119_Indian-village-nature-wallpaper.jpg",
    singer:"Theme: Marathi Songs"
  },

  {
    name:"Khel Mandala",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Marathi/Khel+Mandala.mp3",
    img:"https://www.safwallpapers.com/files/1521555119_Indian-village-nature-wallpaper.jpg",
    singer:"Theme: Marathi Songs"
  },
  {
    name:"Kitida Navyane",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Marathi/Kitida-Navyane.mp3",
    img:"https://www.safwallpapers.com/files/1521555119_Indian-village-nature-wallpaper.jpg",
    singer:"Theme: Marathi Songs"
  },
  {
    name:"Mala Ved Laagale",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Marathi/Mala+Ved+Laagale.mp3",
    img:"https://www.safwallpapers.com/files/1521555119_Indian-village-nature-wallpaper.jpg",
    singer:"Theme: Marathi Songs"
  },
  {
    name:"Man Udhan Varyache",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Marathi/Man+Udhan+Varyache.mp3",
    img:"https://www.safwallpapers.com/files/1521555119_Indian-village-nature-wallpaper.jpg",
    singer:"Theme: Marathi Songs"
  },
  {
    name:"Parikatha",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Marathi/Parikatha.mp3",
    img:"https://www.safwallpapers.com/files/1521555119_Indian-village-nature-wallpaper.jpg",
    singer:"Theme: Marathi Songs"
  },
  {
    name:"Sar Sukhachi Shravani",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Marathi/Sar+Sukhachi+Shravani.mp3",
    img:"https://www.safwallpapers.com/files/1521555119_Indian-village-nature-wallpaper.jpg",
    singer:"Theme: Marathi Songs"
  },
  {
    name:"Tik-Tik-Vajate-Dokyaat",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Marathi/Tik-Tik-Vajate-Dokyaat.mp3",
    img:"https://www.safwallpapers.com/files/1521555119_Indian-village-nature-wallpaper.jpg",
    singer:"Theme: Marathi Songs"
  },
  {
    name:"Wajale Ki Bara",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Marathi/Vajle-Ki-Bara.mp3",
    img:"https://www.safwallpapers.com/files/1521555119_Indian-village-nature-wallpaper.jpg",
    singer:"Theme: Marathi Songs"
  },
  {
    name:"Varyavarti Gandh",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Marathi/Varyavarti+Gandh.mp3",
    img:"https://www.safwallpapers.com/files/1521555119_Indian-village-nature-wallpaper.jpg",
    singer:"Theme: Marathi Songs"
  },
  {
    name:"Yad Lagla",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Marathi/Yad+Lagla.mp3",
    img:"https://www.safwallpapers.com/files/1521555119_Indian-village-nature-wallpaper.jpg",
    singer:"Theme: Marathi Songs"
  },

  {
    name:"Zingaat",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Marathi/Zingaat.mp3",
    img:"https://www.safwallpapers.com/files/1521555119_Indian-village-nature-wallpaper.jpg",
    singer:"Theme: Marathi Songs"
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
