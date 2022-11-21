<template>
  <div
    class="
      rounded-md
      overflow-hidden
      bg-white
      shadow-md
      max-w-lg
      my-4
      md:mx-4
      lg:w-1/2
    "
  >
    <img class="object-cover w-[32rem] h-72" :src="`${img}`" alt="" />
    <div v-if="tools.length > 0">
      <div class="px-6 py-4">
        <NuxtLink
          :to="`/${id}`"
          class="font-bold text-xl mb-2 text-slate-900"
          >{{ name }}</NuxtLink
        >
        <p class="text-slate-700 text-base">
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
            rounded-full
            px-3
            py-1
            text-sm
            font-semibold
            text-gray-700
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