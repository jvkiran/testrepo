import React, { Fragment } from 'react'
import styled from 'styled-components'
import rgbHex from '../lib/rgb-hex'
import SubTitle from '../components/SubTitle'
import Button from '../components/Button'
import { colors, fonts, gradients, responsive } from '../styles'

const SectionTitle = styled(SubTitle)`
    margin-top: 6rem;
`

const SectionSubTitle = styled.h4`
    font-size: ${fonts.size.large};
    color: rgb(${colors.lightGrey});
    margin-bottom: 3rem;
    margin-top: -1rem;
`

const Colors = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Color = styled.div`
    margin-bottom: 2%;
    padding: 1rem 2rem;
    background: ${props => (props.color ? `rgb(${props.color})` : '')};
    text-align: center;
    color: rgb(${colors.white});
    border: 1px solid rgb(${colors.lightGrey});
    border-radius: .2rem;
    flex: 0 0 49%;

    @media (${responsive.sm.min}) {
        flex-basis: 32%;
    }
`

const ColorName = styled.h5`
    margin: 0;
    margin-bottom: .5rem;
    color: rgb(${colors.white});
    line-height: ${fonts.lineHeight.base};

    [color='255, 255, 255'] &,
    [color='226, 226, 226'] & {
        color: rgb(${colors.grey});
    }
`

const ColorValue = styled.span`
    margin: 0;
    display: block;
    color: rgba(${colors.white}, .7);
    font-size: ${fonts.size.base};
    font-family: ${fonts.family.code};

    [color='255, 255, 255'] &,
    [color='226, 226, 226'] & {
        color: rgba(${colors.grey}, .7);
    }
`

/* stylelint-disable block-no-empty */
const Gradients = styled(Colors)``
/* stylelint-enable block-no-empty */

const Gradient = styled(Color)`
    background: ${props => (props.color ? props.color : '')};
    flex-basis: 100%;
`

const Styleguide = () => (
    <Fragment>
        <SectionTitle>Colors</SectionTitle>
        <Colors>
            {Object.entries(colors).map(color => (
                <Color color={color[1]} key={color}>
                    <ColorName>{color[0]}</ColorName>
                    <ColorValue>#{rgbHex(color[1])}</ColorValue>
                    <ColorValue>rgb({color[1]})</ColorValue>
                </Color>
            ))}
        </Colors>

        <SectionTitle>Gradients</SectionTitle>
        <Gradients>
            {Object.entries(gradients).map(gradient => (
                <Gradient color={gradient[1]} key={gradient}>
                    <ColorName>{gradient[0]}</ColorName>
                    <ColorValue>{gradient[1]}</ColorValue>
                </Gradient>
            ))}
        </Gradients>

        <SectionTitle>Typography</SectionTitle>
        <SectionSubTitle>
            Our branding typefaces are{' '}
            <a href="https://sharptype.co/typefaces/sharp-sans/#features">
                Sharp Sans Medium/Bold
            </a>{' '}
            &{' '}
            <a href="https://sharptype.co/typefaces/sharp-sans-display-no1/">
                Sharp Sans Display No. 1 Bold
            </a>.
        </SectionSubTitle>

        <h1>Sharp Sans Display No. 1 Bold</h1>
        <p style={{ fontSize: fonts.size.large }}>Sharp Sans Medium</p>
        <p style={{ fontSize: fonts.size.large }}>
            <strong>Sharp Sans Bold</strong>
        </p>

        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>

        <p>
            Body text and <strong>bold body text</strong>.
        </p>
        <p style={{ fontSize: fonts.size.large }}>
            Large body text and <strong>large bold body text</strong>.
        </p>
        <p style={{ fontSize: fonts.size.small }}>
            Small body text and <strong>small bold body text</strong>.
        </p>

        <SectionTitle>Buttons</SectionTitle>
        <Button>Click me like one of your french buttons</Button>
    </Fragment>
)

export default Styleguide
