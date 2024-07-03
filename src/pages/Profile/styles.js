import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  > header {
    padding: 64px 0 60px 144px;
    width: 100%;
    height: 144px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  }
  @media (max-width: 768px) {
    > header {
      > a {
        justify-content: flex-end;
        padding: 1rem;
      }
    }
  }
`
export const Form = styled.form`
  max-width: 340px;
  margin: -84px auto 0;
  > div:nth-child(3) {
    margin-bottom: 24px;
  }
  > input {
    background-color: red;
  }
  > a {
    button {
      margin-top: 24px;
      display: flex;
      width: 100%;
      justify-content: center;
    }
  }
`

export const Avatar = styled.div`
  position: relative;
  margin: -115px auto 32px;
  width: 186px;
  height: 186px;
  > img {
    border-radius: 50%;
    width: 186px;
    height: 186px;
  }
  > label {
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 48px;
    height: 48px;

    position: absolute;
    right: 7px;
    bottom: 7px;
    cursor: pointer;
  }
  > input {
    display: none;
  }

  @media (max-width: 768px) {
    width: 140px;
    height: 140px;

    > img {
      width: 140px;
      height: 140px;
    }
  }
`
