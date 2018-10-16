import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import MemberPhoto from './MemberPhoto'
import MemberLinks from './MemberLinks'
import {
    StyledMember,
    Name,
    Quote,
    QuoteWrap,
    QuoteLink,
    Position
} from './Member.css'

const Member = ({ member, advisor, empty }) => {
    const item = member || advisor

    return (
        <StyledMember empty={empty ? true : null} member={member ? true : null}>
            {empty ? (
                <Fragment>
                    <MemberPhoto empty />
                    <Name empty>To be announced...</Name>
                </Fragment>
            ) : (
                <Fragment>
                    {member && <MemberPhoto member={item} />}
                    {advisor && (
                        <QuoteWrap>
                            <MemberPhoto member={item} actionable advisor />
                            <Quote>
                                {!!item.quote && item.quote}

                                {item.link && (
                                    <QuoteLink href={item.link}>
                                        More info
                                    </QuoteLink>
                                )}
                            </Quote>
                        </QuoteWrap>
                    )}
                    <Name>{item.name}</Name>
                    {advisor && <Position>{item.position}</Position>}
                    <MemberLinks member={item} />
                </Fragment>
            )}
        </StyledMember>
    )
}

Member.propTypes = {
    member: PropTypes.object,
    advisor: PropTypes.object,
    empty: PropTypes.bool
}

export default Member
