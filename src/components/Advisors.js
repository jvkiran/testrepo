import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import LazyLoad from 'react-lazyload'
import buttonLinkedIn from '../assets/buttons/linkedin.svg'
import buttonTwitter from '../assets/buttons/twitter.svg'
import advisorsImg from '../assets/advisors'
import advisors from '../data/advisors'
import { colors, fonts, responsive } from '../styles'

const StyledAdvisors = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-left: -2rem;
`

const StyledAdvisor = styled.div`
    position: relative;
    margin-left: 2rem;
    margin-bottom: 2rem;
    width: calc(100% / 2 - 3rem);

    @media screen and (${responsive.md.min}) {
        width: calc(100% / 4 - 3rem);
    }

    & > img {
        margin: 0;
        border-radius: 50%;
        max-width: 100%;
        height: auto;
        filter: grayscale(100%);
    }
`

const StyledName = styled.h3`
    font-size: ${fonts.size.base};
    color: rgb(${colors.white});
    text-align: center;
    margin-top: .75rem;
    margin-bottom: .35rem;
`

const StyledPosition = styled(StyledName)`
    color: rgb(${colors.lightGrey});
    margin-top: 0;
`

const StyledLinks = styled.div`
    text-align: center;

    &:empty {
        display: none;
    }
`

const StyledIcon = styled.a`
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 2px;
    display: inline-block;
    margin-left: .25rem;
    margin-right: .25rem;
    opacity: .5;

    &:hover,
    &:focus {
        opacity: 1;
    }

    & img {
        width: 100%;
        height: 100%;
    }
`

const Advisor = ({ advisor }) => (
    <StyledAdvisor>
        <LazyLoad once height={110} offset={100}>
            <img alt={advisor.name} src={advisorsImg[advisor.image]} />
        </LazyLoad>
        <StyledName>{advisor.name}</StyledName>
        <StyledPosition>{advisor.position}</StyledPosition>
        <StyledLinks>
            {!!advisor.linkedin && (
                <StyledIcon
                    href={`https://www.linkedin.com/in/${advisor.linkedin}`}
                    rel="noopener noreferrer"
                    target="_blank">
                    <img alt="linkedin" src={buttonLinkedIn} />
                </StyledIcon>
            )}
            {!!advisor.twitter && (
                <StyledIcon
                    href={`https://www.twitter.com/${advisor.twitter}`}
                    rel="noopener noreferrer"
                    target="_blank">
                    <img alt="twitter" src={buttonTwitter} />
                </StyledIcon>
            )}
        </StyledLinks>
    </StyledAdvisor>
)

Advisor.propTypes = {
    advisor: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
}

const Advisors = () => (
    <StyledAdvisors>
        {advisors.map((advisor) => (
            <Advisor advisor={advisor} key={advisor.name} />
        ))}
    </StyledAdvisors>
)

export default Advisors
