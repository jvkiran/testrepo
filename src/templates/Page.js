import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import SEO from '../components/SEO'
import Header from '../components/Header'
import Menu from '../components/Menu'
import OceanBanner01 from '@oceanprotocol/art/banner/banner-ocean-01@2x.png'

export default class Page extends PureComponent {
    static propTypes = {
        location: PropTypes.object.isRequired,
        children: PropTypes.any,
        title: PropTypes.string,
        description: PropTypes.string,
        text: PropTypes.string,
        headerBackground: PropTypes.string,
        noabsolute: PropTypes.bool,
        noheader: PropTypes.bool,
        menuLight: PropTypes.bool
    }

    render() {
        const {
            children,
            location,
            title,
            description,
            text,
            headerBackground,
            noabsolute,
            noheader,
            menuLight
        } = this.props

        return (
            <>
                <SEO
                    description={description}
                    image={OceanBanner01}
                    path={location.pathname}
                    title={title}
                />
                <Menu
                    background={headerBackground}
                    light={menuLight}
                    noabsolute={noabsolute}
                />
                {!noheader && (
                    <Header
                        title={title}
                        description={description}
                        text={text}
                        background={headerBackground}
                        light={menuLight}
                    />
                )}
                {children}
            </>
        )
    }
}
