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
        description: PropTypes.string,
        text: PropTypes.string,
        style: PropTypes.object,
        light: PropTypes.bool,
        viewport: PropTypes.bool,
        children: PropTypes.any,
        additionalComponent: PropTypes.any,
        fullWidth: PropTypes.bool,
        left: PropTypes.bool
    }

    render() {
        const {
            backgroundColor,
            backgroundImage,
            title,
            description,
            text,
            light,
            style,
            viewport,
            children,
            additionalComponent,
            fullWidth,
            left
        } = this.props
        return (
            <StyledHeader
                backgroundColor={backgroundColor}
                backgroundImage={backgroundImage}
                style={style}
                viewport={viewport}
                light={light}
            >
                <ContentRow narrow={!fullWidth} style={{ zIndex: 5 }}>
                    <StyledTitle left={left} white={!light}>
                        {title}
                    </StyledTitle>
                    <StyledSubTitle left={left} white={!light}>
                        {description}
                    </StyledSubTitle>
                    {text && (
                        <Paragraph
                            center
                            dangerouslySetInnerHTML={{ __html: text }}
                        />
                    )}
                    {additionalComponent && additionalComponent}
                    {children}
                </ContentRow>
            </StyledHeader>
        )
    }
}
