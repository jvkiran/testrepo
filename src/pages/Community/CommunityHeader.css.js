import styled from 'styled-components'
import { colors, fonts } from '../../styles'

export const StyledHeaderAddition = styled.div`
    text-align: left;
    padding-top: 2rem;

    ul {
        list-style: none;
        margin: 0;
        padding-left: 0;
    }
`

export const Engage = styled.ul``

export const VividCommunity = styled.ul`
    display: flex;
    padding-top: 2rem;
    font-family: ${fonts.family.button};
    color: rgb(${colors.lightGrey});

    li {
        text-align: center;
        flex: 1 1 20%;
    }
`

export const CommunityNumber = styled.div`
    font-size: ${fonts.size.h3};
    color: rgb(${colors.lightGrey});
`
