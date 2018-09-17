import styled from 'styled-components'
import SubTitle from '../components/SubTitle'
import { colors, fonts, responsive } from '../styles'

export const SectionTitle = styled(SubTitle)`
    margin-top: 6rem;
`

export const SectionSubTitle = styled.h4`
    font-size: ${fonts.size.large};
    color: rgb(${colors.lightGrey});
    margin-bottom: 3rem;
    margin-top: -1rem;
`

export const Colors = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

export const Color = styled.div`
    margin-bottom: 2%;
    padding: 1rem 2rem;
    background: ${props => (props.color ? `rgb(${props.color})` : '')};
    text-align: center;
    color: rgb(${colors.white});
    border: 1px solid rgb(${colors.lightGrey});
    border-radius: .2rem;
    flex: 0 0 49%;

    @media (${responsive.sm.min}) {
        flex-basis: 32%;
    }
`

export const ColorName = styled.h5`
    margin: 0;
    margin-bottom: .5rem;
    color: rgb(${colors.white});
    line-height: ${fonts.lineHeight.base};

    [color='255, 255, 255'] &,
    [color='226, 226, 226'] & {
        color: rgb(${colors.grey});
    }
`

export const ColorValue = styled.span`
    margin: 0;
    display: block;
    color: rgba(${colors.white}, .7);
    font-size: ${fonts.size.base};
    font-family: ${fonts.family.code};

    [color='255, 255, 255'] &,
    [color='226, 226, 226'] & {
        color: rgba(${colors.grey}, .7);
    }
`

/* stylelint-disable block-no-empty */
export const Gradients = styled(Colors)``
/* stylelint-enable block-no-empty */

export const Gradient = styled(Color)`
    background: ${props => (props.color ? props.color : '')};
    flex-basis: 100%;
`
