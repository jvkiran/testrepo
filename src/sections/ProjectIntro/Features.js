import React from 'react'
import Paragraph from '../../components/Paragraph'
import SubTitle from '../../components/SubTitle'
import { StyledGrid, StyledCell, StyledGraphic, Actions } from './Features.css'
import graphicSharing from '../../assets/graphics/feature-sharing.svg'
import graphicLayers from '../../assets/graphics/feature-layers.svg'
import graphicMarketplaces from '../../assets/graphics/feature-marketplaces.svg'
import graphicJellyfish from '@oceanprotocol/art/jellyfish/jellyfish-full.svg'

const Graphic = ({ graphic }) => {
    switch (graphic) {
        case 'sharing':
            return <StyledGraphic src={graphicSharing} />
        case 'layers':
            return <StyledGraphic src={graphicLayers} />
        case 'marketplaces':
            return <StyledGraphic src={graphicMarketplaces} />
        case 'jellyfish':
            return <StyledGraphic src={graphicJellyfish} />
        default:
            return null
    }
}

const Features = ({ features }) =>
    features.map(feature => (
        <StyledGrid key={feature.title}>
            <StyledCell width={7 / 12}>
                <SubTitle white left>
                    {feature.title}
                </SubTitle>
                <Paragraph>{feature.text}</Paragraph>

                <Actions>
                    {feature.actions &&
                        feature.actions.map(action => (
                            <a key={action.title} href={action.url}>
                                {action.title}
                            </a>
                        ))}
                </Actions>
            </StyledCell>
            <StyledCell width={5 / 12}>
                <Graphic graphic={feature.graphic} />
            </StyledCell>
        </StyledGrid>
    ))

export default Features
