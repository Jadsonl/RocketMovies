import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  align-items: center;
  background-color: ${({ theme, $Delete }) =>
    $Delete ? theme.COLORS.BLACK : theme.COLORS.PINK};
  color: ${({ theme, $Delete }) =>
    $Delete ? theme.COLORS.PINK : theme.COLORS.BACKGROUND_900};

  /*   height: 48px; */
  padding: 13px 32px;
  border: 0;
  font-weight: 500;
  border-radius: 10px;
  cursor: pointer;
`
