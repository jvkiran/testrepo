import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Paragraph from '../components/Paragraph'
import ContentRow from '../components/ContentRow'
import { StyledHeader, StyledTitle, StyledSubTitle } from './Header.css'

export default class Header extends PureComponent {
    static propTypes = {
        backgroundColor: PropTypes.string,
        backgroundImage: PropTypes.string,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        text: PropTypes.string,
        style: PropTypes.object,
        light: PropTypes.bool
    }

    render() {
        const {
            backgroundColor,
            backgroundImage,
            title,
            description,
            text,
            light,
            style
        } = this.props
        return (
            <StyledHeader
                backgroundColor={backgroundColor}
                backgroundImage={backgroundImage}
                style={style}
            >
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
