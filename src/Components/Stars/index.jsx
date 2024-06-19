import { Container } from './styles'
import { IoStar } from 'react-icons/io5'

export function Stars({ starCount = 0 }) {
  const stars = Array(5)
    .fill(false)
    .map((_, index) => index < starCount)
  return (
    <Container>
      {stars.map((isFilled, index) => (
        <li key={index}>
          <IoStar fill={isFilled ? '#EECF6D' : 'white'} />
        </li>
      ))}
    </Container>
  )
}
