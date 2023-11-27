<template>
  <nav id="navbar" class="relative z-10 w-full text-neutral-800 max-h-[86px] bg-trading-tools">
    <div class="flex theme flex-col max-w-screen-xl mx-auto lg:items-center lg:justify-between lg:flex-row py-4">
      <div class="flex flex-col lg:flex-row items-center space-x-4 xl:space-x-2">
        <div class="w-full px-4 flex flex-row items-center justify-between">
          <div class="pb-4">
            <img :src="require('~/assets/img/IMG_9666.png')" :srcset="require('~/assets/img/IMG_9666.png')" class="w-10 h-10 xl:w-28 object-cover" alt="HE Logo" />
          </div>
          <button class="rounded-lg lg:hidden focus:outline-none focus:shadow-outline" @click="open = !open">
            <SegmentIcon v-if="!open" :size="24" />
            <CloseIcon v-else :size="24" />
          </button>
        </div>
        <ul
          style="margin-left: 0px !important;"
          :class="[open ? 'flex' : 'hidden lg:flex']"
          class="lg:w-full lg:max-w-full w-screen bg-trading-tools lg:px-0 lg:pt-0 px-4 mt-0 ml-0 h-auto flex flex-col flex-grow lg:items-center pb-4 lg:pb-0 lg:justify-end lg:flex-row origin-top duration-300 xl:space-x-2 z-20 space-y-3 lg:space-y-0 text-white"
        >
          <NavLink class="text-white whitespace-nowrap" name="COMPANY PROFILE" url="#profile" />
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
              v-b-modal.modal-2
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
      <b-modal id="modal-2" title="" class="modal-title" :hide-footer="true">
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
                      <select name="visitTime" class="form-control border-bottom border-top-0 border-start-0 border-end-0 rounded-0">
                          <option value="">Planning For Site Visit</option>
                          <option value="This Weekend">This Weekend</option>
                          <option value="Next Weekend">Next Weekend</option>
                          <option value="In This Month">In This Month</option>
                      </select>                                                    
                    </div>
                </div>
                <div class="row pt-2">                        
                    <div class="col-12">
                      <select name="callTime" class="form-control border-bottom border-top-0 border-start-0 border-end-0 rounded-0">
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
                    <div  class="col text-center">
                      <input id="footer-btn" type="submit" placeholder="submit" class="btn text-white bg-dark rounded-0 px-3"/>
                    </div>
                </div>
              </form>
          </div>
        </div>
      </div>

  </div>
    </b-modal>
    </div>
  </nav>
</template>
<script>
import emailjs from 'emailjs-com';
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
    },
    sendEmail() {
      event.preventDefault();
      emailjs.sendForm('service_1o90b3i', 'template_re2toum', this.$refs.form, 'CAXeNuLKdK4qtQmdn')
        .then(() => {
          alert('Message sent!')
          // inputFieldReset.value = " ";
        }, (error) => {
          alert('Message not sent', error);
        }); 
        // this.$refs.form.reset();
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
