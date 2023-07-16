<template>
  <div class="w-full">
    <!-- Hero section -->
      <div v-b-modal.modal-1 class="bt">
        <button type="button" class="border-0 px-4 py-2 text-white fs-md-5 font-bold text-[1rem] enq-btn" data-bs-toggle="modal" data-bs-target="#enquire_form_popup">ENQUIRE NOW</button>
       </div>
        <div class="relative max-w-full shadow col-span-12 overflow-hidden">
          <b-carousel
            class="bg-white"
            id="carousel-1"
            v-model="slide"
            :interval="4000"
            controls
            indicators
            background="#ababab"
            img-width="1024"
            img-height="480"
            style="text-shadow: 1px 1px 2px #333;"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
          >
            <!-- Text slides with image -->
            <b-carousel-slide
            >
            <template #img>
                <div class="lg:flex block lg:justify-between">
                  <img
                    class="d-block img-fluid w-100 lg:w-1/2"
                    width="1024"
                    height="480"
                    src="~/assets/img/new/7.JPG"
                    srcset="~/assets/img/new/7.JPG"
                    alt="image slot"
                  >
                  <img
                    class="d-block img-fluid w-100 lg:pl-4 bg-white lg:w-1/2"
                    width="1024"
                    height="480"
                    src="~/assets/img/new/10.JPG"
                    srcset="~/assets/img/new/10.JPG"
                    alt="image slot"
                  >
                </div>
              
              </template>
           
            
          </b-carousel-slide>

            <!-- Slides with custom text -->
            <b-carousel-slide
            >
            <template #img>
                <div class="lg:flex lg:justify-between">
                  <img
                    class="d-block img-fluid lg:w-1/2  "
                    width="1024"
                    height="480"
                    src="~/assets/img/new/13.JPG"
                    srcset="~/assets/img/new/13.JPG"
                    alt="image slot"
                  >
                  <img
                    class="d-block img-fluid w-100 lg:pl-4 bg-white lg:w-1/2"
                    width="1024"
                    height="480"
                    src="~/assets/img/new/14.JPG"
                    srcset="~/assets/img/new/14.JPG"
                    alt="image slot"
                  >
                </div>
              
              </template>
           
            </b-carousel-slide>

            <!-- Slides with image only -->
            <!-- <b-carousel-slide
            >
            <template #img>
              <img
                  class="d-block img-fluid w-100 "
                  width="1024"
                  height="480"
                  src="~/assets/img/C3.png"
                  srcset="~/assets/img/C3.png"
                  alt="image slot"
                >
            </template>
            <div class="">
              <h1 style="font-size: 48px;" class="font-bold">A perfect weekend getaway</h1>
              <p class="mt-4 font-bold"></p>
            </div>
            </b-carousel-slide> -->

            <!-- Slides with img slot -->
            <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
            <!-- <b-carousel-slide>
              <template #img>
                <img
                  class="d-block img-fluid w-100"
                  width="1024"
                  height="480"
                  src="~/assets/img/C4.png"
                  srcset="~/assets/img/C4.png"
                  alt="image slot"
                >
              </template>
              <div class="">
              <h1 style="font-size: 48px;" class="font-bold"></h1>
              <p class="mt-4 font-bold"></p>
            </div>
            </b-carousel-slide> -->

            <!-- Slide with blank fluid image to maintain slide aspect ratio -->
            <!-- <b-carousel-slide>
              <template #img>
                <img
                  class="d-block img-fluid w-100"
                  width="1024"
                  height="480"
                  src="~/assets/img/C5.png"
                  srcset="~/assets/img/C5.png"
                  alt="image slot"
                >
              </template>
              <div class="">
              <h1 style="font-size: 48px;" class="font-bold">Hottest Investment Zone</h1>
              <p class="mt-4 font-bold"></p>
              </div>   
            </b-carousel-slide> -->
          </b-carousel>
          <div class="flex justify-between custom-pad py-4">
              <div>
                <h1 style="" class="font-medium lg:text-2xl font-[Cinzel] uppercase">Limited Edition</h1>
                <p class="mt-1 font-bold text-2xl font-[Cinzel] uppercase"> LA TERRA FARMS</p>
              </div>
              <div class="hidden lg:block">
                <p class="mt-1 font-bold lg:text-2xl font-[Cinzel] uppercase">A green living Project</p>
              </div>
              <div>
              <div class="bg-black px-2 py-1">
                <h1 style="" class="font-medium lg:text-2xl font-[Cinzel] text-white uppercase">LUXURY FARMHOUSES</h1>
              </div>
              <div class="bg-black mt-1 px-2 py-1">
                <h1 style="" class="font-bold lg:text-2xl font-[Cinzel] uppercase text-white"> ₹ 35 LAC ONWARDS </h1>
              </div>
              </div>
             
          </div>
        </div>

    <!-- Crypto statistic section -->
    <!-- <section
      class="max-w-screen-xl mx-2 sm:mx-auto lg:px-4 sm:px-6 lg:px-0 py-6 pb-20 sm:py-8 rounded-[2.25rem] sm:rounded-xl bg-white shadow-lg sm:shadow-md transform lg:-translate-y-12"
    >
      <div class="w-full flex flex-col lg:flex-row items-center justify-center">
        <LandingCryptoStatistic
          data-aos="fade-up"
          title="🔥 Trending"
          :datasets="trendings"
          class="xl:border-r border-gray-200 lg:px-8"
        />
        <LandingCryptoStatistic
          data-aos="fade-up"
          data-aos-delay="150"
          title="🚀 Top Gainers"
          :datasets="topGainers"
          class="xl:border-r border-gray-200 lg:px-8"
        />
        <LandingCryptoStatistic
          data-aos="fade-up"
          data-aos-delay="300"
          title="💎 Recently Added"
          :datasets="recents"
          class="lg:px-8"
        />
      </div>
    </section> -->

    <!-- Choose Best Properties -->

    <!-- Partners section -->
    <!-- <section class="bg-partner relative max-w-full sm:mx-6 my-24 shadow sm:rounded-2xl overflow-hidden">
      <div class="w-full px-6 sm:px-0 py-16 flex flex-col items-center justify-center space-y-4 text-center">
        <h3 data-aos="flip-down" class="text-2xl text-neutral-800 font-semibold">Trusted Partners Worldwide</h3>
        <p data-aos="flip-down" class="paragraph">We're partners with countless major organisations around the globe</p>
        <div data-aos="fade-up" class="flex flex-wrap items-center justify-center">
          <LandingPartnerImage
            v-for="img in ['clever.png', 'diamon-cutts.png', 'swiss-finance.png', 'gambio.png']"
            :key="img"
            :img="img"
          />
        </div>
      </div>
    </section> -->

    

    <!-- Credit card section -->
    <section id="about" class="bg-trading-tools px-0 mx-0 relative max-w-full sm:mx-4 lg:py-12 pt-12 pb-0 rounded-2xl overflow-hidden">
      <BaseSection data-aos="flex items-center px-0">
        <div class="col-span-12 lg:col-span-7">
          <div class="w-full">
            <img :src="require('~/assets/img/new/1.JPG')" class="w-full lg:h-[495px]  rounded-r-[71px]" alt="" height="500px" width="450px"/>
          </div>
        </div>
        <div class="col-span-12 w-full h-full flex items-center lg:col-span-5 lg:space-y-6 space-y-3 lg:px-0 sm:px-6">
          <div class="bg-white rounded-l-[71px] lg:ml-[-100px] px-5 py-12  h-max">
            <h2 class="text-2xl uppercase font-medium font-[Cinzel]">
              La Terra Farms
            </h2>
            <p class="font-normal mt-2 text-[16px] lg:w-[97%] font-poppins tracking-normal text-justify leading-normal font-[Raleway]">
              Welcome to the epitome of countryside living! Situated at the epicenter of all the action, 'la terra' farm plots are nestled in the heart of a picturisque landscape. We invite you to embark on a journey that celebrates the beauty of nature, the tranquility of open spaces, and the timeless allure of farming. 'La terra' offers an extraordinary opportunity to own a piece of land and embrace a life filled with abundance, growth and fulfillment.
              An exclusive community of bountiful farmland adjacent to NH44 highway. Located amidst rolling hills, gushing water stream, where the fragrance of blooming wildflowers dances on the breeze and where the earth sings it's song of abundance.

            </p>
          </div>

          <!-- <ul class="space-y-4 sm:space-y-2">
            <LandingListItem title="Up to 3% back on purchases" />
            <LandingListItem title="Earn rewards in bitcoin or any crypto on NEFA" />
            <LandingListItem title="No annual fee" />
          </ul> -->
        </div>
      </BaseSection>
    </section>

    <section class="px-0 mx-0 relative max-w-full sm:mx-4 lg:mt-10 lg:py-12 pt-12 pb-0 rounded-2xl overflow-hidden">
      <BaseSection data-aos="fade-down flex items-center px-0">
        <div class="col-span-12 w-full h-full flex items-center lg:col-span-5 lg:space-y-6 space-y-3 lg:px-0 sm:px-6">
          <div class="bg-white z-10 rounded-r-[71px] lg:mr-[-100px] px-5 py-12  h-max">
            <h2 class="text-2xl uppercase font-medium font-[Cinzel]">
              WHAT WE OFFER
            </h2>
            <p class="font-normal mt-2 text-[16px] lg:w-[97%] font-poppins tracking-normal text-justify leading-normal font-[Raleway]">
              We are absolutely thrilled to offer you the option of building a farm house on the plot. If you desire a tranquil countryside retreat, our skilled team is ready to create a custom-designed farm house that harmonizes with the natural surroundings. From spacious interiors to functional barns and expansive outdoor spaces, we'll work closely with you to bring your ideal farm house to fruition. Your vision, combined with our expertise, will result in a picturesque farm house where you can enjoy the serenity of rural living.

            </p>
          </div>

          <!-- <ul class="space-y-4 sm:space-y-2">
            <LandingListItem title="Up to 3% back on purchases" />
            <LandingListItem title="Earn rewards in bitcoin or any crypto on NEFA" />
            <LandingListItem title="No annual fee" />
          </ul> -->
        </div>
        <div class="col-span-12 lg:col-span-7">
          <div class="w-full">
            <img :src="require('~/assets/img/new/4.JPG')" class="w-full lg:h-[495px]  rounded-l-[71px]" alt="" height="500px" width="450px"/>
          </div>
        </div>
        
      </BaseSection>
    </section>

    <section id="philosophy" class="bg-trading-tools px-0 mx-0 relative max-w-full sm:mx-4 mt-10 py-12 rounded-2xl overflow-hidden">
      <BaseSection data-aos="fade-down flex items-center px-0">
        <div class="col-span-12 lg:col-span-7">
          <div class="w-full">
            <img :src="require('~/assets/img/new/8.JPG')" class="w-full lg:h-[495px]  rounded-r-[71px]" alt="" height="500px" width="450px"/>
          </div>
        </div>
        <div class="col-span-12 w-full h-full flex items-center lg:col-span-5 lg:space-y-6 space-y-3 lg:px-0 sm:px-6">
          <div class="bg-white rounded-l-[71px] lg:ml-[-100px] px-5 py-12  h-max">
            <h2 class="text-2xl uppercase font-medium font-[Cinzel]">
              Close Proximity To
            </h2>
            <p class="font-normal mt-2 text-[16px] lg:w-[97%] font-poppins tracking-normal text-justify leading-normal font-[Raleway]">
              Welcome to the epitome of countryside living! Situated at the epicenter of all the action.</br>
              • Kempegowda International Airport Bangalore: 70 min</br>
              • Isha Foundation Chikkaballapura: 25 min</br>
              • Super Speciality Hospital at Puttaparthi: 20 min (45 KMS)</br>
              • Nandi Hills: 45 min</br>
              • Golf Course: 20 min</br>
              • Kia Factory: 25 min</br>

            </p>
          </div>

          <!-- <ul class="space-y-4 sm:space-y-2">
            <LandingListItem title="Up to 3% back on purchases" />
            <LandingListItem title="Earn rewards in bitcoin or any crypto on NEFA" />
            <LandingListItem title="No annual fee" />
          </ul> -->
        </div>

        <div id="design" class="w-full col-span-12 lg:mt-20 mt-10">
          <h2 class="text-2xl text-center uppercase font-medium font-[Cinzel]">
              Design
          </h2>
          <div class="w-full mt-10 lg:flex justify-evenly">
            <div>
              <b-card
                title="FARMHOUSES SURROUNDED BY GREENERY"
                img-src="~/assets/img/new/10.JPG"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-4 rounded-t-3xl mx-auto"
              >
                <b-card-text>
                 Immerse yourself in a world of exquisite beauty and natural splendor at La Terra, where the latest concept of "Second Living" comes to life. Step into a magical realm where world-class architecture seamlessly blends with the surrounding landscape, offering a truly enchanting experience.
                </b-card-text>

                
              </b-card>
            </div>
            <div>
              <b-card
                title="WHERE NATURE MEETS PRIVACY"
                img-src="~/assets/img/new/13.JPG"
                img-alt="Image"
                img-bottom
                tag="article"
                style="max-width: 20rem;"
                class="mb-4 rounded-b-3xl  mx-auto"
              >
                <b-card-text>
                  Escape to a new world of serenity at La Terra, where the allure of nature and utmost privacy converge. Our private farmhouses offer a tranquil haven dedicated to rest and relaxation. Seamlessly blending with the surrounding natural beauty, each farmhouse is nestled within its own verdant sanctuary, ensuring unparalleled seclusion.
                </b-card-text>

                
              </b-card>
            </div>
            <div>
              <b-card
                title="A SEAMLESS BLEND OF BEAUTY AND LUXURY"
                img-src="~/assets/img/new/5.JPG"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-4 rounded-t-3xl  mx-auto"
              >
                <b-card-text class="font-[Raleway]">
                  Embark on a journey of refined living and natural enchantment at La Terra, where a captivating vision of "Second Living" unfolds. Prepare to be swept away by a magical experience that seamlessly merges world-class architecture and breathtaking landscaping.
                </b-card-text>

                
              </b-card>
            </div>
          </div>
        </div>
      </BaseSection>
    </section>
    
    <section  class="py-4  bg-main lr-sec bg-white" id="amenities">
      <div class="container px-0">
        <h2 class="text-2xl text-center uppercase font-medium font-[Cinzel]">
              Amenities
          </h2>
          <div class="hidden lg:block">
            <div class="row py-5">
            <div class="col-md-4 col-6 text-center">
               <img :src="require('~/assets/img/land-clearing.svg')" alt="Villa" class="w-20 h-20 pb-2 mx-auto">
               <h3 class="elementor-image-box-title">Land Clearning</h3>
            </div>
            <div class="col-md-4 col-6 text-center">
               <img :src="require('~/assets/img/street-light.svg')" alt="Villa" class="w-20 h-20 pb-2 mx-auto">
               <h3 class="elementor-image-box-title">Street L:ghts</h3>
            </div>
            <div class="col-md-4 col-6 text-center">
               <img :src="require('~/assets/img/water-connection.svg')" alt="Villa" class=" w-20 h-20 pb-2 mx-auto">
               <h3 class="elementor-image-box-title">Water Connection</h3>
            </div>
         </div>
         <div class="row pb-5">
            <div class="col-md-4 col-6 text-center">
               <img :src="require('~/assets/img/gated-community.svg')" alt="Villa" class="w-20 h-20 pb-2 mx-auto">
               <h3 class="elementor-image-box-title">Gated Community</h3>
            </div>
            <div class="col-md-4 col-6 text-center">
               <img :src="require('~/assets/img/boundary.svg')" alt="Villa" class="w-20 h-20 pb-2 mx-auto">
               <h3 class="elementor-image-box-title">Boundary</h3>
            </div>
            <div class="col-md-4 col-6 text-center">
               <img :src="require('~/assets/img/road.svg')" alt="Villa" class="w-20 h-20 pb-2 mx-auto">
               <h3 class="elementor-image-box-title">Internal Paveroads</h3>
            </div>
          
         </div>
         <div class="row pb-5">
            <div class="col-md-4 col-6 text-center">
               <img :src="require('~/assets/img/farm-maintainence.svg')" alt="Villa" class="w-20 h-20 pb-2 mx-auto">
               <h3 class="elementor-image-box-title">Farm Maintainence</h3>
            </div>
            <div class="col-md-4 col-6 text-center">
               <img :src="require('~/assets/img/exotic-farmhouse.svg')" alt="Villa" class="w-20 h-20 pb-2 mx-auto">
               <h3 class="elementor-image-box-title">Exotic Farmhouse Design</h3>
            </div>
            <div class="col-md-4 col-6 text-center">
               <img :src="require('~/assets/img/cctv.svg')" alt="Villa" class="w-20 h-20 pb-2 mx-auto">
               <h3 class="elementor-image-box-title">CCTV Security</h3>
            </div>
         </div>
         <div class="row">

            <div class="col-md-4 col-6 text-center">
               <img :src="require('~/assets/img/electricity-connection.svg')" alt="Villa" class="w-20 h-20 pb-2 mx-auto">
               <h3 class="elementor-image-box-title">Electricity Connection</h3>
            </div>
            <div class="col-md-4 col-6 text-center">
               <img :src="require('~/assets/img/lush-green-ambience.svg')" alt="Villa" class="w-20 h-20 pb-2 mx-auto">
               <h3 class="elementor-image-box-title">Lush Green Ambience</h3>
            </div>
         </div>
          </div>
          <div>
            <div class="block lg:hidden">
            <div class="row">
            <div class="col-md-3 py-5 col-6 text-center">

               <img :src="require('~/assets/img/land-clearing.svg')" alt="Villa" class="w-20 h-20 pb-2 mx-auto">
               <h3 class="elementor-image-box-title">Land Clearning</h3>
            </div>
            <div class="col-md-3 py-5 col-6 text-center">
               <img :src="require('~/assets/img/street-light.svg')" alt="Villa" class="w-20 h-20 pb-2 mx-auto">
               <h3 class="elementor-image-box-title">Street L:ghts</h3>
            </div>
            <div class="col-md-3 py-5 col-6 text-center">
               <img :src="require('~/assets/img/water-connection.svg')" alt="Villa" class=" w-20 h-20 pb-2 mx-auto">
               <h3 class="elementor-image-box-title">Water Connection</h3>
            </div>
            <div class="col-md-3 py-5 col-6 text-center">
               <img :src="require('~/assets/img/electricity-connection.svg')" alt="Villa" class="w-20 h-20 pb-2 mx-auto">
               <h3 class="elementor-image-box-title">Electricity Connection</h3>
            </div>
         </div>
         <div class="row pb-5">
            <div class="col-md-3 col-6 pb-5 text-center">
               <img :src="require('~/assets/img/gated-community.svg')" alt="Villa" class="w-20 h-20 pb-2 mx-auto">
               <h3 class="elementor-image-box-title">Gated Community</h3>
            </div>
            <div class="col-md-3 col-6 pb-5 text-center">
               <img :src="require('~/assets/img/boundary.svg')" alt="Villa" class="w-20 h-20 pb-2 mx-auto">
               <h3 class="elementor-image-box-title">Boundary</h3>
            </div>
            <div class="col-md-3 col-6 pb-5 text-center">
               <img :src="require('~/assets/img/road.svg')" alt="Villa" class="w-20 h-20 pb-2 mx-auto">
               <h3 class="elementor-image-box-title">Internal Paveroads</h3>
            </div>
            <div class="col-md-3 col-6 pb-5 text-center">
               <img :src="require('~/assets/img/lush-green-ambience.svg')" alt="Villa" class="w-20 h-20 pb-2 mx-auto">
               <h3 class="elementor-image-box-title">Lush Green Ambience</h3>
            </div>
          
         </div>
         <div class="row pb-5">
            <div class="col-md-3 col-6 pb-5 text-center">
               <img :src="require('~/assets/img/farm-maintainence.svg')" alt="Villa" class="w-20 h-20 pb-2 mx-auto">
               <h3 class="elementor-image-box-title">Farm Maintainence</h3>
            </div>
            <div class="col-md-3 col-6 pb-5 text-center">
               <img :src="require('~/assets/img/exotic-farmhouse.svg')" alt="Villa" class="w-20 h-20 pb-2 mx-auto">
               <h3 class="elementor-image-box-title">Exotic Farmhouse Design</h3>
            </div>
            <div class="col-md-3 col-6 pb-5 text-center">
               <img :src="require('~/assets/img/cctv.svg')" alt="Villa" class="w-20 h-20 pb-2 mx-auto">
               <h3 class="elementor-image-box-title">CCTV Security</h3>
            </div>
           
         </div>
          </div>
          </div>
        
         <!-- <div class="row pb-3">
            <div class="col-md-3 col-6 pb-5 text-center d-none">
               <img src="images\steamroom.svg" alt="Villa" class="w-20 h-20 pb-2 mx-auto">
               <h3 class="elementor-image-box-title">Steam &amp; Sauna Rooms</h3>
            </div>
            <div class="col-md-3 col-6 pb-5 text-center">
               <img src="images\Exotic-Plants.png" alt="Villa" class="w-20 h-20 pb-2 mx-auto">
               <h3 class="elementor-image-box-title">Nursery</h3>
            </div>
            <div class="col-md-3 col-6 pb-5 text-center">
               <img src="images\Private-Staff-Quartres.png" alt="Villa" class="w-20 h-20 pb-2 mx-auto">
               <h3 class="elementor-image-box-title">Private Staff Quarters</h3>
            </div>
            <div class="col-md-3 col-6 pb-5 text-center">
               <img src="images\pool.png" alt="Villa" class="w-20 h-20 pb-2 mx-auto">
               <h3 class="elementor-image-box-title">Private Pool with
                  multiple decks &amp; gardens</h3>
            </div>
         </div> -->
      </div>
      
   </section>

   <section  class="py-4  bg-main lr-sec bg-white" id="gallery">
   <div class="w-full col-span-12 lg:mt-20 mt-10">
          <h2 class="text-2xl text-center uppercase font-medium font-[Cinzel]">
              Gallery
          </h2>
          <div class="w-full mt-10 block lg:flex justify-evenly">
            <div class="container">
              <!-- <div class="gallery-wrap">
                <div class="item item-1"></div>
                <div class="item item-2"></div>
                <div class="item item-12"></div>
                <div class="item item-4"></div>
                <div class="item item-5"></div>
                <div class="item item-6"></div>
                <div class="item item-7"></div>
                <div class="item item-8"></div>
                <div class="item item-9"></div>
                <div class="item item-10"></div>
                <div class="item item-11"></div>
                <div class="item item-12"></div>
                <div class="item item-13"></div>
                <div class="item item-14"></div>
                <div class="item item-15"></div>
                <div class="item item-16"></div>
                <div class="item item-17"></div>
              </div> -->
              <b-carousel
                class="bg-white"
                id="carousel-2"
                v-model="slide"
                :interval="4000"
                controls
                indicators
                background="#ababab"
                img-width="1024"
                img-height="480"
                style="text-shadow: 1px 1px 2px #333;"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
              >
            <!-- Text slides with image -->
            <b-carousel-slide
            >
            <template #img>
                <div class="lg:flex block lg:justify-between">
                  <img
                    @click=""
                    class="d-block img-fluid w-100 lg:w-1/2"
                    width="1024"
                    height="480"
                    src="~/assets/img/new/1.JPG"
                    srcset="~/assets/img/new/1.JPG"
                    alt="image slot"
                  >
                  <img
                    class="d-block img-fluid w-100 lg:pl-4 bg-white lg:w-1/2"
                    width="1024"
                    height="480"
                    src="~/assets/img/new/2.JPG"
                    srcset="~/assets/img/new/2.JPG"
                    alt="image slot"
                  >
                  <img
                    class="d-block img-fluid w-100 lg:pl-4 bg-white lg:w-1/2"
                    width="1024"
                    height="480"
                    src="~/assets/img/new/3.JPG"
                    srcset="~/assets/img/new/3.JPG"
                    alt="image slot"
                  >
                </div>
              
              </template>
           
            
          </b-carousel-slide>

            <!-- Slides with custom text -->
            <b-carousel-slide
            >
            <template #img>
                <div class="lg:flex lg:justify-between">
                  <img
                    class="d-block w-100 img-fluid lg:w-1/2  "
                    width="1024"
                    height="480"
                    src="~/assets/img/new/4.JPG"
                    srcset="~/assets/img/new/4.JPG"
                    alt="image slot"
                  >
                  <img
                    class="d-block img-fluid w-100 lg:pl-4 bg-white lg:w-1/2"
                    width="1024"
                    height="480"
                    src="~/assets/img/new/5.JPG"
                    srcset="~/assets/img/new/5.JPG"
                    alt="image slot"
                  >
                  <img
                    class="d-block img-fluid w-100 lg:pl-4 bg-white lg:w-1/2"
                    width="1024"
                    height="480"
                    src="~/assets/img/new/6.JPG"
                    srcset="~/assets/img/new/6.JPG"
                    alt="image slot"
                  >
                </div>
              
              </template>
           
            </b-carousel-slide>

            <b-carousel-slide
            >
            <template #img>
                <div class="lg:flex lg:justify-between">
                  <img
                    class="d-block w-100 img-fluid lg:w-1/3  "
                    width="1024"
                    height="480"
                    src="~/assets/img/new/7.JPG"
                    srcset="~/assets/img/new/7.JPG"
                    alt="image slot"
                  >
                  <img
                    class="d-block img-fluid w-100 lg:pl-4 bg-white lg:w-1/3"
                    width="1024"
                    height="480"
                    src="~/assets/img/new/8.JPG"
                    srcset="~/assets/img/new/8.JPG"
                    alt="image slot"
                  >
                  <img
                    class="d-block img-fluid w-100 lg:pl-4 bg-white lg:w-1/3"
                    width="1024"
                    height="480"
                    src="~/assets/img/new/9.JPG"
                    srcset="~/assets/img/new/9.JPG"
                    alt="image slot"
                  >
                </div>
              
              </template>
           
            </b-carousel-slide>
            <b-carousel-slide
            >
            <template #img>
                <div class="lg:flex lg:justify-between">
                  <img
                    class="d-block w-100 img-fluid lg:w-1/3  "
                    width="1024"
                    height="480"
                    src="~/assets/img/new/10.JPG"
                    srcset="~/assets/img/new/10.JPG"
                    alt="image slot"
                  >
                  <img
                    class="d-block img-fluid w-100 lg:pl-4 bg-white lg:w-1/3"
                    width="1024"
                    height="480"
                    src="~/assets/img/new/11.JPG"
                    srcset="~/assets/img/new/11.JPG"
                    alt="image slot"
                  >
                  <img
                    class="d-block img-fluid w-100 lg:pl-4 bg-white lg:w-1/3"
                    width="1024"
                    height="480"
                    src="~/assets/img/new/12.JPG"
                    srcset="~/assets/img/new/12.JPG"
                    alt="image slot"
                  >
                </div>
              
              </template>
           
            </b-carousel-slide>
            <b-carousel-slide
            >
            <template #img>
                <div class="lg:flex lg:justify-between">
                  <img
                    class="d-block w-100 img-fluid lg:w-1/3  "
                    width="1024"
                    height="480"
                    src="~/assets/img/new/13.JPG"
                    srcset="~/assets/img/new/13.JPG"
                    alt="image slot"
                  >
                  <img
                    class="d-block img-fluid w-100 lg:pl-4 bg-white lg:w-1/3"
                    width="1024"
                    height="480"
                    src="~/assets/img/new/14.JPG"
                    srcset="~/assets/img/new/14.JPG"
                    alt="image slot"
                  >
                  <img
                    class="d-block img-fluid w-100 lg:pl-4 bg-white lg:w-1/3"
                    width="1024"
                    height="480"
                    src="~/assets/img/new/15.JPG"
                    srcset="~/assets/img/new/15.JPG"
                    alt="image slot"
                  >
                </div>
              
              </template>
           
            </b-carousel-slide>
          </b-carousel>
            </div>
          </div>
        </div>
      </section>

   



    <!-- Advanced trading tools section -->
   

    <!-- Industry-leading security section -->
    <!-- <section class="bg-trading-tools relative max-w-full sm:mx-4 my-20 pt-16 shadow rounded-2xl overflow-hidden">
      <div class="relative max-w-screen-xl px-8 mx-auto grid grid-cols-12 gap-x-6">
        <div data-aos="fade-right" class="col-span-12 lg:col-span-6 p-8 bg-white">
          <div class="w-full">
            <div class="flex p-8">
              <img :src="require('~/assets/img/water-connection.png')" class="lg:w-40 lg:h-40 w-24 h-24 object-contain self-center" alt="" />
              <p class="ml-5 flex items-center lg:text-4xl font-bold sm:text-lg lg:text-32 sm:text-20 text-[#1B3E25] tracking-normal leading-normal">Water Connection</p>
            </div>
            <div class="flex p-8 mt-5 justify between w-full">
              <img :src="require('~/assets/img/electricity-connection.png')" class="lg:w-40 lg:h-40 w-24 h-24 object-contain self-center" alt="" />
              <p class="ml-5 flex items-center lg:text-4xl font-bold sm:text-lg lg:text-32 sm:text-20 text-[#1B3E25] tracking-normal leading-normal">Electricity Infrastructure</p>
            </div>
            <div class="flex p-8 mt-5 justify between w-full">
              <img :src="require('~/assets/img/street-lights.png')" class="lg:w-40 lg:h-40 w-24 h-24 object-contain self-center" alt="" />
              <p class="ml-5 flex items-center lg:text-4xl font-bold sm:text-lg lg:text-32 sm:text-20 text-[#1B3E25] tracking-normal leading-normal">Street Lights</p>
            </div>
            <div class="flex p-8 mt-5 justify between w-full">
              <img :src="require('~/assets/img/boundary.png')" class="lg:w-40 lg:h-40 w-24 h-24 object-contain self-center" alt="" />
              <p class="ml-5 flex items-center lg:text-4xl font-bold sm:text-lg tracking-normal leading-normal">Boundary</p>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" class="col-span-12 relative lg:col-span-5 space-y-8 sm:lg:space-y-6 space-y-3 mt-8 xl:px-8 p-8">
          <div class="flex p-8">
              <img :src="require('~/assets/img/farm-maintainence.png')" class="lg:w-40 lg:h-40 w-24 h-24 object-contain self-center" alt="" />
              <p class="ml-5 flex items-center lg:text-4xl font-bold sm:text-lg lg:text-32 sm:text-20 text-[#1B3E25] tracking-normal leading-normal">Farm Maintainence</p>
            </div>
            <div class="flex p-8 mt-5 justify between w-full">
              <img :src="require('~/assets/img/exotic-farmhouse-design.png')" class="lg:w-40 lg:h-40 w-24 h-24 object-contain self-center" alt="" />
              <p class="ml-5 flex items-center lg:text-4xl font-bold sm:text-lg lg:text-32 sm:text-20 text-[#1B3E25] tracking-normal leading-normal">Exotic Farmhouse Designs</p>
            </div>
            <div class="flex p-8 mt-5 justify between w-full">
              <img :src="require('~/assets/img/lush-green-ambience.png')" class="lg:w-40 lg:h-40 w-24 h-24 object-contain self-center" alt="" />
              <p class="ml-5 flex items-center lg:text-4xl font-bold sm:text-lg lg:text-32 sm:text-20 text-[#1B3E25] tracking-normal leading-normal">Lush Green Ambience</p>
            </div>
             <div class="flex p-8 mt-5 justify between w-full">
              <img :src="require('~/assets/img/untitled.png')" class="lg:w-40 lg:h-40 w-24 h-24 object-contain self-center" alt="" />
              <p class="ml-5 flex items-center lg:text-4xl font-bold sm:text-lg tracking-normal leading-normal">CCTV Security</p>
            </div> -->

        <!-- </div>
      </div>
    </section> -->

    <!-- Getting started section -->
    <!-- <section id="contact" class="relative max-w-full sm:mx-4 xl:mx-10 my-24 shadow sm:rounded-2xl overflow-hidden"> -->
      <!-- <div class="w-full py-16 flex items-center">
        <h2 data-aos="flip-down" class="text-3xl sm:text-4xl font-semibold text-center">
          Request a 
          <span class="theme">callback</span>
        </h2>
        <div
          data-aos="fade-up"
          class="relative w-full flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 lg:px-4 xl:px-10 mt-16 sm:mt-8"
        >
          <div class=" max-w-md mx-auto">
            <form @submit="sendEmail" class="w-full">
            <div>
              <label class="flex items-center lg:text-4xl font-bold sm:text-lg lg:text-32 sm:text-20 text-[#1B3E25] tracking-normal leading-normal" for="email">Email:</label>
              <input id="email" type="email" v-model="email" required class="w-full rounded-lg">
            </div>
            <div>
              <label class="flex items-center lg:text-4xl font-bold sm:text-lg lg:text-32 sm:text-20 text-[#1B3E25] tracking-normal leading-normal" for="email">Phone:</label>
              <input id="Contact" type="number" v-model="email" required class="w-full rounded-lg">
            </div>
            <div>
              <label for="message" class="flex items-center lg:text-4xl font-bold sm:text-lg lg:text-32 sm:text-20 text-[#1B3E25] tracking-normal leading-normal">Message:</label>
              <textarea id="message" v-model="message" required class="w-full rounded-lg"></textarea>
            </div>
            <div class="w-full mt-5 flex justify-center">
              <BaseButton
              type="submit"
              class="max-w-full px-8 py-4 bg-gradient-to-r from-[#5D794F] to-[#5D794F] border border-[#fff] text-white font-bold"
            >
              Send
          </BaseButton>
            </div>
          </form>
          </div>
          <div></div>
        </div>
      </div> -->
<!-- 
      <section class="relative max-w-full overflow-hidden">
      <div class="relative max-w-screen-xl lg:px-4 sm:px-2 mx-auto grid grid-cols-12 gap-x-6">
        
        <div data-aos="fade-right" class="col-span-12  items-center lg:col-span-6 space-y-8 sm:lg:space-y-6 space-y-3 p-8 sm:px-6 mt-8">
          <form ref="form" class="w-full">
            <div>
                <label class="flex items-center lg:text-4xl font-medium sm:text-lg lg:text-32 sm:text-20 text-[#1B3E25] tracking-normal leading-normal" for="email">Full Name:</label>
                <input id="name" type="name" required class="lg:px-4 py-2 w-full capitalize rounded-lg border">
              </div>
              <div class="mt-3">
                <label class="flex items-center lg:text-4xl font-medium sm:text-lg lg:text-32 sm:text-20 text-[#1B3E25] tracking-normal leading-normal" for="email">Email:</label>
                <input id="email" type="email" required class="lg:px-4 py-2 w-full rounded-lg border">
              </div>
              <div class="mt-3">
                <label class="flex items-center lg:text-4xl font-medium sm:text-lg lg:text-32 sm:text-20 text-[#1B3E25] tracking-normal leading-normal" for="email">Phone:</label>
                <input id="phoneNumber" type="number" required class="lg:px-4 py-2 w-full rounded-lg border">
              </div>
              <div class="mt-3">
                <label for="message" class="flex items-center lg:text-4xl font-medium sm:text-lg lg:text-32 sm:text-20 text-[#1B3E25] tracking-normal leading-normal">Message:</label>
                <textarea id="message" required class="lg:px-4 py-2 w-full rounded-lg border"></textarea>
              </div>
              <div @click="sendEmail()" class="w-full mt-5 flex justify-start">
                <button
                type="submit"
                class="max-w-full rounded-[7px] px-8 py-2 bg-gradient-to-r from-[#5D794F] to-[#5D794F] border border-[#fff] text-white font-bold"
              >
                Send
              </button>
              </div>
          </form>
        </div>
        <div data-aos="fade-left" class="col-span-12 font-poppins flex bg-white justify-center items-center lg:col-span-6 space-y-8 sm:lg:space-y-6 space-y-3 lg:px-4 sm:px-6 mt-8">
          <h2 class="text-6xl font-bold">Request a  <span class="sm:hidden lg:block font-poppins text-8xl theme"> Callback</span> </h2>
        </div>
       <LandingTradingToolImage data-aos="fade-left" class="hidden sm:block" /> -->
      <!-- </div> -->
    <!-- </section> --> 
    <!-- </section> -->

    <!-- FAQ section -->
    <!-- <section class="w-full my-24">
      <BaseSection>
        <div data-aos="fade-right" data-aos-delay="150" class="col-span-12 lg:col-span-6">
          <div class="w-full">
            <img :src="require('~/assets/img/WhyChooseUs.png')" class="w-3/4 h-3/4" alt="" />
          </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="150" class="col-span-12 lg:col-span-6 lg:px-4 sm:px-6 mt-8">
          <span class="text-base text-[#5D794F] font-bold uppercase mb-4 sm:mb-2">Support</span>
          <h2 class="text-4xl theme sm:text-4xl font-bold mb-10 sm:mb-6">Frequently asked questions</h2>

          <ul class="shadow-box font-poppins">
            <BaseAccordion v-for="(accordion, index) in accordions" :key="index" :accordion="accordion" />
          </ul>
        </div>
      </BaseSection>
    </section> -->
    <b-modal id="modal-1" title="" class="modal-title" :hide-footer="true">
      <div class="container px-0">
        <div class="row-auto" id="contact">
          <h2 class="heading font-[Cenzil] text-center text-dark">ENQUIRE NOW </h2>          
      </div>
        <div class="row-auto">
        <div class="w-full">
          <div class="row-auto pt-2 mx-auto d-block ps-3">
              <form @click="sendEmail()" id="form" method="post">
                <div class="row pt-2" id="footer-note"></div>
                <div class="row pt-2">
                    <div class="col">
                      <input type="text" class="form-control border-bottom border-t border-start-0 border-end-0 rounded-0" placeholder="Name" aria-label="Name" name="name">
                    </div>
                </div>
                <div class="row pt-2">
                    <div class="col-12">
                      <input type="email" class="form-control border-bottom border-t border-start-0 border-end-0 rounded-0" placeholder="Email" aria-label="Email" name="email">
                    </div>
                </div>
                <div class="row pt-2">                        
                    <div class="col-12">
                      <input type="text" class="form-control border-bottom border-top-0 border-start-0 border-end-0 rounded-0" placeholder="Phone" aria-label="Phone" name="phone">
                    </div>
                    <div class="col-4 d-none">
                      <input type="text" class="form-control border-bottom border-top-0 border-start-0 border-end-0 rounded-0" placeholder="OTP" aria-label="otp" name="otp">
                    </div>
                </div>
                <!-- <div class="row pt-2">                        
                    <div class="col-12">
                      <select name="classification" class="form-control border-bottom border-top-0 border-start-0 border-end-0 rounded-0">
                          <option value="">Preferred Classification</option>
                          <option value="2BHK Farm House Starting at 3.75 Cr onwards">2BHK Farm House Starting at 3.75 Cr onwards*</option>
                          <option value="3BHK Farm House Starting at 4.0 Cr onwards">3BHK Farm House Starting at 4.0 Cr onwards*</option>
                      </select>                           
                    </div>
                </div> -->
                <div class="row pt-2">                        
                    <div class="col-12">
                      <select name="visit" class="form-control border-bottom border-top-0 border-start-0 border-end-0 rounded-0">
                          <option value="">Planning For Site Visit</option>
                          <option value="This Weekend">This Weekend</option>
                          <option value="Next Weekend">Next Weekend</option>
                          <option value="In This Month">In This Month</option>
                      </select>                                                    
                    </div>
                </div>
                <div class="row pt-2">                        
                    <div class="col-12">
                      <select name="time" class="form-control border-bottom border-top-0 border-start-0 border-end-0 rounded-0">
                          <option value="">Best Time To Call</option>
                          <option value="9:30 AM To 01:00 PM">9:30 AM To 01:00 PM</option>
                          <option value="01:00 PM To 6:00 PM">01:00 PM To 6:00 PM</option>
                          <option value="6:00 PM Onwards">6:00 PM Onwards</option>
                      </select>                                                     
                    </div>
                </div>
                <div class="row pt-2">
                    <div class="col">
                      <textarea class="form-control border-bottom border-top-0 border-start-0 border-end-0 rounded-0" placeholder="Message" id="floatingTextarea" name="message"></textarea>
                    </div>
                </div>
                <div class="row pt-3 pb-3">
                    <div class="col text-center">
                      <button id="footer-btn" type="submit" class="btn text-white bg-dark rounded-0 px-3">
                          Submit
                      </button>
                    </div>
                </div>
              </form>
          </div>
        </div>
      </div>

  </div>
    </b-modal>

    <div class="w-full my-10 flex justify-center">
      <a
        v-smooth-scroll
        data-aos="flip-down"
        data-aos-delay="150"
        href="#navbar"
        class="px-6 py-3 flex items-center space-x-2 bg-[#FAFAFA] hover:bg-gray-100 hover:shadow-md border border-[#DDDDDD] rounded-md text-gray-700"
      >
        <span>Back to top</span>
        <ArrowUpIcon :size="20" />
      </a>
    </div>
  </div>
</template>

<script>
// import VueImageLightboxCarousel from 'vue-image-lightbox-carousel'
import VueSlickCarousel from 'vue-slick-carousel'
import emailjs from 'emailjs-com';
import Swiper from 'swiper/swiper-bundle.min';
import 'swiper/swiper-bundle.min.css';
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import aosMixin from '@/mixins/aos'
export default {
  name: 'IndexPage',
  mixins: [aosMixin],
  components: {
      Swiper,
      VueSlickCarousel,
    },
   
  data() {
    return {
      active: 1,
      images: [
        {
          path: 'https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg',
          caption: 'Elephant',
        },
        {
          path: 'https://i-kinhdoanh.vnecdn.net/2018/06/18/1-1529296929_680x0.jpg',
          caption: 'Messi',
        },
        {
          path: 'https://i-thethao.vnecdn.net/2018/05/27/775162441-MR-2031-8E033EFCEBB928DC12A2A0AA3CEC4C33-21885-1527376486_680x0.jpg',
          caption: 'Bale and Marcelo',
        },
        {
          path: 'https://i-thethao.vnecdn.net/2018/05/27/Screen-Shot-2018-05-27-at-7-1527379562_680x0.png',
          caption: 'Madrid crowd',
        },
        {
          path: 'https://i-thethao.vnecdn.net/2018/05/27/000-15E0DG-1527379049_680x0.jpg',
          caption: 'Zidane',
        },
        {
          path: 'https://i-thethao.vnecdn.net/2018/05/27/Screen-Shot-2018-05-27-at-7-1527379346_680x0.png',
          caption: 'Bale kissed the cup',
        },
        {
          path: 'https://i-thethao.vnecdn.net/2018/05/27/000-15D9SR-1527378710_680x0.jpg',
          caption: 'Ronaldo showed off',
        },
        {
          path: 'https://i-thethao.vnecdn.net/2018/05/27/000-15D9PD-1527378584_680x0.jpg',
          caption: 'Benzema and Varane',
        },
        {
          path: 'https://i-thethao.vnecdn.net/2018/05/27/000-15E01C-1527378364_680x0.jpg',
          caption: 'Nacho',
        },
        {
          path: 'https://i-thethao.vnecdn.net/2018/05/27/000-15D9DX-1527378233_680x0.jpg',
          caption: 'Ramos',
        },
        {
          path: 'https://i-thethao.vnecdn.net/2018/05/27/000-15D921-1527377928_680x0.jpg',
          caption: 'Ceremony',
        },
        {
          path: 'https://i-thethao.vnecdn.net/2018/05/27/000-15D8R8-1527377973_680x0.jpg',
          caption: 'Champion',
        },
        {
          path: 'https://i-thethao.vnecdn.net/2018/05/27/000-15E0FA-1527377507_680x0.jpg',
          caption: 'Kiss',
        },
      ],
      showLightbox:false,
      transitioning: false,
      selected: 0,
      slide: 0,
      sliding: null,
      email: '',
      message: '',
      phoneNumber: '',
      name: '',
      dropdownConcurency: false,
      dropdownCrypto: false,
      currencySelected: {
        img: 'country-icon/eng.png',
        name: 'USD',
      },
      currencies: [
        {
          img: 'country-icon/eng.png',
          name: 'USD',
        },
      ],
      cryptoSelected: {
        img: 'crypto-icon/bitcoin.png',
        name: 'BTC',
      },
      cryptocurrencies: [
        {
          img: 'crypto-icon/bitcoin.png',
          name: 'BTC',
        },
      ],
      trendings: [
        {
          id: 1,
          name: 'Bitcoin',
          price: 43180.13,
          logo: 'bitcoin.png',
          increase: true,
          data: [40, 35, 60, 75, 60, 75, 50],
        },
        {
          id: 2,
          name: 'Ethereum',
          price: 3480.65,
          logo: 'ethereum.png',
          increase: false,
          data: [25, 30, 60, 50, 80, 55, 80],
        },
        {
          id: 3,
          name: 'Solana',
          price: 150.2,
          logo: 'solana.png',
          increase: true,
          data: [40, 45, 40, 80, 50, 60, 35],
        },
        {
          id: 4,
          name: 'Dogecoin',
          price: 0.1572,
          logo: 'dogecoin.png',
          increase: true,
          data: [35, 70, 60, 80, 50, 60, 40],
        },
      ],
      topGainers: [
        {
          id: 1,
          name: 'PAPPAY',
          price: 0.00374,
          logo: 'pappay.png',
          increase: true,
          data: [30, 50, 45, 60, 70, 40, 45],
        },
        {
          id: 2,
          name: 'Bitcoin Asia',
          price: 0.02096,
          logo: 'bitcoin-asia.png',
          increase: true,
          data: [25, 60, 50, 60, 35, 50, 70],
        },
        {
          id: 3,
          name: 'MoonRock',
          price: 0.004907,
          logo: 'moonrock.png',
          increase: true,
          data: [40, 35, 40, 25, 50, 70, 45],
        },
        {
          id: 4,
          name: 'NinjaFloki',
          price: 0.000123,
          logo: 'ninjafloki.png',
          increase: true,
          data: [45, 35, 40, 30, 25, 45, 35],
        },
      ],
      recents: [
        {
          id: 1,
          name: 'MetaCraft',
          price: 0.0608,
          logo: 'metacraft.png',
          increase: false,
          data: [40, 50, 45, 60, 35, 40, 45],
        },
        {
          id: 2,
          name: 'Frog',
          price: 0.5875,
          logo: 'frog.png',
          increase: false,
          data: [25, 50, 45, 48, 40, 60, 45],
        },
        {
          id: 3,
          name: 'Musk Doge',
          price: 0.04041,
          logo: 'musk-doge.png',
          increase: true,
          data: [25, 35, 60, 45, 50, 45, 45],
        },
        {
          id: 4,
          name: '2SHARE',
          price: 1366.24,
          logo: '2share.png',
          increase: true,
          data: [35, 30, 60, 50, 35, 45, 40],
        },
      ],
      accordions: [
        {
          title: 'Why should I choose Hampshire Estates?',
          description:
            "Hampshire Estates offers exceptional service and has extensive experience in the Nandi Hills area, providing a wide range of properties to suit various preferences and budgets."
        },
        {
          title: 'How secure is Hampshire Estates?',
          description:
            "Hampshire Estates prioritizes the security of clients' information and transactions with robust measures, advanced encryption, and compliance with industry standards."
        },
        {
          title: 'Do I have to buy a whole Farmland?',
          description:
            "Hampshire Estates offers flexible options, allowing you to purchase a whole farmland or specific plots within the farmland based on your preferences."
        },
        {
          title: 'How do I actually buy a Farmland?',
          description:
            "Hampshire Estates simplifies the buying process by providing expert guidance, comprehensive support, property information, and assistance with visits, negotiations, due diligence, and paperwork."
        },
      ],
      steps: [
        {
          img: 'sign-up.png',
          title: 'Sign Up',
          description:
            'Sign up for your free NEFA Wallet on web, iOS or Android and follow our easy process to set up your profile',
        },
        {
          img: 'fund.png',
          title: 'Fund',
          description:
            'Choose your preferred payment method such as bank transfer or credit card to top up your NEFA Wallet',
        },
        {
          img: 'buy-crypto.png',
          title: 'Buy Crypto',
          description:
            'Buy Bitcoin or Ethereum, then securely store it in your Wallet or send it on easily to your friends anywhere'
            ,
        },
      ],
    }
  },
  async mounted() {
    this.startLoop()
    await this.$nextTick();
    new Swiper(this.$refs.swiper, {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  },
  methods: {
 
    startLoop() {
      setInterval(() => {
        this.transitioning = true;
        setTimeout(() => {
          if (this.active < 4) {
            this.active++;
          } else if (this.active === 4) {
            this.active = 1;
          }
          this.transitioning = false;
        }, 500);
      }, 2000);
    },
      changeActive(str) {
        if(str == 'right' && this.active <3) {
          this.active ++
        } else if(str =='left' && this.active > 1) {
          this.active --
        }
      },
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      },
    scrollToSection() {
      const section = document.getElementById("contact");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      } else {
        console.error("Contact section not found.");
      }
    },
    sendEmail() {
      // Send email logic here

      event.preventDefault();
      const emailData = {
        name: this.name,
        email: this.email,
        phoneNumber: this.phoneNumber,
        message: this.message,
      };
      // console.log(this.$refs)
      // console.log(this.$refs.form);
      emailjs.sendForm('service_1o90b3i', 'template_re2toum', this.$refs.form, 'CAXeNuLKdK4qtQmdn')
        .then(() => {
          alert('Message sent!')
          // inputFieldReset.value = " ";
        }, (error) => {
          alert('Message not sent', error);
        }); 

      // You can use an HTTP library like Axios to send the data to the server
      // Here, we are logging the email data to the console for demonstration purposes
      console.log(emailData);

      // Reset form fields
      // this.email = '';
      // this.message = '';
    }
  }
}
</script>
<style scoped>

.enq-btn {
    position: fixed;
    top: 55%;
    right: -4.5% !important;
    z-index: 100;
    rotate: 270deg;
    background-color: #c49b36;
}
.text-header-gradient {
  background: #5D794F;
  background: linear-gradient(169.4deg, #26602d -6.01%, #0cff10 36.87%, #2ff059 78.04%, #0ee86c 103.77%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.rou {
    border-top-left-radius: 71px !important;
    border-bottom-left-radius: 71px !important;
}



.fade {
  opacity: 0;
}

.theme {
  color: #5D794F;
  
}

.card-title {
  text-align: center;
  font-family: Cinzel;
  font-weight: 500;
  font-size:20px
}
.card-text {
  text-align: justify;
  font-family: Raleway;
}
.card-img-top {
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
}

.card-img-bottom {
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
}
.heading {
    padding: 20px 0;
    text-transform: uppercase;
    font-size: 23px;
    font-weight: 400;
    text-align: center;
}

.modal-title {
  font-family: 'Cinzel' !important;
  font-weight: 500 !important;
  text-align:center !important;
}
.modal-footer {
  visibility: hidden !important;
}

.heading {
    padding: 20px 0;
    text-transform: uppercase;
    font-size: 23px;
    font-weight: 400;
    text-align: center;
}


@media only screen and (min-width: 760px) {
  .carousel-inner {
    /* height:100vh; */
    background-color: white !important;
  }

  .custom-pad {
    padding-left: 16px;
    padding-right: 16px;
  }
  .carousel {
    /* height:100vh; */
    background-color: white !important;
  }
  .img-fluid {
    max-height:480px !important;
  }
  .carousel-caption {
    bottom: 160px !important;
  }

  .slide {
    display: flex;
    flex-direction: row;
    transition: opacity 0.5s;
  }
  .carousel-text {
    font-size: 80px;
  }
  .custom-text {
    text-align: left;
  }
  .mt-custom {
    margin-top: 48px;
  }
  .mt-custom-button {
    margin-top: 48px;
  }
}

@media only screen and (max-width: 760px) {
  .carousel-inner {
    height:50vh;
  }

  .custom-pad {
    padding-left: 8px;
    padding-right: 8px;
  }
  .custom-text {
    text-align: center;
  }
  .img-fluid {
    height:50vh !important;
  }
   
  .mt-custom {
    margin-top: 16px;
  }

  .mt-custom-button {
    margin-top: 8px;
  }

  .slide {
    display: flex;
    flex-direction: column;
    transition: opacity 0.5s;
  }
  .carousel-text {
    font-size: 48px;
  }
  .carousel {
    height:50vh !important;
  }
}

.bg-partner {
  background: url('../assets/img/partner/background.png');
  background-size: cover;
  background-position: center;
}

.bg-trading-tools {
  background-color: #f7fbff;
  background-size: cover;
  background-position: center;
}
.max-h-0 {
  max-height: 0;
}
</style>

<!-- <style scoped>
/* .slide-container {
  display: flex;
  overflow: hidden;
}

.slide {
  width: 100%;
  display: flex;
  transition: transform 0.5s;
} */

.slide-enter {
  animation: slideInLeft 0.5s;
}

.slide-leave-active {
  animation: slideOutRight 0.5s;
}

@keyframes slideInLeft {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slideOutRight {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}
</style> -->