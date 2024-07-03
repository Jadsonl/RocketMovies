import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 116px;
  padding: 30px 126px;
  display: flex;
  align-items: center;
  gap: 64px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_300};
  border-bottom-style: solid;
  border-bottom-width: 1px;

  > a {
    h1 {
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
    gap: 0;
    div {
      display: none;
    }
  }
`
export const Profile = styled.span`
  flex: 2;
  display: flex;
  align-items: center;
  text-align: end;
  > div {
    a > span {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 14px;
    }
    a > strong {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
  > div {
    margin-right: 9px;
    display: flex;
    width: 125px;
    flex-direction: column;
    line-height: 24px;
  }

  > a {
    > img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }
  }
  @media (max-width: 768px) {
    justify-content: flex-end;
  }
`
