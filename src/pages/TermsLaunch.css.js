import styled from 'styled-components'
import ContentRow from '../components/ContentRow'
import { fonts, layout } from '../styles'

export const StyledContent = styled(ContentRow)`
    margin-top: calc(${layout.spacer} * 2);
    margin-bottom: calc(${layout.spacer} * 2);
    max-width: 45rem;

    & h1 {
        font-size: ${fonts.size.h3};
    }

    & h2 {
        font-size: ${fonts.size.h4};
    }

    & h3 {
        font-size: ${fonts.size.h5};
    }
`
