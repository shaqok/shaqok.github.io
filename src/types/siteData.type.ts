export type menuLinkType = {
  name: string
  link: string
}

export type siteMetadataType = {
  siteTitle: string
  description: string
  siteUrl: string
  menuLinks: menuLinkType[]
}

export type siteType = {
  siteMetadata: siteMetadataType
}
