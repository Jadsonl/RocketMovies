import { Container } from './styles'
import { FiArrowLeft } from 'react-icons/fi'

export function LinkBack({ title, ...res }) {
  return (
    <Container {...res}>
      <FiArrowLeft></FiArrowLeft>
      {title}
    </Container>
  )
}
