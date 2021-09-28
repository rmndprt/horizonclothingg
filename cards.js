var imgs=document.getElementsByClassName('photo');

for(var i=0;i<imgs.length;i++){
  imgs[i].onmouseenter=function(e){
    e.target.src="medias/dos.png";
  }

  imgs[i].onmouseout=function(e){
   e.target.src="medias/"+e.target.dataset.src;
  }
}
