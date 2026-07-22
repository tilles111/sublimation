ServerEvents.tags('block', event => {
  event.add('minecraft:animals_spawnable_on', [
    'minecraft:dirt',
    'minecraft:coarse_dirt',
    'minecraft:packed_mud'
  ])
})