import React from 'react'
import Section from '../../components/Section'
import Title from '../../components/Title'
import Grid from '../../components/Grid'
import ContentRow from '../../components/ContentRow'
import Cell from '../../components/Cell'
import { colors } from '../../styles'
import {
    StyledParagraph,
    StyledLine
} from './Contributors.css'

const Contributors = () => (
    <Section background={colors.black} fontColor={colors.white} id="contributors">
        <ContentRow>
            <Title white>Contributors</Title>
        </ContentRow>

        <ContentRow narrow>
            <StyledParagraph>
                Contributors Contributors Contributors Contributors Contributors Contributors Contributors Contributors Contributors Contributors Contributors Contributors Contributors Contributors Contributors Contributors Contributors Contributors Contributors Contributors Contributors Contributors Contributors Contributors Contributors Contributors Contributors Contributors Contributors Contributors
            </StyledParagraph>
        </ContentRow>

        <ContentRow wide>
            <StyledLine />
            <Grid>
                <Cell smallGutter width={1 / 6}>
                    hello
                </Cell>
                <Cell smallGutter width={1 / 6}>
                    hello
                </Cell>
                <Cell smallGutter width={1 / 6}>
                    hello
                </Cell>
                <Cell smallGutter width={1 / 6}>
                    hello
                </Cell>
                <Cell smallGutter width={1 / 6}>
                    hello
                </Cell>
                <Cell smallGutter width={1 / 6}>
                    hello
                </Cell>

                <Cell smallGutter width={1 / 6}>
                    hello
                </Cell>
                <Cell smallGutter width={1 / 6}>
                    hello
                </Cell>
                <Cell smallGutter width={1 / 6}>
                    hello
                </Cell>
                <Cell smallGutter width={1 / 6}>
                    hello
                </Cell>
                <Cell smallGutter width={1 / 6}>
                    hello
                </Cell>
                <Cell smallGutter width={1 / 6}>
                    hello
                </Cell>

                <Cell smallGutter width={1 / 6}>
                    hello
                </Cell>
                <Cell smallGutter width={1 / 6}>
                    hello
                </Cell>
                <Cell smallGutter width={1 / 6}>
                    hello
                </Cell>
                <Cell smallGutter width={1 / 6}>
                    hello
                </Cell>
                <Cell smallGutter width={1 / 6}>
                    hello
                </Cell>
                <Cell smallGutter width={1 / 6}>
                    hello
                </Cell>
            </Grid>
        </ContentRow>

    </Section>
)

export default Contributors
