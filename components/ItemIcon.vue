<template>
  <!-- TODO these color classes work on dark... not light -->
  <v-card
    class="d-inline-block"
    width="72"
    :color="(item.active) ? 'darkAccent' : ''"
    @click="$emit('toggle-active')"
  >
    <v-img
      class="rounded-t-sm rounded-b"
      :src="require(`~/static/${item.img}.png`)"
      :lazy-src="require(`~/static/${item.img}_min.png`)"
      :alt="item.name"
      width="72"
      height="72"
    />
    <v-card-text class="text-caption text-truncate pa-1">
      {{ item.name }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  emits: ['toggle-active']
}
</script>

<style>

</style>
