import React from 'react'
import PropTypes from 'prop-types'
import artJson from '../data/pages/art'
import faqJson from '../data/pages/faq'
import protocolJson from '../data/pages/protocol'
import communityJson from '../data/pages/community'
import developersJson from '../data/pages/developers'
import { colors } from '../styles'
import OceanJeyllyfish from '@oceanprotocol/art/jellyfish/jellyfish-grid.svg'
import OceanMantaray from '@oceanprotocol/art/mantaray/mantaray-grid.svg'
import {
    StyledSection,
    StyledLink,
    StyledTitle,
    StyledSubTitle
} from './MorePages.css'

const content = [
    {
        title: protocolJson.title,
        subtitle: protocolJson.description,
        link: '/protocol',
        backgroundImage: OceanJeyllyfish
    },
    {
        title: communityJson.title,
        subtitle: communityJson.description,
        link: '/community',
        backgroundColor: colors.white,
        backgroundImage: OceanMantaray,
        light: true
    },
    {
        title: developersJson.title,
        subtitle: developersJson.description,
        link: '/developers'
    },
    {
        title: artJson.title,
        subtitle: artJson.description,
        link: '/art',
        backgroundColor: colors.darkPurple,
        backgroundImage: OceanJeyllyfish
    },
    {
        title: faqJson.title,
        subtitle: faqJson.description,
        link: '/faq'
    }
]

const MorePages = ({ links }) => (
    <StyledSection id="more">
        {content.map(item => {
            // eslint-disable-next-line
            if (links && !links.includes(item.link)) return

            return (
                <StyledLink
                    key={item.link}
                    to={item.link}
                    backgroundColor={item.backgroundColor}
                    backgroundImage={item.backgroundImage}
                    light={item.light}
                >
                    <StyledTitle white={!item.light}>{item.title}</StyledTitle>
                    {item.subtitle && (
                        <StyledSubTitle center>{item.subtitle}</StyledSubTitle>
                    )}
                </StyledLink>
            )
        })}
    </StyledSection>
)

MorePages.propTypes = {
    links: PropTypes.array
}

MorePages.defaultProps = {
    links: ['/protocol', '/community', '/developers']
}

export default MorePages
