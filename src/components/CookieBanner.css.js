import styled from 'styled-components'
import { colors } from '../styles'

export const StyledCookieBanner = styled.div`
    position: fixed;
    bottom: 1rem;
    z-index: 10;
    color: rgb(${colors.darkGrey});
    background: rgba(${colors.white}, 0.7);
    backdrop-filter: saturate(150%) blur(10px);
    font-size: 0.7rem;
    padding: 0.5rem 1rem;
    text-align: center;
    max-width: 38rem;
    border-radius: 2px;

    @media (min-width: 38rem) {
        left: 50%;
        margin-left: -18rem;
        text-align: left;
        display: flex;
        justify-content: space-between;
        align-items: center;

        p {
            margin: 0;

            &:first-child {
                flex: 0 0 75%;
            }

            &:last-child {
                flex: 0 0 22%;
                text-align: right;
            }
        }

        button:last-child {
            padding-right: 0;
        }
    }

    button {
        cursor: pointer;
        border: 0;
        box-shadow: none;
        border-radius: 2px;
        padding: 0.5rem;
        transition: background 0.2s ease-out;

        &:first-child {
            background: rgb(${colors.black});
            color: rgb(${colors.white});
        }

        &:first-child:hover {
            background: rgb(${colors.pink});
        }

        &:last-child {
            background: none;
        }

        a {
            color: rgb(${colors.darkGrey});
            box-shadow: 0 1px 0 rgb(${colors.darkGrey});
        }
    }
`
