import React, { PureComponent } from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import artJson from '../data/pages/art'
import faqJson from '../data/pages/faq'
import protocolJson from '../data/pages/protocol'
import communityJson from '../data/pages/community'
import developersJson from '../data/pages/developers'
import { colors } from '../styles'
import OceanJeyllyfish from '@oceanprotocol/art/jellyfish/jellyfish-grid.svg'
import OceanMantaray from '@oceanprotocol/art/mantaray/mantaray-grid.svg'
import OceanSquid from '@oceanprotocol/art/squid/squid-grid.svg'
import {
    StyledSection,
    StyledPage,
    StyledTitle,
    LearnMore
} from './MorePages.css'
import { ReactComponent as Arrow } from '../assets/misc/arrow.svg'

const content = [
    {
        title: protocolJson.title,
        link: '/protocol/',
        backgroundImage: OceanJeyllyfish
    },
    {
        title: communityJson.title,
        link: '/community/',
        backgroundColor: colors.white,
        backgroundImage: OceanMantaray,
        light: true
    },
    {
        title: developersJson.title,
        link: '/developers/',
        backgroundColor: colors.darkPurple,
        backgroundImage: OceanSquid
    },
    {
        title: artJson.title,
        subtitle: artJson.description,
        link: '/art/',
        backgroundColor: colors.darkPurple,
        backgroundImage: OceanJeyllyfish
    },
    {
        title: faqJson.title,
        subtitle: faqJson.description,
        link: '/faq/'
    }
]

export default class MorePages extends PureComponent {
    static propTypes = {
        links: PropTypes.array
    }

    static defaultProps = {
        links: ['/protocol/', '/community/', '/developers/']
    }

    render() {
        const { links } = this.props

        return (
            <StyledSection id="more">
                {content.map(item => {
                    // eslint-disable-next-line
                    if (links && !links.includes(item.link)) return

                    return (
                        <StyledPage
                            key={item.link}
                            backgroundColor={item.backgroundColor}
                            backgroundImage={item.backgroundImage}
                            light={item.light}
                        >
                            <NavLink to={item.link}>
                                <StyledTitle left white={!item.light}>
                                    {item.title}
                                </StyledTitle>
                                <LearnMore>
                                    Learn more <Arrow />
                                </LearnMore>
                            </NavLink>
                        </StyledPage>
                    )
                })}
            </StyledSection>
        )
    }
}
