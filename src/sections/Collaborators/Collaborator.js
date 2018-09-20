import React from 'react'
import PropTypes from 'prop-types'
import Logos from './Logos'
import {
    StyledCollaborator,
    StyledDescription,
    StyledCollaboratorWrap
} from './Collaborator.css'

// generated SVG component names have first letter capitalized,
// while original SVG file names are all lowercased.
// Use this helper function to work around that
const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1)

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

const Collaborator = ({ name, logo, link, description }) => (
    <StyledCollaborator>
        <StyledCollaboratorWrap href={link}>
            <Logo logo={logo} className={logo} title={name} />
            {description && <StyledDescription>{description}</StyledDescription>}
        </StyledCollaboratorWrap>
    </StyledCollaborator>
)

Collaborator.propTypes = {
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    description: PropTypes.string
}

export default Collaborator
