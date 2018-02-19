import * as THREE from 'three/build/three' // eslint-disable-line import/no-namespace
import '../lib/Projector'
import '../lib/CanvasRenderer'

const Waves = (background) => {
    if (!background) {
        return
    }

    const SEPARATION = 100
    const AMOUNTX = 100
    const AMOUNTY = 70
    let camera
    let scene
    let renderer
    let container
    let show = window.innerWidth >= 768 && window.innerHeight >= 500
    let particles
    let particle
    let count = 0

    if (!(Math.max(document.documentElement.clientWidth, window.innerWidth || 0) < 768)) {
        init()
        animate()
    }

    function init() {
        container = document.createElement('div')
        container.className = 'waves__container'
        background.appendChild(container)

        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000)
        camera.position.z = 10000

        scene = new THREE.Scene()
        scene.background = new THREE.Color(0x141414)

        particles = []

        const PI2 = Math.PI * 2
        const material = new THREE.SpriteCanvasMaterial({
            color: 0xffffff,
            program(context) {
                context.beginPath()
                context.arc(0, 0, 0.5, 0, PI2, true)
                context.fill()
            }
        })

        let i = 0

        for (let ix = 0; ix < AMOUNTX; ix++) {
            for (let iy = 0; iy < AMOUNTY; iy++) {
                particle = particles[i++] = new THREE.Sprite(material) // eslint-disable-line no-multi-assign
                particle.position.x = (ix * SEPARATION) - (AMOUNTX * SEPARATION / 2)
                particle.position.z = (iy * SEPARATION) - (AMOUNTY * SEPARATION / 2)
                scene.add(particle)
            }
        }

        renderer = new THREE.CanvasRenderer()
        renderer.setPixelRatio(window.devicePixelRatio)
        renderer.setSize(window.innerWidth, window.innerHeight)
        container.appendChild(renderer.domElement)

        window.addEventListener('resize', onWindowResize, false)
    }

    function onWindowResize() {
        if (window.innerWidth >= 768 && window.innerHeight >= 500) {
            if (!show) {
                show = true
                animate()
            }
        } else {
            show = false
        }

        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()

        renderer.setSize(window.innerWidth, window.innerHeight)
    }

    function animate() {
        if (!show) return null
        requestAnimationFrame(animate)

        return render()
    }

    function render() {
        camera.position.set(0, 355, 122)

        let i = 0

        for (let ix = 0; ix < AMOUNTX; ix++) {
            for (let iy = 0; iy < AMOUNTY; iy++) {
                particle = particles[i++]
                particle.position.y = (Math.sin((ix + count) * 0.3) * 50) + (Math.sin((iy + count) * 0.5) * 50)
                particle.scale.x = particle.scale.y = ((Math.sin((ix + count) * 0.3) + 1) * 4) + ((Math.sin((iy + count) * 0.5) + 1) * 4) // eslint-disable-line no-multi-assign
            }
        }

        renderer.render(scene, camera)

        count += 0.1
    }
}

export default Waves
