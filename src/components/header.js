import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'

const Container = styled('div')`
  margin-bottom: 1.45rem;
  background: rebeccapurple;
`

const HeaderContent = styled('div')`
  margin: 0 auto;
  padding: 1rem 2rem;
  @media (max-width: 540px) {
    padding: 1rem 1rem;
  }
`

const Header = ({ siteTitle }) => (
  <Container>
    <HeaderContent>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </HeaderContent>
  </Container>
)

export default Header
