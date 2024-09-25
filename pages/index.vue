<template>
  <div class="w-full">
    <!-- Hero section -->
      <div v-b-modal.modal-1 class="bt">
        <button type="button" class="border-0 px-4 py-2 text-white fs-md-5 font-bold text-[1rem] enq-btn" data-bs-toggle="modal" data-bs-target="#enquire_form_popup">ENQUIRE NOW</button>
       </div>
        <div class="relative max-w-full shadow col-span-12 overflow-hidden">
            <div class="hidden lg:block">
              <b-carousel
            class="bg-[#bbdbb3]"
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
                    src="~/assets/img/IMG_9633.JPG"
                    srcset="~/assets/img/IMG_9633.JPG"
                    alt="image slot"
                  >
                  <img
                    class="d-block img-fluid w-100 lg:pl-4 bg-[#bbdbb3] lg:w-1/2"
                    width="1024"
                    height="480"
                    src="~/assets/img/IMG_0536.JPG"
                    srcset="~/assets/img/IMG_0536.JPG"
                    alt="image slot"
                  >
                </div>
              
              </template>
           
            
          </b-carousel-slide>

            <!-- Slides with custom text -->
            <!-- <b-carousel-slide
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
                    class="d-block img-fluid w-100 lg:pl-4 bg-[#bbdbb3] lg:w-1/2"
                    width="1024"
                    height="480"
                    src="~/assets/img/new/14.JPG"
                    srcset="~/assets/img/new/14.JPG"
                    alt="image slot"
                  >
                </div>
              
              </template>
           
            </b-carousel-slide> -->
          </b-carousel>
        </div>
        <div class="lg:hidden">
          <b-carousel
        class="bg-[#bbdbb3]"
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
                src="~/assets/img/IMG_9633.JPG"
                srcset="~/assets/img/IMG_9633.JPG"
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
                src="~/assets/img/IMG_0536.JPG"
                srcset="~/assets/img/IMG_0536.JPG"
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
            class="d-block img-fluid w-100 lg:pl-4 bg-[#bbdbb3] lg:w-1/2"
            width="1024"
            height="480"
            src="~/assets/img/new/14.JPG"
            srcset="~/assets/img/new/14.JPG"
            alt="image slot"
          >
        </template>
        </b-carousel-slide> -->

        <!-- <b-carousel-slide
        >
        <template #img>
          <img
            class="d-block img-fluid w-100 lg:pl-4 bg-[#bbdbb3] lg:w-1/2"
            width="1024"
            height="480"
            src="~/assets/img/new/13.JPG"
            srcset="~/assets/img/new/13.JPG"
            alt="image slot"
          >
        </template>
        </b-carousel-slide> -->
          </b-carousel>
            </div>
          <div class="flex justify-between custom-pad py-4">
              <div>
                <h1 style="" class="font-medium lg:text-2xl font-[Cinzel] uppercase theme-text">Limited Edition</h1>
                <p class="mt-1 font-bold lg:text-2xl font-[Cinzel] uppercase theme-text"> Peace FARMS</p>
              </div>
              <div class="hidden lg:block">
                <p class="mt-1 font-bold lg:text-2xl font-[Cinzel] uppercase theme-text">A green living Project</p>
              </div>
              <div>
              <div class="bg-[#006400] px-2 py-1">
                <h1 style="" class="font-medium lg:text-2xl font-[Cinzel] text-white uppercase">LUXURY FARMPLOTS</h1>
              </div>
              <div class="bg-[#006400] mt-1 px-2 py-1">
                <h1 style="" class="font-bold lg:text-2xl font-[Cinzel] uppercase text-white"> ₹ 25 LAC ONWARDS </h1>
              </div>
              </div>
             
          </div>
        </div>
    <section id="profile" class="bg-trading-tools px-0 mx-0 relative max-w-full sm:mx-4 lg:py-12 lg:pt-12 pb-0 rounded-2xl overflow-hidden">
      <BaseSection data-aos="fade-down flex items-center px-0">
        <div class="col-span-12 w-full h-full flex items-center lg:col-span-5 lg:space-y-6 space-y-3 lg:px-0 sm:px-6">
          <div class="bg-[#bbdbb3] z-10 rounded-r-[71px] lg:mr-[-100px] px-5 py-12 pb-12 h-max">
            <h2 class="text-2xl uppercase font-medium font-[Cinzel]">
              COMPANY PROFILE
            </h2>
            <p class="font-normal mt-2 text-[16px] lg:w-[97%] font-poppins tracking-normal text-justify leading-normal font-[Raleway]">
              At Thata Hara Farms, we are a close-knit team of passionate individuals, dedicated to making your dream of owning a farm plot a reality. Our company was founded by Sudeer S, who have an impressive track record in the real estate industry. With a wealth of experience in developing luxury living projects, and executing prestigious projects for High Net Worth Individuals (HNIs), Sudeer S bring his expertise and creativity to every aspect of our offerings.

            </p>
            <p class="font-normal mt-1 text-[16px] lg:w-[97%] font-poppins tracking-normal text-justify leading-normal font-[Raleway]">
              Whether you are an avid nature lover, an investor, or someone looking for a peaceful retreat, Peace Farms promises to assist you in finding the perfect farm plot that aligns with your aspirations. Join us on this exciting journey, and let's create a harmonious bond between you and nature.

            </p>
          </div>
        </div>
        <div class="col-span-12 lg:col-span-7">
          <div class="w-full">
            <img :src="require('~/assets/img/IMG_0535.JPG')" class="w-full lg:h-[495px]  rounded-l-[71px]" alt="" height="500px" width="450px"/>
          </div>
        </div>
        
      </BaseSection>
    </section>

    <!-- Credit card section -->
    <section id="about" class="bg-trading-tools px-0 mx-0 relative max-w-full sm:mx-4 lg:py-12 pt-12 lg:pb-5 rounded-2xl overflow-hidden">
      <BaseSection data-aos="flex items-center px-0">
        <div class="col-span-12 lg:col-span-7">
          <div class="w-full">
            <img :src="require('~/assets/img/IMG_9411.JPG')" class="w-full lg:h-[495px]  rounded-r-[71px]" alt="" height="500px" width="450px"/>
          </div>
        </div>
        <div class="col-span-12 w-full h-full flex items-center lg:col-span-5 lg:space-y-6 space-y-3 lg:px-0 sm:px-6">
          <div class="bg-[#bbdbb3] rounded-l-[71px] lg:ml-[-100px] px-5 py-12  h-max">
            <h2 class="text-2xl uppercase font-medium font-[Cinzel]">
              ABOUT
            </h2>
            <p class="font-normal mt-2 text-[16px] lg:w-[97%] font-poppins tracking-normal text-justify leading-normal font-[Raleway]">
              Welcome to the epitome of countryside living! Situated at the epicenter of all the action, 'Peace' farm plots are nestled in the heart of a picturisque landscape. We invite you to embark on a journey that celebrates the beauty of nature, the tranquility of open spaces, and the timeless allure of farming. 'Peace' offers an extraordinary opportunity to own a piece of land and embrace a life filled with abundance, growth and fulfillment.
              An exclusive community of bountiful farmland adjacent to NH44 highway. Located amidst rolling hills, gushing water stream, where the fragrance of blooming wildflowers dances on the breeze and where the earth sings it's song of abundance.

            </p>
          </div>
        </div>
      </BaseSection>
    </section>

    <section class="px-0 mx-0 relative max-w-full sm:mx-4 lg:mt-10 lg:py-12 lg:pt-12 pb-0 rounded-2xl overflow-hidden">
      <BaseSection data-aos="fade-down flex items-center px-0">
        <div class="col-span-12 w-full h-full flex items-center lg:col-span-5 lg:space-y-6 space-y-3 lg:px-0 sm:px-6">
          <div class="bg-[#bbdbb3] z-10 rounded-r-[71px] lg:mr-[-100px] px-5 lg:py-12 pb-12 pt-0  h-max">
            <h2 class="text-2xl uppercase font-medium font-[Cinzel]">
              WHAT WE OFFER
            </h2>
            <p class="font-normal mt-2 text-[16px] lg:w-[97%] font-poppins tracking-normal leading-normal font-[Raleway]">
              •	Drip irrigation <br>
              •	Eco-Friendly farming <br>
              •	With Plantation <br>
              •	Farm management <br>
              •	Construction Assistance <br>
              •	EMI available <br>
              • Compund for each individual <span class="ml-2"> property</span> 

            </p>
          </div>
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
            <div class="w-full grid gap-2.5 grid-cols-2 lg:h-[495px]  rounded-r-[71px]">
              <img :src="require('~/assets/img/attractions/ishaFoundation.jpeg')" class="w-full h-full" alt="" height="125px" width="112px"/>
              <img :src="require('~/assets/img/attractions/saiTemple.jpeg')" class="w-full h-full rounded-tr-[71px]" alt="" height="125px" width="112px"/>
              <img :src="require('~/assets/img/attractions/Nandi-Hills.jpeg')" class="w-full h-full" alt="" height="125px" width="112px"/>
              <img :src="require('~/assets/img/attractions/Airport.jpeg')" class="w-full h-full rounded-br-[71px]" alt="" height="125px" width="112px"/>
            </div>
          </div>
        </div>
        <div class="col-span-12 w-full h-full flex items-center lg:col-span-5 lg:space-y-6 space-y-3 lg:px-0 sm:px-6">
          <div class="bg-[#bbdbb3] rounded-l-[71px] lg:ml-[-100px] px-5 py-12  h-max">
            <h2 class="text-2xl uppercase font-medium font-[Cinzel]">
              Close Proximity To
            </h2>
            <p class="font-normal text-left mt-2 text-[16px] lg:w-[97%] font-poppins tracking-normal leading-normal font-[Raleway]">
                The heart of rural tranquility! Nestled amidst picturesque landscapes, it offers a serene escape from the bustle of city life.<br/>
              • Kempegowda International Airport <br class="lg:hidden"/> <span class="cust-mar">Bangalore:</span> 70 minutes<br/>
              • Sri Sathya Sai Airport <br class="lg:hidden"/> <span class="cust-mar">Puttaparthi:</span> 25 minutes<br/>
              • Isha Foundation Chikkaballapura:<br class="lg:hidden"/> <span class="cust-mar">25 minutes</span><br/>
              • Super Speciality Hospital at Puttaparthi: <br class="lg:hidden"/>   <span class="cust-mar">20 minutes</span><br/>
              • Nandi Hills: 45 minutes<br/>
              • Big Bay: 20 minutes<br/>
              • Kia Factory: 25 minutes<br/>

            </p>
          </div>
        </div>
      </BaseSection>
    </section>

    <section class="bg-trading-tools px-0 mx-0 relative max-w-full sm:mx-4 rounded-2xl overflow-hidden">
      <BaseSection class="fade-down w-full col-span-12 px-0">
        <div class="col-span-12 w-full z-10 h-full flex items-center lg:col-span-5 lg:space-y-6 space-y-3 lg:px-0 sm:px-6">
          <div class="bg-[#bbdbb3] rounded-r-[71px] lg:mr-[-100px] px-5 py-12  h-max">
            <p class="font-normal lg:ml-12 text-left mt-2 text-[16px] lg:w-[97%] font-poppins tracking-normal leading-normal font-[Raleway]">
               
              • Shell Petrol Pump: 15 minutes <br>
              • Gushing 5 star Hotels JW Marriott <br class="lg:hidden"/><span class="cust-mar">and Mulberry Shades by Marriott:</span> <br/> <span class="ml-2">45 minutes</span> <br/>
              • Close promixity to Railway Junction: <br class="lg:hidden"/>   <span class="cust-mar">Hindpur and Penukonda</span>.<br/>
              • Starbucks: 15 minutes<br/>
              • Pharmaceutical SEZ : 25 Minutes <br/>

            </p>
          </div>
        </div>
        <div class="col-span-12 lg:col-span-7">
          <div class="w-full">
            <div class="w-full grid grid-cols-2 gap-2.5 lg:h-[495px]  rounded-r-[71px]">
              <img :src="require('~/assets/img/attractions/golf.jpeg')" class="w-full h-full rounded-tl-[71px]" alt="" height="125px" width="112px"/>
              <img :src="require('~/assets/img/attractions/kia-factory.png')" class="w-full h-full" alt="" height="125px" width="112px"/>
              <img :src="require('~/assets/img/attractions/starbucks.jpeg')"  class="w-full h-full rounded-bl-[71px]" alt="" height="125px" width="112px"/>
              <img :src="require('~/assets/img/attractions/marriot.png')" class="w-full h-full"  alt="" height="125px" width="112px"/>
            </div>
          </div>
        </div>
      </BaseSection>
    </section>

    <section id="design" class="bg-trading-tools px-0 mx-0 relative max-w-full sm:mx-4 py-12 rounded-2xl overflow-hidden">
      <div  class="w-full col-span-12 lg:pt-20 pt-10">
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
                 Immerse yourself in a world of exquisite beauty and natural splendor at Peace, where the latest concept of "Second Living" comes to life. Step into a magical realm where world-class architecture seamlessly blends with the surrounding landscape, offering a truly enchanting experience.
                 Indulge in the harmonious embrace of nature at Peace.
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
                  Escape to a new world of serenity at Peace, where the allure of nature and utmost privacy converge. Our private farmhouses offer a tranquil haven dedicated to rest and relaxation. Seamlessly blending with the surrounding natural beauty, each farmhouse is nestled within its own verdant sanctuary, ensuring unparalleled seclusion.  we invite you to your own slice of serenity
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
                  At Peace, luxury is not just a concept; it's a way of life. Each residence exudes sophistication and opulence, boasting spacious interiors adorned with the finest materials and finishes. From the elegantly designed living spaces to the state-of-the-art amenities, every aspect has been thoughtfully curated to provide you with the epitome of comfort and indulgence.
                </b-card-text>

                
              </b-card>
            </div>
          </div>
        </div>
    </section>
    
    <section  class="py-4  bg-main lr-sec bg-[#bbdbb3]" id="amenities">
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
               <h3 class="elementor-image-box-title">Street Lights</h3>
            </div>
            <div class="col-md-4 col-6 text-center">
               <img :src="require('~/assets/img/water-connection.svg')" alt="Villa" class=" w-20 h-20 pb-2 mx-auto">
               <h3 class="elementor-image-box-title">Underground Water Supply</h3>
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
         <div class="row pb-5">

            <div class="col-md-4 col-6 text-center">
               <img :src="require('~/assets/img/electricity-connection.svg')" alt="Villa" class="w-20 h-20 pb-2 mx-auto">
               <h3 class="elementor-image-box-title">Underground Power Cables</h3>
            </div>
            <div class="col-md-4 col-6 text-center">
               <img :src="require('~/assets/img/lush-green-ambience.svg')" alt="Villa" class="w-20 h-20 pb-2 mx-auto">
               <h3 class="elementor-image-box-title">Lush Green Ambience</h3>
            </div>
            <div class="col-md-4 col-6 text-center">
               <img :src="require('~/assets/img/apple.png')" alt="Villa" class="w-20 h-20 pb-2 mx-auto">
               <h3 class="elementor-image-box-title">Fruit Bearing Trees</h3>
            </div>
         </div>
         <div class="row">
            <div class="col-md-4 col-6 text-center">
              <img :src="require('~/assets/img/gazebo.png')" alt="Villa" class="w-20 h-20 pb-2 mx-auto">
              <h3 class="elementor-image-box-title">Gazebo By The Water</h3>
            </div>
            <div class="col-md-4 col-6 text-center">
              <img :src="require('~/assets/img/gate.png')" alt="Villa" class="w-20 h-20 pb-2 mx-auto">
              <h3 class="elementor-image-box-title">Grand Entrance</h3>
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
               <h3 class="elementor-image-box-title">Underground Water Supply</h3>
            </div>
            <div class="col-md-3 py-5 col-6 text-center">
               <img :src="require('~/assets/img/electricity-connection.svg')" alt="Villa" class="w-20 h-20 pb-2 mx-auto">
               <h3 class="elementor-image-box-title">Underground Power Cables</h3>
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
         <div class="row">
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
            <div class="col-md-3 col-6 pb-5 text-center">
               <img :src="require('~/assets/img/apple.png')" alt="Villa" class="w-20 h-20 pb-2 mx-auto">
               <h3 class="elementor-image-box-title">Fruit Bearing Trees</h3>
            </div>
           
         </div>
         <div class="row">
            <div class="col-md-3 col-6 pb-5 text-center">
               <img :src="require('~/assets/img/gate.png')" alt="Villa" class="w-20 h-20 pb-2 mx-auto">
               <h3 class="elementor-image-box-title">Grand Entrance</h3>
            </div>
            <div class="col-md-3 col-6 pb-5 text-center">
               <img :src="require('~/assets/img/gazebo.png')" alt="Villa" class="w-20 h-20 pb-2 mx-auto">
               <h3 class="elementor-image-box-title">Gazebo By Water</h3>
            </div>
           
         </div>
          </div>
          <div class="sm:py-8 justify-center mt-10">
            <p class="text-2xl underline cursor-pointer text-center capitalize font-medium font-[Cinzel]">
              Master Plan and Pricing on Request
            </p>
            <img :src="require('~/assets/img/Map.png')" alt="Villa" class="w-full h-3/4 pb-2 mx-auto">
          </div>
          <div class="sm:py-8 justify-center mt-10">
            <p class="text-2xl underline cursor-pointer text-center capitalize font-medium font-[Cinzel]">
              Project 1: PEACE FARMS
            </p>
            <p class="text-2xl underline cursor-pointer text-center capitalize font-medium font-[Cinzel]">
              Site Location
            </p>
            <img :src="require('~/assets/img/Qrcode.png')" alt="Villa" height="100" width="100" class="w-25 h-25 h-20 pb-2 mx-auto">
          </div>
          </div>
      </div>
      
   </section>

   <section  class="py-4  bg-main lr-sec bg-[#bbdbb3]" id="gallery">
   <div class="w-full col-span-12 lg:mt-20 mt-10">
          <h2 class="text-2xl text-center uppercase font-medium font-[Cinzel]">
              Gallery
          </h2>
          <div class="w-full mt-10 block lg:flex justify-evenly">
            <div class="container">
              <b-carousel
                class="bg-[#bbdbb3] lg:w-1/2 mx-auto"
                id="image-gallery"
                v-model="activeSlide"
                :interval="4000"
                controls
                indicators
                background="#ababab"
                img-width="1024"
                img-height="480"
                style="text-shadow: 1px 1px 2px #333;"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd">
                  <b-carousel-slide id="image-list" v-for="(image, index) in images" :key="index">
                    <template #img>
                    <img id="gall-image" @click="lightboxOpen(image.link, image.caption, index, $event)" :src="image.link" :alt="'image'" class="d-block w-full h-96 object-cover">
                    </template>
                  </b-carousel-slide>
              </b-carousel>
                <div id="overlay" class="z-50" @click.self="closeOverlay" v-on:keyup="keyBoardShortcuts(e)">
                  <b-carousel
                    class="bg-[#bbdbb3] lg:w-1/2 mx-auto"
                    id="image-gallery"
                    v-model="activeSlide"
                    :interval="4000"
                    controls
                    indicators
                    background="#ababab"
                    img-width="1024"
                    img-height="480"
                    style="text-shadow: 1px 1px 2px #333;">
                <b-carousel-slide id="image-list" v-for="(image, index) in images" :key="index">
                  <template #img>
                  <img id="gall-image" @click="lightboxOpen(image.link, image.caption, index, $event)" :src="image.link" :alt="'image'" class="d-block w-full h-96 object-cover">
                  </template>
                </b-carousel-slide>
              </b-carousel>
                </div>


            </div>
          </div>
        </div>
      </section>

    <b-modal id="modal-1" title="" class="modal-title" :hide-footer="true">
      <div class="container px-0">
        <div class="row-auto" id="contact">
          <h2 class="heading font-[Cenzil] text-center text-dark">ENQUIRE NOW </h2>          
      </div>
        <div class="row-auto">
        <div class="w-full">
          <div class="row-auto pt-2 mx-auto d-block ps-3">
              <form @submit.prevent="sendEmail"  ref="form" method="post">
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
                      <input type="number" class="form-control border-bottom border-top-0 border-start-0 border-end-0 rounded-0" placeholder="Phone" aria-label="Phone" name="phoneNumber">
                    </div>
                </div>
                <div class="row pt-2">                        
                    <div class="col-12">
                      <select class="form-control border-bottom border-top-0 border-start-0 border-end-0 rounded-0" name="visitTime">
                          <option value="">Planning For Site Visit</option>
                          <option value="This Weekend">This Weekend</option>
                          <option value="Next Weekend">Next Weekend</option>
                          <option value="In This Month">In This Month</option>
                      </select>                                                    
                    </div>
                </div>
                <div class="row pt-2">                        
                    <div class="col-12">
                      <select class="form-control border-bottom border-top-0 border-start-0 border-end-0 rounded-0" name="callTime">
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
                    <div @click="sendEmail()" class="col text-center">
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
import emailjs from 'emailjs-com';
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import aosMixin from '@/mixins/aos'
export default {
  name: 'IndexPage',
  mixins: [aosMixin],
  components: {
    },
   
  data() {
    return {
      active: 1,
      index: null,
      images: [
            { link: require('~/assets/img/IMG_0234.JPG'), caption: 'Image 1' },
            { link: require('~/assets/img/IMG_0269.JPG'), caption: 'Image 2' },
            { link: require('~/assets/img/IMG_0343.JPG'), caption: 'Image 4' },
            { link: require('~/assets/img/IMG_0532.JPG'), caption: 'Image 5' },
            { link: require('~/assets/img/IMG_0533.JPG'), caption: 'Image 6' },
            { link: require('~/assets/img/IMG_0534.JPG'), caption: 'Image 7' },
            { link: require('~/assets/img/IMG_0535.JPG'), caption: 'Image 8' },
            { link: require('~/assets/img/IMG_0536.JPG'), caption: 'Image 9' },
            { link: require('~/assets/img/IMG_0539.JPG'), caption: 'Image 13' },
            { link: require('~/assets/img/IMG_9411.JPG'), caption: 'Image 15' },
            { link: require('~/assets/img/IMG_9633.JPG'), caption: 'Image 16' },
            { link: require('~/assets/img/IMG_9647.JPG'), caption: 'Image 17' },
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
        showNav: 1,
        keyBoardNav: 1,
        showcaption: 1,
        loop: 1,
        allowKeyboard: 1,
        imageIndex: 0,
        active: 0,
        lightIndex: 0,
      activeSlide: 0,
        carouselInterval: 3000,
        lightboxShow: false,
        lightboxImages: [],
      dropdownConcurency: false,
      dropdownCrypto: false,
    }
  },
  async mounted() {
    this.startLoop()
    await this.$nextTick();
    this.lightboxImages = this.images.map((image) => {
        return {
          src: image.link,
          caption: image.caption,
        };
    });
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
        // document.getElementById('overlay_image').src = href;
        // document.getElementById('overlay_caption').innerHTML = caption;
        this.allowKeyboard = 1;
        document.getElementById('overlay').style.display = 'block';
        // this.lightIndex = index;
        // this.imageIndex = index;
        this.activeSlide = index;
      },
      closeOverlay() {
        document.getElementById('overlay').style.display = 'none';
        this.allowKeyboard = 0;
      },
      cycleNext() {
        if (this.imageIndex < this.images.length) {
            this.lightIndex ++
          var nextActiveImage = document.querySelector('.activeSlide')
            .parentElement.nextSibling.querySelector('img');
            
          nextActiveImage.click();
        } else if (this.loop == 1) {
          var firstActiveImage = document.getElementById('image-gallery')
            .getElementById('image-list')
            .getElementById('gall-image');
            this.lightIndex ++
          firstActiveImage.click();
        }
      },
      cyclePrev() {
        if (this.imageIndex > 0) {
          var prevActiveImage = document.querySelector('.activeSlide')
            .parentElement.previousSibling.querySelector('img');
            this.lightIndex --
          prevActiveImage.click();
        } else if (this.loop == 1) {
          var lastActiveImage = document.getElementById('imageGallery')
            .querySelectorAll('li');
          var lastChild = lastActiveImage[lastActiveImage.length - 1].getElementById(
            'gall-image'
          );
          this.lightIndex --
          lastChild.click();
        }
      },
 
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
      emailjs.sendForm('service_5aw7ybl', 'template_j00yyvn', this.$refs.form, 'CAXeNuLKdK4qtQmdn')
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

.sr-only {
  visibility: hidden;
}
.card-img-top {
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
}

.card-img-bottom {
  height:239px;
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

  .cust-mar {
    margin-left: 0px
  }
  .enq-btn {
    position: fixed;
    top: 55%;
    right: -4.5% !important;
    z-index: 100;
    rotate: 270deg;
    background-color: #006400;
}
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

  .carousel-indicators li {
  background-color: #999 !important;
  background-color: rgba(70,70,70,.25) !important;
}

.carousel-indicators .active {
  background-color: #444 !important;
}
  .img-fluid {
    max-height:480px !important;
    object-fit: cover !important;
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

  .cust-mar {
    margin-left: 8px
  }
  .carousel-inner {
    height:50vh;
  }

  .enq-btn {
    position: fixed;
    top: 55%;
    right: -15.5% !important;
    z-index: 100;
    rotate: 270deg;
    background-color: #006400;
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
    object-fit: cover !important;
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

.bg-trading-tools {
  background-color: #d4e8ce;
  background-size: cover;
  background-position: center;
}
.max-h-0 {
  max-height: 0;
}
</style>
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

.theme-text {
  color: #006400;
}

/* Responsive Styling */
</style>