import { Container, Profile } from './styles'
import { Input } from '../Input'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <Container>
      <Link to="/">
        <h1>Movies</h1>
      </Link>
      <Input type="text" placeholder="Pesquisar pelo título" />
      <Profile href="/">
        <div>
          <Link to="/profile">
            <span>Jadson Santana</span>
          </Link>
          <Link to="/">
            <strong>sair</strong>
          </Link>
        </div>
        <Link to="/profile">
          <img src="https://github.com/Jadsonl.png" alt="Imagen do Usuario" />
        </Link>
      </Profile>
    </Container>
  )
}
