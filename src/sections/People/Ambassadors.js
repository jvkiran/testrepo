import React from 'react'
import Cell from '../../components/Cell'
import Button from '../../components/Button'
import {
    StyledSubTitle,
    StyledParagraph,
    SubHeader
} from './People.css'

const Ambassadors = () => (
    <>
        <SubHeader>
            <Cell width={1 / 4}>
                <StyledSubTitle white id="ambassadors">Ambassadors</StyledSubTitle>
            </Cell>
            <Cell width={3 / 4}>
                <StyledParagraph>
                        Ambassadors Ambassadors Ambassadors Ambassadors Ambassadors Ambassadors Ambassadors Ambassadors Ambassadors Ambassadors Ambassadors Ambassadors Ambassadors Ambassadors Ambassadors Ambassadors Ambassadors Ambassadors Ambassadors Ambassadors Ambassadors Ambassadors Ambassadors Ambassadors Ambassadors
                </StyledParagraph>

                <Button>Apply to be an ambassador</Button>

            </Cell>
        </SubHeader>
    </>

)

export default Ambassadors
