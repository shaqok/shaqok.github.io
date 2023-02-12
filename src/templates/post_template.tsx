import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import Template from 'components/Common/Template'
import PostHead from 'components/Post/PostHead'
import PostContent from 'components/Post/PostContent'
import CommentWidget from 'components/Post/CommentWidget'
import { menuLinkType } from 'types/siteData.type.ts'

export type PostPageItemType = {
  node: {
    html: string
    frontmatter: PostFrontmatterType
  }
}

type PostTemplateProps = {
  site: {
    siteMetadata: {
      siteTitle: string
      menuLinks: menuLinkType[]
    }
  }
  data: {
    allMarkdownRemark: {
      edges: PostPageItemType[]
    },
    location: { 
      href: string 
    }
  }
}

const PostTemplate: FunctionComponent<PostTemplateProps> = ({
  data: {
    site: { siteMetadata: { siteTitle, menuLinks } },
    allMarkdownRemark: { edges }
  },
  location: { href },  
}) => {
  const {
    node: {
      html,
      frontmatter: {
        title,
        summary,
        date,
        categories,
        thumbnail: {
          childImageSharp: { gatsbyImageData },
          publicURL,
        },
      },
    },
  } = edges[0]

  return (
    <Template 
      siteTitle={siteTitle} 
      title={title} 
      description={summary} 
      siteUrl={href} 
      image={publicURL} 
      menuLinks={menuLinks}
    >
      <PostHead 
        title={title}
        date={date}
        categories={categories}
        thumbnail={gatsbyImageData}
      />
      <PostContent html={html} />
      <CommentWidget />
    </Template>
  )
}

export default PostTemplate

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    site {
      siteMetadata {
        siteTitle
        menuLinks {
          name
          link
        }
      }
    }
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
              publicURL
            }
          }
        }
      }
    }
  }
`