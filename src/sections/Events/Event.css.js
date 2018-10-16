import styled from 'styled-components'
import { colors, fonts } from '../../styles'

export const StyledEvent = styled.a`
    padding: 2rem 1rem;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background: rgba(${colors.darkGrey}, .8);
    border: .08rem solid rgb(${colors.pink});
    border-radius: .1rem;
    box-shadow: 0 9px 18px 0 rgba(${colors.black}, .3);
    margin: 1rem;
    height: 100%;
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
    margin: 0;
`

export const StyledEventDate = styled.h5`
    color: rgb(${colors.white});
    font-size: ${fonts.size.base};
    margin: 0;
    opacity: .8;
    width: 100%;
    align-self: flex-end;
`
