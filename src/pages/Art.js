/* global ga */

import React from 'react'
import PropTypes from 'prop-types'
import Collapsible from 'react-collapsible'
import LazyLoad from 'react-lazyload'
import Page from '../templates/Page'
import Button from '../components/Button'
import Section from '../components/Section'
import ContentRow from '../components/ContentRow'
import Grid from '../components/Grid'
import Cell from '../components/Cell'
import Paragraph from '../components/Paragraph'
import Styleguide from '../components/Styleguide'
import { social } from '../constants'
import content from '../data/pages/art.json'
import {
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
import { colors } from '../styles'

// grab all assets from art package
import OceanLogo from '@oceanprotocol/art/logo/logo.svg'
import OceanLogoWhite from '@oceanprotocol/art/logo/logo-white.svg'
import OceanLogoPNG from '@oceanprotocol/art/logo/logo.png'
import OceanLogoWhitePNG from '@oceanprotocol/art/logo/logo-white.png'
import OceanBanner01 from '@oceanprotocol/art/banner/banner-ocean-01@2x.png'
import OceanBanner02 from '@oceanprotocol/art/banner/banner-ocean-02@2x.png'
import OceanBanner03 from '@oceanprotocol/art/banner/banner-ocean-03@2x.png'
import OceanBanner04 from '@oceanprotocol/art/banner/banner-ocean-04@2x.png'
import OceanBanner05 from '@oceanprotocol/art/banner/banner-ocean-05@2x.png'
import OceanBanner06 from '@oceanprotocol/art/banner/banner-ocean-06@2x.png'
import OceanJeyllyfishGrid from '@oceanprotocol/art/jellyfish/jellyfish-grid.svg'
import OceanJeyllyfishGridPNG from '@oceanprotocol/art/jellyfish/jellyfish-grid@2x.png'
import OceanJeyllyfishFull from '@oceanprotocol/art/jellyfish/jellyfish-full.svg'
import OceanJeyllyfishFullPNG from '@oceanprotocol/art/jellyfish/jellyfish-full@2x.png'
import OceanMantarayGrid from '@oceanprotocol/art/mantaray/mantaray-grid.svg'
import OceanMantarayGridPNG from '@oceanprotocol/art/mantaray/mantaray-grid@2x.png'
import OceanMantarayFull from '@oceanprotocol/art/mantaray/mantaray-full.svg'
import OceanMantarayFullPNG from '@oceanprotocol/art/mantaray/mantaray-full@2x.png'
import OceanSquidGrid from '@oceanprotocol/art/squid/squid-grid.svg'
import OceanSquidGridPNG from '@oceanprotocol/art/squid/squid-grid@2x.png'
import OceanSquidFull from '@oceanprotocol/art/squid/squid-full.svg'
import OceanSquidFullPNG from '@oceanprotocol/art/squid/squid-full@2x.png'
const mediakitDownload = `${social.github}/art/archive/master.zip`

function GaEvent(artasset) {
    if (window.ga) {
        ga('send', 'event', 'artdownload', artasset, 'link')
    }
}

const Art = ({ location }) => (
    <Page
        title={content.title}
        description={content.description}
        text={content.text}
        location={location}
        headerBackgroundColor={colors.darkPurple}
        headerBackgroundImage={OceanMantarayFull}
        headerStyle={{
            backgroundPosition: '-20vw 5vh',
            backgroundSize: '60vw'
        }}
    >
        <Section>
            <StyledFirstContentRow>
                <Grid>
                    <Cell smallGutter width={1 / 2}>
                        <SectionTitle>{content.logo.title}</SectionTitle>
                        <SectionSubTitle>
                            {content.logo.description}
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
                        <SectionTitle>{content.mediakit.title}</SectionTitle>
                        <SectionSubTitle>
                            {content.mediakit.description}
                        </SectionSubTitle>

                        <Paragraph>
                            <a
                                download
                                href={mediakitDownload}
                                onClick={() => GaEvent('Mediakit')}
                            >
                                <Button>{content.mediakit.button}</Button>
                            </a>
                        </Paragraph>
                        <Paragraph
                            dangerouslySetInnerHTML={{
                                __html: content.mediakit.text
                            }}
                        />
                    </Cell>
                </Grid>
            </StyledFirstContentRow>

            <ContentRow>
                <SectionTitle>{content.banner.title}</SectionTitle>
                <SectionSubTitle>{content.banner.description}</SectionSubTitle>

                <Banners>
                    <a
                        download
                        href={OceanBanner01}
                        onClick={() => GaEvent('Ocean Banner 01')}
                    >
                        <LazyLoad once height={337} offset={200}>
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
                        <LazyLoad once height={337} offset={200}>
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
                        <LazyLoad once height={337} offset={200}>
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
                        <LazyLoad once height={337} offset={200}>
                            <img
                                alt="Ocean Protocol banner 4"
                                src={OceanBanner04}
                            />
                        </LazyLoad>
                        PNG
                    </a>

                    <a
                        download
                        href={OceanBanner05}
                        onClick={() => GaEvent('Ocean Banner 05')}
                    >
                        <LazyLoad once height={337} offset={200}>
                            <img
                                alt="Ocean Protocol banner 5"
                                src={OceanBanner05}
                            />
                        </LazyLoad>
                        PNG
                    </a>

                    <a
                        download
                        href={OceanBanner06}
                        onClick={() => GaEvent('Ocean Banner 06')}
                    >
                        <LazyLoad once height={337} offset={200}>
                            <img
                                alt="Ocean Protocol banner 6"
                                src={OceanBanner06}
                            />
                        </LazyLoad>
                        PNG
                    </a>
                </Banners>
            </ContentRow>

            <ContentRow>
                <SectionTitle>{content.jellyfish.title}</SectionTitle>
                <SectionSubTitle>
                    {content.jellyfish.description}
                </SectionSubTitle>

                <KeyVisuals>
                    <KeyVisual>
                        <div>
                            <LazyLoad once height={370} offset={200}>
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
                            <LazyLoad once height={370} offset={200}>
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
                <SectionTitle>{content.mantaray.title}</SectionTitle>
                <SectionSubTitle>
                    {content.mantaray.description}
                </SectionSubTitle>

                <KeyVisuals>
                    <KeyVisual>
                        <div>
                            <LazyLoad once height={370} offset={200}>
                                <img
                                    alt="Ocean Protocol Mantaray Full"
                                    src={OceanMantarayFull}
                                />
                            </LazyLoad>
                        </div>
                        <a
                            download
                            href={OceanMantarayFull}
                            onClick={() => GaEvent('Mantaray Full')}
                        >
                            SVG
                        </a>
                        {' • '}
                        <a
                            download
                            href={OceanMantarayFullPNG}
                            onClick={() => GaEvent('Mantaray Full')}
                        >
                            PNG
                        </a>
                    </KeyVisual>
                    <KeyVisual>
                        <div>
                            <LazyLoad once height={370} offset={200}>
                                <img
                                    alt="Ocean Protocol Mantaray Grid"
                                    src={OceanMantarayGrid}
                                />
                            </LazyLoad>
                        </div>
                        <a
                            download
                            href={OceanMantarayGrid}
                            onClick={() => GaEvent('Mantaray Grid')}
                        >
                            SVG
                        </a>
                        {' • '}
                        <a
                            download
                            href={OceanMantarayGridPNG}
                            onClick={() => GaEvent('Mantaray Grid')}
                        >
                            PNG
                        </a>
                    </KeyVisual>
                </KeyVisuals>
            </ContentRow>

            <ContentRow>
                <SectionTitle>{content.squid.title}</SectionTitle>
                <SectionSubTitle>{content.squid.description}</SectionSubTitle>

                <KeyVisuals>
                    <KeyVisual>
                        <div>
                            <LazyLoad once height={370} offset={200}>
                                <img
                                    alt="Ocean Protocol Squid Full"
                                    src={OceanSquidFull}
                                />
                            </LazyLoad>
                        </div>
                        <a
                            download
                            href={OceanSquidFull}
                            onClick={() => GaEvent('Squid Full')}
                        >
                            SVG
                        </a>
                        {' • '}
                        <a
                            download
                            href={OceanSquidFullPNG}
                            onClick={() => GaEvent('Squid Full')}
                        >
                            PNG
                        </a>
                    </KeyVisual>
                    <KeyVisual>
                        <div>
                            <LazyLoad once height={370} offset={200}>
                                <img
                                    alt="Ocean Protocol Squid Grid"
                                    src={OceanSquidGrid}
                                />
                            </LazyLoad>
                        </div>
                        <a
                            download
                            href={OceanSquidGrid}
                            onClick={() => GaEvent('Squid Grid')}
                        >
                            SVG
                        </a>
                        {' • '}
                        <a
                            download
                            href={OceanSquidGridPNG}
                            onClick={() => GaEvent('Squid Grid')}
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
    </Page>
)

Art.propTypes = {
    location: PropTypes.object.isRequired
}

export default Art
