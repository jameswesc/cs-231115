<script lang="ts">
    import { onMount } from 'svelte'
    import { Pane } from 'tweakpane'
    import { setPaneContext } from './paneContext'

    let pane: Pane

    onMount(() => {
        pane = new Pane()
    })

    setPaneContext(() => pane)
</script>

{#if pane}
    <slot />
{/if}
