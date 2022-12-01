<template>
  <button
    id="toggle-dark-mode"
    class="
      block
      w-full
      rounded
      py-2
      px-5
      text-center text-dark
      dark:text-white
      md:px-3
    "
    @click="toggleDarkMode"
  >
    <component :is="component" />
  </button>
</template>

<script>
export default {
  data() {
    return {
      component: '',
    }
  },
  mounted: function () {
    if (this.$colorMode.preference === 'dark') {
      this.component = 'Light'
    } else {
      this.component = 'Dark'
    }
  },
  methods: {
    toggleDarkMode() {
      if (this.$colorMode.preference === 'dark') {
        this.$colorMode.preference = 'light'
        this.component = 'Dark'
      } else {
        this.$colorMode.preference = 'dark'
        this.component = 'Light'
      }
    },
  },
}
</script>