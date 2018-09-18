import React from 'react'
import PropTypes from 'prop-types'
import Logos from './Logos'
import {
    StyledCollaborator
} from './Collaborator.css'

// generated SVG component names have first letter capitalized,
// while original SVG file names are all lowercased.
// Use this helper function to work around that
const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1)

// iterate over the Logos index and output correct logo component
// by checking against the 'logo' value from ./data/collaborators.json
const Logo = ({ logo, ...props }) => {
    if (Logos.hasOwnProperty(capitalizeFirstLetter(logo))) {
        let LogoComponent = Logos[capitalizeFirstLetter(logo)]
        return <LogoComponent key={capitalizeFirstLetter(logo)} {...props} />
    } else {
        return null
    }
}

const Contributor = ({ name, logo, link, ...props }) => (
    <StyledCollaborator>
        {
            link
                ? <a href={link}><Logo logo={logo} className={logo} /></a>
                : <Logo logo={logo} className={logo} />
        }
    </StyledCollaborator>
)

Contributor.propTypes = {
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    link: PropTypes.string
}

export default Contributor
