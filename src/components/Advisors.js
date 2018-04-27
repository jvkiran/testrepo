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
`

const Photo = styled.figure`
    margin: 0;
    border: .1rem solid rgb(${colors.pink});

    &,
    img {
        border-radius: 50%;
        display: block;
    }

    img {
        margin: 0;
        max-width: 100%;
        height: auto;
        filter: grayscale(100%);
    }
`

const Quote = styled.p`
    margin: 0;
    font-size: ${fonts.size.small};
    color: rgb(${colors.white});
    position: absolute;
    top: 50%;
    left: -1rem;
    right: -1rem;
    z-index: 2;
    background: rgb(${colors.darkGrey});
    border: .1rem solid rgb(${colors.pink});
    border-radius: 2px;
    padding: .75rem 1rem;
    box-shadow: 0 9px 18px 0 rgba(${colors.black}, .2);
    opacity: 0;
    transform: translate(0,-50%) scale(0);
    transform-origin: center;
    transition: .2s ease-out;

    @media (${responsive.sm.min}) {
        font-size: ${fonts.size.base};
    }

    @media (${responsive.md.min}) {
        font-size: ${fonts.size.small};
    }

    &:empty {
        display: none;
    }
`

const QuoteWrap = styled.div`
    position: relative;

    &:hover,
    &:focus {
        ${Quote} {
            opacity: 1;
            transform: translate(0,-50%) scale(1);
        }
    }
`

const Name = styled.h3`
    font-size: ${fonts.size.base};
    color: rgb(${colors.white});
    text-align: center;
    margin-top: .75rem;
    margin-bottom: .35rem;
`

const Position = styled(Name)`
    color: rgb(${colors.lightGrey});
    margin-top: 0;
`

const Links = styled.div`
    text-align: center;

    &:empty {
        display: none;
    }
`

const Icon = styled.a`
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
        <QuoteWrap>
            <LazyLoad once height={188} offset={100}>
                <Photo>
                    <img alt={advisor.name} src={advisorsImg[advisor.image]} />
                </Photo>
            </LazyLoad>
            <Quote>
                {!!advisor.quote && (
                    advisor.quote
                )}
            </Quote>
        </QuoteWrap>

        <Name>{advisor.name}</Name>
        <Position>{advisor.position}</Position>
        <Links>
            {!!advisor.linkedin && (
                <Icon
                    href={`https://www.linkedin.com/in/${advisor.linkedin}`}
                    rel="noopener noreferrer"
                    target="_blank">
                    <img alt="linkedin" src={buttonLinkedIn} />
                </Icon>
            )}
            {!!advisor.twitter && (
                <Icon
                    href={`https://www.twitter.com/${advisor.twitter}`}
                    rel="noopener noreferrer"
                    target="_blank">
                    <img alt="twitter" src={buttonTwitter} />
                </Icon>
            )}
        </Links>
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
