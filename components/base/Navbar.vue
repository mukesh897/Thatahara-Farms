<template>
  <nav id="navbar" class="relative z-50 w-full text-neutral-800 max-h-[86px] bg-transparent">
    <div class="flex theme flex-col max-w-screen-xl px-8 mx-auto lg:items-center lg:justify-between lg:flex-row">
      <div class="flex flex-col lg:flex-row items-center space-x-4 xl:space-x-2">
        <div class="w-full flex flex-row items-center pt-4 justify-between">
          <div @click="$router.push('/')" class="cursor-pointer z-50">
            <img :src="require('~/assets/img/logo.jpeg')" class="w-10 h-10 xl:w-28 rounded-full" alt="Nefa Logo" />
          </div>
          <button class="rounded-lg lg:hidden focus:outline-none focus:shadow-outline" @click="open = !open">
            <SegmentIcon v-if="!open" :size="24" />
            <CloseIcon v-else :size="24" />
          </button>
        </div>
        <ul
          :class="[open ? 'flex' : 'hidden lg:flex']"
          class="w-full h-auto flex flex-col flex-grow lg:items-center pb-4 lg:pb-0 lg:justify-end lg:flex-row origin-top duration-300 xl:space-x-2 space-y-3 lg:space-y-0"
        >
          <!-- <NavLink name="Cryptocurrency" url="#" />
          <NavLink name="Exchanges" url="#" />
          <NavLink name="Watchlist" url="#" />
          <NavLink name="NFT" url="#" />
          <NavLink name="Portfolio" url="#" /> -->
          <li class="relative group py-2">
            <button
              class="md:px-4 py-2 text-sm bg-transparent rounded-lg text-[#666666] hover:text-gray-900 focus:outline-none focus:shadow-outline flex items-center"
              @click="dropdownToggler"
              @blur="dropdownToggler"
              disabled="true"
            >
              <!-- <span class="theme whitespace-nowrap" :color="'green'">Buyer's Guide</span>
              <ChevronUpIcon v-if="dropdownNavbar" :size="16" :color="'green'"/>
              <ChevronDownIcon v-else :size="16" /> -->
            </button>
            <transition name="transform-fade-down">
              <ul
                v-if="dropdownNavbar"
                class="flex lg:absolute flex-col max-w-42 py-1 lg:bg-white rounded-md lg:shadow-md pl-2 lg:pl-0"
              >
                <li>
                  <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Land Search</a>
                </li>
                <li>
                  <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Land Laws</a>
                </li>
                <li>
                  <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Check List</a>
                </li>
                <li>
                  <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Buyer Plans</a>
                </li>
              </ul>
            </transition>
          </li>
        </ul>
      </div>
      <div :class="[open ? 'flex' : 'hidden lg:flex']" class="space-x-3 z-50">
        <BaseButton
              class="max-w-full px-8 py-2 bg-white border border-[#fff] text-[#5D794F] font-bold"
            >
            <a
              v-smooth-scroll
              data-aos="flip-down"
              data-aos-delay="150"
              href="#contact"
            >
            Contact Us
            </a>  
        </BaseButton>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'BaseNavbar',
  data() {
    return {
      open: false,
      dropdownNavbar: false,
    }
  },
  methods: {
    dropdownToggler () {
      this.dropdownNavbar = !this.dropdownNavbar
    }
  }
}
</script>

<style scoped>
  .theme {
    color: #5D794F;
  }
  .bg-trading-tools {
  background-color: #5D794F;
  background-size: cover;
  }
</style>
