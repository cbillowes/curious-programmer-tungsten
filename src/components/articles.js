import React from "react"
import Preview from "@components/preview"

const Articles = ({ edges }) => {
  if (edges && edges.length > 0) {
    return edges.map(({ node }, index) => {
      return (
        <Preview
          {...node.fields}
          {...node.frontmatter}
          key={index}
          index={index}
          timeToRead={node.timeToRead}
          excerpt={node.excerpt}
        />
      )
    })
  }
}

export default Articles
