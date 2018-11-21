import React from 'react'
import PropTypes from 'prop-types'
import Logos from '../../assets/logos'
import { capitalizeFirstLetter } from '../../lib/utils'
import {
    StyledCollaborator,
    StyledDescription,
    StyledDescriptionTitle,
    StyledCollaboratorWrap,
    StyledDescriptionLink
} from './Collaborator.css'

// iterate over the Logos index and output correct logo component
// by checking against the 'logo' value from ./data/collaborators.json
const Logo = ({ logo, ...props }) => {
    const logoComponentName = capitalizeFirstLetter(logo)

    if (Logos.hasOwnProperty(logoComponentName)) {
        let LogoComponent = Logos[logoComponentName]
        return <LogoComponent key={Logos[logoComponentName]} {...props} />
    } else {
        return null
    }
}

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
