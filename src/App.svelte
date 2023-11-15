<script lang="ts">
    import PaneProvider from './lib/pane/PaneProvider.svelte'
    import Seed from './lib/seed/Seed.svelte'
    import SvgCanvas from './lib/SvgCanvas.svelte'
    import Sketch from './Sketch.svelte'
</script>

<PaneProvider>
    <Seed />
    <SvgCanvas>
        <Sketch />
    </SvgCanvas>
</PaneProvider>
