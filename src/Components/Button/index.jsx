import { Link } from 'react-router-dom'
import { Container } from './styles'

export function Button({ icon: Icon, title, Delete = false, link, ...res }) {
  return (
    <Link to={link}>
      <Container {...res} $Delete={Delete}>
        {Icon && <Icon size="20px"></Icon>}
        {title}
      </Container>
    </Link>
  )
}
