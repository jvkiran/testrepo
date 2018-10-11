import React, { PureComponent } from 'react'
import Cell from '../../components/Cell'
import Paragraph from '../../components/Paragraph'
import Button from '../../components/Button'
import { ReactComponent as Check } from '../../assets/misc/check.svg'
import {
    StyledSubTitle,
    SubHeader
} from './People.css'
import { StyledList } from './Ambassadors.css'

const content = {
    title: 'Ambassadors',
    description: 'Come, Comrade Bender! We must take to the streets! One hundred dollars. Tell her you just want to talk. It has nothing to do with mating. Say it in Russian! No, just a regular mistake. Bender, you risked your life to save me! Morbo can not understand his teleprompter because he forgot how you say that letter that is shaped like a man wearing a hat.\n\nNay, I respect and admire Harold Zoid too much to beat him to death with his own Oscar. Bender, this is Frys decision… and he made it wrong. So it is time for us to interfere in his life.',
    list: [
        'Organize meetups',
        'Spread the love',
        'Ride with a dolphin',
        'All the Slurm you can drink',
        'All the Slurm'
    ]
}

export default class Ambassadors extends PureComponent {
    link = 'https://docs.google.com/forms/d/e/1FAIpQLSdq3hHU6hlBbHtJXGUEM_6x32T3o6zM0ynyUikcK_thhH_8cw/viewform'

    handleButtonClick = () => {
        window.open(this.link) // eslint-disable-line security/detect-non-literal-fs-filename
    }

    render() {
        return (
            <SubHeader>
                <Cell width={1 / 4}>
                    <StyledSubTitle white id="ambassadors">{content.title}</StyledSubTitle>
                </Cell>
                <Cell width={3 / 4}>
                    <Paragraph>
                        {content.description}
                    </Paragraph>

                    <StyledList>
                        {content.list.map((item, index) => (
                            <li key={index}>
                                <Check />
                                {item}
                            </li>
                        ))}
                    </StyledList>

                    <Button onClick={this.handleButtonClick}>
                        Apply to become an ambassador
                    </Button>
                </Cell>
            </SubHeader>
        )
    }
}
