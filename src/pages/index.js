import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../layout'
import PostListing from '../components/PostListing'
import SEO from '../components/SEO'
import config from '../../data/SiteConfig'
import logo from '../images/logo.png'

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
							<h1>{`Hello!`}</h1>
							<p>
								Welcome to the <Link to="/blog">blog</Link> of the{' '}
								<a
									href="https://mediacreators.studio"
									target="_blank"
									rel="noopener noreferrer"
								>
									mediacreators.studio
								</a>
								, a creative & digital design studio. Here we share all our
								challenges, inspiration and tools, we use on our creative
								professional work.
							</p>
						</div>
						<div className="elevator-logo">
							<img src={logo} className="newsletter-avatar" alt="Tania" />
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
