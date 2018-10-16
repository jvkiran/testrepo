/* global ga */

import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Collapsible from 'react-collapsible'
import LazyLoad from 'react-lazyload'
import Header from '../components/Header'
import Button from '../components/Button'
import Section from '../components/Section'
import ContentRow from '../components/ContentRow'
import Grid from '../components/Grid'
import Cell from '../components/Cell'
import Paragraph from '../components/Paragraph'
import Styleguide from '../components/Styleguide'
import SEO from '../components/SEO'
import { colors } from '../styles'
import { social } from '../constants'
import artJson from '../data/art'
import {
    HeaderArt,
    StyledTitle,
    StyledSubTitle,
    StyledFirstContentRow,
    SectionTitle,
    SectionSubTitle,
    Logos,
    Logo,
    Banners,
    KeyVisuals,
    KeyVisual,
    StyledCollapsible
} from './Art.css'

// grab all assets from art package
import OceanLogo from '@oceanprotocol/art/logo/logo.svg'
import OceanLogoWhite from '@oceanprotocol/art/logo/logo-white.svg'
import OceanLogoPNG from '@oceanprotocol/art/logo/logo.png'
import OceanLogoWhitePNG from '@oceanprotocol/art/logo/logo-white.png'
import OceanBanner01 from '@oceanprotocol/art/banner/banner-ocean-01@2x.png'
import OceanBanner02 from '@oceanprotocol/art/banner/banner-ocean-02@2x.png'
import OceanBanner03 from '@oceanprotocol/art/banner/banner-ocean-03@2x.png'
import OceanBanner04 from '@oceanprotocol/art/banner/banner-ocean-04@2x.png'
import OceanJeyllyfishGrid from '@oceanprotocol/art/jellyfish/jellyfish-grid.svg'
import OceanJeyllyfishGridPNG from '@oceanprotocol/art/jellyfish/jellyfish-grid@2x.png'
import OceanJeyllyfishFull from '@oceanprotocol/art/jellyfish/jellyfish-full.svg'
import OceanJeyllyfishFullPNG from '@oceanprotocol/art/jellyfish/jellyfish-full@2x.png'

const art = artJson[0]
const mediakitDownload = `${social.github}/art/archive/master.zip`

function GaEvent(artasset) {
    if (window.ga) {
        ga('send', 'event', 'artdownload', artasset, 'link')
    }
}

const Art = ({ location }) => (
    <Fragment>
        <SEO
            description={art.header.tagline}
            image={OceanBanner01}
            path={location.pathname}
            title={art.header.title}
        />
        <Header background={colors.darkPurple} />
        <HeaderArt background={colors.darkPurple} fontColor={colors.white}>
            <ContentRow narrow>
                <StyledTitle white>{art.header.title}</StyledTitle>
                <StyledSubTitle center>{art.header.tagline}</StyledSubTitle>
                <Paragraph
                    center
                    dangerouslySetInnerHTML={{ __html: art.header.text }}
                />
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
                                        width="90"
                                    />
                                </div>
                                <a
                                    download
                                    href={OceanLogo}
                                    onClick={() => GaEvent('Ocean Logo')}
                                >
                                    SVG
                                </a>
                                {' • '}
                                <a
                                    download
                                    href={OceanLogoPNG}
                                    onClick={() => GaEvent('Ocean Logo')}
                                >
                                    PNG
                                </a>
                            </Logo>
                            <Logo white>
                                <div>
                                    <img
                                        alt="Ocean Protocol logo"
                                        src={OceanLogoWhite}
                                        width="90"
                                    />
                                </div>
                                <a
                                    download
                                    href={OceanLogoWhite}
                                    onClick={() => GaEvent('Ocean Logo White')}
                                >
                                    SVG
                                </a>
                                {' • '}
                                <a
                                    download
                                    href={OceanLogoWhitePNG}
                                    onClick={() => GaEvent('Ocean Logo White')}
                                >
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
                            <a
                                download
                                href={mediakitDownload}
                                onClick={() => GaEvent('Mediakit')}
                            >
                                <Button>{art.mediakit.button}</Button>
                            </a>
                        </Paragraph>
                        <Paragraph
                            dangerouslySetInnerHTML={{
                                __html: art.mediakit.text
                            }}
                        />
                    </Cell>
                </Grid>
            </StyledFirstContentRow>

            <ContentRow>
                <SectionTitle>{art.banner.title}</SectionTitle>
                <SectionSubTitle>{art.banner.description}</SectionSubTitle>

                <Banners>
                    <a
                        download
                        href={OceanBanner01}
                        onClick={() => GaEvent('Ocean Banner 01')}
                    >
                        <LazyLoad once height={337} offset={100}>
                            <img
                                alt="Ocean Protocol banner 1"
                                src={OceanBanner01}
                            />
                        </LazyLoad>
                        PNG
                    </a>

                    <a
                        download
                        href={OceanBanner02}
                        onClick={() => GaEvent('Ocean Banner 02')}
                    >
                        <LazyLoad once height={337} offset={100}>
                            <img
                                alt="Ocean Protocol banner 2"
                                src={OceanBanner02}
                            />
                        </LazyLoad>
                        PNG
                    </a>

                    <a
                        download
                        href={OceanBanner03}
                        onClick={() => GaEvent('Ocean Banner 03')}
                    >
                        <LazyLoad once height={337} offset={100}>
                            <img
                                alt="Ocean Protocol banner 3"
                                src={OceanBanner03}
                            />
                        </LazyLoad>
                        PNG
                    </a>

                    <a
                        download
                        href={OceanBanner04}
                        onClick={() => GaEvent('Ocean Banner 04')}
                    >
                        <LazyLoad once height={337} offset={100}>
                            <img
                                alt="Ocean Protocol banner 4"
                                src={OceanBanner04}
                            />
                        </LazyLoad>
                        PNG
                    </a>
                </Banners>
            </ContentRow>

            <ContentRow>
                <SectionTitle>{art.jellyfish.title}</SectionTitle>
                <SectionSubTitle>{art.jellyfish.description}</SectionSubTitle>

                <KeyVisuals>
                    <KeyVisual>
                        <div>
                            <LazyLoad once height={370} offset={100}>
                                <img
                                    alt="Ocean Protocol Jeyllfish Full"
                                    src={OceanJeyllyfishFull}
                                />
                            </LazyLoad>
                        </div>
                        <a
                            download
                            href={OceanJeyllyfishFull}
                            onClick={() => GaEvent('Jellyfish Full')}
                        >
                            SVG
                        </a>
                        {' • '}
                        <a
                            download
                            href={OceanJeyllyfishFullPNG}
                            onClick={() => GaEvent('Jellyfish Full')}
                        >
                            PNG
                        </a>
                    </KeyVisual>
                    <KeyVisual>
                        <div>
                            <LazyLoad once height={370} offset={100}>
                                <img
                                    alt="Ocean Protocol Jeyllfish Grid"
                                    src={OceanJeyllyfishGrid}
                                />
                            </LazyLoad>
                        </div>
                        <a
                            download
                            href={OceanJeyllyfishGrid}
                            onClick={() => GaEvent('Jellyfish Grid')}
                        >
                            SVG
                        </a>
                        {' • '}
                        <a
                            download
                            href={OceanJeyllyfishGridPNG}
                            onClick={() => GaEvent('Jellyfish Grid')}
                        >
                            PNG
                        </a>
                    </KeyVisual>
                </KeyVisuals>
            </ContentRow>

            <ContentRow>
                <StyledCollapsible>
                    <Collapsible
                        easing="ease-out"
                        transitionTime={200}
                        trigger="Full Living Style Guide"
                    >
                        <Styleguide />
                    </Collapsible>
                </StyledCollapsible>
            </ContentRow>
        </Section>
    </Fragment>
)

Art.propTypes = {
    location: PropTypes.object.isRequired
}

export default Art
