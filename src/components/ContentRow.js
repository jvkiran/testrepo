import styled from 'styled-components'
import { layout, responsive } from '../styles'

const ContentRow = styled.div`
    width: 100%;
    max-width: ${({ narrow, wide }) =>
        narrow
            ? `${layout.maxWidth.small}`
            : wide
                ? `${layout.maxWidth.wide}`
                : `${layout.maxWidth.base}`};
    margin: 0 auto;

    @media screen and (${responsive.sm.min}) {
        padding: 0;
    }
`

export default ContentRow
