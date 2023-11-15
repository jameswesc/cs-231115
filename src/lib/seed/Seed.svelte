<script lang="ts">
    import { onMount } from 'svelte'
    import { get } from 'svelte/store'
    import { seed } from './seedStore'
    import { getPane } from '../pane/paneContext'

    const pane = getPane()

    const params = {
        seed: get(seed),
    }

    onMount(() => {
        const seedBinding = pane
            .addBinding(params, 'seed', { step: 1 })
            .on('change', ({ value }) => {
                $seed = value
            })

        return () => {
            pane.remove(seedBinding)
        }
    })
</script>
