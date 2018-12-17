import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Paragraph from '../components/Paragraph'
import ContentRow from '../components/ContentRow'
import { StyledHeader, StyledTitle, StyledSubTitle } from './Header.css'

export default class Header extends PureComponent {
    static propTypes = {
        background: PropTypes.string,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        text: PropTypes.string,
        light: PropTypes.bool
    }

    render() {
        const { background, title, description, text, light } = this.props
        return (
            <StyledHeader background={background}>
                <ContentRow narrow>
                    <StyledTitle white={!light}>{title}</StyledTitle>
                    <StyledSubTitle center>{description}</StyledSubTitle>
                    {text && (
                        <Paragraph
                            center
                            dangerouslySetInnerHTML={{ __html: text }}
                        />
                    )}
                </ContentRow>
            </StyledHeader>
        )
    }
}
