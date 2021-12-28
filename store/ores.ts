import { Ore } from '~/types/ores'

interface State {
  ores: Array<Ore>
}

export const state = (): State => ({
  ores: [
    {
      id: 1,
      name: 'Scordite',
      img: 'ores/ore_scordite',
      type: 'simple',
      variations: [
        { name: 'Condensed', modifier: 1.05 },
        { name: 'Massive', modifier: 1.1 }
      ],
      neededPerBatch: 10,
      outputPerM3: {
        Tritanium: 40
      },
      active: false
    },
    {
      id: 2,
      name: 'Veldspar',
      img: 'ores/ore_veldspar',
      type: 'simple',
      variations: [
        { name: 'Concentrated', modifier: 1.05 },
        { name: 'Dense', modifier: 1.1 }
      ],
      neededPerBatch: 15,
      outputPerM3: {
        Tritanium: 10,
        Pyerite: 6
      },
      active: false
    },
    {
      id: 3,
      name: 'Pyroxeres',
      img: 'ores/ore_pyroxeres',
      type: 'simple',
      variations: [
        { name: 'Solid', modifier: 1.05 },
        { name: 'Viscous', modifier: 1.1 }
      ],
      neededPerBatch: 30,
      outputPerM3: {
        Pyerite: 3,
        Mexallon: 1
      },
      active: false
    },
    {
      id: 4,
      name: 'Plagioclase',
      img: 'ores/ore_plagioclase',
      type: 'simple',
      variations: [
        { name: 'Azure', modifier: 1.05 },
        { name: 'Rich', modifier: 1.1 }
      ],
      neededPerBatch: 35,
      outputPerM3: {
        Tritanium: 5,
        Mexallon: 2
      },
      active: false
    },
    {
      id: 5,
      name: 'Omber',
      img: 'ores/ore_omber',
      type: 'coherent',
      variations: [
        { name: 'Silvery', modifier: 1.05 },
        { name: 'Golden', modifier: 1.1 }
      ],
      neededPerBatch: 60,
      outputPerM3: {
        Pyerite: 1.5,
        Isogen: 1.25
      },
      active: false
    },
    {
      id: 6,
      name: 'Kernite',
      img: 'ores/ore_kernite',
      type: 'coherent',
      variations: [
        { name: 'Luminous', modifier: 1.05 },
        { name: 'Fiery', modifier: 1.1 }
      ],
      neededPerBatch: 120,
      outputPerM3: {
        Mexallon: 0.5,
        Isogen: 1.25
      },
      active: false
    },
    {
      id: 7,
      name: 'Jaspet',
      img: 'ores/ore_jaspet',
      type: 'coherent',
      variations: [
        { name: 'Pure', modifier: 1.05 },
        { name: 'Pristine', modifier: 1.1 }
      ],
      neededPerBatch: 200,
      outputPerM3: {
        Mexallon: 0.75,
        Nocxium: 0.25
      },
      active: false
    },
    {
      id: 8,
      name: 'Hemorphite',
      img: 'ores/ore_hemorphite',
      type: 'coherent',
      variations: [
        { name: 'Vivid', modifier: 1.05 },
        { name: 'Radiant', modifier: 1.1 }
      ],
      neededPerBatch: 300,
      outputPerM3: {
        Isogen: 0.8,
        Nocxium: 0.3
      },
      active: false
    },
    {
      id: 9,
      name: 'Hedbergite',
      img: 'ores/ore_hedbergite',
      type: 'coherent',
      variations: [
        { name: 'Vitric', modifier: 1.05 },
        { name: 'Glazed', modifier: 1.1 }
      ],
      neededPerBatch: 300,
      outputPerM3: {
        Tritanium: 1.5,
        Nocxium: 0.4
      },
      active: false
    },
    {
      id: 10,
      name: 'Dark Ochre',
      img: 'ores/ore_dark_ochre',
      type: 'variegated',
      variations: [
        { name: 'Onyx', modifier: 1.05 },
        { name: 'Obsidian', modifier: 1.1 }
      ],
      neededPerBatch: 800,
      outputPerM3: {
        Mexallon: 1.7,
        Isogen: 1.5,
        Nocxium: 0.4
      },
      active: false
    },
    {
      id: 11,
      name: 'Gneiss',
      img: 'ores/ore_gneiss',
      type: 'variegated',
      variations: [
        { name: 'Iridescent', modifier: 1.05 },
        { name: 'Prismatic', modifier: 1.1 }
      ],
      neededPerBatch: 500,
      outputPerM3: {
        Tritanium: 4,
        Pyerite: 3,
        Mexallon: 1.6
      },
      active: false
    },
    {
      id: 12,
      name: 'Crokite',
      img: 'ores/ore_crokite',
      type: 'variegated',
      variations: [
        { name: 'Sharp', modifier: 1.05 },
        { name: 'Crystaline', modifier: 1.1 }
      ],
      neededPerBatch: 1600,
      outputPerM3: {
        Pyerite: 0.5,
        Mexallon: 1.25,
        Nocxium: 0.5
      },
      active: false
    },
    {
      id: 13,
      name: 'Bistot',
      img: 'ores/ore_bistot',
      type: 'complex',
      variations: [
        { name: 'Monoclinic', modifier: 1.05 },
        { name: 'Triclinic', modifier: 1.1 }
      ],
      neededPerBatch: 1600,
      outputPerM3: {
        Pyerite: 2,
        Mexallon: 0.75,
        Zydrine: 0.1
      },
      active: false
    },
    {
      id: 14,
      name: 'Arkonor',
      img: 'ores/ore_arkonor',
      type: 'complex',
      variations: [
        { name: 'Crimson', modifier: 1.05 },
        { name: 'Prime', modifier: 1.1 }
      ],
      neededPerBatch: 1600,
      outputPerM3: {
        Pyerite: 2,
        Mexallon: 0.75,
        Megacyte: 0.075
      },
      active: false
    },
    {
      id: 15,
      name: 'Mercoxit',
      img: 'ores/ore_mercoxit',
      type: 'mercoxit',
      variations: [
        { name: 'Magma', modifier: 1.05 },
        { name: 'Vitreous', modifier: 1.1 }
      ],
      neededPerBatch: 4000,
      outputPerM3: {
        Morphite: 0.035
      },
      active: false
    },
    {
      id: 16,
      name: 'Spodumain',
      img: 'ores/ore_spodumain',
      type: 'complex',
      variations: [
        { name: 'Bright', modifier: 1.05 },
        { name: 'Gleaming', modifier: 1.1 }
      ],
      neededPerBatch: 1600,
      outputPerM3: {
        Tritanium: 30,
        Isogen: 0.625,
        Nocxium: 0.1,
        Zydrine: 0.05,
        Megacyte: 0.025
      },
      active: false
    }
  ]
})

export const mutations = {
  CHANGE_ACTIVE (state: State, id: number) {
    const ore = state.ores.find((el: Ore) => el.id === id)
    if (ore) {
      ore.active = !ore.active
    }
  }
}
