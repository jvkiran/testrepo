/* global ga */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Cell from '../../components/Cell'
import Paragraph from '../../components/Paragraph'
import Button from '../../components/Button'
import { ReactComponent as Check } from '../../assets/misc/check.svg'
import { StyledSubTitle, SubHeader } from './index.css'
import { StyledList, Actions } from './Ambassadors.css'

const content = {
    title: 'Ambassadors',
    description:
        'The <strong>Ocean Protocol Ambassador Program</strong> is a grassroots project to involve our incredible community of thinkers, learners, and problem-solvers into the very core of our ecosystem. It is a chance for passionate individuals to be on the frontlines of the data revolution.\n\nWe are excited to bring onboard motivated, curious, and interesting people based all around the world, who are passionate about decentralization, challenging the status quo, and equalizing access to data for all. \n\nThere are a wide range of ways to get involved once you become an Ambassador, and plenty of great reasons to apply, including:',
    list: [
        'Be a part of the inner circle of Ocean',
        'Direct impact on shaping our global community',
        'Gain valuable new skills and experiences',
        'Exclusive webinars and video calls with the Ocean team',
        'Exclusive Telegram Group & chance to be featured on our blog',
        'First to know about opportunities to earn Ocean tokens',
        'Plenty of Ocean swag!'
    ]
}

export default class Ambassadors extends PureComponent {
    link =
        'https://docs.google.com/forms/d/e/1FAIpQLSdq3hHU6hlBbHtJXGUEM_6x32T3o6zM0ynyUikcK_thhH_8cw/viewform'

    handleButtonClick = () => {
        this.props.toggleModal('ambassadors')

        if (window.ga) {
            ga('send', 'event', 'click', 'ambassador', 'ambassador_section')
        }
    }

    render() {
        return (
            <SubHeader>
                <Cell width={1 / 4}>
                    <StyledSubTitle white id="ambassadors">
                        {content.title}
                    </StyledSubTitle>
                </Cell>
                <Cell width={3 / 4}>
                    <Paragraph>
                        <span
                            dangerouslySetInnerHTML={{
                                __html: content.description
                            }}
                        />
                    </Paragraph>

                    <StyledList>
                        {content.list.map((item, index) => (
                            <li key={index}>
                                <Check />
                                {item}
                            </li>
                        ))}
                    </StyledList>

                    <Actions>
                        <Button onClick={this.handleButtonClick}>
                            Apply to become an ambassador
                        </Button>
                        <a href="https://blog.oceanprotocol.com/envoys-of-the-new-data-economy-ocean-protocol-ambassadors-3816a0e63611">
                            Announcing the Ocean Protocol Ambassador Program.
                        </a>
                    </Actions>
                </Cell>
            </SubHeader>
        )
    }
}

Ambassadors.propTypes = {
    toggleModal: PropTypes.func.isRequired
}
