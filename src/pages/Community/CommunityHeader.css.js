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
    justify-content: space-between;
    padding-top: 2rem;
    font-family: ${fonts.family.button};
    color: rgb(${colors.lightGrey});

    li {
        text-align: center;
        flex: 0 0 20%;
        font-size: ${fonts.size.small};

        span {
            white-space: nowrap;
        }
    }
`

export const CommunityNumber = styled.div`
    font-size: ${fonts.size.h3};
    color: rgb(${colors.lightGrey});
`
