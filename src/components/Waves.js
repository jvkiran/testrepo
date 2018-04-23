import React from 'react'
import styled from 'styled-components'
import * as THREE from 'three/build/three' // eslint-disable-line import/no-namespace
import '../lib/Projector'
import '../lib/CanvasRenderer'
import wavesStatic from '../assets/misc/waves.png'
import { responsive } from '../styles'

const StyledWaves = styled.div`
    z-index: 0;
    background: url(${wavesStatic}) no-repeat;
    background-size: cover;
    background-position: center bottom;

    &,
    .waves__background {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }

    .waves__container {
        position: absolute;
        top: 10vh;
        bottom: 0;
        left: 0;
        right: 0;
        overflow: hidden;

        @media screen and (${responsive.sm.min}) {

        }
    }

    canvas {
        max-width: 100%;
    }
`

const WavesAnimation = (node) => {
    if (!node) return

    const SEPARATION = 100
    const AMOUNTX = 100
    const AMOUNTY = 70
    let camera
    let scene
    let renderer
    let container
    let isDesktop = window.innerWidth >= 801 && window.innerHeight >= 500
    let particles
    let particle
    let count = 0

    init()
    animate()

    if (!(Math.max(document.documentElement.clientWidth, window.innerWidth || 0) < 801)) {
        onWindowResize()
    }

    function init() {
        if (!isDesktop) return

        container = document.createElement('div')
        container.className = 'waves__container'
        node.appendChild(container)

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
        if (window.innerWidth >= 801 && window.innerHeight >= 500) {
            if (!isDesktop) {
                isDesktop = true
                animate()
            }
        } else {
            isDesktop = false
        }

        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()

        renderer.setSize(window.innerWidth, window.innerHeight)
    }

    function animate() {
        if (!isDesktop) return null
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

const Waves = () => (
    <StyledWaves>
        <div className="waves__background" ref={(node) => WavesAnimation(node)} />
    </StyledWaves>
)

export default Waves
