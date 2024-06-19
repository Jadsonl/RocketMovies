import styled from 'styled-components'

export const Container = styled.div`
  grid: input;
  display: flex;
  align-items: center;
  width: 100%;
  height: 56px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  margin-bottom: 8px;
  border-radius: 10px;
  > input {
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: transparent;
    &[type='number']::-webkit-inner-spin-button,
    &[type='number']::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    width: 100%;
    height: 56px;

    padding: 12px;
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      font-size: 14px;
      padding-left: 14px;
    }
  }

  > svg {
    margin-left: 12px;
  }
`
