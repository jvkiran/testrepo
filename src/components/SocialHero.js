import React from 'react'
import styled from 'styled-components'
import { responsive, colors, fonts } from '../styles'
import buttonTelegram from '../assets/buttons/telegram.svg'
import buttonTwitter from '../assets/buttons/twitter.svg'
import { social } from '../constants'

const SocialBand = styled.aside`
    text-align: center;

    & a {
        display: inline-block;
        padding: 1rem;
        margin: .25rem 0;
        color: rgba(${colors.lightGrey}, .9);
        font-size: ${fonts.size.small};
        font-family: ${fonts.family.button};
        font-weight: ${fonts.fontWeight.title};
        background: rgba(${colors.black}, .6);

        &:hover {
            color: rgba(${colors.white}, 1);
        }

        @media screen and (${responsive.sm.min}) {
            margin: 1rem;
        }
    }

    & img {
        width: 1.3rem;
        height: 1.3rem;
        vertical-align: middle;
        margin-top: -.2rem;
        margin-right: .2rem;
    }
`

const SocialHero = () => (
    <SocialBand>
        <a href={social.telegram_news} rel="noopener noreferrer" target="_blank"><img alt="Telegram" src={buttonTelegram} />Telegram News Channel</a>
        <a href={social.twitter} rel="noopener noreferrer" target="_blank"><img alt="Twitter" src={buttonTwitter} />Twitter</a>
    </SocialBand>
)

export default SocialHero
