import React, { PureComponent } from 'react'
import ContentRow from '../../components/ContentRow'
import Modal from '../../components/Modal'
import Button from '../../components/Button'
import ModalForm from '../../components/Form/FormModal'
import Paragraph from '../../components/Paragraph'
import SubTitle from '../../components/SubTitle'
import DataGraphic from './DataGraphic'
import { StyledGrid, StyledCell, Icon, Actions, Contact } from './index.css'
import { intro } from '../../data/pages/protocol'
import forms from '../../data/forms'

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
        this.toggleModal('dataleads')
    }

    render() {
        return (
            <>
                <ContentRow>
                    <DataGraphic />

                    {intro.about.map(aboutBlock => (
                        <StyledGrid key={aboutBlock.title}>
                            <StyledCell width={2 / 3}>
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
                            </StyledCell>
                            <StyledCell width={1 / 3}>
                                <Icon />
                            </StyledCell>
                        </StyledGrid>
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
