import React, { PureComponent } from 'react'
import axios from 'axios'
import LazyLoad from 'react-lazyload'
import Title from '../components/Title'
import Section from '../components/Section'
import ContentRow from '../components/ContentRow'
import Grid from '../components/Grid'
import Cell from '../components/Cell'
import Spinner from '../components/Spinner'
import { social, webtasks } from '../constants'
import {
    StyledCard,
    StyledHeader,
    StyledContent,
    StyledTitle,
    StyledSubtitle,
    StyledAction
} from './Blog.css'

const url = webtasks.host + '/medium/oceanprotocol'

class BlogList extends PureComponent {
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
            const response = await axios.get(url, {
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

        return fetching ? (
            <Spinner />
        ) : (
            <Grid>
                {posts.map(post => (
                    <Cell smallGutter key={post.id} width={1 / 3}>
                        <a href={post.postUrl}>
                            <StyledCard>
                                <StyledHeader imageUrl={post.imageUrl} />
                                <StyledContent>
                                    <StyledTitle>{post.title}</StyledTitle>
                                    <StyledSubtitle>
                                        {post.subtitle}
                                    </StyledSubtitle>
                                </StyledContent>
                            </StyledCard>
                        </a>
                    </Cell>
                ))}
            </Grid>
        )
    }
}

const Blog = () => (
    <Section id="blog" viewport>
        <ContentRow>
            <Title>From our Blog</Title>
        </ContentRow>

        <LazyLoad once height={524} offset={200}>
            <BlogList />
        </LazyLoad>

        <StyledAction>
            <a href={social.blog}>Go to Blog</a>
        </StyledAction>
    </Section>
)

export default Blog
