import styled from 'styled-components'
import Button from '../../components/Button'
import { colors, fonts, responsive, layout } from '../../styles'
import { animation } from '../../components/Header.css'

export const StyledHeaderAddition = styled.div`
    text-align: left;

    ul {
        list-style: none;
        margin: 0;
        padding-left: 0;
    }
`

export const Engage = styled.ul`
    width: 100%;
    text-align: center;

    @media (${responsive.md.min}) {
        text-align: left;
    }

    li {
        display: block;
        margin-bottom: calc(${layout.spacer} / 2);
        animation: ${animation} 1.25s backwards;

        @media (${responsive.sm.min}) {
            display: inline-block;
            margin-left: calc(${layout.spacer} / 4);
            margin-right: calc(${layout.spacer} / 4);
        }

        &:nth-child(1) {
            margin-left: 0;
            animation-delay: 0.2s;
        }

        &:nth-child(2) {
            animation-delay: 0.3s;
        }

        &:nth-child(3) {
            animation-delay: 0.4s;
        }
    }
`

export const EngageButton = styled(Button)`
    z-index: 2;
    padding-left: 0.75rem;
    padding-right: 0.75rem;

    svg {
        width: ${fonts.size.mini};
        height: ${fonts.size.mini};
        fill: rgb(${colors.lightGrey});
        margin-bottom: -0.1rem;

        &:first-child {
            margin-right: 0.5rem;
        }

        &:last-child {
            margin-left: 0.5rem;
        }
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
        border-radius: 0.2rem;

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
