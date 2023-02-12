import React, { FC } from 'react'
import { graphql } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import { siteType } from 'types/siteData.type'
import Template from 'components/Common/Template'

type AboutPageProps = {
  data: {
    site: siteType
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
      publicURL: string
    }
  }
}

const About: FC<AboutPageProps> = ({
  data: {
    site: {
      siteMetadata: { siteTitle, description, siteUrl, menuLinks },
    },
    file: {
      childImageSharp: { gatsbyImageData },
      publicURL,
    },
  },
}) => {
  return (
    <Template
      siteTitle={siteTitle}
      title={siteTitle}
      description={description}
      siteUrl={siteUrl}
      image={publicURL}
      menuLinks={menuLinks}
    >
      <div>About Page</div>
    </Template>
  )
}

export default About

export const getAboutPage = graphql`
  query getAboutPageQuery {
    site {
      siteMetadata {
        siteTitle
        description
        siteUrl
        menuLinks {
          name
          link
        }
      }
    }
    file(name: { eq: "profile-image" }) {
      childImageSharp {
        gatsbyImageData(width: 120, height: 120)
      }
      publicURL
    }
  }
`
