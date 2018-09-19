import React from 'react'
import PropTypes from 'prop-types'
import LazyLoad from 'react-lazyload'
import FadeIn from '../../components/FadeIn'
import teamImg from '../../assets/team'
import advisorsImg from '../../assets/advisors'
import { Photo } from './MemberPhoto.css'

const MemberPhoto = ({ member, advisor, ...props }) => {
    const src = advisor ? advisorsImg[member.image] : teamImg[member.image]

    return (
        <Photo {...props}>
            <LazyLoad once height={141} offset={100}>
                <FadeIn>
                    <img alt={member.name} src={src} />
                </FadeIn>
            </LazyLoad>
        </Photo>
    )
}

MemberPhoto.propTypes = {
    member: PropTypes.object.isRequired,
    advisor: PropTypes.bool
}

export default MemberPhoto
