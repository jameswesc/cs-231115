<script lang="ts">
    import PaneProvider from './lib/pane/PaneProvider.svelte'
    import Ring from './lib/Ring.svelte'
    import SvgCanvas from './lib/SvgCanvas.svelte'
</script>

<PaneProvider>
    <SvgCanvas>
        {#each Array(10) as _, i}
            <Ring radius={((i + 1) / 10) * 516} />
        {/each}
    </SvgCanvas>
</PaneProvider>
