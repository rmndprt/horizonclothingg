var imgs=document.getElementsByClassName('photo');

for(var i=0;i<imgs.length;i++){
  imgs[i].onmouseenter=function(e){
    e.target.src="medias/dos.png";
  }

  imgs[i].onmouseout=function(e){
   e.target.src="medias/"+e.target.dataset.src;
  }
}


var imgs=document.getElementsByClassName('pull1');

for(var i=0;i<imgs.length;i++){
  imgs[i].onmouseenter=function(e){
    e.target.src="medias/2pulldos.png";
  }

  imgs[i].onmouseout=function(e){
   e.target.src="medias/"+e.target.dataset.src;
  }
}

var imgs=document.getElementsByClassName('pull2');

for(var i=0;i<imgs.length;i++){
  imgs[i].onmouseenter=function(e){
    e.target.src="medias/3pulldos.png";
  }

  imgs[i].onmouseout=function(e){
   e.target.src="medias/"+e.target.dataset.src;
  }
}


var imgs=document.getElementsByClassName('pull3');

for(var i=0;i<imgs.length;i++){
  imgs[i].onmouseenter=function(e){
    e.target.src="medias/1pulldos.png";
  }

  imgs[i].onmouseout=function(e){
   e.target.src="medias/"+e.target.dataset.src;
  }
}
