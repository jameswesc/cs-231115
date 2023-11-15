<script lang="ts">
    import { rand } from './lib/seed/seedStore'
    import Ring from './lib/Ring.svelte'
    import { pickRandom } from '@thi.ng/random'

    const R = 516

    $: numberOfRings = $rand.minmaxInt(10, 40)

    $: ringWidth = R / numberOfRings

    $: rings = Array(numberOfRings)
        .fill(0)
        .map((_, i) => ({
            radius:
                ((i + 1) / numberOfRings) * R +
                $rand.minmax(-0.25 * ringWidth, 0.25 * ringWidth),
            theta: $rand.minmaxInt(0, 360),
            thetaOffset: $rand.minmaxInt(0, 360),
            width: $rand.minmax(0, ringWidth),
            color: pickRandom(
                ['#FF6B6B', '#dd4d51', '#8f001a', '#00FFFF', '#00999b'],
                $rand
            ),
        }))
</script>

{#each rings as ring, i}
    <Ring {...ring} />
{/each}
