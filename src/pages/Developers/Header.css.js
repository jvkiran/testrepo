import styled from 'styled-components'
import SocialHero from '../../components/SocialHero'
import { colors } from '../../styles'

export const StyledHeaderAddition = styled.div`
    text-align: left;
    padding-top: 2rem;
    color: rgb(${colors.white});
`

export const StyledSocialHero = styled(SocialHero)`
    text-align: center;

    a {
        border: 0.1rem solid rgb(${colors.pink});
    }
`
