<template>
  <v-list>
    <NuxtLink class="text-decoration-none" :to="localePath('/')" />
    <v-list-item :to="localePath('/')">
      <v-list-item-action>
        <v-icon>mdi-apps</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>
          {{ $t('nav.home') }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <NuxtLink class="text-decoration-none" :to="localePath('reprocessing')" />
    <v-list-item :to="localePath('reprocessing')">
      <v-list-item-action>
        <v-icon>mdi-recycle</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>
          {{ $t('nav.reprocessing') }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <NuxtLink class="text-decoration-none" :to="localePath('planetary-industry')" />
    <v-list-item :to="localePath('planetary-industry')">
      <v-list-item-action>
        <v-icon>mdi-earth</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>
          {{ $t('nav.planetary') }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <NuxtLink class="text-decoration-none" :to="localePath('industry')" />
    <v-list-item :to="localePath('industry')">
      <v-list-item-action>
        <v-icon>mdi-factory</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>
          {{ $t('nav.industry') }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {

}
</script>
