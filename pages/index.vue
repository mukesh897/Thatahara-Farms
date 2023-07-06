<template>
  <div class="w-full">
    <!-- Hero section -->
    <section id="hero" class="w-full pt-8">
      <BaseSection class="">
        <div
          class="col-span-12 lg:col-span-6 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left">
          <h1
            data-aos="fade-right"
            data-aos-once="true"
            class="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold theme leading-tight capitalize sm:pr-8 xl:pr-10"
          >
            Hampshire Estates
          </h1>
          <p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class="theme paragraph theme sm:block">
            A green living project
          </p>
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="700"
            class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2"
          >
            <BaseButton
              class="max-w-full px-8 py-4 bg-gradient-to-r from-[#68A678] to-[#68a678] border border-[#fff] text-white"
            >
            <a
              v-smooth-scroll
              data-aos="flip-down"
              data-aos-delay="150"
              href="#contact"
              @click="scrollToSection()"
            >
              Enquire Now
            </a>  
            </BaseButton>
            <!-- <BaseButton
              class="max-w-full px-6 py-4 bg-inherit text-gradient border border-[#0c66ee] flex items-center justify-center"
            >
              <span>Download App</span>
              <ChevronDownIcon :size="20" class="mt-1 text-[#0c66ee]" />
            </BaseButton> -->
          </div>
        </div>
        <div class="hidden sm:block col-span-12 lg:col-span-6">
          <div class="w-full">
            <img
              data-aos="fade-up"
              data-aos-once="true"
              :src="require('~/assets/img/Laterra.jpeg')"
              class="rounded-lg h-auto w-auto"
              alt=""
            />
          </div>
        </div>
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          :src="require('~/assets/img/pattern/ellipse-1.png')"
          class="hidden sm:block absolute bottom-12 xl:bottom-16 left-4 xl:left-0 w-6"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          :src="require('~/assets/img/pattern/ellipse-2.png')"
          class="hidden sm:block absolute top-4 sm:top-10 right-64 sm:right-96 xl:right-[32rem] w-6"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          :src="require('~/assets/img/pattern/ellipse-3.png')"
          class="hidden sm:block absolute bottom-56 right-24 w-6"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          :src="require('~/assets/img/pattern/star.png')"
          class="hidden sm:block absolute top-20 sm:top-28 right-16 lg:right-0 lg:left-[30rem] w-8"
        />
      </BaseSection>
    </section>

    <!-- Crypto statistic section -->
    <!-- <section
      class="max-w-screen-xl mx-2 sm:mx-auto px-4 sm:px-6 lg:px-0 py-6 pb-20 sm:py-8 rounded-[2.25rem] sm:rounded-xl bg-white shadow-lg sm:shadow-md transform lg:-translate-y-12"
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
    <section class="bg-trading-tools relative max-w-full sm:mx-4 my-20 py-16 shadow rounded-2xl overflow-hidden">
      <BaseSection data-aos="fade-down">
        <div class="col-span-12 lg:col-span-5">
          <div class="w-full">
            <img :src="require('~/assets/img/getting-started/newHero.jpg')" class="w-auto h-3/4 rounded-md" alt="" height="500px" width="450px"/>
          </div>
        </div>
        <div class="col-span-12 lg:col-span-7 space-y-6 px-4 sm:px-6">
          <h2 class="text-4xl font-bold mt-20 text-white">
            <span class="theme font-bold">La Terra</span>
          </h2>
          <p class=" text-[#1B3E25] font-semibold tracking-normal leading-normal">Welcome to the epitome of countryside living! Situated at the epicenter of all the action, 'la terra' farm plots are nestled in the heart of a picturisque landscape. We invite you to embark on a journey that celebrates the beauty of nature, the tranquility of open spaces, and the timeless allure of farming. 'La terra' offers an extraordinary opportunity to own a piece of land and embrace a life filled with abundance, growth and fulfillment.</p>
          <!-- <ul class="space-y-4 sm:space-y-2">
            <LandingListItem title="Up to 3% back on purchases" />
            <LandingListItem title="Earn rewards in bitcoin or any crypto on NEFA" />
            <LandingListItem title="No annual fee" />
          </ul> -->
          <BaseButton
            class="w-full sm:max-w-[240px] px-10 py-4 bg-inherit text-[#68A678] font-bold border-2 border-[#68A678] text-base"
            >View Gallery</BaseButton
          >
        </div>
      </BaseSection>
    </section>

    <section class="w-full my-24">
      <BaseSection>
        <LandingBuyTradeImage class="sm:hidden mb-8" />
        <div data-aos="fade-right" class="col-span-12 lg:col-span-6 mt-4 xl:mt-20 space-y-6 px-4">
          <h2 class="text-4xl font-semibold sm:pr-8 xl:pr-12">
            Choose <span class="theme">Best</span> Properties
          </h2>
          <p class="text-[#1B3E25] font-semibold tracking-normal leading-normal">
            Discover a diverse range of properties tailored to your specific needs, from agricultural and industrial lands to estate and sustainable options, ensuring you make the perfect investment for your future.
          </p>
          <BaseButton
              class="max-w-full px-8 py-4 bg-gradient-to-r from-[#68A678] to-[#68a678] border border-[#fff] text-white"
            >
              Schedule a Visit
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
        <LandingBuyTradeImage data-aos="fade-left" class="hidden sm:block" />
      </BaseSection>
    </section>

    <!-- Advanced trading tools section -->
    <section class="bg-trading-tools relative max-w-full sm:mx-4 my-20 pt-16 shadow rounded-2xl overflow-hidden">
      <div class="relative max-w-screen-xl px-4 sm:px-2 mx-auto grid grid-cols-12 gap-x-6">
        <div data-aos="fade-right" class="col-span-12 flex justify-center items-center lg:col-span-6 space-y-8 sm:space-y-6 px-4 sm:px-6 mt-8">
          <h2 class="lg:text-8xl text-4xl font-bold text-white">What <br class="sm:hidden lg:block"> we offer </h2>
          <!-- <div class="space-y-2">
            <h4 class="text-lg font-medium">Professional Access, Non-stop Availability</h4>
            <p class="paragraph text-sm xl:text-base">
              We provide premium access to crypto trading for both individuals and institutions through high liquidity,
              reliable order execution and constant uptime.
            </p>
          </div>
          <div class="space-y-2">
            <h4 class="text-lg font-medium">A Range of Powerful Apis</h4>
            <p class="paragraph text-sm xl:text-base">
              Set up your own trading interface or deploy your algorithmic strategy with our high-performance FIX and
              HTTP APIs. Connect to our WebSocket for real-time data streaming.
            </p>
          </div>
          <div class="space-y-2">
            <h4 class="text-lg font-medium">Customer Support</h4>
            <p class="paragraph text-sm xl:text-base">
              Premium 24/7 support available to all customers worldwide by phone or email. Dedicated account managers
              for partners.
            </p>
          </div> -->
          <!-- <div class="flex flex-col sm:flex-row mt-auto">
            <BaseButton class="px-10 py-4 bg-inherit text-white border border-[rgba(104, 166, 120, 0.4)] text-base">
              Know More
            </BaseButton>
          </div> -->
        </div>
        <div class="col-span-12 bg-white items-center lg:col-span-6 space-y-8 sm:space-y-6 p-8 sm:px-6 mt-8">
            <div class="flex p-8">
              <img :src="require('~/assets/img/land-clearing.png')" class="w-16 h-16 object-contain self-center" alt="" />
              <p class="ml-5 flex items-center text-[#1B3E25] lg:text-2xl sm:text-lg lg:text-32 sm:text-20 tracking-normal leading-normal">Land cleaning <br> and development</p>
            </div>
            <div class="flex mt-5 p-8">
              <img :src="require('~/assets/img/gated-community.png')" class="w-16 h-16 object-contain self-center" alt="" />
              <p class="ml-5 flex items-center text-[#1B3E25] lg:text-2xl sm:text-lg lg:text-32 sm:text-20 tracking-normal leading-normal">Gated Community</p>
            </div>
            <div class="flex mt-5 p-8">
              <img :src="require('~/assets/img/Road.png')" class="w-16 h-16 object-contain self-center" alt="" />
              <p class="ml-5 flex items-center text-[#1B3E25] lg:text-2xl sm:text-lg lg:text-32 sm:text-20 tracking-normal leading-normal">Internal Paveroads</p>
            </div>
            <div class="flex mt-5 p-8">
              <img :src="require('~/assets/img/untitled.png')" class="w-16 h-16 object-contain self-center" alt="" />
              <p class="ml-5 flex items-center text-[#1B3E25] lg:text-2xl sm:text-lg tracking-normal leading-normal">CCTV Security</p>
            </div>
        </div>
        <!-- <LandingTradingToolImage data-aos="fade-left" class="hidden sm:block" /> -->
      </div>
    </section>

    <!-- Industry-leading security section -->
    <section class="bg-trading-tools relative max-w-full sm:mx-4 my-20 pt-16 shadow rounded-2xl overflow-hidden">
      <div class="relative max-w-screen-xl px-8 mx-auto grid grid-cols-12 gap-x-6">
        <div data-aos="fade-right" class="col-span-12 lg:col-span-6 p-8 bg-white">
          <div class="w-full">
            <div class="flex p-8">
              <img :src="require('~/assets/img/water-connection.png')" class="w-16 h-16 object-contain self-center" alt="" />
              <p class="ml-5 flex items-center text-[#1B3E25] lg:text-2xl sm:text-lg lg:text-32 sm:text-20 tracking-normal leading-normal">Water Connection</p>
            </div>
            <div class="flex mt-5 p-8">
              <img :src="require('~/assets/img/electricity-connection.png')" class="w-16 h-16 object-contain self-center" alt="" />
              <p class="ml-5 flex items-center text-[#1B3E25] lg:text-2xl sm:text-lg lg:text-32 sm:text-20 tracking-normal leading-normal">Electricity Infrastructure</p>
            </div>
            <div class="flex mt-5 p-8">
              <img :src="require('~/assets/img/street-lights.png')" class="w-16 h-16 object-contain self-center" alt="" />
              <p class="ml-5 flex items-center text-[#1B3E25] lg:text-2xl sm:text-lg lg:text-32 sm:text-20 tracking-normal leading-normal">Street Lights</p>
            </div>
            <div class="flex mt-5 p-8">
              <img :src="require('~/assets/img/boundary.png')" class="w-16 h-16 object-contain self-center" alt="" />
              <p class="ml-5 flex items-center text-[#1B3E25] lg:text-2xl sm:text-lg tracking-normal leading-normal">Boundary</p>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" class="col-span-12 lg:col-span-5 space-y-8 sm:space-y-6 mt-8 xl:px-8 p-8">
          <div class="flex p-8">
              <img :src="require('~/assets/img/farm-maintainence.png')" class="w-16 h-16 object-contain self-center" alt="" />
              <p class="ml-5 flex items-center text-[#1B3E25] lg:text-2xl sm:text-lg lg:text-32 sm:text-20 tracking-normal leading-normal">Farm Maintainence</p>
            </div>
            <div class="flex mt-5 p-8">
              <img :src="require('~/assets/img/exotic-farmhouse-design.png')" class="w-16 h-16 object-contain self-center" alt="" />
              <p class="ml-5 flex items-center text-[#1B3E25] lg:text-2xl sm:text-lg lg:text-32 sm:text-20 tracking-normal leading-normal">Exotic Farmhouse Designs</p>
            </div>
            <div class="flex mt-5 p-8">
              <img :src="require('~/assets/img/lush-green-ambience.png')" class="w-16 h-16 object-contain self-center" alt="" />
              <p class="ml-5 flex items-center text-[#1B3E25] lg:text-2xl sm:text-lg lg:text-32 sm:text-20 tracking-normal leading-normal">Lush Green Ambience</p>
            </div>
            <!-- <div class="flex mt-5 p-8">
              <img :src="require('~/assets/img/untitled.png')" class="w-16 h-16 object-contain self-center" alt="" />
              <p class="ml-5 flex items-center text-[#1B3E25] lg:text-2xl sm:text-lg tracking-normal leading-normal">CCTV Security</p>
            </div> -->
        </div>
      </div>
    </section>

    <!-- Getting started section -->
    <section id="contact" class="bg-trading-tools relative max-w-full sm:mx-4 xl:mx-10 my-24 shadow sm:rounded-2xl overflow-hidden">
      <div class="w-full py-16 flex flex-col items-center">
        <h2 data-aos="flip-down" class="text-3xl sm:text-4xl font-semibold text-center">
          Contact Us
        </h2>
        <div
          data-aos="fade-up"
          class="relative w-full flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 px-4 xl:px-10 mt-16 sm:mt-8"
        >
          <div class=" max-w-md mx-auto">
            <form @submit="sendEmail" class="w-full">
            <div>
              <label class="flex items-center text-[#1B3E25] lg:text-2xl sm:text-lg lg:text-32 sm:text-20 tracking-normal leading-normal" for="email">Email:</label>
              <input id="email" type="email" v-model="email" required class="w-full rounded-lg">
            </div>
            <div>
              <label for="message" class="flex items-center text-[#1B3E25] lg:text-2xl sm:text-lg lg:text-32 sm:text-20 tracking-normal leading-normal">Message:</label>
              <textarea id="message" v-model="message" required class="w-full rounded-lg"></textarea>
            </div>
            <div class="w-full mt-5 flex justify-center">
              <BaseButton
              type="submit"
              class="max-w-full px-8 py-4 bg-gradient-to-r from-[#68A678] to-[#68a678] border border-[#fff] text-white"
            >
              Send
          </BaseButton>
            </div>
          </form>
          </div>
          <div></div>
        </div>
      </div>
    </section>

    <!-- FAQ section -->
    <section class="w-full my-24">
      <BaseSection>
        <div data-aos="fade-right" data-aos-delay="150" class="col-span-12 lg:col-span-6">
          <div class="w-full">
            <img :src="require('~/assets/img/WhyChooseUs.png')" class="w-3/4 h-3/4" alt="" />
          </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="150" class="col-span-12 lg:col-span-6 px-4 sm:px-6 mt-8">
          <span class="text-base text-[#1B3E25] font-semibold uppercase mb-4 sm:mb-2">Support</span>
          <h2 class="text-3xl sm:text-4xl font-semibold mb-10 sm:mb-6">Frequently asked questions</h2>

          <ul class="shadow-box">
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
import aosMixin from '@/mixins/aos'
export default {
  name: 'IndexPage',
  mixins: [aosMixin],
  data() {
    return {
      selected: 0,
      email: '',
      message: '',
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
            "We're industry pioneers, dkffekfe"
        },
        {
          title: 'How secure is Hampshire Estates?',
          description:
            "We're industry pioneers, xcdcndjcnd"
        },
        {
          title: 'Do I have to buy a whole Farmland?',
          description:
            "dfwxcscdscd"
        },
        {
          title: 'How do I actually buy a Farmland?',
          description:
            "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.",
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
            'Buy Bitcoin or Ethereum, then securely store it in your Wallet or send it on easily to your friends anywhere',
        },
      ],
    }
  },
  methods: {
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
      const emailData = {
        email: this.email,
        message: this.message
      };

      // You can use an HTTP library like Axios to send the data to the server
      // Here, we are logging the email data to the console for demonstration purposes
      console.log(emailData);

      // Reset form fields
      this.email = '';
      this.message = '';
    }
  }
}
</script>
<style scoped>
.text-header-gradient {
  background: rgb(18, 69, 35);
  background: linear-gradient(169.4deg, #26602d -6.01%, #0cff10 36.87%, #2ff059 78.04%, #0ee86c 103.77%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.theme {
  color: #68A678;
  
}
.bg-partner {
  background: url('../assets/img/partner/background.png');
  background-size: cover;
  background-position: center;
}
.bg-trading-tools {
  background-color: rgba(104, 166, 120, 0.4);
  background-size: cover;
  background-position: center;
}
.max-h-0 {
  max-height: 0;
}
</style>
