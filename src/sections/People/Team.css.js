import styled from 'styled-components'
import { colors, fonts, transitions } from '../../styles'

export const StyledTeam = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-left: -2rem;

    .Collapsible {
        margin-left: 2rem;
        position: relative;
    }

    .Collapsible__trigger {
        cursor: pointer;
        transition: ${transitions.base};
        display: block;
        font-family: ${fonts.family.title};
        font-weight: ${fonts.fontWeight.title};
        line-height: ${fonts.lineHeight.title};
        font-size: ${fonts.size.large};
        padding-bottom: 1.5rem;
        margin-bottom: 1.5rem;
        text-align: center;
        color: rgb(${colors.lightGrey});

        &:hover,
        &:focus {
            color: rgb(${colors.pink});
        }

        &:before {
            content: '+';
            font-size: 2.25rem;
            line-height: 0;
            vertical-align: middle;
            margin-right: .5rem;
            color: rgb(${colors.pink});
            font-weight: ${fonts.fontWeight.base};
            font-family: ${fonts.family.base};
            position: relative;
        }

        &.is-open:before {
            content: '-';
            top: -.25rem;
        }
    }

    .Collapsible__contentInner {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin-left: -2rem;
    }
`
