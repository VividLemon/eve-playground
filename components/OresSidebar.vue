<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-text-field
          v-model="searchQuery"
          prepend-inner-icon="mdi-magnify"
          :label="$t('shared.search')"
        />
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <v-checkbox v-model="checkQuery" value="simple" class="ma-2" :label="$t('ores.simple')" />
      </v-col>
      <v-col>
        <v-checkbox v-model="checkQuery" value="coherent" class="ma-2" :label="$t('ores.coherent')" />
      </v-col>
      <v-col>
        <v-checkbox v-model="checkQuery" value="variegated" class="ma-2" :label="$t('ores.variegated')" />
      </v-col>
      <v-col>
        <v-checkbox v-model="checkQuery" value="mercoxit" class="ma-2" label="Mercoxit" />
      </v-col>
      <v-col>
        <v-checkbox v-model="checkQuery" value="complex" class="ma-2" :label="$t('ores.complex')" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-container>
          <v-row no-gutters>
            <v-fade-transition v-if="checkResult.length" group tag="v-col">
              <item-icon
                v-for="ore in checkResult"
                :key="ore.id"
                :item="ore"
                class="ma-1"
                @toggle-active="$store.commit('ores/CHANGE_ACTIVE', ore.id)"
              />
            </v-fade-transition>
            <h1 v-else>
              {{ $t('shared.noResults') }}
            </h1>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ItemIcon from './ItemIcon.vue'
export default {
  components: { ItemIcon },
  props: {
    ores: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      searchQuery: '',
      checkQuery: []
    }
  },
  computed: {
    searchResult () {
      if (this.searchQuery) {
        return this.ores.filter((item) => {
          return this.searchQuery.toLowerCase().split(' ').every(v => item.name.toLowerCase().includes(v))
        })
      } else {
        return this.ores
      }
    },
    checkResult () {
      if (this.checkQuery.length) {
        return this.searchResult.filter((item) => {
          return this.checkQuery.includes(item.type)
        })
      } else {
        return this.searchResult
      }
    }
  }
}
</script>

<style>

</style>
