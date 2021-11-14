document.querySelector('.grid').addEventListener('mouseover', function(e){
  e.preventDefault();
  if(e.target.tagName === 'IMG'){
   
    let element = document.createElement('div');
    element.className = 'preview';
    e.target.parentNode.appendChild(element);
    let image = document.createElement('img');
    let imgLoc = e.target.src;
    image.src = imgLoc.substr(0, imgLoc.length - 7) + '.jpg';
    element.appendChild(image);
    element.style.left = e.offsetX + 15 + 'px';
    element.style.top = e.offsetY + 15 + 'px';

    this.addEventListener('mouseout', function handler(a){
      let myNode = a.target.parentNode.querySelector('div.preview')
      myNode.parentNode.removeChild(myNode);
      this.removeEventListener('mouseout', handler, false)
    }, false)

    this.addEventListener('mousemove', function(f){
      element.style.left = f.offsetX + 15 + 'px'
      element.style.top = f.offsetY + 15 + 'px'
    })
  }
},false)