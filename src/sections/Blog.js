import React, { PureComponent } from 'react'
import styled from 'styled-components'
import LazyLoad from 'react-lazyload'
import axios from 'axios'
import FadeIn from '../components/FadeIn'
import Title from '../components/Title'
import Section from '../components/Section'
import ContentRow from '../components/ContentRow'
import Grid from '../components/Grid'
import Cell from '../components/Cell'
import Spinner from '../components/Spinner'
import { colors, fonts, responsive } from '../styles'
import { social } from '../constants'

const StyledCard = styled.div`
    margin: 1rem 0;
    width: 100%;
    height: 100%;
    background: rgb(${colors.white});
    border-radius: 2px;
    box-shadow: 0 12px 30px 0 rgba(0, 0, 0, .07);
    color: rgb(${colors.grey});
`

const StyledHeader = styled.div`
    width: 100%;
    height: 200px;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`

const StyledContent = styled.div`
    width: 100%;
    padding: 0 2rem;

    @media screen and (${responsive.sm.max}) {
        padding: 0 1rem;
    }

    @media screen and (${responsive.sm.min}) {
        min-height: 260px;
    }
`

const StyledAction = styled.div`
    text-align: center;
    margin-top: 4rem;
    opacity: ${({ fetching }) => (fetching ? 0 : 1)};
    pointer-events: ${({ fetching }) => (fetching ? 'none' : 'auto')};
    visibility: ${({ fetching }) => (fetching ? 'hidden' : 'visible')};

    @media screen and (${responsive.sm.max}) {
        margin-top: 2rem;
    }

    a {
        text-transform: uppercase;
        font-family: ${fonts.family.button};
        display: inline-block;
    }
`

const StyledTitle = styled.h1`
    font-size: ${fonts.size.h4};
`

const StyledSubtitle = styled.p`
    font-size: ${fonts.size.base};
`

export default class Blog extends PureComponent {
    signal = axios.CancelToken.source()

    state = {
        posts: [],
        fetching: false
    }

    componentDidMount() {
        this.fetchPosts()
    }

    componentWillUnmount() {
        this.signal.cancel()
    }

    fetchPosts = async () => {
        try {
            this.setState({ fetching: true })
            const response = await axios.get('https://wt-bfc3ae9804422f8a4ea114dc7c403296-0.run.webtask.io/medium/oceanprotocol', {
                cancelToken: this.signal.token
            })
            const lastPosts = response.data.slice(0, 3)
            this.setState({ fetching: false, posts: lastPosts })
        } catch (err) {
            if (axios.isCancel(err)) {
                return null
            } else {
                this.setState({ fetching: false })
            }
        }
    }

    render() {
        const { posts, fetching } = this.state

        return (
            <Section id="blog" minHeight={930}>
                <ContentRow>
                    <Title>Learn more about Ocean Protocol</Title>
                    {fetching ? (
                        <Spinner />
                    ) : (
                        <LazyLoad once height={524} offset={100}>
                            <FadeIn>
                                <Grid>
                                    {posts.map(post => (
                                        <Cell smallGutter key={post.id} width={1 / 3}>
                                            <a href={post.postUrl}>
                                                <StyledCard>
                                                    <StyledHeader imageUrl={post.imageUrl} />
                                                    <StyledContent>
                                                        <StyledTitle>{post.title}</StyledTitle>
                                                        <StyledSubtitle>{post.subtitle}</StyledSubtitle>
                                                    </StyledContent>
                                                </StyledCard>
                                            </a>
                                        </Cell>
                                    ))}
                                </Grid>
                            </FadeIn>
                        </LazyLoad>
                    )}
                    <StyledAction fetching={fetching}>
                        <a href={social.blog}>
                            Go to Blog
                        </a>
                    </StyledAction>
                </ContentRow>
            </Section>
        )
    }
}
