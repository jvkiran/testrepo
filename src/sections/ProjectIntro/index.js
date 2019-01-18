import React, { PureComponent } from 'react'
import ContentRow from '../../components/ContentRow'
import Modal from '../../components/Modal'
import Button from '../../components/Button'
import ModalForm from '../../components/Form/FormModal'
import DataGraphic from './DataGraphic'
import Features from './Features'
import { Contact } from './index.css'
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
                    <Features features={intro.features} />
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
