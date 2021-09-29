<template class="overflow-x-hidden">
  <Home />
  <Projects />
  <Competences />
</template>

<script>
import Home from "./views/Home.vue";
import Projects from "./views/Projects.vue";
import Competences from "./views/Competences.vue";

export default {
  name: "App",
  components: {
    Home,
    Projects,
    Competences,
  },
};
</script>

<style>
html {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
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