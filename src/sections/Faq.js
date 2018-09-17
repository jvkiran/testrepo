import React from 'react'
import Title from '../components/Title'
import FaqItem from '../components/FaqItem'
import Section from '../components/Section'
import ContentRow from '../components/ContentRow'
import Cell from '../components/Cell'
import Grid from '../components/Grid'
import faq from '../data/faq'
import {
    StyledSubTitle,
    StyledFaqRow,
    StyledQaA
} from './Faq.css'

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
                                    <FaqItem
                                        answer={questions.answer}
                                        question={questions.question} />
                                </StyledQaA>
                            ))}
                        </Cell>
                        <Cell width={1 / 2}>
                            {question.questions.filter((item, index) => index % 2 === 1).map((questions) => (
                                <StyledQaA key={questions.question}>
                                    <FaqItem
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
