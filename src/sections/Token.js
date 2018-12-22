import React from 'react'
import Section from '../components/Section'

import Cell from '../components/Cell'
import SectionHeader from '../components/SectionHeader'
import ContentRow from '../components/ContentRow'
import SubTitle from '../components/SubTitle'
import { Ul, Li } from '../components/Lists'
import { ReactComponent as CoinList } from '../assets/logos/coinlist.svg'
import { ReactComponent as Fractal } from '../assets/logos/fractal.svg'
import { colors } from '../styles'
import {
    ContributionPlatforms,
    ContributionPlatform,
    PlatformIntro,
    PlatformButton,
    TokenInfo,
    Divider
} from './Token.css'
import Paragraph from '../components/Paragraph'

const content = {
    title: 'Ocean Token Distribution',
    description:
        'Get on the whitelist for the Ocean Token distribution during the network launch on … March 2019. The KYC process is open until … 2019.',
    platforms: [
        {
            name: 'CoinList',
            intro: 'Use <strong>CoinList</strong> if you:',
            list: [
                'are registering for the first time',
                'have an existing CoinList or AngelList account',
                'have participated in Filecoin, Blockstack, Origin or any other project run by CoinList',
                'are a US accredited investor'
            ],
            link: 'https://coinlist.co/oceanprotocol'
        },
        {
            name: 'Fractal',
            intro: 'Use <strong>Fractal</strong> if you:',
            list: [
                'participated in the Ocean Protocol Seed or Pre-Launch phase in March 2018',
                'prefer your data to be stored exclusively in the EU under GDPR'
            ],
            link: 'https://fractal.oceanprotocol.com'
        }
    ]
}

const Kyc = () => (
    <Section
        background={colors.darkPurple}
        fontColor={colors.lightGrey}
        id="token"
    >
        <SectionHeader
            title={content.title}
            description={content.description}
            white
            line
        />

        <ContentRow>
            <SubTitle left white>
                Register
            </SubTitle>

            <ContributionPlatforms>
                {content.platforms.map((platform, index) => (
                    <ContributionPlatform key={index} href={platform.link}>
                        {platform.name === 'CoinList' ? (
                            <CoinList />
                        ) : (
                            <Fractal />
                        )}

                        <PlatformIntro
                            dangerouslySetInnerHTML={{ __html: platform.intro }}
                        />

                        <Ul>
                            {platform.list.map((item, index) => (
                                <Li key={index}>{item}</Li>
                            ))}
                        </Ul>

                        <PlatformButton>Go to {platform.name}</PlatformButton>
                    </ContributionPlatform>
                ))}
            </ContributionPlatforms>

            <Divider />

            <TokenInfo>
                <Cell width={1 / 3}>
                    <SubTitle white>The Ocean Token</SubTitle>
                </Cell>
                <Cell width={2 / 3}>
                    <Paragraph
                        style={{
                            color: `rgb(${colors.white})`
                        }}
                    >
                        The Ocean Token is a native utility token used as the
                        means of value exchange, to power the protocol and
                        incentivize the keeper nodes of the network. The Ocean
                        Token is inseparable from the Ocean Protocol and Ocean
                        Protocol network.
                    </Paragraph>

                    <ul>
                        <li>
                            Token key metrics: number of total tokens, capped
                            at.../uncapped, minimum individual amount, maximum
                            individual amount, token price
                        </li>
                    </ul>
                </Cell>
            </TokenInfo>
        </ContentRow>
    </Section>
)

export default Kyc
