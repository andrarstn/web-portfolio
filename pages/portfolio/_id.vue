<template>
  <div class="mt-[76px] bg-slate-50 dark:bg-slate-900">
    <div class="container py-8">
      <div class="w-full text-center">
        <h1 class="text-4xl font-bold text-sky-400">{{ getById.name }}</h1>
        <span
          v-for="(tool, index) in getById.tools"
          :key="index"
          class="
            mt-4
            inline-block
            bg-gray-200
            dark:bg-slate-800
            rounded-full
            px-3
            py-1
            text-sm
            font-semibold
            text-gray-700
            dark:text-slate-400
            mr-2
            mb-2
          "
        >
          #{{ tool }}
        </span>
      </div>
    </div>
    <img
      class="shadow-md w-full h-[47rem] object-cover"
      :src="require(`/assets/images/portfolio/${getById.img}`)"
      alt=""
    />
    <div class="container py-8">
      <div class="w-full my-4 dark:text-slate-200">
        <p>{{ getById.desc }}</p>
      </div>
      <div class="w-full">
        <h1 class="font-medium text-xl dark:text-slate-200">Screenshot</h1>
        <div class="flex flex-wrap justify-center">
          <Card
            v-for="item in getById.screenshot"
            :key="item.id"
            :img="require(`~/assets/images/portfolio/${item}`)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import portfolio from '~/static/items.json'

export default {
  name: 'DetailPortfolio',
  layout: 'default',
  data() {
    return {
      items: portfolio,
    }
  },
  head() {
    return {
      title: this.items[0].name,
      script: [{ src: '/js/script.js', body: true }],
    }
  },
  computed: {
    getById() {
      const res = this.items.filter((item) => {
        return item.id === parseInt(this.$route.params.id)
      })

      return res[0]
    },
  },
  methods: {
    getImage(img) {
      return require(`~/assets/images/portfolio/${img}`)
    },
  },
}
</script>