import styled from 'styled-components'
import SubTitle from '../../components/SubTitle'
import { colors, layout } from '../../styles'

export const Contact = styled(SubTitle)`
    color: rgb(${colors.lightGrey});
    margin-top: calc(${layout.spacer} * 2);
    margin-bottom: 0;

    button {
        margin-top: ${layout.spacer};
    }
`
