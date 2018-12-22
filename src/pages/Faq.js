import React from 'react'
import PropTypes from 'prop-types'
import Page from '../templates/Page'
import FaqItem from '../components/FaqItem'
import ContentRow from '../components/ContentRow'
import Cell from '../components/Cell'
import Grid from '../components/Grid'
import content from '../data/pages/faq'
import {
    StyledSubTitle,
    StyledFaqRow,
    StyledQaA,
    StyledSection
} from './Faq.css'

const Faq = ({ location }) => (
    <Page
        title={content.title}
        description={content.description}
        location={location}
    >
        <StyledSection>
            <ContentRow>
                {content.items.map(question => (
                    <StyledFaqRow key={question.title}>
                        <StyledSubTitle left>{question.title}</StyledSubTitle>
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
