import React from "react"
import Helmet from "react-helmet"

export default function Head() {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>Dao Ern Lim | Personal Website</title>
      <meta name="title" content="Dao Ern Lim | Personal Website" />
      <meta
        name="description"
        content="I'm a Computer Science student from Malaysia who are passionate about AI, mobile app development, full stack development and more!"
      />
      <meta
        name="keywords"
        content="Dao Ern Lim, daoern, Dao Ern, mobile app developer, computer science, student, Malaysia"
      />
      <meta name="author" content="Dao Ern Lim" />
    </Helmet>
  )
}
