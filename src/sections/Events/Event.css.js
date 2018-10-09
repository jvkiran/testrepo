import styled from 'styled-components'
import { colors, fonts, responsive } from '../../styles'

export const StyledEvent = styled.a`
    padding: 2rem 1rem;
    text-align: center;
    display: block;
    width: 100%;
    background: rgba(${colors.darkGrey}, .8);
    border: .08rem solid rgb(${colors.pink});
    border-radius: .1rem;
    margin-bottom: 1rem;
    box-shadow: 0 9px 18px 0 rgba(${colors.black}, .3);

    &:hover,
    &:focus {
        box-shadow: 0 12px 30px 0 rgba(${colors.black}, .3);
    }

    &:active {
        box-shadow: 0 9px 18px 0 rgba(${colors.black}, .3);
    }

    @media screen and (${responsive.sm.min}) {
        width: auto;
        flex: 0 1 calc(50% - 2rem);
        margin: 1rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    @media screen and (${responsive.lg.min}) {
        flex: 0 1 calc(25% - 2rem);
    }
`

export const StyledEventCity = styled.h4`
    margin-top: 0;
    margin-bottom: .5rem;
    color: rgb(${colors.white});
    width: 100%;
    align-self: flex-start;
`

export const StyledEventName = styled.p`
    display: block;
    color: rgb(${colors.lightGrey});
    width: 100%;
`

export const StyledEventDate = styled.h5`
    color: rgb(${colors.white});
    font-size: ${fonts.size.base};
    margin: 0;
    opacity: .8;
    width: 100%;
    align-self: flex-end;
`
