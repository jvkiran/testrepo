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
        noheader: PropTypes.bool
    }

    render() {
        return (
            <>
                <SEO
                    description={this.props.description || null}
                    image={OceanBanner01}
                    path={this.props.location.pathname}
                    title={this.props.title || null}
                />
                <Menu
                    background={this.props.headerBackground || null}
                    noabsolute={this.props.noabsolute}
                />
                {!this.props.noheader && (
                    <Header
                        title={this.props.title || null}
                        description={this.props.description || null}
                        text={this.props.text || null}
                        background={this.props.headerBackground || null}
                    />
                )}
                {this.props.children}
            </>
        )
    }
}
