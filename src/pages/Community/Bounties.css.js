import styled from 'styled-components'
import ContentRow from '../../components/ContentRow'
import BountiesActions from '../../components/BountiesActions'
import { layout } from '../../styles'

export const StyledContent = styled(ContentRow)``

export const StyledBountiesActions = styled(BountiesActions)`
    margin-bottom: calc(${layout.spacer} / 2);

    a {
        display: block;
        width: 100%;
    }
`
