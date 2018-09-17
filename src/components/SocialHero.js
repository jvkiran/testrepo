import React from 'react'
import buttonTelegram from '../assets/buttons/telegram.svg'
import buttonGitter from '../assets/buttons/gitter.svg'
import buttonTwitter from '../assets/buttons/twitter.svg'
import buttonMedium from '../assets/buttons/medium.svg'
import { social } from '../constants'
import { SocialBand } from './SocialHero.css'

const SocialHero = () => (
    <SocialBand>
        <a href={social.telegram_news} rel="noopener noreferrer" target="_blank"><img alt="Telegram" src={buttonTelegram} />Telegram News Channel</a>
        <a href={social.telegram} rel="noopener noreferrer" target="_blank"><img alt="Telegram" src={buttonTelegram} />Telegram Group Chat</a>
        <a href={social.gitter} rel="noopener noreferrer" target="_blank"><img alt="Gitter" src={buttonGitter} />Gitter</a>
        <a href={social.twitter} rel="noopener noreferrer" target="_blank"><img alt="Twitter" src={buttonTwitter} />Twitter</a>
        <a href={social.blog} rel="noopener noreferrer" target="_blank"><img alt="Blog" src={buttonMedium} />Blog</a>
    </SocialBand>
)

export default SocialHero
