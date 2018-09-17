import React from 'react'
import PropTypes from 'prop-types'
import LazyLoad from 'react-lazyload'
import FadeIn from '../../components/FadeIn'
import teamImg from '../../assets/team'
import { Photo } from './MemberPhoto.css'

const MemberPhoto = ({ member }) => (
    <Photo>
        <LazyLoad once height={141} offset={100}>
            <FadeIn>
                <img alt={member.name} src={teamImg[member.image]} />
            </FadeIn>
        </LazyLoad>
    </Photo>
)

MemberPhoto.propTypes = {
    member: PropTypes.object.isRequired
}

export default MemberPhoto
