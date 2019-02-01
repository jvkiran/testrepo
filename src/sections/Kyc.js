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
} from './Kyc.css'
import Paragraph from '../components/Paragraph'
import content from '../data/kyc.json'

const Kyc = () => (
    <Section
        background={colors.darkPurple}
        fontColor={colors.lightGrey}
        id="register"
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

                        {platform.list && (
                            <Ul>
                                {platform.list.map((item, index) => (
                                    <Li key={index}>{item}</Li>
                                ))}
                            </Ul>
                        )}

                        <PlatformButton primary>
                            Go to {platform.name}
                        </PlatformButton>
                    </ContributionPlatform>
                ))}
            </ContributionPlatforms>

            <Divider />

            <TokenInfo>
                <Cell width={1 / 3}>
                    <SubTitle white left>
                        {content.tokeninfo.title}
                    </SubTitle>
                </Cell>
                <Cell width={2 / 3}>
                    <Paragraph white>{content.tokeninfo.description}</Paragraph>

                    <Ul>
                        {content.tokeninfo.metrics.map((metric, index) => (
                            <Li
                                key={index}
                                dangerouslySetInnerHTML={{
                                    __html: metric
                                }}
                            />
                        ))}
                    </Ul>
                </Cell>
            </TokenInfo>
        </ContentRow>
    </Section>
)

export default Kyc
