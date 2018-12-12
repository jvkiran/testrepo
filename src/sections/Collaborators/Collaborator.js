import React from 'react'
import PropTypes from 'prop-types'
import Logo from '../../components/Logo'
import {
    StyledCollaborator,
    StyledDescription,
    StyledDescriptionTitle,
    StyledCollaboratorWrap,
    StyledDescriptionLink
} from './Collaborator.css'

const Collaborator = ({ collaborator }) => {
    const { name, logo, link, description } = collaborator
    return (
        <StyledCollaborator>
            <StyledCollaboratorWrap>
                <Logo logo={logo} className={logo} title={name} />
                {description && (
                    <StyledDescription>
                        <StyledDescriptionTitle>{name}</StyledDescriptionTitle>
                        {description}
                        <StyledDescriptionLink
                            href={`${link}?utm_source=oceanprotocol.com`}
                        >
                            Visit website
                        </StyledDescriptionLink>
                    </StyledDescription>
                )}
            </StyledCollaboratorWrap>
        </StyledCollaborator>
    )
}

Collaborator.propTypes = {
    collaborator: PropTypes.object.isRequired
}

export default Collaborator
