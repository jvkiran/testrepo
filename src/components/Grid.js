import styled from 'styled-components'

const Grid = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: ${({ nowrap }) => (nowrap ? 'nowrap' : 'wrap')};
    text-align: ${({ textCenter }) => (textCenter ? 'center' : null)};
    align-items: ${({ center }) => (center ? 'center' : null)};
    justify-content: ${({ center }) => (center ? 'center' : 'space-between')};
`

export default Grid
