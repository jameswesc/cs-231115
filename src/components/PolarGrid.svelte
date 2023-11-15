<script lang="ts">
    import { onDestroy } from 'svelte'
    import { pane } from '../lib/pane'
    import type { FolderApi } from 'tweakpane'

    let params = {
        radius: 500,
        rings: 10,
        sections: 60,
    }

    let folder: FolderApi

    function initPane() {
        if (!$pane) return

        folder = $pane.addFolder({ title: 'Polar Grid' })

        folder.addBinding(params, 'radius').on('change', ({ value }) => {
            params.radius = value
        })
        folder
            .addBinding(params, 'rings', { step: 1, min: 0 })
            .on('change', ({ value }) => {
                params.rings = value
            })
        folder
            .addBinding(params, 'sections', { step: 1, min: 1 })
            .on('change', ({ value }) => {
                params.sections = value
            })
    }

    $: if ($pane) {
        initPane()
    }

    onDestroy(() => {
        $pane.remove(folder)
    })

    $: radius = params.radius
    $: rings = params.rings

    $: sections = params.sections
</script>

{#each new Array(rings) as _, i}
    <circle
        cx={0}
        cy={0}
        r={((i + 1) / rings) * radius}
        stroke="black"
        fill="none"
        stroke-width=".5"
        stroke-dasharray="5 5"
    />
{/each}

{#each new Array(sections) as _, i}
    <line
        x1={0}
        y1={0}
        x2={radius * Math.cos((i * 2 * Math.PI) / sections)}
        y2={radius * Math.sin((i * 2 * Math.PI) / sections)}
        stroke="black"
        stroke-width=".5"
        stroke-dasharray="5 5"
    />
{/each}
