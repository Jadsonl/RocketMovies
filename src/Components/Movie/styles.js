import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  padding: 32px;
  border-radius: 10px;
  margin-bottom: 20px;

  > h1 {
    font-size: 24px;
  }
`
export const Description = styled.div`
  > p {
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    margin-bottom: 20px;
  }
`
