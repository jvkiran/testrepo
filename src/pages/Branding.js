import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import rgbHex from 'rgb-hex'
import Header from '../sections/Header'
import Button from '../components/Button'
import Section from '../components/Section'
import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
import ContentRow from '../components/ContentRow'
import { colors, fonts, gradients, responsive } from '../styles'
import OceanLogo from '../assets/logos/ocean-logo.svg'
import OceanLogoDark from '../assets/logos/ocean-logo-dark.svg'

const pageTitle = 'Branding'
const mediakitDownload = 'https://github.com/oceanprotocol/art/archive/master.zip'

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

    span { display: block; }

    .color__name {

    }

    .color__value {
    }
`

const Gradients = styled(Colors)`

`

const Gradient = styled(Color)`
    background: ${props => (props.color ? props.color : '')};
    flex-basis: 100%;
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
                <Button>
                    <a download href={mediakitDownload}>Download Mediakit</a>
                </Button>
            </ContentRow>

            <ContentRow>
                <h3>Logo</h3>
                <img alt="Ocean Protocol logo" src={OceanLogoDark} width="90" />
                <img alt="Ocean Protocol logo" src={OceanLogo} width="90" />

                <h3>Colors</h3>
                <Colors>
                    {Object.entries(colors).map(color => (
                        <Color color={color[1]} key={color}>
                            <span className="color__name">${color[0]}</span>
                            <span className="color__value">
                                rgb({color[1]})
                            </span>
                            <span className="color__value">
                                #{rgbHex(color[1])}
                            </span>
                        </Color>
                    ))}
                </Colors>

                <h3>Gradients</h3>
                <Gradients>
                    {Object.entries(gradients).map(gradient => (
                        <Gradient color={gradient[1]} key={gradient}>
                            <span className="color__name">${gradient[0]}</span>
                            <span className="color__value">{gradient[1]}</span>
                        </Gradient>
                    ))}
                </Gradients>

                <h3>Typography</h3>
                <h1>Sharp Sans Display No. 1 Bold</h1>
                <h2>Sharp Sans Display No. 1 Bold</h2>
                <h3>Sharp Sans Display No. 1 Bold</h3>
                <h4>Sharp Sans Display No. 1 Bold</h4>
                <h5>Sharp Sans Display No. 1 Bold</h5>
                <p>
                    Sharp Sans Medium <strong>Sharp Sans Bold</strong>
                </p>
                <p style={{ fontSize: fonts.size.large }}>
                    Sharp Sans Medium <strong>Sharp Sans Bold</strong>
                </p>
                <p style={{ fontSize: fonts.size.small }}>
                    Sharp Sans Medium <strong>Sharp Sans Bold</strong>
                </p>
            </ContentRow>
        </Section>
    </Fragment>
)

export default Branding
