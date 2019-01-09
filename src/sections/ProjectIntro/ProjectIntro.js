import React, { PureComponent } from 'react'
import ContentRow from '../../components/ContentRow'
import Cell from '../../components/Cell'
import Modal from '../../components/Modal'
import Button from '../../components/Button'
import ModalForm from '../../components/Form/FormModal'
import forms from '../../data/forms'
import Paragraph from '../../components/Paragraph'
import SubTitle from '../../components/SubTitle'
import dataDotsLeft from '../../assets/graphics/data-dots-left.svg'
import dataDotsRight from '../../assets/graphics/data-dots-right.svg'
import {
    StyledData,
    StyledCard,
    StyledDataTransfer,
    StyledDataDots,
    StyledGrid,
    Icon,
    Actions,
    Contact
} from './ProjectIntro.css'
import Pulse from './Pulse'
import { intro } from '../../data/pages/protocol.json'

const isProduction = process.env.NODE_ENV === 'production'
let shouldAnimate

if (isProduction) {
    shouldAnimate = true
} else {
    shouldAnimate = process.env.REACT_APP_ANIMATE_PROJECT === 'true'
}

const DataGraphic = () => (
    <StyledData>
        {intro.infographic.map(copy => (
            <StyledCard key={copy.title}>
                <h4>{copy.title}</h4>
                <p>{copy.text}</p>
            </StyledCard>
        ))}
        <StyledDataTransfer>
            <StyledDataDots img={dataDotsLeft} shouldAnimate={shouldAnimate} />
            <StyledDataDots img={dataDotsRight} shouldAnimate={shouldAnimate} />
            <Pulse className="pulse" shouldAnimate={shouldAnimate} />
        </StyledDataTransfer>
    </StyledData>
)

export default class ProjectIntro extends PureComponent {
    state = {
        showModal: false,
        modal: ''
    }

    toggleModal = modal => {
        this.setState({
            modal,
            showModal: !this.state.showModal
        })
    }

    handleButtonClick = () => {
        this.toggleModal('contact')
    }

    render() {
        return (
            <>
                <ContentRow>
                    <DataGraphic />

                    {intro.about.map(aboutBlock => (
                        <>
                            <StyledGrid key={aboutBlock.title}>
                                <Cell width={2 / 3}>
                                    <SubTitle white left>
                                        {aboutBlock.title}
                                    </SubTitle>
                                    <Paragraph>{aboutBlock.text}</Paragraph>

                                    <Actions>
                                        {aboutBlock.actions &&
                                            aboutBlock.actions.map(action => (
                                                <a
                                                    key={action.title}
                                                    href={action.url}
                                                >
                                                    {action.title}
                                                </a>
                                            ))}
                                    </Actions>
                                </Cell>
                                <Cell width={1 / 3}>
                                    <Icon />
                                </Cell>
                            </StyledGrid>
                        </>
                    ))}
                </ContentRow>

                <ContentRow narrow center>
                    <Contact>
                        {intro.contact.text} <br />
                        <Button white center onClick={this.handleButtonClick}>
                            {intro.contact.button}
                        </Button>
                    </Contact>
                </ContentRow>

                {this.state.showModal && (
                    <Modal
                        title={forms[this.state.modal].title}
                        description={forms[this.state.modal].description}
                        toggle={this.toggleModal}
                    >
                        <ModalForm modal={this.state.modal} />
                    </Modal>
                )}
            </>
        )
    }
}
