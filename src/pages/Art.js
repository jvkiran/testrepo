import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Collapsible from 'react-collapsible'
import LazyLoad from 'react-lazyload'
import Header from '../components/Header'
import Button from '../components/Button'
import Section from '../components/Section'
import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
import ContentRow from '../components/ContentRow'
import Grid from '../components/Grid'
import Cell from '../components/Cell'
import Paragraph from '../components/Paragraph'
import Styleguide from '../components/Styleguide'
import jellyfish from '../assets/graphics/jellyfish.svg'
import { colors, fonts, transitions, layout } from '../styles'
import { social } from '../constants'
import artJson from '../data/art'

// grab all assets from art submodule
import OceanLogo from '../lib/art/logo/logo.svg'
import OceanLogoWhite from '../lib/art/logo/logo-white.svg'
import OceanLogoPNG from '../lib/art/logo/logo.png'
import OceanLogoWhitePNG from '../lib/art/logo/logo-white.png'
import OceanBanner01 from '../lib/art/banner/banner-ocean-01@2x.png'
import OceanBanner02 from '../lib/art/banner/banner-ocean-02@2x.png'
import OceanBanner03 from '../lib/art/banner/banner-ocean-03@2x.png'
import OceanBanner04 from '../lib/art/banner/banner-ocean-04@2x.png'
import OceanJeyllyfishGrid from '../lib/art/jellyfish/jellyfish-grid.svg'
import OceanJeyllyfishGridPNG from '../lib/art/jellyfish/jellyfish-grid@2x.png'
import OceanJeyllyfishFull from '../lib/art/jellyfish/jellyfish-full.svg'
import OceanJeyllyfishFullPNG from '../lib/art/jellyfish/jellyfish-full@2x.png'

const art = artJson[0]
const mediakitDownload = `${social.github}/art/archive/master.zip`

const HeaderArt = styled(Section)`
    background-image: url(${jellyfish});
    background-position: center 3rem;
    display: flex;
    align-items: center;
    margin-top: ${layout.pageFrame};

    p {
        margin-bottom: 0;
    }

    a {
        color: inherit;
        border-bottom: 1px solid rgba(${colors.white}, .2);

        &:hover,
        &:focus {
            border-bottom-color: rgba(${colors.white}, .4);
        }
    }
`

const StyledTitle = styled(Title)`
    margin-bottom: 1rem;
    margin-top: 0;
`

const StyledSubTitle = styled(SubTitle)`
    color: rgb(${colors.lightGrey});
`

const SectionTitle = styled(SubTitle)`
    margin-top: 8rem;
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
    margin-bottom: 4rem;

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

const KeyVisuals = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const KeyVisual = styled.div`
    flex: 0 0 48%;
    text-align: center;

    > div {
        border: 1px solid rgb(${colors.lightGrey});
        border-radius: 0.2rem;
        padding: 2rem;
        margin-bottom: .5rem;
        background: rgb(${colors.black});
    }
`

const StyledFirstContentRow = styled(ContentRow)`
    margin-top: -6rem;
`

const Meta = () => (
    <Helmet>
        <title>{art.header.title}</title>
    </Helmet>
)

const Art = () => (
    <Fragment>
        <Meta />
        <Header background={colors.darkPurple} />
        <HeaderArt background={colors.darkPurple} fontColor={colors.white}>
            <ContentRow narrow>
                <StyledTitle white>{art.header.title}</StyledTitle>
                <StyledSubTitle center>{art.header.tagline}</StyledSubTitle>
                <Paragraph center dangerouslySetInnerHTML={{ __html: art.header.text }} />
            </ContentRow>
        </HeaderArt>

        <Section>
            <StyledFirstContentRow>
                <Grid>
                    <Cell smallGutter width={1 / 2}>
                        <SectionTitle>{art.logo.title}</SectionTitle>
                        <SectionSubTitle>
                            {art.logo.description}
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
                    <Cell smallGutter width={1 / 3}>
                        <SectionTitle>{art.mediakit.title}</SectionTitle>
                        <SectionSubTitle>
                            {art.mediakit.description}
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
            </StyledFirstContentRow>

            <ContentRow>
                <SectionTitle>{art.banner.title}</SectionTitle>
                <SectionSubTitle>
                    {art.banner.description}
                </SectionSubTitle>

                <Banners>
                    <a download href={OceanBanner01}>
                        <LazyLoad once height={337} offset={100}>
                            <img
                                alt="Ocean Protocol banner 1"
                                src={OceanBanner01} />
                        </LazyLoad>
                        PNG
                    </a>

                    <a download href={OceanBanner02}>
                        <LazyLoad once height={337} offset={100}>
                            <img
                                alt="Ocean Protocol banner 2"
                                src={OceanBanner02} />
                        </LazyLoad>
                        PNG
                    </a>

                    <a download href={OceanBanner03}>
                        <LazyLoad once height={337} offset={100}>
                            <img
                                alt="Ocean Protocol banner 3"
                                src={OceanBanner03} />
                        </LazyLoad>
                        PNG
                    </a>

                    <a download href={OceanBanner04}>
                        <LazyLoad once height={337} offset={100}>
                            <img
                                alt="Ocean Protocol banner 4"
                                src={OceanBanner04} />
                        </LazyLoad>
                        PNG
                    </a>
                </Banners>
            </ContentRow>

            <ContentRow>
                <SectionTitle>{art.jellyfish.title}</SectionTitle>
                <SectionSubTitle>
                    {art.jellyfish.description}
                </SectionSubTitle>

                <KeyVisuals>
                    <KeyVisual>
                        <div>
                            <LazyLoad once height={370} offset={100}>
                                <img
                                    alt="Ocean Protocol Jeyllfish Full"
                                    src={OceanJeyllyfishFull} />
                            </LazyLoad>
                        </div>
                        <a download href={OceanJeyllyfishFull}>
                            SVG
                        </a>
                        {' • '}
                        <a download href={OceanJeyllyfishFullPNG}>
                            PNG
                        </a>
                    </KeyVisual>
                    <KeyVisual>
                        <div>
                            <LazyLoad once height={370} offset={100}>
                                <img
                                    alt="Ocean Protocol Jeyllfish Grid"
                                    src={OceanJeyllyfishGrid} />
                            </LazyLoad>
                        </div>
                        <a download href={OceanJeyllyfishGrid}>
                            SVG
                        </a>
                        {' • '}
                        <a download href={OceanJeyllyfishGridPNG}>
                            PNG
                        </a>
                    </KeyVisual>
                </KeyVisuals>
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
