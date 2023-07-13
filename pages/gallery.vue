<template>
    <div>
    <div class="mt-10 w-full max-h-screen overflow-y-scroll h-screen text-center px-5 lg:px-8 mx-auto">
      <h1 class="text-8xl text-[#5D794F] font-bold">{{ galleryTitle }}</h1>
        <ul class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 w-full">
          <li v-for="(item, index) in images" :key="index">
            <div
              class="lg:inline-block relative cursor-pointer"
              @click="lightboxOpen(item.link, item.caption, index, $event)"
              v-bind:class="{ active: active == index }"
            >
              <img
                :src="item.link"
                :srcset="item.link"
                :alt="item.caption"
                :class="{ 'animate-fade-in': active == index }"
                class="w-full rounded object-contain lg:max-w-sm lg:max-h-72"
              />
            </div>
          </li>
        </ul>
  
        <div id="overlay" @click.self="closeOverlay" v-on:keyup="keyBoardShortcuts(e)">
          <div class="holder">
            <img id="overlay_image" />
            <div class="nav">
              <div id="close" nohref v-on:click="closeOverlay"><span>×</span></div>
              <div style="position:absolute; top:50%;" v-if="lightIndex > 0" id="prev" nohref v-on:click="cyclePrev"><span>←</span></div>
              <div style="position:absolute; top:50%;" v-if="lightIndex < images.length-1" id="next" nohref v-on:click="cycleNext"><span>→</span></div>
            </div>
            <p id="overlay_caption"></p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Gallery',
    data() {
      return {
        galleryTitle: 'LaTerra Gallery',
        showNav: 1,
        keyBoardNav: 1,
        showcaption: 1,
        loop: 1,
        images: [
            { link: require('~/assets/img/Gal2.png'), caption: 'LaTerra', active: 0 },
            { link: require('~/assets/img/Gal3.png'), caption: 'LaTerra', active: 0 },
            { link: require('~/assets/img/Gal4.png'), caption: 'LaTerra', active: 0 },
            { link: require('~/assets/img/Gal5.png'), caption: 'LaTerra', active: 0 },
            { link: require('~/assets/img/Gal6.jpg'), caption: 'LaTerra', active: 0 },
            { link: require('~/assets/img/Gal7.jpg'), caption: 'LaTerra', active: 0 },
            { link: require('~/assets/img/Gal8.jpg'), caption: 'LaTerra', active: 0 },
            { link: require('~/assets/img/Gal9.jpg'), caption: 'LaTerra', active: 0 },
        ],
        allowKeyboard: 1,
        imageIndex: 0,
        active: 0,
        lightIndex: 0,
      };
    },
    mounted() {
      window.addEventListener('keyup', (e) => {
        if (this.allowKeyboard === 1) {
          if (e.keyCode === 37) {
            this.cyclePrev();
          } else if (e.keyCode === 39) {
            this.cycleNext();
          } else if (e.keyCode === 27) {
            document.getElementById('overlay').style.display = 'none';
            this.allowKeyboard = 0;
          }
        }
      });
    },
    methods: {
      lightboxOpen(href, caption, index, event) {
        event.preventDefault();
        document.getElementById('overlay_image').src = href;
        document.getElementById('overlay_caption').innerHTML = caption;
        this.allowKeyboard = 1;
        document.getElementById('overlay').style.display = 'block';
        this.lightIndex = index;
        this.imageIndex = index;
        this.active = index;
      },
      closeOverlay() {
        document.getElementById('overlay').style.display = 'none';
        this.allowKeyboard = 0;
      },
      cycleNext() {
        if (this.imageIndex < this.images.length) {
            this.lightIndex ++
          var nextActiveImage = document.querySelector('.active')
            .parentElement.nextSibling.querySelector('img');
            
          nextActiveImage.click();
        } else if (this.loop == 1) {
          var firstActiveImage = document.querySelector('.imageGallery')
            .querySelector('li')
            .querySelector('img');
            this.lightIndex ++
          firstActiveImage.click();
        }
      },
      cyclePrev() {
        if (this.imageIndex > 0) {
          var prevActiveImage = document.querySelector('.active')
            .parentElement.previousSibling.querySelector('img');
            this.lightIndex --
          prevActiveImage.click();
        } else if (this.loop == 1) {
          var lastActiveImage = document.querySelector('.imageGallery')
            .querySelectorAll('li');
          var lastChild = lastActiveImage[lastActiveImage.length - 1].querySelector(
            'img'
          );
          this.lightIndex --
          lastChild.click();
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .animate-fade-in {
    animation: fade-in 0.5s ease-in-out;
  }
  
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  
  .imageGallery {
    list-style: none;
    margin: 0 auto;
    padding: 0;
    display: block;
    max-width: 780px;
    text-align: center;
  
    li {
      display: inline-block;
      padding: 8px;
      background: ghostwhite;
      margin: 10px;
    }
  
    img {
      display: block;
      width: 200px;
    }
  }
  
  #overlay {
    display: none;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.9);
    text-align: center;
    padding: 20px;
    box-sizing: border-box;
  }
  
  .holder {
    max-width: 600px;
    margin: 0 auto;
    position: relative;
  }
  
  img {
    width: 100%;
    max-width: 600px;
    cursor: pointer;
    box-sizing: border-box;
    display: block;
  }
  
  p {
    color: #ffffff;
    margin: 0;
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    box-sizing: border-box;
    padding: 10px;
  }
  
  .nav {
    max-width: 600px;
    margin: 0 auto;
    font-size: 14px;
  }
  
  div[id="next"],
  div[id="prev"],
  div[id="close"] {
    color: white;
    opacity: 0.3;
    cursor: pointer;
  }
  
  div[id="next"]:hover,
  div[id="prev"]:hover,
  div[id="close"]:hover {
    opacity: 1;
  }
  
  div[id="close"] {
    right: 10px;
    top: 0;
    font-size: 30px;
    opacity: 0.6;
    z-index: 1000000;
    position: absolute;
    text-align: left;
    box-sizing: border-box;
  }
  
  div[id="next"],
  div[id="prev"] {
    position: absolute;
    top: 0;
    bottom: 0;
    padding: 10px;
    width: 50%;
    box-sizing: border-box;
    font-size: 40px;
  }
  
  div[id="next"] {
    right: 0;
    text-align: right;
  }
  
  div[id="prev"] {
    left: 0;
    text-align: left;
  }
  
  /* Responsive Styling */
  @media (max-width: 640px) {
    ul.grid {
      grid-template-columns: 1fr;
    }
    li {
      margin-bottom: 1rem;
    }
  }
  </style>
  