console.log('Vue js', Vue);

/*
TRACCIA: 
Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa 
volta usando Vue.
Vi ricordo le funzionalità minime
Deve vedersi un'immagine grande che è l'immagine principale
Devono vedersi i thumbnails
Il thumbnails che corrisponde all'immagine grande deve essere graficamente messo 
in risalto con una classe active
Deve essere possibile cambiare l'immagine principale con le freccette prev e next
Bisogna fare in modo che il carosello sia "infinito": se clicco sul next e sono 
all'ultima immagine, ricomincio dalla prima; se sono alla prima immagine e clicco 
sul prev vado all'ultima.
Bonus:
1- al click su una thumb, visualizzare in grande l'immagine corrispondente
2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere 
quando esce.
*/


const app = Vue.createApp({
    data(){
        return{
            index : 0,
            autoplay: null,
            direction: null,
            isPlaying: true,
            textButton: 'STOP',
            images: [
                {
                  image: 'img/01.webp',
                  title: 'Marvel\'s Spiderman Miles Morale',
                  text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                  image: 'img/02.webp',
                  title: 'Ratchet & Clank: Rift Apart',
                  text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                  image: 'img/03.webp',
                  title: 'Fortnite',
                  text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                  image: 'img/04.webp',
                  title: 'Stray',
                  text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                  image: 'img/05.webp',
                  title: "Marvel's Avengers",
                  text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
              ]
        }
    },

    methods: {
        goToPrevImage(){
            this.index--;
            this.returnToLastImage();
        },
        
        goToNextImage(){
            this.index++;
            this.returnToFirstImage();    
        },

        returnToFirstImage(){
            if(this.index === this.images.length) this.index = 0;

        },

        returnToLastImage(){
            if(this.index < 0) this.index = this.images.length - 1;

        },

        setToClickedImage(i){
            this.index = i;
        },

        startAutoplay(){
          this.direction = true;
          this.autoplay = setInterval(this.goToNextImage, 3000);
        },
        
        stopAutoplay(){
          clearInterval(this.autoplay);
        },
        
        // method to change direction of autoplay
        changeDirection(){
          this.stopAutoplay();
        
          this.direction === false ? this.direction = true : this.direction = false;
        
          if (this.direction === false){
           this.autoplay = setInterval(this.goToPrevImage, 3000);
         } else {
           this.autoplay = setInterval(this.goToNextImage, 3000);
          
         }
        },

        // method for button to start/resume autoplay
        stopAndGo(){
          this.isPlaying = !this.isPlaying;
         
          if (!this.isPlaying){
            clearInterval(this.autoplay);
            this.textButton = 'RESUME';
          } else {
            this.startAutoplay();
            this.textButton = 'STOP';
          }
        }


    },
    
    mounted(){
      this.startAutoplay();
    }
});

app.mount('#root');

