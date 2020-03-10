import React, { Component } from 'react'
import Helmet from 'react-helmet'
import GitHubButton from 'react-github-btn'
import { graphql, Link } from 'gatsby'
import Layout from '../layout'
import PostListing from '../components/PostListing'
import SEO from '../components/SEO'
import config from '../../data/SiteConfig'
import tania from '../../content/images/css.png'

export default class Index extends Component {
	render() {
		const { data } = this.props

		const latestPostEdges = data.latest.edges

		return (
			<Layout>
				<Helmet title={`${config.siteTitle} – Full Stack Software Developer`} />
				<SEO />
				<div className="container">
					<div className="lead">
						<div className="elevator">
							<h1>{`Hey, I'm Tania`}</h1>
							<p>
								I'm a full stack software developer creating{' '}
								<a
									href="https://github.com/taniarascia"
									target="_blank"
									rel="noopener noreferrer"
								>
									open source
								</a>{' '}
								projects and <Link to="/blog">writing</Link> about modern
								JavaScript, Node.js, and development.
							</p>
							<div className="social-buttons">
								<GitHubButton
									href="https://github.com/taniarascia"
									data-size="large"
									data-show-count="true"
								>
									taniarascia
								</GitHubButton>
							</div>
						</div>
						<div className="newsletter-section">
							<img src={tania} className="newsletter-avatar" alt="Tania" />
							<div>
								<h3>Email Newsletter</h3>
								<p>
									I write tutorials. Get an update when something new comes out
									by signing up below!
								</p>
								<a className="button" href="https://taniarascia.substack.com">
									Subscribe
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="container front-page">
					<section className="section">
						<h2>
							Latest Articles
							<Link to="/blog" className="view-all">
								View all
							</Link>
						</h2>
						<PostListing simple postEdges={latestPostEdges} />
					</section>
				</div>
			</Layout>
		)
	}
}

export const pageQuery = graphql`
	query IndexQuery {
		latest: allMarkdownRemark(
			limit: 6
			sort: { fields: [fields___date], order: DESC }
			filter: { frontmatter: { template: { eq: "post" } } }
		) {
			edges {
				node {
					fields {
						slug
						date
					}
					excerpt
					timeToRead
					frontmatter {
						title
						tags
						categories
						thumbnail {
							childImageSharp {
								fixed(width: 150, height: 150) {
									...GatsbyImageSharpFixed
								}
							}
						}
						date
						template
					}
				}
			}
		}
	}
`
