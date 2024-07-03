import styled from 'styled-components'

export const Container = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100vh;

  > main {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 47px 123px 104px 106px;
    h2 {
      font-size: 34px;
      margin: 24px 0 40px;
      font-weight: 500;
    }
    h3 {
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-weight: 500;
      margin: 40px 0 24px;
    }
  }

  @media (max-width: 768px) {
    > main {
      padding: 1rem;
    }
  }
`
export const Link = styled.a`
  color: ${({ theme }) => theme.COLORS.PINK};
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  width: 70px;
`
export const Form = styled.form`
  display: grid;
  gap: 40px;
  grid-template-areas:
    'input input'
    'textarea textarea'
    'marcador marcador'
    'buttonDelete button';

  @media (max-width: 768px) {
    gap: 20px;

    header {
      flex-direction: column;
      align-items: flex-start;
    }

    div {
      gap: 10px;
    }

    grid-template-areas:
      'input'
      'input'
      'textarea'
      'marcador'
      'buttonDelete'
      'button';
  }
`
export const Textarea = styled.textarea`
  grid-area: textarea;
  height: 274px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  resize: none;
  border: none;
  border-radius: 10px;
  padding: 19px 0 0 16px;
`
export const Highlighter = styled.div`
  grid-area: marcador;
  > div {
    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
    }
    background-color: ${({ theme }) => theme.COLORS.BLACK};
    border-radius: 10px;
    padding: 16px;
  }
`
export const Buttons = styled.div`
  display: contents;
  margin: 40px 0 104px;
  > a {
    button {
      width: 100%;
      display: block;
      padding: 17px 0;
    }
  }
  &:nth-child(1) {
    grid-area: buttonDelete;
  }
  &:nth-child(2) {
    grid-area: button;
  }
`
