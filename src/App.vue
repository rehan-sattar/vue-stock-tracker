<template>
  <div>
    <div class="container p-2">
      <Header />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style>
body {
  font-family: "Nunito", sans-serif;
}
</style>
