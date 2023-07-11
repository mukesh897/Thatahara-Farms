<template>
  <div class="w-full">
    <!-- Hero section -->
        <div class="bg-trading-tools lg:h-screen relative mt-[-60px] z-20 max-w-full shadow col-span-12 overflow-hidden">
          <b-carousel
            class="h-screen"
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
                <img
                  class="d-block img-fluid w-100"
                  width="1024"
                  height="480"
                  src="~/assets/img/C1.png"
                  srcset="~/assets/img/C1.png"
                  alt="image slot"
                >
              </template>
            <div class="carousel-caption">
              <h1 style="" class="font-bold carousel-text">Hampshire Estates</h1>
              <p class="mt-4 font-bold"> A green living project</p>
            </div>
            
          </b-carousel-slide>

            <!-- Slides with custom text -->
            <b-carousel-slide
            >
            <template #img>
              <img
                  class="d-block img-fluid w-100  "
                  width="1024"
                  height="480"
                  src="~/assets/img/C2.png"
                  srcset="~/assets/img/C2.png"
                  alt="image slot"
                >
            </template>
            <div class="">
              <h1 style="" class="font-bold carousel-text">Introducing LaTerra</h1>
              <p class="mt-4 font-bold">Your own countryside manor</p>
            </div>
            </b-carousel-slide>

            <!-- Slides with image only -->
            <b-carousel-slide
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
            </b-carousel-slide>

            <!-- Slides with img slot -->
            <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
            <b-carousel-slide>
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
            </b-carousel-slide>

            <!-- Slide with blank fluid image to maintain slide aspect ratio -->
            <b-carousel-slide>
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
            </b-carousel-slide>
          </b-carousel>
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
    <section class="relative max-w-full sm:mx-4 mt-10 pt-8 rounded-2xl overflow-hidden">
      <BaseSection data-aos="fade-down">
        <div class="col-span-12 lg:col-span-6">
          <div class="w-full lg:mt-20">
            <img :src="require('~/assets/img/LaT.jpg')" class="w-full h-full rounded-md" alt="" height="500px" width="450px"/>
          </div>
        </div>
        <div class="col-span-12 lg:col-span-6 space-y-6 lg:px-4 sm:px-6 lg:-mt-10">
          <h2 class="lg:text-6xl text-2xl font-bold mt-10 lg:mt-20 font-black">
            <span class="font-poppins font-bold">Introducing <span class="theme lg:text-8xl text-6xl whitespace-nowrap">La Terra</span></span>
          </h2>
          <p class="font-semibold lg:text-xl font-poppins tracking-normal leading-normal">Welcome to the epitome of countryside living! Situated at the epicenter of all the action, 'la terra' farm plots are nestled in the heart of a picturisque landscape. We invite you to embark on a journey that celebrates the beauty of nature, the tranquility of open spaces, and the timeless allure of farming. 'La terra' offers an extraordinary opportunity to own a piece of land and embrace a life filled with abundance, growth and fulfillment.</p>
          <!-- <ul class="space-y-4 sm:space-y-2">
            <LandingListItem title="Up to 3% back on purchases" />
            <LandingListItem title="Earn rewards in bitcoin or any crypto on NEFA" />
            <LandingListItem title="No annual fee" />
          </ul> -->
          <BaseButton
            class="w-full sm:max-w-[240px] px-10 py-4 bg-inherit text-[#5D794F] font-bold border-2 border-[#5D794F] text-base"
            >View Gallery</BaseButton
          >
        </div>
      </BaseSection>
    </section>

    <section class="w-full">
      <BaseSection>
        <LandingBuyTradeImage class="lg:hidden mb-4 mt-10" />
        <div data-aos="fade-right" class="col-span-12 lg:col-span-12 mt-4 xl:mt-20 space-y-6 lg:px-4">
          <h2 class="lg:text-8xl text-2xl font-bold lg:mt-20 font-black">
            <span class="font-poppins font-bold">Your own <span class="theme lg:text-8xl text-4xl  whitespace-nowrap">Countryside Manor</span></span>
          </h2>
          <div class="flex">
            <p class="w-full mt-4 font-semibold lg:text-xl font-poppins tracking-normal leading-normal">
              We are absolutely thrilled to offer you the option of building a farm house on the plot. If you desire a tranquil countryside retreat, our skilled team is ready to create a custom-designed farm house that harmonizes with the natural surroundings. From spacious interiors to functional barns and expansive outdoor spaces, we'll work closely with you to bring your ideal farm house to fruition. Your vision, combined with our expertise, will result in a picturesque farm house where you can enjoy the serenity of rural living.

            </p>
            <LandingBuyTradeImage class="w-full ml-5 h-50 hidden lg:block" />
          </div>
         
          <!-- <BaseButton
              class="max-w-full px-8 py-4 bg-gradient-to-r from-[#5D794F] to-[#5D794F] border border-[#fff] text-white"
            >
              Schedule a Visit
          </BaseButton> -->
          <!-- <div class="space-y-6 lg:pr-12">
            <LandingExchange
              title="Amount"
              name="amount"
              type="number"
              default-value="5.000"
              :exchange-selected="currencySelected"
              :exchanges="currencies"
            />
            <LandingExchange
              title="Get"
              name="get"
              type="number"
              default-value="0.10901"
              :exchange-selected="cryptoSelected"
              :exchanges="cryptocurrencies"
            />
            <BaseButton class="w-full px-5 py-4 bg-blue-gradient text-white text-base font-medium">Buy Now</BaseButton>
          </div> -->
        </div>
        <!-- <LandingBuyTradeImage data-aos="fade-left" class="hidden sm:block" /> -->
      </BaseSection>
    </section>

    <section class="relative max-w-full sm:mx-4 mt-10 lg:pt-8 rounded-2xl overflow-hidden">
      <BaseSection data-aos="fade-down">
        <div class="col-span-12 lg:col-span-6">
          <div class="w-full lg:mt-20 mt-10">
            <img :src="require('~/assets/img/getaway.png')" class="w-full h-full rounded-md" alt="" height="500px" width="450px"/>
          </div>
        </div>
        <div class="col-span-12 lg:col-span-6 lg:space-y-6 lg:px-4 sm:px-6 -mt-10">
          <p class="lg:4xl text-3xl font-bold lg:mt-20 mt-10 font-black leading-normal">
            A Perfect 
          </p>
          <p class="theme lg:text-6xl text-4xl font-bold whitespace-nowrap">Weekend Getaway</p>
          <p class=" font-semibold lg:text-xl font-poppins tracking-normal leading-normal">
            Situated at a drive of
            70 minutes from the ever busy Bangalore International airport, 'la terra' by Hampshire Estates never fails to grab your attention for a weekend getaway with your family. This farmland can truly be your personal heaven on Earth! 
          </p>
          <!-- <ul class="space-y-4 sm:space-y-2">
            <LandingListItem title="Up to 3% back on purchases" />
            <LandingListItem title="Earn rewards in bitcoin or any crypto on NEFA" />
            <LandingListItem title="No annual fee" />
          </ul> -->
          <BaseButton
            class="w-full mt-5 sm:max-w-[240px] px-10 py-4 bg-inherit text-[#5D794F] font-bold border-2 border-[#5D794F] text-base"
            >View Gallery</BaseButton
          >
        </div>
      </BaseSection>
    </section>

    <section class="w-full">
      <BaseSection>
        <!-- <LandingBuyTradeImage class="sm:hidden mb-8" /> -->
        <div data-aos="fade-right" class="col-span-12 lg:col-span-12 mt-4 xl:mt-20 space-y-6 lg:px-4">
          <h2 class="lg:text-6xl text-3xl font-bold mt-10 lg:mt-20 font-black">
            <span class="font-poppins font-bold">Why <span class="theme lg:text-8xl text-4xl whitespace-nowrap">Compromise?</span></span>
          </h2>
          <div class="flex">
            <p class="font-semibold lg:max-w-3/4 lg:w-3/4 lg:text-xl font-poppins tracking-normal leading-normal">
             Why settle for a typical party venue when you can host a truly remarkable gathering at a farm? Embrace the natural beauty, wide-open spaces, and unique experiences that only a farm can provide. It's time to plan an unforgettable farm party that will leave a lasting impression on your guests!
              Prepare for an adrenaline-pumping excitement as FIA 
              Grade 2 racing track is coming up in Penakonda, which is about 15 minutes from your personal Paradise 'la terra!' 

            </p>
          </div>
         
          <BaseButton
              class="max-w-full px-8 font-medium py-4 bg-gradient-to-r from-[#5D794F] to-[#5D794F] border border-[#fff] text-white"
            >
            <a
              v-smooth-scroll
              data-aos="flip-down"
              data-aos-delay="150"
              href="#contact"
            >
              Schedule a Visit
            </a> 
          </BaseButton>
          <!-- <div class="space-y-6 lg:pr-12">
            <LandingExchange
              title="Amount"
              name="amount"
              type="number"
              default-value="5.000"
              :exchange-selected="currencySelected"
              :exchanges="currencies"
            />
            <LandingExchange
              title="Get"
              name="get"
              type="number"
              default-value="0.10901"
              :exchange-selected="cryptoSelected"
              :exchanges="cryptocurrencies"
            />
            <BaseButton class="w-full px-5 py-4 bg-blue-gradient text-white text-base font-medium">Buy Now</BaseButton>
          </div> -->
        </div>
        <!-- <LandingBuyTradeImage data-aos="fade-left" class="hidden sm:block" /> -->
      </BaseSection>
    </section>

    <section class="relative max-w-full my-20 mx-4 lg:mx-0 shadow rounded-2xl overflow-hidden">
      <div class="relative max-w-screen-xl lg:px-4 sm:px-2 mx-auto grid grid-cols-12 gap-x-6">
        <div data-aos="fade-left" class="lg:hidden col-span-12 flex bg-white justify-center items-center lg:col-span-6 space-y-8 sm:space-y-6 lg:px-4 sm:px-6 mt-8">
          <h2 class="text-4xl font-bold">What's <span class="sm:hidden lg:block font-poppins text-6xl theme"> Near?</span> </h2>
        </div>
        <div data-aos="fade-right" class="col-span-12  items-center lg:col-span-6 space-y-8 sm:space-y-6 p-8 sm:px-6 mt-8">
            <div class="flex p-8">
              <img :src="require('~/assets/img/shiva.png')" class="w-16 h-16 object-contain self-center" alt="" />
              <p class="ml-5 flex items-center lg:text-2xl font-bold sm:text-lg lg:text-32 sm:text-20 text-[#1B3E25] tracking-normal leading-normal">Isha Foundation <br></p>
            </div>
            <div class="flex mt-5 p-8">
              <img :src="require('~/assets/img/airport.png')" class="w-16 h-16 object-contain self-center" alt="" />
              <p class="ml-5 flex items-center lg:text-2xl font-bold sm:text-lg lg:text-32 sm:text-20 text-[#1B3E25] tracking-normal leading-normal">Bangalore Airport</p>
            </div>
            <div class="flex mt-5 p-8">
              <img :src="require('~/assets/img/hills.png')" class="w-16 h-16 object-contain self-center" alt="" />
              <p class="ml-5 flex items-center lg:text-2xl font-bold sm:text-lg lg:text-32 sm:text-20 text-[#1B3E25] tracking-normal leading-normal">Nandi Hills</p>
            </div>
            <div class="flex mt-5 p-8">
              <img :src="require('~/assets/img/train.png')" class="w-16 h-16 object-contain self-center" alt="" />
              <p class="ml-5 flex items-center lg:text-2xl font-bold sm:text-lg tracking-normal leading-normal">Hindupur Railway Station</p>
            </div>
        </div>
        <div data-aos="fade-left" class="col-span-12 hidden  lg:flex bg-white justify-center items-center lg:col-span-6 space-y-8 sm:space-y-6 lg:px-4 sm:px-6 mt-8">
          <h2 class="text-6xl font-bold">What's <span class="sm:hidden lg:block font-poppins text-8xl theme"> Near?</span> </h2>
        </div>
        <!-- <LandingTradingToolImage data-aos="fade-left" class="hidden sm:block" /> -->
      </div>
    </section>

    <!-- Advanced trading tools section -->
    <section class="bg-trading-tools relative max-w-full mx-4 my-20 pt-16 shadow rounded-2xl overflow-hidden">
      <div class="relative max-w-screen-xl lg:px-4 sm:px-2 mx-auto grid grid-cols-12 gap-x-6">
        <div data-aos="fade-right" class="col-span-12 flex justify-center text-left lg:items-center lg:col-span-6 space-y-8 sm:space-y-6 lg:px-4 sm:px-6">
          <h2 class="lg:text-8xl text-5xl font-bold text-white">What <br class="sm:hidden lg:block"> we offer </h2>
        </div>
        <div class="col-span-12 bg-white items-center lg:col-span-6 space-y-8 sm:space-y-6 p-8 sm:px-6 mt-8">
            <div v-if="active ==1 " class="w-full slide" :class="{ fade: transitioning }">
              <div class="flex p-8">
                <img :src="require('~/assets/img/land-clearing.png')" class="w-16 h-16 object-contain self-center" alt="" />
                <p class="ml-5 flex items-center lg:text-2xl font-bold sm:text-lg lg:text-32 sm:text-20 text-[#1B3E25] tracking-normal leading-normal">Land cleaning <br> and development</p>
              </div>
              <div class="flex mt-5 p-8">
                <img :src="require('~/assets/img/gated-community.png')" class="w-16 h-16 object-contain self-center" alt="" />
                <p class="ml-5 flex items-center lg:text-2xl font-bold sm:text-lg lg:text-32 sm:text-20 text-[#1B3E25] tracking-normal leading-normal">Gated Community</p>
              </div>
              <div class="flex mt-5 p-8">
                <img :src="require('~/assets/img/Road.png')" class="w-16 h-16 object-contain self-center" alt="" />
                <p class="ml-5 flex items-center lg:text-2xl font-bold sm:text-lg lg:text-32 sm:text-20 text-[#1B3E25] tracking-normal leading-normal">Internal Paveroads</p>
              </div>
            </div>
            <div v-if="active == 2"  class="w-full slide" :class="{ fade: transitioning }">
              <div class="flex p-8">
                <img :src="require('~/assets/img/water-connection.png')" class="w-16 h-16 object-contain self-center" alt="" />
                <p class="ml-5 flex items-center lg:text-2xl font-bold sm:text-lg lg:text-32 sm:text-20 text-[#1B3E25] tracking-normal leading-normal">Water Connection</p>
              </div>
              <div class="flex mt-5 p-8">
                <img :src="require('~/assets/img/electricity-connection.png')" class="w-16 h-16 object-contain self-center" alt="" />
                <p class="ml-5 flex items-center lg:text-2xl font-bold sm:text-lg lg:text-32 sm:text-20 text-[#1B3E25] tracking-normal leading-normal">Electricity Infrastructure</p>
              </div>
              <div class="flex mt-5 p-8">
                <img :src="require('~/assets/img/street-lights.png')" class="w-16 h-16 object-contain self-center" alt="" />
                <p class="ml-5 flex items-center lg:text-2xl font-bold sm:text-lg lg:text-32 sm:text-20 text-[#1B3E25] tracking-normal leading-normal">Street Lights</p>
              </div>
            </div>
            <div v-if="active == 3"  class="w-full slide" :class="{ fade: transitioning }">
              <div class="flex p-8">
                <img :src="require('~/assets/img/farm-maintainence.png')" class="w-16 h-16 object-contain self-center" alt="" />
                <p class="ml-5 flex items-center lg:text-2xl font-bold sm:text-lg lg:text-32 sm:text-20 text-[#1B3E25] tracking-normal leading-normal">Farm Maintainence</p>
              </div>
              <div class="flex mt-5 p-8">
                <img :src="require('~/assets/img/exotic-farmhouse-design.png')" class="w-16 h-16 object-contain self-center" alt="" />
                <p class="ml-5 flex items-center lg:text-2xl font-bold sm:text-lg lg:text-32 sm:text-20 text-[#1B3E25] tracking-normal leading-normal">Exotic Farmhouse Designs</p>
              </div>
              <div class="flex mt-5 p-8">
                <img :src="require('~/assets/img/lush-green-ambience.png')" class="w-16 h-16 object-contain self-center" alt="" />
                <p class="ml-5 flex items-center lg:text-2xl font-bold sm:text-lg lg:text-32 sm:text-20 text-[#1B3E25] tracking-normal leading-normal">Lush Green Ambience</p>
              </div>
            </div>
            <div v-if="active == 4"  class="w-full slide" :class="{ fade: transitioning }">
              <div class="flex mt-5 p-8">
                <img :src="require('~/assets/img/untitled.png')" class="w-16 h-16 object-contain self-center" alt="" />
                <p class="ml-5 flex items-center lg:text-2xl font-bold sm:text-lg tracking-normal leading-normal">CCTV Security</p>
              </div>
              <div class="flex mt-5 p-8">
                <img :src="require('~/assets/img/boundary.png')" class="w-16 h-16 object-contain self-center" alt="" />
                <p class="ml-5 flex items-center lg:text-2xl font-bold sm:text-lg tracking-normal leading-normal">Boundary</p>
              </div>
              <div class="flex p-8">
                <span class="w-16 h-16 object-contain self-center inline-block" ></span>
                <p class="ml-5 flex items-center lg:text-2xl font-bold sm:text-lg lg:text-32 sm:text-20 text-[#1B3E25] tracking-normal leading-normal"></p>
              </div>
            </div>
            <!-- <img @click="changeActive('right')" class="absolute top-[25%] right-[5%] w-5 h-5" src="~/assets/img/double-arrow-right-icon.svg"/>
            <img @click="changeActive('left')" class="absolute top-[25%] w-5 h-5 left-[5%]" src="~/assets/img/double-arrow-left-icon.svg"/> -->
        </div>
        <!-- <LandingTradingToolImage data-aos="fade-left" class="hidden sm:block" /> -->
      </div>
    </section>

    <!-- Industry-leading security section -->
    <!-- <section class="bg-trading-tools relative max-w-full sm:mx-4 my-20 pt-16 shadow rounded-2xl overflow-hidden">
      <div class="relative max-w-screen-xl px-8 mx-auto grid grid-cols-12 gap-x-6">
        <div data-aos="fade-right" class="col-span-12 lg:col-span-6 p-8 bg-white">
          <div class="w-full">
            <div class="flex p-8">
              <img :src="require('~/assets/img/water-connection.png')" class="w-16 h-16 object-contain self-center" alt="" />
              <p class="ml-5 flex items-center lg:text-2xl font-bold sm:text-lg lg:text-32 sm:text-20 text-[#1B3E25] tracking-normal leading-normal">Water Connection</p>
            </div>
            <div class="flex mt-5 p-8">
              <img :src="require('~/assets/img/electricity-connection.png')" class="w-16 h-16 object-contain self-center" alt="" />
              <p class="ml-5 flex items-center lg:text-2xl font-bold sm:text-lg lg:text-32 sm:text-20 text-[#1B3E25] tracking-normal leading-normal">Electricity Infrastructure</p>
            </div>
            <div class="flex mt-5 p-8">
              <img :src="require('~/assets/img/street-lights.png')" class="w-16 h-16 object-contain self-center" alt="" />
              <p class="ml-5 flex items-center lg:text-2xl font-bold sm:text-lg lg:text-32 sm:text-20 text-[#1B3E25] tracking-normal leading-normal">Street Lights</p>
            </div>
            <div class="flex mt-5 p-8">
              <img :src="require('~/assets/img/boundary.png')" class="w-16 h-16 object-contain self-center" alt="" />
              <p class="ml-5 flex items-center lg:text-2xl font-bold sm:text-lg tracking-normal leading-normal">Boundary</p>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" class="col-span-12 relative lg:col-span-5 space-y-8 sm:space-y-6 mt-8 xl:px-8 p-8">
          <div class="flex p-8">
              <img :src="require('~/assets/img/farm-maintainence.png')" class="w-16 h-16 object-contain self-center" alt="" />
              <p class="ml-5 flex items-center lg:text-2xl font-bold sm:text-lg lg:text-32 sm:text-20 text-[#1B3E25] tracking-normal leading-normal">Farm Maintainence</p>
            </div>
            <div class="flex mt-5 p-8">
              <img :src="require('~/assets/img/exotic-farmhouse-design.png')" class="w-16 h-16 object-contain self-center" alt="" />
              <p class="ml-5 flex items-center lg:text-2xl font-bold sm:text-lg lg:text-32 sm:text-20 text-[#1B3E25] tracking-normal leading-normal">Exotic Farmhouse Designs</p>
            </div>
            <div class="flex mt-5 p-8">
              <img :src="require('~/assets/img/lush-green-ambience.png')" class="w-16 h-16 object-contain self-center" alt="" />
              <p class="ml-5 flex items-center lg:text-2xl font-bold sm:text-lg lg:text-32 sm:text-20 text-[#1B3E25] tracking-normal leading-normal">Lush Green Ambience</p>
            </div>
             <div class="flex mt-5 p-8">
              <img :src="require('~/assets/img/untitled.png')" class="w-16 h-16 object-contain self-center" alt="" />
              <p class="ml-5 flex items-center lg:text-2xl font-bold sm:text-lg tracking-normal leading-normal">CCTV Security</p>
            </div> -->

        <!-- </div>
      </div>
    </section> -->

    <!-- Getting started section -->
    <section id="contact" class="relative max-w-full sm:mx-4 xl:mx-10 my-24 shadow sm:rounded-2xl overflow-hidden">
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
              <label class="flex items-center lg:text-2xl font-bold sm:text-lg lg:text-32 sm:text-20 text-[#1B3E25] tracking-normal leading-normal" for="email">Email:</label>
              <input id="email" type="email" v-model="email" required class="w-full rounded-lg">
            </div>
            <div>
              <label class="flex items-center lg:text-2xl font-bold sm:text-lg lg:text-32 sm:text-20 text-[#1B3E25] tracking-normal leading-normal" for="email">Phone:</label>
              <input id="Contact" type="number" v-model="email" required class="w-full rounded-lg">
            </div>
            <div>
              <label for="message" class="flex items-center lg:text-2xl font-bold sm:text-lg lg:text-32 sm:text-20 text-[#1B3E25] tracking-normal leading-normal">Message:</label>
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

      <section class="relative max-w-full overflow-hidden">
      <div class="relative max-w-screen-xl lg:px-4 sm:px-2 mx-auto grid grid-cols-12 gap-x-6">
        
        <div data-aos="fade-right" class="col-span-12  items-center lg:col-span-6 space-y-8 sm:space-y-6 p-8 sm:px-6 mt-8">
          <form ref="form" class="w-full">
            <div>
                <label class="flex items-center lg:text-2xl font-medium sm:text-lg lg:text-32 sm:text-20 text-[#1B3E25] tracking-normal leading-normal" for="email">Full Name:</label>
                <input id="name" type="name" required class="lg:px-4 py-2 w-full capitalize rounded-lg border">
              </div>
              <div class="mt-3">
                <label class="flex items-center lg:text-2xl font-medium sm:text-lg lg:text-32 sm:text-20 text-[#1B3E25] tracking-normal leading-normal" for="email">Email:</label>
                <input id="email" type="email" required class="lg:px-4 py-2 w-full rounded-lg border">
              </div>
              <div class="mt-3">
                <label class="flex items-center lg:text-2xl font-medium sm:text-lg lg:text-32 sm:text-20 text-[#1B3E25] tracking-normal leading-normal" for="email">Phone:</label>
                <input id="phoneNumber" type="number" required class="lg:px-4 py-2 w-full rounded-lg border">
              </div>
              <div class="mt-3">
                <label for="message" class="flex items-center lg:text-2xl font-medium sm:text-lg lg:text-32 sm:text-20 text-[#1B3E25] tracking-normal leading-normal">Message:</label>
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
        <div data-aos="fade-left" class="col-span-12 font-poppins flex bg-white justify-center items-center lg:col-span-6 space-y-8 sm:space-y-6 lg:px-4 sm:px-6 mt-8">
          <h2 class="text-6xl font-bold">Request a  <span class="sm:hidden lg:block font-poppins text-8xl theme"> Callback</span> </h2>
        </div>
        <!-- <LandingTradingToolImage data-aos="fade-left" class="hidden sm:block" /> -->
      </div>
    </section>
    </section>

    <!-- FAQ section -->
    <section class="w-full my-24">
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
    </section>

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
import VueSlickCarousel from 'vue-slick-carousel'
import emailjs from 'emailjs-com';
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import aosMixin from '@/mixins/aos'
export default {
  name: 'IndexPage',
  mixins: [aosMixin],
  components: { VueSlickCarousel },
  data() {
    return {
      active: 1,
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
  mounted() {
    this.startLoop()
    
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
.text-header-gradient {
  background: #5D794F;
  background: linear-gradient(169.4deg, #26602d -6.01%, #0cff10 36.87%, #2ff059 78.04%, #0ee86c 103.77%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.slide {
  transition: opacity 0.5s;
}

.fade {
  opacity: 0;
}

.theme {
  color: #5D794F;
  
}

@media only screen and (min-width: 760px) {
  .carousel-inner {
    height:100vh;
  }
  .img-fluid {
    height:100vh !important;
  }
  .carousel-caption {
    bottom: 160px !important;
  }
  .carousel-text {
    font-size: 80px;
  }
}

@media only screen and (max-width: 760px) {
  .carousel-inner {
    height:50vh;
  }
  .img-fluid {
    height:50vh !important;
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
  background-color: #5D794F;
  background-size: cover;
  background-position: center;
}
.max-h-0 {
  max-height: 0;
}
</style>
