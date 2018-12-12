import React from 'react'
import { capitalizeFirstLetter } from '../lib/utils'
import logos from '../assets/logos'

// iterate over the Logos index and output correct logo component
// by checking against the 'logo' value from data file
const Logo = ({ logo, ...props }) => {
    const logoComponentName = capitalizeFirstLetter(logo)

    if (logos.hasOwnProperty(logoComponentName)) {
        let LogoComponent = logos[logoComponentName]
        return <LogoComponent key={logos[logoComponentName]} {...props} />
    } else {
        return null
    }
}

export default Logo
