import React from 'react'
import PropTypes from 'prop-types'
import Logos from './Logos'
import {
    StyledCollaborator
} from './Collaborator.css'

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

const Logo = ({ image, ...props }) => {
    if (Logos.hasOwnProperty(capitalizeFirstLetter(image))) {
        let LogoComponent = Logos[capitalizeFirstLetter(image)]
        return <LogoComponent key={capitalizeFirstLetter(image)} {...props} />
    } else {
        return null
    }
}

const Contributor = ({ name, image, link, ...props }) => (
    <StyledCollaborator>
        {
            link
                ? <a href={link}><Logo image={image} className={image} /></a>
                : <Logo image={image} className={image} />
        }

    </StyledCollaborator>
)

Contributor.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string
}

export default Contributor
