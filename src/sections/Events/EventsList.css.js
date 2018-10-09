import styled from 'styled-components'
import { colors, fonts, responsive } from '../../styles'
import SubTitle from '../../components/SubTitle'

export const StyledEvents = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-end;
    margin-top: 4rem;

    @media screen and (${responsive.sm.min}) {
        margin-left: -1rem;
        width: calc(100% + 2rem);
    }

    @media screen and (min-width: 1600px) {
        width: 100%;
        max-width: 120rem;
        margin-left: auto;
        margin-right: auto;
    }

    ${SubTitle} { /* stylelint-disable-line */
        width: 100%;
        text-align: center;
        margin: 0;
        margin-top: 2rem;
    }

    .slick-slider {
        width: calc(100% + 3rem);
        margin-left: -1.5rem;
        margin-right: -1.5rem;
    }

    .slick-slide,
    .slick-initialized .slick-slide {
        padding-left: 1.5rem;
        padding-right: 1.5rem;

        @media screen and (${responsive.sm.min}) {
            padding-left: 3rem;
            padding-right: 3rem;
        }

        > div > div { /* stylelint-disable-line */
            display: flex !important; /* stylelint-disable-line */
            flex-wrap: wrap;
            align-items: stretch;
        }
    }

    .slick-dots {
        bottom: -2.5rem;

        button:before {
            font-size: ${fonts.size.small};
            opacity: .25;
            color: rgb(${colors.white});
        }

        .slick-active button:before { /* stylelint-disable-line selector-max-compound-selectors */
            color: rgb(${colors.white});
        }

        .slick-active:only-child {
            display: none;
        }
    }

    .slick-prev,
    .slick-next {
        z-index: 2;
        width: 1.5rem;
        height: 1.5rem;

        &.slick-disabled {
            visibility: hidden;
        }

        &:before {
            color: #fff;
            font-size: 1.5rem;
        }
    }

    .slick-prev {
        left: 1rem;
    }

    .slick-next {
        right: 1rem;
    }
`
