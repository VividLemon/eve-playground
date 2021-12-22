<template>
  <v-container>
    <v-row>
      <v-col cols="5">
        <ores-sidebar :ores="$store.state.ores.ores" />
      </v-col>
      <v-col>
        <v-container>
          <v-row>
            <v-col>
              <h1>Skills n shit</h1>
              <!-- Contains skills level icons -->
              <!-- contains slider for station efficiency -->
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-fade-transition group>
                <ore-field
                  v-for="ore in filterActive"
                  :key="ore.id"
                  :ore="ore"
                />
              </v-fade-transition>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import OreField from '~/components/OreField.vue'
import OresSidebar from '~/components/OresSidebar.vue'
export default {
  components: { OresSidebar, OreField },
  computed: {
    filterActive () {
      return this.$store.state.ores.ores.filter(el => el.active === true)
    }
  }
// How it will work, user can drag and drop / click icons that are ores
// Ores box has a search feature for convienence.
// Specify the quantity of each ore
// Ore produces output minerals
// Makes api call to eve prices (defer)
// take eve prices of each material * quantity
// then compares the price of the base ores to the price of all outputted minerals prices
// Convience sliders for skill and station bonuses to reprocessing efficiency
}
</script>

<style>

</style>
