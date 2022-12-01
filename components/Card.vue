<template>
  <div
    class="
      bg-white
      rounded-md
      overflow-hidden
      border-2 border-transparent
      drop-shadow-lg
      transition
      ease-in-out
      duration-300
      max-w-lg
      my-4
      md:mx-4
      lg:w-1/2
      hover:border-2 hover:border-sky-400
      dark:bg-slate-900
    "
  >
    <img class="object-cover w-[32rem] h-72" :src="`${img}`" alt="" />
    <div v-if="tools.length > 0">
      <div class="px-6 py-4">
        <NuxtLink
          :to="`portfolio/${id}`"
          class="font-bold text-xl mb-2 text-slate-900 dark:text-white"
          >{{ name }}</NuxtLink
        >
        <p class="text-slate-700 text-base dark:text-white">
          {{ desc }}
        </p>
      </div>
      <div class="px-6 pb-4">
        <span
          v-for="(tool, index) in tools"
          :key="index"
          class="
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
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      default: 1,
    },
    name: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      default: '',
    },
    img: {
      type: String,
      default: '',
    },
    tools: {
      type: Array,
      default: function () {
        return []
      },
    },
  },
}
</script>