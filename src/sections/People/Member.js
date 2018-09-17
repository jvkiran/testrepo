import React from 'react'
import PropTypes from 'prop-types'
import MemberPhoto from './MemberPhoto'
import MemberLinks from './MemberLinks'
import {
    StyledMember,
    Name,
    Quote,
    QuoteWrap,
    Position
} from './Member.css'

const Member = ({ member, advisor }) => {
    const item = member || advisor

    return (
        <StyledMember advisor={advisor ? true : null}>
            {member && <MemberPhoto member={item} />}
            {advisor && (
                <QuoteWrap>
                    <MemberPhoto member={item} actionable />
                    <Quote>{!!item.quote && item.quote}</Quote>
                </QuoteWrap>
            )}
            <Name>{item.name}</Name>
            {advisor && <Position>{item.position}</Position>}
            <MemberLinks member={item} />
        </StyledMember>
    )
}

Member.propTypes = {
    member: PropTypes.object,
    advisor: PropTypes.object
}

export default Member
