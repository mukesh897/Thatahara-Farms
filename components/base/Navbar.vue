<template>
  <nav id="navbar" class="relative z-10 w-full text-neutral-800 max-h-[86px] bg-trading-tools">
    <div class="flex theme flex-col max-w-screen-xl mx-auto lg:items-center lg:justify-between lg:flex-row py-4">
      <div class="flex flex-col lg:flex-row items-center space-x-4 xl:space-x-2">
        <div class="w-full px-4 flex flex-row items-center justify-between">
          <div class="pb-4">
            <img :src="require('~/assets/img/getting-started/logo-no-background.svg')" class="w-10 h-10 xl:w-28" alt="Nefa Logo" />
          </div>
          <button class="rounded-lg lg:hidden focus:outline-none focus:shadow-outline" @click="open = !open">
            <SegmentIcon v-if="!open" :size="24" />
            <CloseIcon v-else :size="24" />
          </button>
        </div>
        <ul
          :class="[open ? 'flex' : 'hidden lg:flex']"
          class="w-full max-w-full bg-trading-tools lg:px-0 lg:pt-0 px-4 mt-0 ml-0 h-auto flex flex-col flex-grow lg:items-center pb-4 lg:pb-0 lg:justify-end lg:flex-row origin-top duration-300 xl:space-x-2 z-20 space-y-3 lg:space-y-0 text-white"
        >
          <NavLink class="text-white" name="ABOUT" url="#about" />
          <NavLink class="text-white" name="PHILOSOPHY" url="#philosophy" />
          <NavLink class="text-white" name="DESIGN" url="#design" />
          <NavLink class="text-white" name="AMENITIES" url="#amenities" />
          <NavLink class="text-white" name="CONTACT" url="#footer" />
          <!-- <li class="relative group">
            <button
              class="md:px-4 py-2 text-sm bg-transparent rounded-lg text-[#666666] hover:text-gray-900 focus:outline-none focus:shadow-outline flex items-center"
              @click="dropdownToggler"
              @blur="dropdownToggler"
            >
              <span class="theme whitespace-nowrap" :color="'green'">Buyer's Guide</span>
              <ChevronUpIcon v-if="dropdownNavbar" :size="16" :color="'green'"/>
              <ChevronDownIcon v-else :size="16" />
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
          </li> -->
        </ul>
      </div>
      <div :class="[open ? 'flex' : 'hidden lg:flex']" class="space-x-3 pb-4 lg:pb-0 bg-trading-tools lg:px-0 px-4 ">
        <BaseButton
              v-b-modal.modal-1 
              class="max-w-full bg-transparent font-bold text-[#c49b36]"
            >
            <a
              data-aos="flip-down"
              data-aos-delay="150"
            >
            SCHEDULE A SITE VISIT
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
    color: #68A678;
  }
  .bg-trading-tools {
  background-color: black;
  background-size: cover;
  }
</style>
