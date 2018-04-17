import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Header from '../sections/Header'
import Section from '../components/Section'
import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
import ContentRow from '../components/ContentRow'
import { colors, gradients, responsive } from '../styles'

const pageTitle = 'Branding'

const Colors = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Color = styled.div`
    margin-bottom: 2%;
    padding: 2rem;
    background: ${props => (props.color ? `rgb(${props.color})` : '')};
    text-align: center;
    color: rgb(${colors.white});
    border: 1px solid rgb(${colors.lightGrey});
    border-radius: 0.2rem;
    flex: 0 0 49%;

    @media (${responsive.sm.min}) {
        flex-basis: 32%;
    }

    .color__name {
        display: block;
    }

    .color__value {
    }
`

const Gradient = styled(Color)`
    background: ${props => (props.color ? props.color : '')};
`

const Meta = () => (
    <Helmet>
        <title>{pageTitle}</title>
    </Helmet>
)

const Branding = () => (
    <Fragment>
        <Meta />
        <Header />
        <Section>
            <ContentRow narrow>
                <Title>{pageTitle}</Title>
                <SubTitle center>All the good looking stuff</SubTitle>
            </ContentRow>

            <ContentRow>
                <h3>Colors</h3>
                <Colors>
                    {Object.entries(colors).map(color => (
                        <Color color={color[1]} key={color}>
                            <span className="color__name">${color[0]}</span>
                            <span className="color__value">
                                rgb({color[1]})
                            </span>
                        </Color>
                    ))}
                </Colors>

                <h3>Gradients</h3>
                <Colors>
                    {Object.entries(gradients).map(gradient => (
                        <Gradient color={gradient[1]} key={gradient}>
                            <span className="color__name">${gradient[0]}</span>
                            <span className="color__value">{gradient[1]}</span>
                        </Gradient>
                    ))}
                </Colors>
            </ContentRow>
        </Section>
    </Fragment>
)

export default Branding
