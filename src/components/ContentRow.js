import styled from 'styled-components'
import { layout } from '../styles'

/* eslint-disable no-nested-ternary */
const ContentRow = styled.div`
    width: 100%;
    max-width: ${({ narrow, wide }) => (narrow ? `${layout.maxWidth.small}` : wide ? `${layout.maxWidth.wide}` : `${layout.maxWidth.base}`)};
    margin: 0 auto;
`
/* eslint-enable no-nested-ternary */

export default ContentRow
