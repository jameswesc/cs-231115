<script>
    export let size = 1024

    $: halfSize = size / 2
    $: viewBox = `${-halfSize} ${-halfSize} ${size} ${size}`
</script>

<svg {viewBox}>
    <slot />
</svg>

<style>
    svg {
        width: 100vw;
        height: 100vh;
        background-color: #0f0f0f;
    }
</style>
