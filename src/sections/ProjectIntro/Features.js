import React from 'react'
import Paragraph from '../../components/Paragraph'
import SubTitle from '../../components/SubTitle'
import { StyledGrid, StyledCell, StyledGraphic, Actions } from './Features.css'
import graphicSharing from '../../assets/graphics/feature-sharing.svg'
import graphicLayers from '../../assets/graphics/feature-layers.svg'
import graphicMarketplaces from '../../assets/graphics/feature-marketplaces.svg'

const Graphic = ({ graphic }) => {
    switch (graphic) {
        case 'feature-sharing':
            return <StyledGraphic src={graphicSharing} />
        case 'feature-layers':
            return <StyledGraphic src={graphicLayers} />
        case 'feature-marketplaces':
            return <StyledGraphic src={graphicMarketplaces} />
        default:
            return null
    }
}

const Features = ({ features }) =>
    features.map(feature => (
        <StyledGrid key={feature.title}>
            <StyledCell width={2 / 3}>
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
            <StyledCell width={1 / 3}>
                <Graphic graphic={feature.graphic} />
            </StyledCell>
        </StyledGrid>
    ))

export default Features
