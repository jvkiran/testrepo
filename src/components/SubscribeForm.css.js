import styled from 'styled-components'
import { colors, responsive, transitions, fonts } from '../styles'

export const StyledSubscribe = styled.div`
    position: relative;
    max-width: ${({ maxWidth }) => `${maxWidth}rem`};
    width: 100%;

    @media screen and (${responsive.md.max}) {
        margin: 0 auto;
    }

    & img {
        position: absolute;
        left: 1rem;
        top: calc(50% - .5rem);
        height: 1rem;
        opacity: .7;

        @media screen and (${responsive.md.max}) {
            top: 1rem;
        }
    }

    & form {
        position: relative;
    }

    & input {
        outline: none;
        font-size: ${fonts.size.base};
        padding: .75rem 1rem;
        margin: 1px;
        padding-left: 3rem;
        background: rgb(${colors.darkGrey});
        color: rgb(${colors.white});
        border: none;
        min-width: 15rem;
        width: 75%;
        border-radius: 2px;
        box-shadow: none;
        transition: ${transitions.short};

        @media screen and (${responsive.md.max}) {
            text-align: center;
            width: 100%;
            min-width: 0;
        }

        &::placeholder {
            color: rgba(${colors.white}, .65);
        }

        &:focus {
            &::placeholder {
                color: rgba(${colors.white}, .5);
            }
        }
    }

    & button {
        color: rgb(${colors.white});
        font-size: ${fonts.size.base};
        text-transform: uppercase;
        margin: 0;
        padding: .75rem 1rem;
        background: transparent;
        width: 35%;
        transition: ${transitions.short};
        cursor: pointer;

        @media screen and (${responsive.md.max}) {
            width: 100%;
        }

        &:active,
        &:hover,
        &:focus {
            background: transparent;
        }

        @media screen and (hover: hover) {
            &:hover,
            &:focus {
                opacity: .85;
            }
        }
    }
`

export const StyledSubscribeWrapper = styled.div`
    display: flex;
    border-radius: 2px;
    background: linear-gradient(to right, rgb(${colors.purple}), rgb(${colors.pink}));

    @media screen and (${responsive.md.max}) {
        flex-wrap: wrap;
    }
`

export const StyledMessage = styled.p`
    width: 100%;
    position: absolute;
    text-align: center;
    margin-top: .25rem;
    font-size: .8rem;
    background: rgba(${colors.lightGrey}, .95);
    color: rgb(${colors.white});
    border-radius: 2px;
    padding: .3rem;

    a {
        color: rgb(${colors.white});
        text-decoration: underline;
        font-family: ${fonts.family.button};
    }
`

export const Gdpr = styled.div`
    margin-top: 1rem;
    font-size: ${fonts.size.small};
    color: rgba(${colors.dimmedGrey}, .7);
`
