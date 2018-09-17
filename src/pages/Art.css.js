import styled from 'styled-components'
import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
import Section from '../components/Section'
import ContentRow from '../components/ContentRow'
import OceanJeyllyfishBack from '@oceanprotocol/art/jellyfish/jellyfish-back.svg'
import { colors, fonts, transitions, layout } from '../styles'

export const HeaderArt = styled(Section)`
    background-image: url(${OceanJeyllyfishBack});
    background-position: center 3rem;
    display: flex;
    align-items: center;
    margin-top: ${layout.pageFrame};

    p {
        margin-bottom: 0;
    }

    a {
        color: inherit;
        border-bottom: 1px solid rgba(${colors.white}, .2);

        &:hover,
        &:focus {
            border-bottom-color: rgba(${colors.white}, .4);
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

export const SectionTitle = styled(SubTitle)`
    margin-top: 8rem;
`

export const SectionSubTitle = styled.h4`
    font-size: ${fonts.size.large};
    color: rgb(${colors.lightGrey});
    margin-bottom: 3rem;
    margin-top: -1rem;
`

export const Logos = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

export const Logo = styled.div`
    flex: 0 0 48%;
    text-align: center;

    > div {
        border: 1px solid rgb(${colors.lightGrey});
        border-radius: .2rem;
        padding: 2rem;
        background: ${props => (props.white ? `rgb(${colors.black})` : null)};
        margin-bottom: .5rem;
    }
`

export const Banners = styled.figure`
    display: block;
    margin: 0;

    img {
        border-radius: .2rem;
    }

    a {
        display: block;
        text-align: center;
        margin-top: 2rem;
    }
`

export const StyledCollapsible = styled.div`
    margin-top: 6rem;
    margin-bottom: 4rem;

    .Collapsible__contentInner {
        border-top: 1px solid rgba(${colors.lightGrey}, .4);
    }

    .Collapsible__trigger {
        cursor: pointer;
        transition: ${transitions.base};
        display: block;
        font-family: ${fonts.family.title};
        font-weight: ${fonts.fontWeight.title};
        line-height: ${fonts.lineHeight.title};
        font-size: ${fonts.size.h3};
        padding-bottom: 4rem;

        &:hover,
        &:focus {
            color: rgb(${colors.pink});
        }

        &:before {
            content: '+';
            font-size: 2.5rem;
            line-height: 0;
            vertical-align: middle;
            margin-right: .5rem;
            color: rgb(${colors.pink});
            font-weight: ${fonts.fontWeight.base};
            font-family: ${fonts.family.base};
            position: relative;
            top: -.2rem;
        }

        &.is-open:before {
            content: '-';
            top: -.4rem;
        }
    }
`

export const KeyVisuals = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

export const KeyVisual = styled.div`
    flex: 0 0 48%;
    text-align: center;

    > div {
        border: 1px solid rgb(${colors.lightGrey});
        border-radius: .2rem;
        padding: 2rem;
        margin-bottom: .5rem;
        background: rgb(${colors.black});
    }
`

export const StyledFirstContentRow = styled(ContentRow)`
    margin-top: -6rem;
`
