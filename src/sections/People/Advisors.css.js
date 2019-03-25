import styled from 'styled-components'
import { responsive, colors, transitions, fonts } from '../../styles'

export const StyledAdvisors = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-left: -2rem;
`
export const StyledCollapsible = styled.div`
    .Collapsible__contentInner {
        border-top: 1px solid rgba(${colors.lightGrey}, 0.4);
        padding-top: 1.5rem;
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
        text-align: center;

        &:hover,
        &:focus {
            color: rgb(${colors.pink});
        }

        &:before {
            content: '+';
            font-size: 2.25rem;
            line-height: 0;
            vertical-align: middle;
            margin-right: 0.5rem;
            color: rgb(${colors.pink});
            font-weight: ${fonts.fontWeight.base};
            font-family: ${fonts.family.base};
            position: relative;
        }

        &.is-open:before {
            content: '-';
            top: -0.25rem;
        }
    }
`
