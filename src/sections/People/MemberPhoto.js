import React from 'react'
import PropTypes from 'prop-types'
import LazyLoad from 'react-lazyload'
import teamImg from '../../assets/team'
import advisorsImg from '../../assets/advisors'
import { Photo } from './MemberPhoto.css'
import jellyfish from '@oceanprotocol/art/jellyfish/jellyfish-grid.svg'

const MemberPhoto = ({ member, advisor, empty, ...props }) => {
    let src

    if (advisor) {
        src = advisorsImg[member.image]
    } else if (empty) {
        src = jellyfish
    } else {
        src = teamImg[member.image]
    }

    return (
        <Photo {...props}>
            <LazyLoad once height={141} offset={300}>
                {empty ? (
                    <img alt={'Coming soon...'} src={src} />
                ) : (
                    <img alt={member.name} src={src} />
                )}
            </LazyLoad>
        </Photo>
    )
}

MemberPhoto.propTypes = {
    member: PropTypes.object,
    advisor: PropTypes.bool,
    empty: PropTypes.bool
}

export default MemberPhoto
