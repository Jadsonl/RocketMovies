// src/Components/Tag/styles.js

import styled from 'styled-components'

export const Container = styled.span`
  display: inline-flex;
  gap: ${({ $isNew }) => ($isNew === undefined ? 'none' : '16px')};
  background-color: ${({ theme, $isNew }) =>
    $isNew ? 'transparent' : theme.COLORS.BACKGROUND_900};
  border: ${({ theme, $isNew }) =>
    $isNew ? `2px dashed ${theme.COLORS.BACKGROUND_900}` : 'none'};
  font-size: ${({ size }) => size || '16px'};
  padding: 5px 14px;
  border-radius: 5px;
  margin-right: 8px;

  > input,
  > button {
    max-width: 128px;
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > input::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`
