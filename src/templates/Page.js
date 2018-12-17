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
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        text: PropTypes.string,
        headerBackground: PropTypes.string,
        noheader: PropTypes.bool
    }

    render() {
        return (
            <>
                <SEO
                    description={this.props.description}
                    image={OceanBanner01}
                    path={this.props.location.pathname}
                    title={this.props.title}
                />
                <Menu background={this.props.headerBackground || null} />
                {!this.props.noheader && (
                    <Header
                        title={this.props.title}
                        description={this.props.description}
                        text={this.props.text}
                        background={this.props.headerBackground || null}
                    />
                )}
                {this.props.children}
            </>
        )
    }
}
