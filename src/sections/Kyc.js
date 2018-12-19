import React from 'react'
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import ContentRow from '../components/ContentRow'
import SubTitle from '../components/SubTitle'
import { ReactComponent as Coinlist } from '../assets/logos/coinlist.svg'
import { ReactComponent as Fractal } from '../assets/logos/fractal.svg'
import { colors } from '../styles'
import {
    ContributionPlatforms,
    ContributionPlatform,
    PlatformButton,
    Actions
} from './Kyc.css'

const content = {
    title: 'Ocean Token Distribution',
    description:
        'Get on the whitelist for the Ocean Token distribution during the network launch on … March 2019. The KYC process is open until … 2019.',
    platforms: [
        {
            name: 'Coinlist',
            intro: 'Use <strong>Coinlist</strong> if you:',
            list: [
                'are registering for the first time',
                'have an existing Coinlist or Angellist account',
                'have participated in Filecoin, Blockstack, Origin or any other project run by Coinlist',
                'are a US accredited investor'
            ],
            link: 'https://coinlist.co'
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
            <SubTitle white>Register</SubTitle>

            <ContributionPlatforms>
                {content.platforms.map((platform, index) => (
                    <ContributionPlatform key={index} href={platform.link}>
                        {platform.name === 'Coinlist' ? (
                            <Coinlist />
                        ) : (
                            <Fractal />
                        )}

                        <p
                            dangerouslySetInnerHTML={{ __html: platform.intro }}
                        />

                        <ul>
                            {platform.list.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>

                        <Actions>
                            <PlatformButton>
                                Go to {platform.name}
                            </PlatformButton>
                        </Actions>
                    </ContributionPlatform>
                ))}
            </ContributionPlatforms>

            <SubTitle white center>
                The Ocean Token
            </SubTitle>

            <ul>
                <li>
                    Token key metrics: number of total tokens, capped
                    at.../uncapped, minimum individual amount, maximum
                    individual amount, token price
                </li>
                <li>
                    Learn more about the utility token powering the Ocean
                    Protocol ecosystem: link to /token page.
                </li>
            </ul>
        </ContentRow>
    </Section>
)

export default Kyc
