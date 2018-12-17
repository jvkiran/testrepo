import React, { Component } from 'react'
import SEO from '../components/SEO'
import Menu from '../sections/Menu'
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
