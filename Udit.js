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
    name:"Ae Mere Humsafar",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Udit/Ae+Mere+Humsafar.mp3",
    img:"https://static.abplive.com/wp-content/uploads/2019/07/08163507/Udit-Narayan.-Ram-Siya-Ke-Luv-Kush.jpg?impolicy=abp_cdn&imwidth=720",
    singer:"Udit Narayan"
  },
  {
    name:"Are Re Are",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Udit/Are+Re+Are.mp3",
    img:"https://static.abplive.com/wp-content/uploads/2019/07/08163507/Udit-Narayan.-Ram-Siya-Ke-Luv-Kush.jpg?impolicy=abp_cdn&imwidth=720",
    singer:"Udit Narayan"
  },
  {
    name:"Bholi Si Surat",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Udit/Bholi+Si+Surat.mp3",
    img:"https://static.abplive.com/wp-content/uploads/2019/07/08163507/Udit-Narayan.-Ram-Siya-Ke-Luv-Kush.jpg?impolicy=abp_cdn&imwidth=720",
    singer:"Udit Narayan"
  },

  {
    name:"Chak Dum Dum",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Udit/Chak+Dum+Dum.mp3",
    img:"https://static.abplive.com/wp-content/uploads/2019/07/08163507/Udit-Narayan.-Ram-Siya-Ke-Luv-Kush.jpg?impolicy=abp_cdn&imwidth=720",
    singer:"Udit Narayan"
  },

  {
    name:"Dil To Pagal Hai",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Udit/Dil+To+Pagal+Hai.mp3",
    img:"https://static.abplive.com/wp-content/uploads/2019/07/08163507/Udit-Narayan.-Ram-Siya-Ke-Luv-Kush.jpg?impolicy=abp_cdn&imwidth=720",
    singer:"Udit Narayan"
  },
  {
    name:"Gazab Ka Hai Din",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Udit/Gazab+Ka+Hai+Din.mp3",
    img:"https://static.abplive.com/wp-content/uploads/2019/07/08163507/Udit-Narayan.-Ram-Siya-Ke-Luv-Kush.jpg?impolicy=abp_cdn&imwidth=720",
    singer:"Udit Narayan"
  },
  {
    name:"Ho Gaya Hai Tujhko",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Udit/Ho+Gaya+Hai+Tujhko.mp3",
    img:"https://static.abplive.com/wp-content/uploads/2019/07/08163507/Udit-Narayan.-Ram-Siya-Ke-Luv-Kush.jpg?impolicy=abp_cdn&imwidth=720",
    singer:"Udit Narayan"
  },
  {
    name:"Jaadu Teri Nazar",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Udit/Jaadu+Teri+Nazar.mp3",
    img:"https://static.abplive.com/wp-content/uploads/2019/07/08163507/Udit-Narayan.-Ram-Siya-Ke-Luv-Kush.jpg?impolicy=abp_cdn&imwidth=720",
    singer:"Udit Narayan"
  },
  {
    name:"Kisi Disco Mein Jaayen",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Udit/Kisi+Disco+Mein+Jaayen.mp3",
    img:"https://static.abplive.com/wp-content/uploads/2019/07/08163507/Udit-Narayan.-Ram-Siya-Ke-Luv-Kush.jpg?impolicy=abp_cdn&imwidth=720",
    singer:"Udit Narayan"
  },
  {
    name:"Mehndi Laga Ke Rakhna",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Udit/Mehndi+Laga+Ke+Rakhna.mp3",
    img:"https://static.abplive.com/wp-content/uploads/2019/07/08163507/Udit-Narayan.-Ram-Siya-Ke-Luv-Kush.jpg?impolicy=abp_cdn&imwidth=720",
    singer:"Udit Narayan"
  },
  {
    name:"O Jaana",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Udit/O+Jaana.mp3",
    img:"https://static.abplive.com/wp-content/uploads/2019/07/08163507/Udit-Narayan.-Ram-Siya-Ke-Luv-Kush.jpg?impolicy=abp_cdn&imwidth=720",
    singer:"Udit Narayan"
  },
  {
    name:"O Re Chori",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Udit/O+Re+Chori.mp3",
    img:"https://static.abplive.com/wp-content/uploads/2019/07/08163507/Udit-Narayan.-Ram-Siya-Ke-Luv-Kush.jpg?impolicy=abp_cdn&imwidth=720",
    singer:"Udit Narayan"
  },
  {
    name:"Papa Kehte Hain",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Udit/Papa+Kehte+Hain.mp3",
    img:"https://static.abplive.com/wp-content/uploads/2019/07/08163507/Udit-Narayan.-Ram-Siya-Ke-Luv-Kush.jpg?impolicy=abp_cdn&imwidth=720",
    singer:"Udit Narayan"
  },
  {
    name:"Pardesi Pardesi",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Udit/Pardesi+Pardesi.mp3",
    img:"https://static.abplive.com/wp-content/uploads/2019/07/08163507/Udit-Narayan.-Ram-Siya-Ke-Luv-Kush.jpg?impolicy=abp_cdn&imwidth=720",
    singer:"Udit Narayan"
  },
  {
    name:"Pehla Nasha",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Udit/Pehla+Nasha.mp3",
    img:"https://static.abplive.com/wp-content/uploads/2019/07/08163507/Udit-Narayan.-Ram-Siya-Ke-Luv-Kush.jpg?impolicy=abp_cdn&imwidth=720",
    singer:"Udit Narayan"
  },
  {
    name:"Radha Kaise Na Jale",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Udit/Radha+Kaise+Na+Jale.mp3",
    img:"https://static.abplive.com/wp-content/uploads/2019/07/08163507/Udit-Narayan.-Ram-Siya-Ke-Luv-Kush.jpg?impolicy=abp_cdn&imwidth=720",
    singer:"Udit Narayan"
  },
  {
    name:"Ruk Ja O Dil Deewane",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Udit/Ruk+Ja+O+Dil+Deewane.mp3",
    img:"https://static.abplive.com/wp-content/uploads/2019/07/08163507/Udit-Narayan.-Ram-Siya-Ke-Luv-Kush.jpg?impolicy=abp_cdn&imwidth=720",
    singer:"Udit Narayan"
  },
  {
    name:"Tere Naam",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Udit/Tere+Naam.mp3",
    img:"https://static.abplive.com/wp-content/uploads/2019/07/08163507/Udit-Narayan.-Ram-Siya-Ke-Luv-Kush.jpg?impolicy=abp_cdn&imwidth=720",
    singer:"Udit Narayan"
  },
  {
    name:"Tu Mere Saamne",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Udit/Tu+Mere+Saamne.mp3",
    img:"https://static.abplive.com/wp-content/uploads/2019/07/08163507/Udit-Narayan.-Ram-Siya-Ke-Luv-Kush.jpg?impolicy=abp_cdn&imwidth=720",
    singer:"Udit Narayan"
  },
  {
    name:"Yahan Ke Hum Sikandar",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Udit/Yahan+Ke+Hum+Sikandar.mp3",
    img:"https://static.abplive.com/wp-content/uploads/2019/07/08163507/Udit-Narayan.-Ram-Siya-Ke-Luv-Kush.jpg?impolicy=abp_cdn&imwidth=720",
    singer:"Udit Narayan"
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
