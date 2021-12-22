<template>
  <v-btn
    :aria-label="$t('aria.darkToggle')"
    icon
    @click="switchButton"
  >
    <v-icon>
      {{ icon }}
    </v-icon>
  </v-btn>
</template>

<script>
import * as ls from 'local-storage'
export default {
  computed: {
    icon () {
      return (!this.$vuetify.theme.dark) ? 'mdi-weather-night' : 'mdi-weather-sunny'
    }
  },
  mounted () {
    if (ls.get('light-mode')) {
      this.$vuetify.theme.dark = false
    }
  },
  methods: {
    switchButton () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      if (!this.$vuetify.theme.dark) {
        ls.set('light-mode', true)
      } else {
        ls.remove('light-mode')
      }
    }
  }
}
</script>

<style>

</style>
