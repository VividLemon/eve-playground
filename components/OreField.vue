<template>
  <v-container class="ma-0 pa-0">
    <v-row no-gutters>
      <v-col>
        <v-text-field
          v-model.number="$v.text.$model"
          autocomplete="off"
          :label="$t('shared.quantity')"
          :readonly="locked"
          dense
          :error-messages="textErrors"
          @input="$v.text.$touch()"
          @blur="$v.text.$touch()"
        >
          <template #prepend>
            <v-tooltip top open-delay="250">
              <template #activator="{on, attrs}">
                <span v-bind="attrs" v-on="on">
                  <v-img
                    :src="require(`~/static/${ore.img}.png`)"
                    :lazy-src="require(`~/static/${ore.img}_min.png`)"
                    :alt="ore.name"
                    width="48"
                    height="48"
                  />
                </span>
              </template>
              <span>{{ ore.name }}</span>
            </v-tooltip>
          </template>
          <template #append>
            <v-container>
              <v-row no-gutters>
                <v-col>
                  <v-btn
                    icon
                    small
                    :aria-label="$t('aria.decreaseAmount')"
                    @click="changeNumber(false)"
                  >
                    <v-icon>
                      mdi-chevron-down
                    </v-icon>
                  </v-btn>
                </v-col>
                <v-col>
                  <v-btn
                    icon
                    small
                    :aria-label="$t('aria.increaseAmount')"
                    @click="changeNumber(true)"
                  >
                    <v-icon>
                      mdi-chevron-up
                    </v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </template>
          <template #append-outer>
            <v-btn icon :aria-label="$t('aria.delete')" @click="$emit('toggle-active')">
              <v-icon>
                mdi-delete
              </v-icon>
            </v-btn>
          </template>
        </v-text-field>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col />
    </v-row>
    <v-tooltip open-delay="200" top>
      <template #activator="{ on, attrs }">
        <span
          v-bind="attrs"
          v-on="on"
        >
          <v-checkbox
            v-model="locked"
            class="d-inline-block"
            dense
            :label="$t('ores.lockBatch')"
          />
        </span>
      </template>
      <span v-t="'ores.useButtons'" />
    </v-tooltip>
  </v-container>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { decimal } from 'vuelidate/lib/validators'
export default {
  mixins: [validationMixin],
  props: {
    ore: {
      type: Object,
      required: true
    }
  },
  emits: ['toggle-active'],
  data () {
    return {
      locked: false,
      text: null,
      number: 0
    }
  },
  computed: {
    textErrors () {
      const errors = []
      if (!this.$v.text.$dirty) { return errors }
      !this.$v.text.decimal && errors.push(this.$t('validate.isDecimal'))
      return errors
    }
  },
  validations: {
    text: {
      decimal
    }
  },
  methods: {
    changeNumber (increase) {
      if (increase) {
        this.number = this.number + 1
      } else if (this.number > 0) {
        this.number = this.number - 1
      }
      this.text = this.number * this.ore.neededPerBatch
    }
  }
}
</script>

<style>

</style>
