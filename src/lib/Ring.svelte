<script lang="ts">
    import { clamp } from './utils'

    export let radius = 256
    export let theta = 360 // angle in radians
    export let thetaOffset = 0 // angle in radians
    export let width = 1
    export let color = '#56647b'

    function degToRad(d: number) {
        return (d * Math.PI) / 180
    }

    theta = clamp(theta, 0, 360)
    thetaOffset = clamp(thetaOffset, 0, 360)

    $: startX = radius * Math.cos(degToRad(thetaOffset))
    $: startY = radius * Math.sin(degToRad(thetaOffset))

    $: endX = radius * Math.cos(degToRad(theta + thetaOffset))
    $: endY = radius * Math.sin(degToRad(theta + thetaOffset))

    $: largeArcFlag = theta < 180 ? 0 : 1

    $: d = `M ${startX},${startY} A ${radius},${radius} 0 ${largeArcFlag} 1 ${endX},${endY}`
</script>

<path {d} stroke={color} stroke-width={width} fill="none" />
