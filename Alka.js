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
    name:"Bakhuda Tumhi Ho ",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Alka+/Bakhuda+Tumhi+Ho.mp3",
    img:"https://new-img.patrika.com/upload/2019/03/20/alka_2_4309728-m.png",
    singer:"Alka Yagnik"
  },
  {
    name:"Chamma Chamma ",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Alka+/Chamma+Chamma.mp3",
    img:"https://new-img.patrika.com/upload/2019/03/20/alka_2_4309728-m.png",
    singer:"Alka Yagnik"
  },
  {
    name:"Chand Chupa Badal Mein ",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Alka+/Chand+Chupa+Badal+Mein.mp3",
    img:"https://new-img.patrika.com/upload/2019/03/20/alka_2_4309728-m.png",
    singer:"Alka Yagnik"
  },

  {
    name:"Chura Ke Dil mera ",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Alka+/Chura+Ke+Dil+Mera.mp3",
    img:"https://new-img.patrika.com/upload/2019/03/20/alka_2_4309728-m.png",
    singer:"Alka Yagnik"
  },
  {
    name:"Dilbar Dilbar ",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Alka+/Dilbar+Dilbar.mp3",
    img:"https://new-img.patrika.com/upload/2019/03/20/alka_2_4309728-m.png",
    singer:"Alka Yagnik"
  },

  {
    name:"Gore gore",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Alka+/Gore+Gore.mp3",
    img:"https://new-img.patrika.com/upload/2019/03/20/alka_2_4309728-m.png",
    singer:"Alka Yagnik"
  },
  {
    name:"Is Deewane Ladke Ko ",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Alka+/Is+Deewane+Ladke+Ko.mp3",
    img:"https://new-img.patrika.com/upload/2019/03/20/alka_2_4309728-m.png",
    singer:"Alka Yagnik"
  },
  {
    name:"Jaati Hoon Mein ",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Alka+/Jaati+Hoon+Main.mp3",
    img:"https://new-img.patrika.com/upload/2019/03/20/alka_2_4309728-m.png",
    singer:"Alka Yagnik"
  },
  {
    name:"Jhanjhariya",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Alka+/Jhanjhariya.mp3",
    img:"https://new-img.patrika.com/upload/2019/03/20/alka_2_4309728-m.png",
    singer:"Alka Yagnik"
  },
  {
    name:"Jo Haal Dil Ka ",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Alka+/Jo+Haal+Dil+Ka.mp3",
    img:"https://new-img.patrika.com/upload/2019/03/20/alka_2_4309728-m.png",
    singer:"Alka Yagnik"
  },
  {
    name:"Kaho naa Pyar Hai",
    path:"C:\Alka-songs/Kaho Naa Pyar Hai.mp3",
    img:"https://new-img.patrika.com/upload/2019/03/20/alka_2_4309728-m.png",
    singer:"Alka Yagnik"
  },
  {
    name:"Koi Mil Gaya",
    path:"C:\Alka-songs/Koi Mil Gaya.mp3",
    img:"https://new-img.patrika.com/upload/2019/03/20/alka_2_4309728-m.png",
    singer:"Alka Yagnik"
  },
  {
    name:"Kuch Kuch Hota Hai",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Alka+/Kuch+Kuch+Hota+Hai.mp3",
    img:"https://new-img.patrika.com/upload/2019/03/20/alka_2_4309728-m.png",
    singer:"Alka Yagnik"
  },
  {
    name:"Taal Se Taal Mila",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Alka+/Taal+Se+Taal+Mila.mp3",
    img:"https://new-img.patrika.com/upload/2019/03/20/alka_2_4309728-m.png",
    singer:"Alka Yagnik"
  },
  {
    name:"Tip Tip Barsa Paani",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Alka+/Tip+Tip+Barsa+Paani.mp3",
    img:"https://new-img.patrika.com/upload/2019/03/20/alka_2_4309728-m.png",
    singer:"Alka Yagnik"
  },
  {
    name:"Tum Saath Ho ",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Alka+/Tum+Saath+Ho.mp3",
    img:"https://new-img.patrika.com/upload/2019/03/20/alka_2_4309728-m.png",
    singer:"Alka Yagnik"
  },
  {
    name:"Waada Raha Sanam ",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Alka+/Waada+Raha+Sanam.mp3",
    img:"https://new-img.patrika.com/upload/2019/03/20/alka_2_4309728-m.png",
    singer:"Alka Yagnik"
  },
  {
    name:"Ladki Kyon ",
    path:"C:\Alka-songs/Ladki Kyon.mp3",
    img:"https://new-img.patrika.com/upload/2019/03/20/alka_2_4309728-m.png",
    singer:"Alka Yagnik"
  },
  {
    name:"Baazigar O Baazigar ",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Alka+/Baazigar+O+Baazigar.mp3",
    img:"https://new-img.patrika.com/upload/2019/03/20/alka_2_4309728-m.png",
    singer:"Alka Yagnik"
  },
  {
    name:"Saanson Ko Saanson Mein ",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Alka+/Saanson+Ko+Saanson+Mein.mp3",
    img:"https://new-img.patrika.com/upload/2019/03/20/alka_2_4309728-m.png",
    singer:"Alka Yagnik"
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
