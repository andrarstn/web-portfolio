<template>
  <header
    class="navbar absolute top-0 left-0 flex w-full items-center bg-transparent"
  >
    <div class="container">
      <div class="relative flex flex-wrap items-center justify-between">
        <a
          v-if="$route.params.id == null"
          href="#home"
          class="block py-6 text-lg font-bold text-sky-400"
        >
          Andra's Portfolio
        </a>
        <NuxtLink
          v-else
          to="/"
          class="block py-6 text-lg font-bold text-sky-400"
        >
          Andra's Portfolio
        </NuxtLink>
        <div class="flex items-center px-4">
          <button
            id="hamburger"
            name="hamburger"
            class="absolute right-4 block md:hidden"
          >
            <span
              class="
                hamburger-line
                origin-top-left
                transition
                duration-300
                ease-in-out
              "
            ></span>
            <span
              class="hamburger-line transition duration-300 ease-in-out"
            ></span>
            <span
              class="
                hamburger-line
                origin-bottom-left
                transition
                duration-300
                ease-in-out
              "
            ></span>
          </button>
        </div>

        <nav
          id="nav-menu"
          class="hidden w-full pb-7 md:flex md:w-auto md:items-center md:pb-0"
        >
          <ul class="md:flex md:items-center">
            <li>
              <a
                v-if="$route.path == '/'"
                href="#home"
                class="
                  block
                  pb-3
                  dark:text-white
                  hover:text-sky-500
                  md:px-4 md:pb-0
                "
                >Home</a
              >
              <NuxtLink
                v-else
                to="/"
                class="
                  block
                  pb-3
                  dark:text-white
                  hover:text-sky-500
                  md:px-4 md:pb-0
                "
                >Home</NuxtLink
              >
            </li>
            <li>
              <a
                v-if="$route.path == '/'"
                href="#portfolio"
                class="
                  block
                  pb-3
                  dark:text-white
                  hover:text-sky-500
                  md:px-4 md:pb-0
                "
                >Portfolio</a
              >
              <NuxtLink
                v-else
                :to="`/portfolio`"
                class="
                  block
                  pb-3
                  dark:text-white
                  hover:text-sky-500
                  md:px-4 md:pb-0
                "
                >Portfolio
              </NuxtLink>
            </li>
            <li>
              <DarkModeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>