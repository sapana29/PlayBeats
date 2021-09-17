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
    name:"Aane Se Uske",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Mohameed/Aane+Se+Uske+Aaye+Bahar+Jeene+Ki+Raah.mp3",
    img:"https://www.iwmbuzz.com/wp-content/uploads/2020/02/musical-lessons-you-ought-to-learn-from-mohammed-rafi-920x518.jpg",
    singer:"Mohammed Rafi"
  },
  {
    name:"Ae Phoolon Ki Rani",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Mohameed/Ae+Phoolon+Ki+Rani.mp3",
    img:"https://www.iwmbuzz.com/wp-content/uploads/2020/02/musical-lessons-you-ought-to-learn-from-mohammed-rafi-920x518.jpg",
    singer:"Mohammed Rafi"
  },
  {
    name:"Badan Pe Sitare",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Mohameed/Badan+Pe+Sitare+Lapete.mp3",
    img:"https://www.iwmbuzz.com/wp-content/uploads/2020/02/musical-lessons-you-ought-to-learn-from-mohammed-rafi-920x518.jpg",
    singer:"Mohammed Rafi"
  },

  {
    name:"Baharo Phool Barsao",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Mohameed/Baharo+Phool+Barsao.mp3",
    img:"https://www.iwmbuzz.com/wp-content/uploads/2020/02/musical-lessons-you-ought-to-learn-from-mohammed-rafi-920x518.jpg",
    singer:"Mohammed Rafi"
  },

  {
    name:"Dard-E-Dil",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Mohameed/Dard-E-Dil.mp3",
    img:"https://www.iwmbuzz.com/wp-content/uploads/2020/02/musical-lessons-you-ought-to-learn-from-mohammed-rafi-920x518.jpg",
    singer:"Mohammed Rafi"
  },
  {
    name:"Gulabi Aankhen",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Mohameed/Gulabi+Ankhen.mp3",
    img:"https://www.iwmbuzz.com/wp-content/uploads/2020/02/musical-lessons-you-ought-to-learn-from-mohammed-rafi-920x518.jpg",
    singer:"Mohammed Rafi"
  },
  {
    name:"Hum Tumse Juda Ho Ke",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Mohameed/Ham+Tum+Se+Juda+Hoke.mp3",
    img:"https://www.iwmbuzz.com/wp-content/uploads/2020/02/musical-lessons-you-ought-to-learn-from-mohammed-rafi-920x518.jpg",
    singer:"Mohammed Rafi"
  },
  {
    name:"Khoya Khoya Chand",
    path:"C:\Mohammed-songs/Khoya Khoya Chand.mp3",
    img:"https://www.iwmbuzz.com/wp-content/uploads/2020/02/musical-lessons-you-ought-to-learn-from-mohammed-rafi-920x518.jpg",
    singer:"Mohammed Rafi"
  },
  {
    name:"Kya Hua Tera Wada",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Mohameed/Kya+Hua+Tera+Wada.mp3",
    img:"https://www.iwmbuzz.com/wp-content/uploads/2020/02/musical-lessons-you-ought-to-learn-from-mohammed-rafi-920x518.jpg",
    singer:"Mohammed Rafi"
  },
  {
    name:"Likhe Jo Khat Tujhe",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Mohameed/Likhe+Jo+Khat+Tujhe.mp3",
    img:"https://www.iwmbuzz.com/wp-content/uploads/2020/02/musical-lessons-you-ought-to-learn-from-mohammed-rafi-920x518.jpg",
    singer:"Mohammed Rafi"
  },
  {
    name:"Main Kahin Kavi Na",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Mohameed/Main+Kahin+Kavi+Na.mp3",
    img:"https://www.iwmbuzz.com/wp-content/uploads/2020/02/musical-lessons-you-ought-to-learn-from-mohammed-rafi-920x518.jpg",
    singer:"Mohammed Rafi"
  },
  {
    name:"Maine Poochhan Chand Se",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Mohameed/Maine+Poochha+Chand+Se.mp3",
    img:"https://www.iwmbuzz.com/wp-content/uploads/2020/02/musical-lessons-you-ought-to-learn-from-mohammed-rafi-920x518.jpg",
    singer:"Mohammed Rafi"
  },
  {
    name:"Mere Mitwa Mere Meet",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Mohameed/Mere+Mitwa+Mere+Meet.mp3",
    img:"https://www.iwmbuzz.com/wp-content/uploads/2020/02/musical-lessons-you-ought-to-learn-from-mohammed-rafi-920x518.jpg",
    singer:"Mohammed Rafi"
  },
  {
    name:"O Meri Mehbooba",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Mohameed/O+Meri+Mehbooba.mp3",
    img:"https://www.iwmbuzz.com/wp-content/uploads/2020/02/musical-lessons-you-ought-to-learn-from-mohammed-rafi-920x518.jpg",
    singer:"Mohammed Rafi"
  },
  {
    name:"Parda Hai Parda",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Mohameed/Parda+Hai+Parda.mp3",
    img:"https://www.iwmbuzz.com/wp-content/uploads/2020/02/musical-lessons-you-ought-to-learn-from-mohammed-rafi-920x518.jpg",
    singer:"Mohammed Rafi"
  },
  {
    name:"Pathar Ke Sanam",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Mohameed/Pathar+Ke+Sanam.mp3",
    img:"https://www.iwmbuzz.com/wp-content/uploads/2020/02/musical-lessons-you-ought-to-learn-from-mohammed-rafi-920x518.jpg",
    singer:"Mohammed Rafi"
  },
  {
    name:"Taarif Karu Kya Uski",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Mohameed/Taarif+Karu+Kya+Uski+Jis+Ne+Tumhein+Banaya.mp3",
    img:"https://www.iwmbuzz.com/wp-content/uploads/2020/02/musical-lessons-you-ought-to-learn-from-mohammed-rafi-920x518.jpg",
    singer:"Mohammed Rafi"
  },
  {
    name:"Tu Is Tarah",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Mohameed/Tu+Is+Tarah.mp3",
    img:"https://www.iwmbuzz.com/wp-content/uploads/2020/02/musical-lessons-you-ought-to-learn-from-mohammed-rafi-920x518.jpg",
    singer:"Mohammed Rafi"
  },
  {
    name:"Wadiyan Mera Daman",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Mohameed/Wadiyan+Mera+Daman.mp3",
    img:"https://www.iwmbuzz.com/wp-content/uploads/2020/02/musical-lessons-you-ought-to-learn-from-mohammed-rafi-920x518.jpg",
    singer:"Mohammed Rafi"
  },
  {
    name:"Yeh Reshmi Zulfen",
    path:"https://playbeets.s3.ap-south-1.amazonaws.com/Mohameed/Yeh+Reshmi+Zulfen.mp3",
    img:"https://www.iwmbuzz.com/wp-content/uploads/2020/02/musical-lessons-you-ought-to-learn-from-mohammed-rafi-920x518.jpg",
    singer:"Mohammed Rafi"
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
