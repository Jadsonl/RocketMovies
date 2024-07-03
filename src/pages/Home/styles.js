import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  > a {
    color: initial;
  }
  main {
    padding: 47px 123px 0 106px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    overflow-y: auto;
    flex: 1;

    header {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      align-items: center;
      margin-bottom: 40px;
    }

    div {
      gap: 20px;
    }

    @media (max-width: 768px) {
      padding: 20px;

      header {
        flex-direction: column;
        align-items: flex-start;
      }

      div {
        gap: 10px;
      }
    }
  }
`
