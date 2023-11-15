export function degToRad(degrees: number) {
    return (degrees * Math.PI) / 180
}

export function clamp(n: number, min: number, max: number) {
    return Math.min(Math.max(n, min), max)
}
