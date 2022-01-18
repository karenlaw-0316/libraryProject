import React from "react"
import {
  poemDiv,
  poemAuthorTitle,
  poemContent,
  poemMain,
  logoImage,
} from "../../style.module.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container } from "react-bootstrap"
import topics from "../data/Topic.json"

export default function Poem({ pageContext: { poem } }) {
  function getLogoImage() {
    const poemTopic = poem.category
    const filtered = topics.filter(topic => topic.chn_name === poemTopic)
    return filtered[0].logo_url
  }

  const logo = getLogoImage()

  return (
    <div>
      <img
        src={require(`../images/logo/${logo}`).default}
        alt="logo"
        className={logoImage}
      ></img>
      <Layout>
        <Seo title={poem.title} />
        <Container>
          <div className={poemMain}>
            <div className={poemDiv}>
              <h4 className={poemAuthorTitle}>{poem.title}</h4>
              <h6 className={poemAuthorTitle}>{poem.author_name}</h6>
              <br />
              <p className={poemAuthorTitle}>
                {poem.introduction ? poem.introduction : ""}
              </p>
              <br />
              <p className={poemContent}>{poem.content}</p>
              <br />
              <p className={poemAuthorTitle}>
                {poem.comments ? poem.comments : ""}
              </p>
              <br />
              <h6 className={poemAuthorTitle}>{poem.published_info}</h6>
            </div>
            <a
              href={`/${poem.category}`}
              style={{ alignSelf: "center", marginBottom: "50px" }}
            >
              <button
                className={"btn btn-outline-dark rounded-0"}
                type="button"
              >
                返回上頁
              </button>
            </a>
          </div>
        </Container>
      </Layout>
    </div>
  )
}
