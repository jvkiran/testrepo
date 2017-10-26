import React, { Component } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import Section from '../components/Section';
import ContentRow from '../components/ContentRow';
import Title from '../components/Title';
import Grid from '../components/Grid';
import Cell from '../components/Cell';
import { colors, fonts, responsive } from '../styles';

const StyledCard = styled.div`
  margin: 1rem 0;
  width: 100%;
  height: 100%;
  background: rgb(${colors.grey});
  border-radius: 2px;
  box-shadow: 0 12px 30px 0 rgba(0, 0, 0, 0.07);
  color: rgb(${colors.grey});
`;

const StyledContent = styled.div`
  width: 100%;
  padding: 0 2rem;
  @media screen and (${responsive.sm.max}) {
    padding: 0 1rem;
  }
`;

const StyledAction = styled.div`
  text-align: center;
  margin-top: 4rem;

  @media screen and (${responsive.sm.max}) {
    margin-top: 2rem;
  }

  a {
    text-transform: uppercase;
    font-family: ${fonts.family.button};
    display: inline-block;
  }
`;

const StyledTitle = styled.h4`
  color: rgb(${colors.white});
`;
const StyledSecondaryTitle = styled.h5`
  color: rgb(${colors.white});
`;

const StyledReactPlayer = styled(ReactPlayer)`
    max-width: 100%;
    height: auto !important;

    > div {
        position: relative;
        height: 0 !important;
        padding-bottom: 56.25%;
    }

    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`;

class Videos extends Component {

    render = () => (
        <Section id="videos" background={colors.black} fontColor={colors.white}>
            <ContentRow>
                <Title white>Videos</Title>
                <Grid>
                    <Cell width={1 / 2}>
                        <StyledCard>
                            <StyledReactPlayer url='https://www.youtube.com/watch?v=ebDPivG16HE' controls={true} config={{youtube: { playerVars: { color: 'white' }}}} />
                            <StyledContent>
                                <StyledTitle>How to Safely Bottle Feed a Kitten</StyledTitle>
                            </StyledContent>
                        </StyledCard>
                    </Cell>
                    <Cell width={1 / 2}>
                        <StyledCard>
                            <StyledReactPlayer url='https://www.youtube.com/watch?v=Ep3jK1bZrB8' controls={true} config={{youtube: { playerVars: { color: 'white' }}}} />
                            <StyledContent>
                                <StyledTitle>5 Ways to Comfort a Kitten</StyledTitle>
                            </StyledContent>
                        </StyledCard>
                    </Cell>
                </Grid>
                <Grid>
                    <Cell width={1 / 3}>
                        <StyledCard>
                            <StyledReactPlayer url='https://www.youtube.com/watch?v=ymxEmbALjIo' controls={true} config={{youtube: { playerVars: { color: 'white' }}}} />
                            <StyledContent>
                                <StyledSecondaryTitle>How to wash a Kitten without making it to scared</StyledSecondaryTitle>
                            </StyledContent>
                        </StyledCard>
                    </Cell>
                    <Cell width={1 / 3}>
                        <StyledCard>
                            <StyledReactPlayer url='https://www.youtube.com/watch?v=O5rD9Gma_Z8' controls={true} config={{youtube: { playerVars: { color: 'white' }}}} />
                            <StyledContent>
                                <StyledSecondaryTitle>Cats in Bathtub (NEW) (HD) [Funny Pets]</StyledSecondaryTitle>
                            </StyledContent>
                        </StyledCard>
                    </Cell>
                    <Cell width={1 / 3}>
                        <StyledCard>
                            <StyledReactPlayer url='https://www.youtube.com/watch?v=6U_XREUMOAU' controls={true} config={{youtube: { playerVars: { color: 'white' }}}} />
                            <StyledContent>
                                <StyledSecondaryTitle>Startled Cats Compilation</StyledSecondaryTitle>
                            </StyledContent>
                        </StyledCard>
                    </Cell>
                </Grid>
                <StyledAction>
                    <a
                        href="https://youtube.com/channel/oceanprotocol"
                        target="_blank" // eslint-disable-line
                        rel="noopener"
                    >
                        Go to YouTube
                    </a>
                </StyledAction>
            </ContentRow>
        </Section>
    );
}

export default Videos;