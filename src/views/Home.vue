<template>
  <div class="h-screen font-default">
    <div class="md:-mt-12 lg:-mt-28 animate__animated wow animate__slideInDown">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#22FF88"
          fill-opacity="1"
          d="M0,224L34.3,218.7C68.6,213,137,203,206,181.3C274.3,160,343,128,411,144C480,160,549,224,617,213.3C685.7,203,754,117,823,85.3C891.4,53,960,75,1029,122.7C1097.1,171,1166,245,1234,245.3C1302.9,245,1371,171,1406,133.3L1440,96L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg>
    </div>
    <div
      class="ml-8  md:ml-12 md:-mt-12 text-green animate__delay-1s animate__animated animate__fadeIn"
    >
      <p class="w-40 font-extrabold text-8xl">Elliot</p>
      <p class="mt-3 ml-1 text-3xl font-bold text-white">
        Apprenti développeur
      </p>

      <!-- List -->
      <ul class="mt-8 ml-1 text-2xl font-bold text-white appearance-none">
        <li class="animate__animated animate__delay-1s animate__slideInLeft">
          - Laravel
          <img
            src="../assets/laravel.png"
            class="inline ml-1 w-7"
            alt="laravel_icon"
          />
        </li>
        <li
          class="mt-1 font-bold  animate__animated animate__delay-1s animate__slideInLeft"
        >
          - TailwindCSS
          <img
            src="../assets/tailwind.png"
            class="inline w-6 ml-1"
            alt="laravel_icon"
          />
        </li>
        <li
          class="
            mt-0.5
            font-bold
            animate__animated animate__delay-2s animate__slideInLeft
          "
        >
          - Python
          <img
            src="../assets/python.png"
            class="inline w-6 ml-1 -mt-1"
            alt="laravel_icon"
          />
        </li>
        <li
          class="mt-1 font-bold  animate__animated animate__delay-3s animate__slideInLeft"
        >
          - Vue JS
          <img
            src="../assets/logo.png"
            class="inline w-6 ml-0.5 -mt-1"
            alt="laravel_icon"
          />
        </li>
      </ul>
    </div>
  </div>
  <div class="ml-16 animate__animated animate__delay-1s animate__fadeIn">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="w-8 h-8 animate-bounce"
      fill="none"
      viewBox="0 0 24 24"
      stroke="white"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19 14l-7 7m0 0l-7-7m7 7V3"
      />
    </svg>
  </div>
</template>


<style>
.delay-1 {
  animation-delay: 2s;
}
</style>