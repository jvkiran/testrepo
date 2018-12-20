import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors, fonts, layout } from '../styles'

export const OverviewActions = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;

    li {
        flex: 0 0 30%;
    }
`

export const OverviewAction = styled(Link)`
    display: block;
    height: 100%;
    color: rgb(${colors.grey});
    padding: ${layout.spacer};
    border: 0.1rem solid rgb(${colors.pink});
    border-radius: 0.2rem;

    h2 {
        font-size: ${fonts.size.h3};
        margin-top: 0;
    }
`
