import React from 'react'
import PropTypes from 'prop-types'
import Page from '../templates/Page'
import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
import FaqItem from '../components/FaqItem'
import ContentRow from '../components/ContentRow'
import Cell from '../components/Cell'
import Grid from '../components/Grid'
import faq from '../data/faq'
import {
    StyledSubTitle,
    StyledFaqRow,
    StyledQaA,
    StyledSection
} from './Faq.css'

export const title = 'FAQ'
export const description = 'Frequently asked questions about Ocean Protocol'

const Faq = ({ location }) => (
    <Page title={title} description={description} location={location} noheader>
        <StyledSection>
            <ContentRow>
                <Cell maxWidth="small" width={1}>
                    <Title>{title}</Title>
                    <SubTitle center>{description}</SubTitle>
                </Cell>
            </ContentRow>

            <ContentRow>
                {faq.map(question => (
                    <StyledFaqRow key={question.title}>
                        <StyledSubTitle>{question.title}</StyledSubTitle>
                        <Grid>
                            <Cell width={1 / 2}>
                                {question.questions
                                    .filter((item, index) => index % 2 === 0)
                                    .map(questions => (
                                        <StyledQaA key={questions.question}>
                                            <FaqItem
                                                answer={questions.answer}
                                                question={questions.question}
                                            />
                                        </StyledQaA>
                                    ))}
                            </Cell>
                            <Cell width={1 / 2}>
                                {question.questions
                                    .filter((item, index) => index % 2 === 1)
                                    .map(questions => (
                                        <StyledQaA key={questions.question}>
                                            <FaqItem
                                                answer={questions.answer}
                                                question={questions.question}
                                            />
                                        </StyledQaA>
                                    ))}
                            </Cell>
                        </Grid>
                    </StyledFaqRow>
                ))}
            </ContentRow>
        </StyledSection>
    </Page>
)

Faq.propTypes = {
    location: PropTypes.object
}

export default Faq
