<template>
    <div>
      <b-carousel
        id="gallery-carousel"
        v-model="activeSlide"
        :interval="carouselInterval"
        controls
        indicators
        fade
        img-width="1024"
        img-height="480"
      >
        <b-carousel-slide v-for="(image, index) in images" :key="index">
          <img :src="image.src" :alt="image.alt" class="d-block w-100">
        </b-carousel-slide>
      </b-carousel>
  
      <b-lightbox :show="lightboxShow" :images="lightboxImages" @close="lightboxShow = false"></b-lightbox>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeSlide: 0,
        carouselInterval: 5000,
        lightboxShow: false,
        lightboxImages: [],
        images: [
          { src: 'path/to/image1.jpg', alt: 'Image 1' },
          { src: 'path/to/image2.jpg', alt: 'Image 2' },
          { src: 'path/to/image3.jpg', alt: 'Image 3' },
          // Add more images as needed
        ],
      };
    },
    mounted() {
      // Prepare lightbox images
      this.lightboxImages = this.images.map((image) => {
        return {
          src: image.src,
          caption: image.alt,
        };
      });
    },
  };
  </script>
  