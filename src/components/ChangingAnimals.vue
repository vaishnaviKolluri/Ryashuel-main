<script setup>
  import llama from '@/assets/llama.jpg'
  import bear from '@/assets/bear.jpg'
  import wolf from '@/assets/wolf.png'
  import frog from '@/assets/frog.jpg'
  import fish from '@/assets/fish.jpg'
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  let images = [frog , fish, wolf, bear, llama]
  var exists = ref(true)
  var imgIndex = ref(0)

  const router = useRouter()

  setInterval(() => {updateImg()}, 10000)

  async function updateImg() {
    exists.value = false
    if (imgIndex.value < images.length - 1) {
      imgIndex.value++
    }
    else {
      imgIndex.value = 0
    }
    setTimeout(imgAppear, 1000)
  }

  async function imgAppear() {
    exists.value = true
  }

  function navigate() {
    if (imgIndex.value == 4 ) {
      router.push('/llama')
    }
    if (imgIndex.value == 3 ) {
      router.push('/bear')
    }
    if (imgIndex.value == 2 ) {
      router.push('/wolf')
    }
    if (imgIndex.value == 1 ) {
      router.push('/fish')
    }
    if (imgIndex.value == 0) {
      router.push('/frog')
    }
  }

</script>

<template>
  <Transition>

    <img v-if= exists class="circle" :src= "images[imgIndex]" @click="navigate()"/>

  </Transition>
</template>

<style>
  .v-enter-from {
    opacity: 0;
  }
  .v-enter-to {
    opacity: 1;
  }
  .v-leave-from {
    opacity: 1;
  }
  .v-leave-to {
    opacity: 0;
  }
  .circle {
    border-radius: 50%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 30%;
    transition: opacity 0.5s;
  }
</style>