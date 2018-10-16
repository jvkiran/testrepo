import styled from 'styled-components'
import { colors, fonts } from '../../styles'

export const StyledBounties = styled.aside`
    min-height: 33px;

    svg {
        width: 1.3rem;
        height: 1.3rem;
        vertical-align: middle;
        margin-top: -.2rem;
        margin-right: .3rem;
    }
`

export const Bounty = styled.a`
    display: inline-block;
    padding: .5rem 1rem;
    background: rgba(${colors.black}, .95);
    font-size: ${fonts.size.mini};
    font-family: ${fonts.family.button};
    font-weight: ${fonts.fontWeight.title};
    color: ${({ important }) => important ? `rgb(${colors.pink})` : `rgba(${colors.white}, .8)`};
    margin-left: .5rem;

    &:first-child {
        margin-left: 0;
    }
`
