import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Collapsible from 'react-collapsible'
import Header from '../sections/Header'
import Button from '../components/Button'
import Section from '../components/Section'
import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
import ContentRow from '../components/ContentRow'
import Grid from '../components/Grid'
import Cell from '../components/Cell'
import Paragraph from '../components/Paragraph'
import Styleguide from '../components/Styleguide'
import { colors, fonts, transitions } from '../styles'

// grab all assets from art submodule
import OceanLogo from '../assets/art/logo/logo.svg'
import OceanLogoWhite from '../assets/art/logo/logo-white.svg'
import OceanLogoPNG from '../assets/art/logo/logo.png'
import OceanLogoWhitePNG from '../assets/art/logo/logo-white.png'
import OceanBanner01 from '../assets/art/banner/banner-ocean-01@2x.png'
import OceanBanner02 from '../assets/art/banner/banner-ocean-02@2x.png'

const pageTitle = 'Art'
const mediakitDownload = 'https://github.com/oceanprotocol/art/archive/master.zip'

const StyledSubTitle = styled(SubTitle)`
    color: rgb(${colors.lightGrey});
    margin-top: -3rem;
`

const SectionTitle = styled(SubTitle)`
    margin-top: 6rem;
`

const SectionSubTitle = styled.h4`
    font-size: ${fonts.size.large};
    color: rgb(${colors.lightGrey});
    margin-bottom: 3rem;
    margin-top: -1rem;
`

const Logos = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Logo = styled.div`
    flex: 0 0 48%;
    text-align: center;

    > div {
        border: 1px solid rgb(${colors.lightGrey});
        border-radius: 0.2rem;
        padding: 2rem;
        background: ${props => (props.white ? `rgb(${colors.black})` : null)};
        margin-bottom: .5rem;
    }
`

const Banners = styled.figure`
    display: block;
    margin: 0;

    img {
        margin-bottom: 0.5rem;
        border-radius: 0.2rem;
    }

    a {
        display: block;
        text-align: center;
        margin-top: 2rem;
    }
`

const StyledCollapsible = styled.div`
    margin-top: 6rem;

    .Collapsible__contentInner {
        border-top: 1px solid rgba(${colors.lightGrey}, .4);
    }

    .Collapsible__trigger {
        cursor: pointer;
        transition: ${transitions.base};
        display: block;
        font-family: ${fonts.family.title};
        font-weight: ${fonts.fontWeight.title};
        line-height: ${fonts.lineHeight.title};
        font-size: ${fonts.size.large};
        padding-bottom: 4rem;
        text-align: center;

        &:hover,
        &:focus {
            color: rgb(${colors.pink});
        }

        &:before {
            content: '+';
            font-size: 2.25rem;
            line-height: 0;
            vertical-align: middle;
            margin-right: .5rem;
            color: rgb(${colors.pink});
            font-weight: ${fonts.fontWeight.base};
            font-family: ${fonts.family.base};
            position: relative;
        }

        &.is-open:before {
            content: '-';
            top: -.25rem;
        }
    }
`

const Meta = () => (
    <Helmet>
        <title>{pageTitle}</title>
    </Helmet>
)

const Art = () => (
    <Fragment>
        <Meta />
        <Header />
        <Section>
            <ContentRow narrow>
                <Title>{pageTitle}</Title>
                <StyledSubTitle center>All the good looking stuff for you to use.</StyledSubTitle>
                <Paragraph center>
                    All assets are licensed under a <a href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.
                </Paragraph>
            </ContentRow>

            <ContentRow>
                <Grid>
                    <Cell width={1 / 2}>
                        <SectionTitle>Logo</SectionTitle>
                        <SectionSubTitle>
                            You don’t need to get our logo from Google.
                        </SectionSubTitle>
                        <Logos>
                            <Logo>
                                <div>
                                    <img
                                        alt="Ocean Protocol logo"
                                        src={OceanLogo}
                                        width="90" />
                                </div>
                                <a download href={OceanLogo}>
                                    SVG
                                </a>
                                {' • '}
                                <a download href={OceanLogoPNG}>
                                    PNG
                                </a>
                            </Logo>
                            <Logo white>
                                <div>
                                    <img
                                        alt="Ocean Protocol logo"
                                        src={OceanLogoWhite}
                                        width="90" />
                                </div>
                                <a download href={OceanLogoWhite}>
                                    SVG
                                </a>
                                {' • '}
                                <a download href={OceanLogoWhitePNG}>
                                    PNG
                                </a>
                            </Logo>
                        </Logos>
                    </Cell>
                    <Cell width={1 / 3}>
                        <SectionTitle>Media kit</SectionTitle>
                        <SectionSubTitle>
                            Download all our assets.
                        </SectionSubTitle>

                        <Paragraph>
                            <a download href={mediakitDownload}>
                                <Button>Download media kit (zip)</Button>
                            </a>
                        </Paragraph>
                        <Paragraph>
                            Sourced from our{' '}
                            <a href="https://github.com/oceanprotocol/art">
                                art repository on GitHub
                            </a>.
                        </Paragraph>
                    </Cell>
                </Grid>
            </ContentRow>

            <ContentRow>
                <SectionTitle>Banner</SectionTitle>
                <SectionSubTitle>
                    Spruce up your blog posts with these Ocean Protocol banners.
                </SectionSubTitle>

                <Banners>
                    <a download href={OceanBanner01}>
                        <img
                            alt="Ocean Protocol banner 1"
                            src={OceanBanner01} />
                        PNG
                    </a>

                    <a download href={OceanBanner02}>
                        <img
                            alt="Ocean Protocol banner 2"
                            src={OceanBanner02} />
                        PNG
                    </a>
                </Banners>
            </ContentRow>

            <ContentRow>
                <StyledCollapsible>
                    <Collapsible easing="ease-out" transitionTime={200} trigger="Full Living Style Guide">
                        <Styleguide />
                    </Collapsible>
                </StyledCollapsible>
            </ContentRow>
        </Section>
    </Fragment>
)

export default Art
