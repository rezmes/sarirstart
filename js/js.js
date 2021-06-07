const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
function rot() {
    var angle = Math.round((Math.atan2(vh, vw)) * (180 / Math.PI))
    var deg = angle
    var el1 = document.getElementById("layer1")
    var el2 = document.getElementById("layer2")
    var rotdeg = deg + 'deg'
    console.log(rotdeg)
    el1.style.transform = 'rotate(' + rotdeg + ')'
    el2.style.transform = 'rotate(' + rotdeg + ')'
}
rot()

