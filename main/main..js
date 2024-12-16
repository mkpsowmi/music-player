let imgArea=document.getElementById("cur-img");
let backBtn=document.getElementById("back-btn")
let frwBtn=document.getElementById("fwd-btn");
let playBtn=document.getElementById("play");
let audiofile=document.getElementById("audio");
let pauseBtn=document.getElementById("pause");
let list=[
  {
    id:1,
    img:"image/movie.jfif",
    audio:"image/audio1.mp4"
  },
  {
    id:2,
    img:"image/cute.jfif",
    audio:"image/audio2.mp4"
  },
  {
    id:3,
    img:"image/hero.jpg",
    audio:"image/audio3.mpeg"
  }

]



playBtn.addEventListener("click",function(){
imgArea.setAttribute("src",list[1].img);
audiofile.setAttribute("src",list[1].audio);
pauseBtn.style.display="block";
playBtn.style.display="none";
  audiofile.play();
  console.log("play");
  
})
pauseBtn.addEventListener("click",function(){
  audiofile.pause();
  console.log("pause");
  pauseBtn.style.display="none";
  playBtn.style.display="block";
})
backBtn.addEventListener("click",function(){
   let def=list[0].id;
   def--;
   let newImg=list[def].img;
   let newAud=list[def].audio;
   imgArea.setAttribute("src",newImg);
audiofile.setAttribute("src",newAud);
audiofile.play();
})

frwBtn.addEventListener("click",function(){
  let def=list[0].id;
  def++;
  let newImg=list[def].img;
  let newAud=list[def].audio;
  imgArea.setAttribute("src",newImg);
audiofile.setAttribute("src",newAud);
audiofile.play();
console.log("fore")
})