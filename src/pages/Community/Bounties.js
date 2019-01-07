import React, { PureComponent } from 'react'
import Cell from '../../components/Cell'
import Grid from '../../components/Grid'
import SubTitle from '../../components/SubTitle'
import Paragraph from '../../components/Paragraph'
import Section from '../../components/Section'
import SectionHeader from '../../components/SectionHeader'
import { colors } from '../../styles'
import { StyledContent, StyledBountiesActions } from './Bounties.css'

export default class Bounties extends PureComponent {
    render() {
        return (
            <Section id="bounties" background={colors.black}>
                <SectionHeader
                    white
                    title={'Be a part of building Ocean'}
                    description={
                        'Contribute your expertise in one of our bounties to shape our software stack and be rewarded with Ocean Tokens.'
                    }
                />

                <StyledContent>
                    <Grid>
                        <Cell width={2 / 4}>
                            <SubTitle left white>
                                Current Bounties
                            </SubTitle>
                            <Paragraph white>
                                Our goal is to keep growing, and engaging our
                                open source dev community through bounties on
                                Gitcoin. Non-technical bounties can be found on
                                bounty.network.
                            </Paragraph>
                            <StyledBountiesActions />
                            <a href="https://docs.oceanprotocol.com/concepts/bounties/">
                                Learn more about our Bounty Program
                            </a>
                        </Cell>
                        <Cell width={2 / 4}>
                            <SubTitle left white>
                                Open Waters Bounties
                            </SubTitle>
                            <Paragraph white>
                                Ocean Protocol’s fully adaptable, 100%
                                open-ended, choose-your-own-adventure bounty.
                                Suggest a bounty to identify problems that the
                                core team may not know exist and help us make
                                Ocean that much better.
                            </Paragraph>
                            <span>Suggest a new bounty</span>
                        </Cell>
                    </Grid>
                </StyledContent>
            </Section>
        )
    }
}
