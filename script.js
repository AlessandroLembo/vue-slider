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
        },
        
        goToNextImage(){
            this.index++;
        }
    } 
});

app.mount('#root');



// Array di oggetti che comporranno il carosello.
// const data = [
//     {
//       image: 'img/01.webp',
//       title: 'Marvel\'s Spiderman Miles Morale',
//       text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
//     }, {
//       image: 'img/02.webp',
//       title: 'Ratchet & Clank: Rift Apart',
//       text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
//     }, {
//       image: 'img/03.webp',
//       title: 'Fortnite',
//       text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
//     }, {
//       image: 'img/04.webp',
//       title: 'Stray',
//       text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
//     }, {
//       image: 'img/05.webp',
//       title: "Marvel's Avengers",
//       text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
//     }
//   ];

  
//   // Recupero gli elementi dalla pagina.
//   const carousel = document.getElementById('carousel');
//   const thumbElement = document.getElementById('thumb');
//   const buttonPrev = document.getElementById('prev-image');
//   const buttonNext = document.getElementById('next-image');
//   const buttonAutoplay = document.getElementById('btn-autoplay');
//   const buttonReverseAutoplay = document.getElementById('btn-reverse-autoplay');
  
  
//   // Dichiaro una variabile che segni l'inidce relativo alle immagini.
//   let index = 0;
  
//   // FUNZIONI
//   // Funzione per cambiare immagine
//   const changePic = target => {
  
//     carouselElements[index].classList.remove('active');
//     thumbImages[index].classList.remove('selected');
  
//     if (target === 'next-image') {
//       index++;
  
//       if (index === carouselElements.length) index = 0;
  
//     } else if (target === 'prev-image') {
//       index--;
  
//       if (index < 0) index = carouselElements.length - 1;
//     } else {
//       index = target; 
//     }
  
//     carouselElements[index].classList.add('active');
//     thumbImages[index].classList.add('selected');
    
//   }
  
  
//   // Dichiaro una variabile per lo scorrimento automatico delle immagini.
//   let autoplay;
  
  
//   // Funzione per far partire l'autoplay.
//   const startAutoplay = (direction) => {
//     autoplay = setInterval(() => {
  
//     changePic(direction);
//   }, 3000); 
//   }
  
  
//   // Funzione per stoppare l'autoplay.
//   const stopAutoplay = () => {
//     clearInterval(autoplay);
//     isPlaying = false;
    
//     buttonAutoplay.innerText = 'Resume';
//   }
  
  
//   // Creazione immagini, testo slider e thumbnails.
//   let images = '';
//   let thumb = '';
  
//   for (let i = 0; i < data.length; i++){
//       images += ` 
//                   <div class="gallery">
//                     <img src= ${data[i].image} alt="webp"> 
//                     <div class="title">
//                       <h1>${data[i].title}</h1>
//                       <p>${data[i].text} </p> 
//                     </div>   
//                   </div>   
//                 `;
  
//       thumb += `<img src= ${data[i].image} alt="webp">`;          
//   }
  
//   // Stampa immagini in pagina.
//   carousel.innerHTML = images;
//   thumbElement.innerHTML = thumb;
  
  
//   // Recupero le immagini create.
//   const carouselElements = document.querySelectorAll('#carousel .gallery');
//   const thumbImages = document.querySelectorAll('#thumb img');
  
  
//   // Aggiungo la classe 'active' alle immegini e la classe 'selected' ai thumbs.
//   carouselElements[index].classList.add('active');
//   thumbImages[index].classList.add('selected');
  
  
//   // Dichiaro una variabile per salvare la direzione dello scorrimento automatico.
//   let direction = 'next-image';
  
  
//   // Invoco la funzione di autoplay.
//   startAutoplay(direction);
  
  
//   // Dichiaro una variabile con cui controllare la funzionalità del buttonAutoplay.
//   let isPlaying = true;
  
  
//   // Attivazione button Start/Resume Autoplay.
//   buttonAutoplay.addEventListener('click', function(){
    
//     isPlaying = !isPlaying;
  
//     if(!isPlaying){
//       buttonAutoplay.innerText = 'Resume';
//       clearInterval(autoplay);
//     } else {
//       buttonAutoplay.innerText = 'Stop';
//       startAutoplay(direction);
//     }
  
//   });
  
  
//   // Attivazione button per cambiare la direzione di scorrimento autoplay.
//   buttonReverseAutoplay.addEventListener('click', function(){
    
//     clearInterval(autoplay);
  
//     direction = direction === 'next-image' ? 'prev-image' : 'next-image';
  
//     startAutoplay(direction);
//     buttonAutoplay.innerText = 'Stop';
//     isPlaying = true;
//   })
  
  
//   // Attivazione buttons con 2 event listener.
//   buttonNext.addEventListener('click', function (){
//     stopAutoplay(); 
   
//     changePic('next-image');
//   });
  
//   buttonPrev.addEventListener('click', function (){
//     stopAutoplay();
  
//     changePic('prev-image');
//   });
  
  
//   // Attivazione "click" alle immagini thumb.
//   for (let i = 0; i < thumbImages.length; i++){
  
//     const imgThumb = thumbImages[i];
  
//     imgThumb.addEventListener('click', function(){
//       stopAutoplay();
      
//       changePic(i);
//     })
//   }
  