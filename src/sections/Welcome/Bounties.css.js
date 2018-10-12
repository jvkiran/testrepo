import styled from 'styled-components'
import { colors, fonts, responsive } from '../../styles'

export const StyledBounties = styled.aside`
    margin-top: 1rem;
    text-align: center;
    min-height: 33px;

    @media screen and (${responsive.md.min}) {
        text-align: left;
    }

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
    padding: .5rem 0;
    background: rgba(${colors.black}, .95);
    font-size: ${fonts.size.small};
    font-family: ${fonts.family.button};
    font-weight: ${fonts.fontWeight.title};
    color: ${({ important }) => important ? `rgb(${colors.pink})` : `rgba(${colors.white}, .8)`};
`
