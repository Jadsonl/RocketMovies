import { Container, Title, InfoUser, Main } from './styles'
import { LinkBack } from '../../Components/LinkBack'
import { Header } from '../../Components/Header'
import { Stars } from '../../Components/Stars'
import { FiClock } from 'react-icons/fi'

export function Notes({ title, descript, ...res }) {
  return (
    <Container>
      <Header />
      <Main>
        <LinkBack title="Voltar" to="/" />
        <Title>
          <h1>{title}</h1>
          <Stars starCount="4" />
        </Title>
        <InfoUser>
          <img src="https://github.com/Jadsonl.png" alt="Foto do usuario" />
          <span>Por Jadson Santana</span>
          <FiClock />
          <span>23/05/22 às 08:00</span>
          <p>{descript}</p>
        </InfoUser>
      </Main>
    </Container>
  )
}
