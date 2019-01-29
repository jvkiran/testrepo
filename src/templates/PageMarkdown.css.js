import styled from 'styled-components'
import ContentRow from '../components/ContentRow'
import { colors, fonts, layout } from '../styles'

export const StyledContent = styled(ContentRow)`
    margin-top: calc(${layout.spacer} * 2);
    margin-bottom: calc(${layout.spacer} * 2);
    max-width: 45rem;
    min-height: 300px;
    position: relative;

    & h2 {
        font-size: ${fonts.size.h3};
    }

    & h3 {
        font-size: ${fonts.size.h4};
    }

    & h4 {
        font-size: ${fonts.size.h5};
    }

    ul {
        margin-bottom: ${layout.spacer};
        padding-left: 1.5rem;
        list-style: none;
    }

    li {
        position: relative;
        display: block;

        &:before {
            content: '▪';
            top: -1px;
            position: absolute;
            left: -1.5rem;
            color: rgb(${colors.lightGrey});
            user-select: none;
        }

        + li {
            margin-top: calc(${layout.spacer} / 8);
        }

        ul,
        ol,
        p {
            margin-bottom: 0;
            margin-top: calc(${layout.spacer} / 8);
        }
    }
`
