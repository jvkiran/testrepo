import React from 'react'
import styled from 'styled-components'
import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
import Collapsible from '../components/Collapsible'
import Section from '../components/Section'
import ContentRow from '../components/ContentRow'
import Cell from '../components/Cell'
import Grid from '../components/Grid'
import faq from '../data/faq'

const StyledSubTitle = styled(SubTitle)`
    flex: 0 0 100%;
`

const StyledFaqRow = styled.div`
    margin-top: 20px;
    display: flex;
    flex-flow: wrap;

    &:first-child {
        margin-top: 0;
    }

    &:after {
        clear: both;
    }
`

const StyledQaA = styled.div`
    width: calc(100% - 2rem);
`

const Faq = () => (
    <Section id="faq">
        <ContentRow>
            <Cell maxWidth="small" width={1}>
                <Title>FAQ</Title>
            </Cell>
        </ContentRow>

        <ContentRow>
            {faq.map((question) => (
                <StyledFaqRow key={question.title}>
                    <StyledSubTitle>{question.title}</StyledSubTitle>
                    <Grid>
                        <Cell width={1 / 2}>
                            {question.questions.filter((item, index) => index % 2 === 0).map((questions) => (
                                <StyledQaA key={questions.question}>
                                    <Collapsible
                                        answer={questions.answer}
                                        question={questions.question} />
                                </StyledQaA>
                            ))}
                        </Cell>
                        <Cell width={1 / 2}>
                            {question.questions.filter((item, index) => index % 2 === 1).map((questions) => (
                                <StyledQaA key={questions.question}>
                                    <Collapsible
                                        answer={questions.answer}
                                        question={questions.question} />
                                </StyledQaA>
                            ))}
                        </Cell>
                    </Grid>
                </StyledFaqRow>
            ))}
        </ContentRow>
    </Section>
)


export default Faq
