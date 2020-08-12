class SlideStories {
  constructor(id){
    this.slide = document.querySelector(`[data-slide="${id}"]`);
    this.active = 0;

    this.init();
  }

  activeSlide(index){
    this.active = index;
    this.items.forEach(item => item.classList.remove('active'));
    this.items[index].classList.add('active');

    this.thumbItems.forEach(item => item.classList.remove('active'));
    this.thumbItems[index].classList.add('active');

    this.autoSlide();
  }

  next(){
    let target = 0;
    if(this.active < this.items.length - 1){
      target = this.active + 1;
    }
    
    this.activeSlide(target);
  }

  prev(){
    let target = this.items.length - 1;
    if(this.active > 0){
      target = this.active - 1;
    }

    this.activeSlide(target);
  }

  addNavigation(){
    const nextBtn = this.slide.querySelector('.slide-next');
    const prevBtn = this.slide.querySelector('.slide-prev');
    nextBtn.addEventListener('click', this.next);
    prevBtn.addEventListener('click', this.prev);
  }

  addThumbItems() {
    this.items.forEach(() => {
      this.thumb.innerHTML += `<span> </span>`;
    });

    this.thumbItems = Array.from(this.thumb.children);
    console.log(this.thumbItems)
  }

  autoSlide(){
    clearTimeout(this.timeout);
    this.timeout = setTimeout(this.next, 5000);
  }

  init(){
    this.items = this.slide.querySelectorAll('.slide-items > *');
    this.thumb = this.slide.querySelector('.slide-thumb');
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);

    this.addThumbItems();
    this.activeSlide(0);
    
    this.addNavigation();
  }
}

new SlideStories('slide');