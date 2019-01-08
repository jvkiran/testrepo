import styled from 'styled-components'
import SocialHero from '../../components/SocialHero'
import { SocialLink } from '../../components/SocialHero.css'
import { colors } from '../../styles'
import { animation } from '../../components/Header.css'

export const StyledHeaderAddition = styled.div`
    text-align: left;
    color: rgb(${colors.white});
`

export const StyledSocialHero = styled(SocialHero)`
    text-align: center;

    ${SocialLink} {
        border: 0.1rem solid rgba(${colors.pink}, 0.5);
        border-radius: 0.2rem;
        padding: 0.5rem 1rem;
        box-shadow: 0 8px 18px 0 rgba(0, 0, 0, 0.2);
        animation: ${animation} 1.25s backwards;

        &:nth-child(1) {
            animation-delay: 0.2s;
        }

        &:nth-child(2) {
            animation-delay: 0.3s;
        }

        &:nth-child(3) {
            animation-delay: 0.4s;
        }
    }
`
