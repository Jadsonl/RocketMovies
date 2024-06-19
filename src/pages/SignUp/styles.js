import styled from 'styled-components'
import backgroundImg from '../../assets/BGmovie.png'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`
export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
  > h2 {
    margin-bottom: 48px;
  }
  > p {
    margin-bottom: 48px;
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
  > a {
    color: ${({ theme }) => theme.COLORS.PINK};
    button {
      width: 100%;
      display: flex;
      justify-content: center;
      margin: 24px 0 42px;
    }
  }
`
export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`
