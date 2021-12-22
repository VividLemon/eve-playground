<template>
  <v-menu offset-y open-on-hover>
    <template #activator="{on, attrs}">
      <v-btn
        v-bind="attrs"
        :aria-label="$t('aria.translateMenu')"
        tile
        icon
        v-on="on"
      >
        <v-icon>
          mdi-translate
        </v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="lang in $i18n.locales"
        :key="lang.code"
        link
        :to="switchLocalePath(lang.code)"
      >
        <v-list-item-title>
          {{ lang.name }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {

}
</script>

<style>

</style>
