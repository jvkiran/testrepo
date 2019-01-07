/* global ga */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Section from '../components/Section'
import ContentRow from '../components/ContentRow'
import Cell from '../components/Cell'
import Grid from '../components/Grid'
import Paragraph from '../components/Paragraph'
import SectionHeader from '../components/SectionHeader'
import Button from '../components/Button'
import Modal from '../sections/Modal/Modal'
import { ReactComponent as Check } from '../assets/misc/check.svg'
import { StyledList, StyledActions } from './Ambassadors.css'
import OceanMantarayBack from '@oceanprotocol/art/mantaray/mantaray-back.svg'

import content from '../data/ambassadors.json'

const Actions = ({ handleButtonClick }) => (
    <StyledActions>
        <Button primary center onClick={handleButtonClick}>
            {content.button}
        </Button>
        {content.links.map(link => (
            <a href={link.link} key={link.name}>
                {link.name}
            </a>
        ))}
    </StyledActions>
)

Actions.propTypes = {
    handleButtonClick: PropTypes.func.isRequired
}

const List = () => (
    <StyledList>
        {content.list.map((item, index) => (
            <li key={index}>
                <Check />
                {item}
            </li>
        ))}
    </StyledList>
)

export default class Ambassadors extends PureComponent {
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
        this.toggleModal('ambassadors')

        if (window.ga) {
            ga('send', 'event', 'click', 'ambassador', 'ambassador_section')
        }
    }

    render() {
        return (
            <>
                <Section
                    backgroundImage={OceanMantarayBack}
                    id="ambassadors"
                    style={{
                        backgroundSize: 'contain',
                        backgroundPosition: 'center 70vh'
                    }}
                >
                    <SectionHeader
                        title={content.title}
                        description={content.description}
                        line
                    />

                    <ContentRow>
                        <Grid>
                            <Cell width={1 / 2}>
                                <Paragraph
                                    dangerouslySetInnerHTML={{
                                        __html: content.text
                                    }}
                                />
                            </Cell>
                            <Cell width={1 / 2}>
                                <List />
                            </Cell>
                        </Grid>

                        <Actions handleButtonClick={this.handleButtonClick} />
                    </ContentRow>
                </Section>

                {this.state.showModal && (
                    <Modal modal={this.state.modal} toggle={this.toggleModal} />
                )}
            </>
        )
    }
}
