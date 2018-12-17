import styled from 'styled-components'
import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
import OceanJeyllyfishBack from '@oceanprotocol/art/jellyfish/jellyfish-back.svg'
import { colors, layout } from '../styles'

export const StyledHeader = styled.header`
    background-image: url(${OceanJeyllyfishBack});
    background-position: center 3rem;
    display: flex;
    align-items: center;
    margin-top: ${layout.pageFrame};
    background-color: ${({ background }) =>
        background ? `rgb(${background})` : `rgb(${colors.black})`};
    transition: transform 0.3s ease-in-out;
    transform: none;
    padding: 10rem calc(${layout.pageFrame} * 2) 6rem
        calc(${layout.pageFrame} * 2);
    margin-bottom: ${layout.pageFrame};

    p {
        margin-bottom: 0;
        color: rgb(${colors.white});
    }

    a {
        color: inherit;
        border-bottom: 1px solid rgba(${colors.white}, 0.2);

        &:hover,
        &:focus {
            border-bottom-color: rgba(${colors.white}, 0.4);
        }
    }
`

export const StyledTitle = styled(Title)`
    margin-bottom: 1rem;
    margin-top: 0;
`

export const StyledSubTitle = styled(SubTitle)`
    color: rgb(${colors.lightGrey});
`
