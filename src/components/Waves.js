import React, { Component } from 'react'
import styled from 'styled-components'
import VisibilitySensor from 'react-visibility-sensor'
import * as THREE from 'three/build/three' // eslint-disable-line import/no-namespace
import '../lib/Projector'
import '../lib/CanvasRenderer'
import wavesStatic from '../assets/misc/waves.png'

const StyledWaves = styled.div`
    background: url(${wavesStatic}) no-repeat center bottom;
    background-size: cover;

    &,
    > div,
    canvas {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }

    canvas {
        max-width: 100%;
        width: 100%;
        top: 10vh;
        z-index: 1;
        transition: opacity .3s ease-out;
    }
`

const SEPARATION = 100
const AMOUNTX = 60
const AMOUNTY = 60
const particles = []
let particle
const windowWidth = window.innerWidth
const windowHeight = window.innerHeight
const isDesktop = windowWidth >= 800
const shouldAnimate = process.env.REACT_APP_ANIMATE_WAVES

class Waves extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            width: windowWidth,
            height: windowHeight,
            running: false
        }

        this.animate = this.animate.bind(this)
        this.handleResize = this.handleResize.bind(this)
        this.handleVisibility = this.handleVisibility.bind(this)
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize, false)
    }

    componentWillUnmount() {
        this.destroy()
    }

    handleVisibility(isVisible) {
        if (process.env.NODE_ENV !== 'production') {
            if (shouldAnimate !== 'true') return
        }

        if (isDesktop && isVisible) {
            this.init()
        } else {
            this.destroy()
        }
    }

    init() {
        const width = this.mount.clientWidth
        const height = this.mount.clientHeight
        const scene = new THREE.Scene()
        scene.background = new THREE.Color(0x141414)

        const camera = new THREE.PerspectiveCamera(75, this.state.width / this.state.height, 1, 10000)
        camera.position.z = 10000

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

        const renderer = new THREE.CanvasRenderer({ antialias: true })
        renderer.setPixelRatio(window.devicePixelRatio)
        renderer.setSize(width, height)
        camera.position.set(0, 355, 122)

        this.scene = scene
        this.camera = camera
        this.renderer = renderer

        this.renderer.domElement.style.opacity = '0'
        this.mount.appendChild(this.renderer.domElement)
        this.start()
    }

    moveParticles() {
        let i = 0

        for (let ix = 0; ix < AMOUNTX; ix++) {
            for (let iy = 0; iy < AMOUNTY; iy++) {
                particle = particles[i++]
                particle.position.y = (Math.sin((ix + this.state.count) * 0.3) * 50) + (Math.sin((iy + this.state.count) * 0.5) * 50)
                particle.scale.x = particle.scale.y = ((Math.sin((ix + this.state.count) * 0.3) + 1) * 4) + ((Math.sin((iy + this.state.count) * 0.5) + 1) * 4) // eslint-disable-line no-multi-assign
            }
        }
        this.renderer.render(this.scene, this.camera)
        this.renderer.domElement.style.opacity = '1'
    }

    handleResize() {
        this.setState({
            width: this.mount.clientWidth,
            height: this.mount.clientHeight
        })

        if (process.env.NODE_ENV !== 'production') {
            if (shouldAnimate !== 'true') return
        }

        if (this.state.running && this.state.width >= 800) {
            if (this.camera && this.renderer) {
                this.camera.aspect = this.state.width / this.state.height
                this.camera.updateProjectionMatrix()
                this.renderer.setSize(this.state.width, this.state.height)
            }
        } else if (this.state.running === false && this.state.width >= 800) {
            this.init()
        } else {
            this.destroy()
        }
    }

    start() {
        this.frameId = requestAnimationFrame(this.animate)
    }

    destroy() {
        cancelAnimationFrame(this.frameId)
        if (this.renderer && this.mount) {
            this.mount.removeChild(this.renderer.domElement)
        }
        window.removeEventListener('resize', this.handleResize)
        this.setState({
            count: 0,
            running: false
        })
    }

    animate() {
        this.frameId = window.requestAnimationFrame(this.animate)
        this.moveParticles()
        this.setState(prevState => ({
            count: prevState.count + 0.05,
            running: true
        }))
    }

    render() {
        return (
            <VisibilitySensor partialVisibility scrollCheck intervalCheck={false} onChange={this.handleVisibility}>
                <StyledWaves>
                    <div ref={(mount) => { this.mount = mount }} />
                </StyledWaves>
            </VisibilitySensor>
        )
    }
}

export default Waves
