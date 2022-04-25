import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { Row, Col, Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home ({ allPostsData }) { 
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>i can haz cheezburger?</p>
        <p>
          I love cats so much I need more than just{' '}
          <a href="https://www.instagram.com/inazumarina_cats">insta</a>.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Find out what's going on with the sprogs:</h2>
        <Container>
          <Row xs={3}>
            {allPostsData.map(({ id, date, title, image }) => (
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Img variant="top" src={image} height='50px' width='50px'/>
                    <Card.Title>
                      <Link href={`/posts/${id}`}>
                        <a>{title}</a>
                      </Link>
                    </Card.Title>
                    <Card.Footer>
                      <small className={utilStyles.lightText}>
                        <Date dateString={date} />
                      </small>
                    </Card.Footer>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Layout>
  )
}