import React from 'react'
import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import ContentRow from '../components/ContentRow'
import { colors } from '../styles'

const content = {
    title: 'Ocean Token Distribution',
    description:
        'Get on the whitelist for the Ocean Token distribution during the network launch on … March 2019. The KYC process is open until … 2019.'
}

const Kyc = () => (
    <Section background={colors.darkPurple} fontColor={colors.lightGrey}>
        <SectionHeader
            title={content.title}
            description={content.description}
            white
            line
        />

        <ContentRow>
            <h3 style={{ color: '#fff' }}>Register</h3>
            <div>
                <div>
                    <p>
                        Use <strong>Coinlist</strong> if you:
                    </p>
                    <ul>
                        <li>never contributed to Ocean before</li>
                        <li>have an existing Coinlist account</li>
                        <li>US residency</li>
                    </ul>
                    <a href="https://coinlist.co">Go to Coinlist</a>
                </div>
                <div>
                    <p>
                        Use <strong>Fractal</strong> if you:
                    </p>
                    <ul>
                        <li>
                            registered and contributed during the Seed or
                            Pre-Launch phase
                        </li>
                        <li>prefer your data in Europe under GDPR</li>
                    </ul>
                    <a href="https://trustfractal.com">Go to Fractal</a>
                </div>
            </div>

            <h3 style={{ color: '#fff' }}>Ocean Token</h3>
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
