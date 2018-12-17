import React, { Component } from 'react'
import SEO from '../components/SEO'
import Menu from '../components/Menu'
import Welcome from '../sections/Welcome/Welcome'

export default class Home extends Component {
    render() {
        return (
            <>
                <SEO />
                <Menu />
                <Welcome />
            </>
        )
    }
}
