<script lang="ts">
    import { onMount } from 'svelte'
    import { initPane, pane } from './lib/pane'
    import { PARAMS, params } from './lib/params'
    import PolarGrid from './components/PolarGrid.svelte'

    $: size = $params.size
    $: buffer = $params.buffer

    // I want 0,0 to be the center of my canvas
    $: viewBox = `${-size / 2 - buffer} ${-size / 2 - buffer} ${
        size + 2 * buffer
    } ${size + 2 * buffer}`

    onMount(() => {
        initPane()

        const folder = $pane.addFolder({
            title: 'Canvas',
        })

        folder.addBinding(PARAMS, 'size').on('change', ({ value }) => {
            params.update((p) => ({ ...p, size: value }))
        })

        folder.addBinding(PARAMS, 'buffer').on('change', ({ value }) => {
            params.update((p) => ({ ...p, buffer: value }))
        })

        return () => $pane.remove(folder)
    })
</script>

<svg {viewBox}>
    <rect
        x={-size / 2}
        y={-size / 2}
        width={size}
        height={size}
        stroke="black"
        fill="none"
    />

    <PolarGrid />
</svg>

<style>
    svg {
        width: 100vw;
        height: 100vh;
    }
</style>
