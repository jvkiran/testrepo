import React, { Fragment } from 'react'
import rgbHex from '../lib/rgb-hex'
import Button from '../components/Button'
import { colors, fonts, gradients } from '../styles'
import {
    Colors,
    Color,
    ColorName,
    ColorValue,
    SectionTitle,
    Gradients,
    Gradient,
    SectionSubTitle
} from './Styleguide.css'

const Styleguide = () => (
    <Fragment>
        <SectionTitle>Colors</SectionTitle>
        <Colors>
            {Object.entries(colors).map(color => (
                <Color color={color[1]} key={color}>
                    <ColorName>{color[0]}</ColorName>
                    <ColorValue>#{rgbHex(color[1])}</ColorValue>
                    <ColorValue>
                        rgb(
                        {color[1]})
                    </ColorValue>
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
            </a>
            .
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
