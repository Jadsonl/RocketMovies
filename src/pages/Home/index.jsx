import { Container } from './styles'
import { Header } from '../../Components/Header'
import { Button } from '../../Components/Button'
import { Movie } from '../../Components/Movie'
import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export function Home() {
  return (
    <Container>
      <Header />
      <main>
        <header>
          <h1>Meus filmes</h1>
          <Button
            type="button"
            title="Adicionar filme"
            icon={FiPlus}
            link="/new"
          />
        </header>
        <div>
          <Link to="/notes">
            <Movie starCount="1" />
          </Link>
          <Movie starCount="3" />
          <Movie starCount="5" />
          <Movie starCount="5" />
          <Movie starCount="5" />
          <Movie starCount="5" />
          <Movie starCount="5" />
          <Movie starCount="5" />
          <Movie starCount="5" />
          <Movie starCount="5" />
          <Movie starCount="5" />
        </div>
      </main>
    </Container>
  )
}
