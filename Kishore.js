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
    name:"Are Jaane Kaise Kab",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Kishore/Are+Jane+Kaise+Kab.mp3",
    img:"https://tse1.mm.bing.net/th?id=OIP.3nrc42HdTmU1o5WFpG1HdAHaEK&pid=Api&P=0&w=297&h=168",
    singer:"Kishore Kumar"
  },
  {
    name:"Chhukar Mere Man Ko",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Kishore/Chhukar+Mere+Man+Ko.mp3",
    img:"https://tse1.mm.bing.net/th?id=OIP.3nrc42HdTmU1o5WFpG1HdAHaEK&pid=Api&P=0&w=297&h=168",
    singer:"Kishore Kumar"
  },
  {
    name:"Dilbar Mere Kab Tak",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Kishore/Dilbar+Mere+Kab+Tak.mp3",
    img:"https://tse1.mm.bing.net/th?id=OIP.3nrc42HdTmU1o5WFpG1HdAHaEK&pid=Api&P=0&w=297&h=168",
    singer:"Kishore Kumar"
  },

  {
    name:"Ek Haseena Thi",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Kishore/Ek+Haseena+Thi.mp3",
    img:"https://tse1.mm.bing.net/th?id=OIP.3nrc42HdTmU1o5WFpG1HdAHaEK&pid=Api&P=0&w=297&h=168",
    singer:"Kishore Kumar"
  },

  {
    name:"Ek Ladki Bheegi Bhagi Si",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Kishore/Ek+Ladki+Bheegi+Bhagi+Si.mp3",
    img:"https://tse1.mm.bing.net/th?id=OIP.3nrc42HdTmU1o5WFpG1HdAHaEK&pid=Api&P=0&w=297&h=168",
    singer:"Kishore Kumar"
  },
  {
    name:"Humen Tumse Pyar",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Kishore/Humen+Tumse+Pyar.mp3",
    img:"https://tse1.mm.bing.net/th?id=OIP.3nrc42HdTmU1o5WFpG1HdAHaEK&pid=Api&P=0&w=297&h=168",
    singer:"Kishore Kumar"
  },
  {
    name:"Mere Samnewali",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Kishore/Mere+Samnewali.mp3",
    img:"https://tse1.mm.bing.net/th?id=OIP.3nrc42HdTmU1o5WFpG1HdAHaEK&pid=Api&P=0&w=297&h=168",
    singer:"Kishore Kumar"
  },
  {
    name:"Musafir Hoon Yaaron",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Kishore/Musafir+Hoon+Yaaron.mp3",
    img:"https://tse1.mm.bing.net/th?id=OIP.3nrc42HdTmU1o5WFpG1HdAHaEK&pid=Api&P=0&w=297&h=168",
    singer:"Kishore Kumar"
  },
  {
    name:"My Name Is Anthony Gonsalves",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Kishore/My+Name+Is+Anthony+Gonsalves.mp3",
    img:"https://tse1.mm.bing.net/th?id=OIP.3nrc42HdTmU1o5WFpG1HdAHaEK&pid=Api&P=0&w=297&h=168",
    singer:"Kishore Kumar"
  },

  {
    name:"Neele Neele Ambar ",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Kishore/Neele+Neele+Ambar.mp3",
    img:"https://tse1.mm.bing.net/th?id=OIP.3nrc42HdTmU1o5WFpG1HdAHaEK&pid=Api&P=0&w=297&h=168",
    singer:"Kishore Kumar"
  },
  {
    name:"O Mere Dil Chain",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Kishore/O+Mere+Dil+Chain.mp3",
    img:"https://tse1.mm.bing.net/th?id=OIP.3nrc42HdTmU1o5WFpG1HdAHaEK&pid=Api&P=0&w=297&h=168",
    singer:"Kishore Kumar"
  },
  {
    name:"Pal Pal Dil Ke Pas",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Kishore/Pal+Pal+Dil+Ke+Pas.mp3",
    img:"https://tse1.mm.bing.net/th?id=OIP.3nrc42HdTmU1o5WFpG1HdAHaEK&pid=Api&P=0&w=297&h=168",
    singer:"Kishore Kumar"
  },
  {    name:"Roop Tera Mastana",
      path:"https://playbeets.s3.ap-south-1.amazonaws.com/Kishore/Roop+Tera+Mastana.mp3",
      img:"https://tse1.mm.bing.net/th?id=OIP.3nrc42HdTmU1o5WFpG1HdAHaEK&pid=Api&P=0&w=297&h=168",
      singer:"Kishore Kumar"
  },
  {
    name:"Salam-E-Ishq Meri Jaan",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Kishore/Salam-E-Ishq+Meri+Jaan.mp3",
    img:"https://tse1.mm.bing.net/th?id=OIP.3nrc42HdTmU1o5WFpG1HdAHaEK&pid=Api&P=0&w=297&h=168",
    singer:"Kishore Kumar"
  },
  {
    name:"Shayad Meri Shadi",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Kishore/Shayad+Meri+Shadi.mp3",
    img:"https://tse1.mm.bing.net/th?id=OIP.3nrc42HdTmU1o5WFpG1HdAHaEK&pid=Api&P=0&w=297&h=168",
    singer:"Kishore Kumar"
  },
  {
    name:"Tere Bina Zindagi Se",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Kishore/Tere+Bina+Zindagi+Se.mp3",
    img:"https://tse1.mm.bing.net/th?id=OIP.3nrc42HdTmU1o5WFpG1HdAHaEK&pid=Api&P=0&w=297&h=168",
    singer:"Kishore Kumar"
  },
  {
    name:"Ye Dosti",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Kishore/Ye+Dosti.mp3",
    img:"https://tse1.mm.bing.net/th?id=OIP.3nrc42HdTmU1o5WFpG1HdAHaEK&pid=Api&P=0&w=297&h=168",
    singer:"Kishore Kumar"
  },
  {
    name:"Ye Raatein Ye Mausam",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Kishore/Ye+Raatein+Ye+Mausam.mp3",
    img:"https://tse1.mm.bing.net/th?id=OIP.3nrc42HdTmU1o5WFpG1HdAHaEK&pid=Api&P=0&w=297&h=168",
    singer:"Kishore Kumar"
  },
  {
    name:"Yeh Kya Hua",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Kishore/Yeh+Kya+Hua.mp3",
    img:"https://tse1.mm.bing.net/th?id=OIP.3nrc42HdTmU1o5WFpG1HdAHaEK&pid=Api&P=0&w=297&h=168",
    singer:"Kishore Kumar"
  },
  {
    name:"Yeh Shaam Mastani",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Kishore/Yeh+Sham+Mastani.mp3",
    img:"https://tse1.mm.bing.net/th?id=OIP.3nrc42HdTmU1o5WFpG1HdAHaEK&pid=Api&P=0&w=297&h=168",
    singer:"Kishore Kumar"
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
