import styled from 'styled-components'
import SubTitle from '../components/SubTitle'

export const StyledSubTitle = styled(SubTitle)`
    flex: 0 0 100%;
`

export const StyledFaqRow = styled.div`
    margin-top: 20px;
    display: flex;
    flex-flow: wrap;

    &:first-child {
        margin-top: 0;
    }

    &:after {
        clear: both;
    }
`

export const StyledQaA = styled.div`
    width: calc(100% - 2rem);
`
