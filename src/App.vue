<template class="overflow-x-hidden">
  <Home />
  <Projects />
  <Competences />
  <About />
</template>

<script>
import Home from "./views/Home.vue";
import Projects from "./views/Projects.vue";
import Competences from "./views/Competences.vue";
import About from "./views/About.vue";

export default {
  name: "Elliot",
  components: {
    Home,
    Projects,
    Competences,
    About,
  },
};
</script>

<style>
html {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

::-webkit-scrollbar {
  display: none;
}

.text-green {
  color: #22ff88;
}

.bg-dark {
  background-color: #313131;
}

.bg-dark-black {
  background-color: #1e1e1e;
}
</style>