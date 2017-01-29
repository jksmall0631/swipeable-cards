class Card{
  constructor(){
    this.cards = document.querySelectorAll('.card');
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
    this.update = this.update.bind(this);
    this.target = null;
    this.startX = 0;
    this.currentX = 0;
    this.addEventListeners();

    requestAnimationFrame(this.update);
  }

  addEventListeners(){
    document.addEventListener('touchstart', this.onStart);
    document.addEventListener('touchmove', this.onMove);
    document.addEventListener('touchend', this.onEnd);
  }

  onStart(e){
    if(!e.target.classList.contains('card')){
      return;
    }
    this.target = e.target;
    this.startX = e.pageX || e.touches[0].pageX;
    this.currentX = this.startX;
    this.target.style.willChange = 'transform';
    e.preventDefault();
  }

  onMove(e){
    if(!this.target){
      return;
    }
    this.currentX = e.pageX || e.touches[0].pageX;

  }

  onEnd(){
    if(!this.target){
      return;
    }

  }

  update(){
    requestAnimationFrame(this.update);
    if(!this.target){
      return;
    }
    if(this.draggingCard){
    this.screenX = this.currentX - this.startX;
    }
    this.target.style.transform = `translateX(${screenX}px)`;
  }
}

window.addEventListener('load', () => new Card());
