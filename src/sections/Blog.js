import React, { Component } from 'react';
import styled from 'styled-components';
import Title from '../components/Title';
import Section from '../components/Section';
import ContentRow from '../components/ContentRow';
import Grid from '../components/Grid';
import Cell from '../components/Cell';
import Spinner from '../components/Spinner';
import { colors, responsive } from '../styles';

const StyledCard = styled.div`
  margin: 1rem 0;
  width: 100%;
  height: 100%;
  background: rgb(${colors.white});
  border-radius: 2px;
  box-shadow: 0 12px 30px 0 rgba(0, 0, 0, 0.07);
`;

const StyledHeader = styled.div`
  width: 100%;
  height: 200px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const StyledContent = styled.div`
  width: 100%;
  height: 250px;
  padding: 0 2rem;
  @media screen and (${responsive.sm.max}) {
    padding: 0 1rem;
  }
`;

const StyledTitle = styled.h1`font-size: 1.5rem;`;

const StyledSubtitle = styled.p`font-size: 1rem;`;

class Blog extends Component {
  state = {
    posts: [],
    fetching: false
  };
  componentDidMount() {
    this.fetchPosts();
  }
  fetchPosts = () => {
    this.setState({ fetching: true });
    fetch('https://wt-863e332a77d038d29fa50d15961b5367-0.run.webtask.io/medium/oceanprotocol')
      .then(res => res.json())
      .then(posts => {
        const lastPosts = posts.slice(0, 3);
        this.setState({ fetching: false, posts: lastPosts });
      })
      .catch({ fething: false });
  };
  render = () => (
    <Section id="blog" minHeight={850}>
      <ContentRow>
        <Title>Learn more about Ocean Protocol</Title>
        <Grid center>
          {this.state.fetching ? (
            <Spinner />
          ) : (
            this.state.posts.map(post => (
              <Cell key={post.id} width={1 / 3}>
                <a
                  href={post.postUrl}
                  target="_blank" // eslint-disable-line
                  rel="noopener"
                >
                  <StyledCard>
                    <StyledHeader imageUrl={post.imageUrl} />
                    <StyledContent>
                      <StyledTitle>{post.title}</StyledTitle>
                      <StyledSubtitle>{post.subtitle}</StyledSubtitle>
                    </StyledContent>
                  </StyledCard>
                </a>
              </Cell>
            ))
          )}
        </Grid>
      </ContentRow>
    </Section>
  );
}

export default Blog;
