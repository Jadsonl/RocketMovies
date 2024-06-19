import styled from 'styled-components'

export const Container = styled.div``
export const Main = styled.main`
  padding: 47px 123px 0 106px;

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
  margin-top: 24px;
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
`
