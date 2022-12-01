<template>
  <div class="bg-slate-50 dark:bg-slate-800">
    <div class="container mt-[76px]">
      <div class="w-full mb-5 pt-5">
        <div class="text-center">
          <h1 class="text-sky-400 text-4xl font-bold">Portfolio</h1>
        </div>
      </div>
      <div class="flex flex-wrap justify-center">
        <Card
          v-for="item in items"
          :id="item.id"
          :key="item.id"
          :name="item.name"
          :desc="item.desc"
          :img="require(`~/assets/images/portfolio/${item.img}`)"
          :tools="item.tools"
        />
      </div>
    </div>
  </div>
</template>

<script>
import portfolio from '~/static/items.json'

export default {
  name: 'IndexPage',
  layout: 'default',
  data() {
    return {
      items: portfolio,
    }
  },
  // async fetch() {
  //   const res = await this.$axios.get(`items.json`)
  //   this.items = res
  // },
  head: {
    script: [{ src: '/js/script.js', body: true }],
  },
}
</script>