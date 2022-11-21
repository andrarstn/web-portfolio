<template>
  <div>
    <!-- Hero -->
    <section id="home" class="py-36">
      <div class="container">
        <div class="flex flex-wrap justify-center">
          <div class="w-full text-center">
            <h1 class="font-bold text-4xl text-sky-400">
              Totti Andra Ristiano
            </h1>
            <h1 class="font-medium text-xl text-slate-500">Web Developer</h1>
            <h2 class="text-slate-400 max-w-xl mx-auto mt-3">
              Saya adalah seseorang yang memiliki background di dunia
              pemrograman web dengan fokus di backend development dan frontend
              development. Saya senang mempelajari hal-hal yang berkaitan dengan
              pemrograman dan senang dengan tantangan.
            </h2>
            <div class="my-5 flex flex-nowrap justify-center text-slate-500">
              <a
                href="https://www.linkedin.com/in/totti-andra-ristiano-55b7891a9/"
                target="_blank"
                rel="noopener noreferrer"
                class="mr-4"
              >
                <LinkedIn />
              </a>
              <a
                href="https://github.com/andrarstn"
                target="_blank"
                rel="noopener noreferrer"
                class="mr-4"
              >
                <Github />
              </a>
              <a
                href="https://www.instagram.com/andraristiano/"
                target="_blank"
                rel="noopener noreferrer"
                class="mr"
              >
                <Instagram />
              </a>
            </div>
            <img
              src="@/assets/images/logo.png"
              alt="Logo"
              class="rounded-full w-44 mx-auto my-3"
            />
          </div>
        </div>
      </div>
    </section>
    <!-- End Hero -->

    <!-- Portfolio -->
    <section id="portfolio" class="py-20 bg-slate-100">
      <div class="container">
        <div class="w-full mb-10">
          <div class="text-center">
            <h1 class="text-sky-400 text-4xl font-bold">Portfolio</h1>
            <p>Berikut merupakan projek-projek yang pernah saya bangun.</p>
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
    </section>
    <!-- End Portfolio -->
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
