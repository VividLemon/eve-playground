<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <nav-bar />
    </v-navigation-drawer>
    <v-app-bar
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>
        <NuxtLink
          v-t="'home.title'"
          class="text-decoration-none"
          prefetch
          :to="localePath('/')"
        />
      </v-toolbar-title>
      <v-spacer />
      <dark-button />
      <lang-button />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }} -- <a href="#">{{ $t('footer.github') }}</a></span>
    </v-footer>
  </v-app>
</template>

<script>
import DarkButton from '~/components/DarkButton.vue'
import LangButton from '~/components/LangButton.vue'
import NavBar from '~/components/NavBar.vue'
export default {
  components: {
    DarkButton,
    LangButton,
    NavBar
  },
  data () {
    return {
      drawer: false
    }
  }
}
</script>
