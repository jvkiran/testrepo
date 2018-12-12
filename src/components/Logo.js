import React from 'react'
import { capitalizeFirstLetter } from '../lib/utils'
import Logos from '../assets/logos'

// iterate over the Logos index and output correct logo component
// by checking against the provided 'logo' value
const Logo = ({ logo, ...props }) => {
    const logoComponentName = capitalizeFirstLetter(logo)

    if (Logos.hasOwnProperty(logoComponentName)) {
        let LogoComponent = Logos[logoComponentName]
        return <LogoComponent key={Logos[logoComponentName]} {...props} />
    } else {
        return null
    }
}

export default Logo
