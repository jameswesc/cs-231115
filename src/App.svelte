<script lang="ts">
    import PaneProvider from './lib/pane/PaneProvider.svelte'
    import Seed from './lib/seed/Seed.svelte'
    import SvgCanvas from './lib/SvgCanvas.svelte'
    import Sketch from './Sketch.svelte'
</script>

<svelte:head>
    <title>CS231115 by James Wesc</title>
    <meta
        name="description"
        content="Code sketch for 15 Nov 2023. Taking inspiration from a UI element from a Star Wars film. Created with Svelte and SVGs."
    />
    <meta name="author" content="James Wesc" />
</svelte:head>

<PaneProvider>
    <Seed />
    <SvgCanvas>
        <Sketch />
    </SvgCanvas>
</PaneProvider>
