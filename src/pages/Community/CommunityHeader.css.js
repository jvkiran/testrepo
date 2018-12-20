import styled from 'styled-components'
import { colors, fonts, responsive, layout } from '../../styles'
import { animation } from '../../components/Header.css'

export const StyledHeaderAddition = styled.div`
    text-align: left;
    padding-top: 2rem;

    ul {
        list-style: none;
        margin: 0;
        padding-left: 0;
    }
`

export const Engage = styled.ul`
    animation: ${animation} 1.25s backwards;
    width: 100%;

    li {
        display: inline-block;
        margin-left: ${layout.spacer};

        &:first-child {
            margin-left: 0;
        }
    }
`

export const EngageButton = styled.a`
    font-family: ${fonts.family.button};
    border-radius: 0.2rem;
    text-align: center;
    padding: 0.5rem 1rem;
    background: rgba(${colors.white}, 0.8);
    border: 0.1rem solid rgb(${colors.pink});
    font-size: ${fonts.size.small};
    color: rgb(${colors.pink});
    z-index: 2;
    box-shadow: 0 8px 18px 0 rgba(0, 0, 0, 0.08);

    &:hover,
    &:focus {
        background: rgba(${colors.black}, 0.95);
        color: rgb(${colors.white});
        border-color: rgb(${colors.black});
    }
`

export const VividCommunity = styled.ul`
    padding-top: calc(${layout.spacer} * 4);
    font-family: ${fonts.family.button};
    color: rgb(${colors.lightGrey});
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    li {
        padding: 0 calc(${layout.spacer} / 4);
        text-align: center;
        font-size: ${fonts.size.small};
        flex: 1 1 50%;
        margin-bottom: ${layout.spacer};

        @media (${responsive.sm.min}) {
            flex: 1 1 20%;
            margin-bottom: 0;
        }
    }

    a {
        color: rgb(${colors.lightGrey});
        display: block;
        padding: 0.5rem 1rem;
        border: 0.1rem solid transparent;

        &:hover,
        &:focus {
            background: rgba(${colors.white}, 0.8);
            border: 0.1rem solid rgb(${colors.pink});
        }
    }
`

export const CommunityNumber = styled.div`
    font-size: ${fonts.size.h4};
    color: rgb(${colors.black});

    svg {
        width: ${fonts.size.large};
        height: ${fonts.size.large};
        margin-right: calc(${layout.spacer} / 4);
    }
`
