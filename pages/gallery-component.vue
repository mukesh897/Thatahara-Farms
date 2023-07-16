<template>
    <div>
      <div class="gallery">
        <div class="gallery__filler"></div>
        <div class="gallery__filler"></div>
        <label v-for="i in 13" :for="i" class="gallery__item" :class="{ active: selected === i }">
          <img
            :src="`https://source.unsplash.com/random/400x400?bear,cat&v=${Math.floor(20 * Math.random() + i)}`"
            alt="Something random"
          />
        </label>
      </div>
    </div>
  </template>
  
  
  <style scoped>
  * {
    box-sizing: border-box;
    animation: fadeIn 0.5s;
  }
  
  body {
    background: linear-gradient(65deg, black, black 20%, rebeccapurple);
    display: grid;
    width: 100vw;
    padding-top: 20px;
    margin: 0;
  }
  
  @media (min-width: 768px) {
    body {
      align-content: center;
      padding: 20px;
    }
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  img {
    height: 100%;
    width: 100%;
    min-height: 50px;
    object-fit: cover;
  }
  
  .gallery {
    display: grid;
    justify-content: center;
    grid-gap: 20px;
    grid-template-columns: repeat(2, 100px) minmax(200px, 800px) repeat(2, 100px);
    grid-template-rows: repeat(5, 100px);
  }
  
  @media (max-width: 768px) {
    .gallery {
      grid-gap: 10px;
      grid-template-columns: repeat(auto-fit, 50px);
      grid-template-rows: 300px repeat(auto-fit, 50px);
    }
  }
  
  .gallery__filler {
    grid-column: span 2;
  }
  
  @media (max-width: 768px) {
    .gallery__filler {
      display: none;
    }
  }
  
  .gallery__item {
    cursor: pointer;
    border-radius: 5px;
    grid-row: span 1;
    grid-column: span 1;
    transition: transform 0.1s ease-in-out;
  }
  
  .gallery__item:hover {
    transform: scale(1.1) rotate(5deg);
  }
  
  .gallery__select {
    display: none;
  }
  
  /* Insert the following loop in your script tag in the Vue component */
  
  </style>

<script>
export default {
  data() {
    return {
      selected: 1
    };
  }
};
</script>
  