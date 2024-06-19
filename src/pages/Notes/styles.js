import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`
export const Main = styled.main`
  padding: 47px 123px 0 106px;
  overflow-y: auto;
  > h1 {
    font-size: 36px;
  }

  > div {
  }

  img {
    width: 16px;
    border-radius: 50px;
  }

  svg {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`
export const Title = styled.div`
  margin: 24px 0;
  display: flex;
  align-items: baseline;
  gap: 19px;
  ul {
    padding: initial;
  }
`
export const InfoUser = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 40px;
`
export const Tags = styled.div``
export const Description = styled.div`
  > p {
    text-align: justify;
    margin: 40px 0;
    padding: 1em;
  }
`
