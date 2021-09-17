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
    name:"Aaj Phir Jeene Ki Tamanna Hai ",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Lata/Aaj+Phir+Jeene+Ki+Tamana+Hai.mp3",
    img:"https://tse4.mm.bing.net/th?id=OIP.D1urdZW_r-r1S-QmP_VVtAHaEK&pid=Api&P=0&w=269&h=152",
    singer:"Lata Mangeshkar"
  },
  {
    name:"Aajkal Paon Zameen Par ",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Lata/Aajkal+Paon+Zameen+Par.mp3",
    img:"https://tse4.mm.bing.net/th?id=OIP.D1urdZW_r-r1S-QmP_VVtAHaEK&pid=Api&P=0&w=269&h=152",
    singer:"Lata Mangeshkar"
  },
  {
    name:"Aapki Aakhon Mein Kuch ",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Lata/Aapki+Aakhon+Mein+Kuch.mp3",
    img:"https://tse4.mm.bing.net/th?id=OIP.D1urdZW_r-r1S-QmP_VVtAHaEK&pid=Api&P=0&w=269&h=152",
    singer:"Lata Mangeshkar"
  },

  {
    name:"Achha To Hum Chalte Hain",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Lata/Achha+To+Hum+Chalte+Hain.mp3",
    img:"https://tse4.mm.bing.net/th?id=OIP.D1urdZW_r-r1S-QmP_VVtAHaEK&pid=Api&P=0&w=269&h=152",
    singer:"Lata Mangeshkar"
  },
  {
    name:"Ajib Dastaan Hai Yeh",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Lata/Ajib+Dastan+Hai+Yeh.mp3",
    img:"https://tse4.mm.bing.net/th?id=OIP.D1urdZW_r-r1S-QmP_VVtAHaEK&pid=Api&P=0&w=269&h=152",
    singer:"Lata Mangeshkar"
  },
  {
    name:"Bheegi Bheegi Raaton Mein ",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Lata/Bheegi+Bheegi+Raaton+Mein.mp3",
    img:"https://tse4.mm.bing.net/th?id=OIP.D1urdZW_r-r1S-QmP_VVtAHaEK&pid=Api&P=0&w=269&h=152",
    singer:"Lata Mangeshkar"
  },

  {
    name:"Ek Pyar Ka Nagma Hai",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Lata/Ek+Pyar+Ka+Nagma+Hai.mp3",
    img:"https://tse4.mm.bing.net/th?id=OIP.D1urdZW_r-r1S-QmP_VVtAHaEK&pid=Api&P=0&w=269&h=152",
    singer:"Lata Mangeshkar"
  },
  {
    name:"Gaata Rahe Mera Dil ",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Lata/Gaata+Rahe+Mera+Dil.mp3",
    img:"https://tse4.mm.bing.net/th?id=OIP.D1urdZW_r-r1S-QmP_VVtAHaEK&pid=Api&P=0&w=269&h=152",
    singer:"Lata Mangeshkar"
  },
  {
    name:"Ho Gaya Hai Tujhko To Pyar ",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Lata/Ho+Gaya+Hai+Tujhko+to+Pyar+Sajna.mp3",
    img:"https://tse4.mm.bing.net/th?id=OIP.D1urdZW_r-r1S-QmP_VVtAHaEK&pid=Api&P=0&w=269&h=152",
    singer:"Lata Mangeshkar"
  },
  {
    name:"Ho Pardesia ",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Lata/Ho+Pardesia.mp3",
    img:"https://tse4.mm.bing.net/th?id=OIP.D1urdZW_r-r1S-QmP_VVtAHaEK&pid=Api&P=0&w=269&h=152",
    singer:"Lata Mangeshkar"
  },
  {
    name:"Hum Dono Do Premi ",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Lata/Hum+Dono+Do+Premi.mp3",
    img:"https://tse4.mm.bing.net/th?id=OIP.D1urdZW_r-r1S-QmP_VVtAHaEK&pid=Api&P=0&w=269&h=152",
    singer:"Lata Mangeshkar"
  },
  {
    name:"Is Mod Se Jate Hain ",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Lata/Is+Mod+Se+Jate+Hain.mp3",
    img:"https://tse4.mm.bing.net/th?id=OIP.D1urdZW_r-r1S-QmP_VVtAHaEK&pid=Api&P=0&w=269&h=152",
    singer:"Lata Mangeshkar"
  },
  {
    name:"Jai Jai Shiv Shankar",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Lata/Jai+Jai+Shiv+Shankar.mp3",
    img:"https://tse4.mm.bing.net/th?id=OIP.D1urdZW_r-r1S-QmP_VVtAHaEK&pid=Api&P=0&w=269&h=152",
    singer:"Lata Mangeshkar"
  },
  {
    name:"Lag Ja Gale ",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Lata/Lag+Ja+Gale.mp3",
    img:"https://tse4.mm.bing.net/th?id=OIP.D1urdZW_r-r1S-QmP_VVtAHaEK&pid=Api&P=0&w=269&h=152",
    singer:"Lata Mangeshkar"
  },
  {
    name:"Nainon Mein Badra Chhaye",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Lata/Nainon+Mein+Badra+Chhaye.mp3",
    img:"https://tse4.mm.bing.net/th?id=OIP.D1urdZW_r-r1S-QmP_VVtAHaEK&pid=Api&P=0&w=269&h=152",
    singer:"Lata Mangeshkar"
  },
  {
    name:"Sheesha Ho Ya Dil Ho ",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Lata/Sheesha+Ho+Ya+Dil+Ho.mp3",
    img:"https://tse4.mm.bing.net/th?id=OIP.D1urdZW_r-r1S-QmP_VVtAHaEK&pid=Api&P=0&w=269&h=152",
    singer:"Lata Mangeshkar"
  },
  {
    name:"Tere Bina Zindagi Se",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Lata/Tere+Bina+Zindagi+Se.mp3",
    img:"https://tse4.mm.bing.net/th?id=OIP.D1urdZW_r-r1S-QmP_VVtAHaEK&pid=Api&P=0&w=269&h=152",
    singer:"Lata Mangeshkar"
  },
  {
    name:"Tujhse Naraaz Nahin Zindagi ",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Lata/Tujhse+Naraaz+Nahin+Zindagi.mp3",
    img:"https://tse4.mm.bing.net/th?id=OIP.D1urdZW_r-r1S-QmP_VVtAHaEK&pid=Api&P=0&w=269&h=152",
    singer:"Lata Mangeshkar"
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
