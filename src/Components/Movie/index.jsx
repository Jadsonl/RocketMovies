import { Container, Description } from './styles'
import { NoteItem } from '../NoteItem'
import { Stars } from '../Stars'

export function Movie({ title, starCount = 0 }) {
  return (
    <Container>
      <h2>Interestellar</h2>
      <Stars starCount={starCount}> </Stars>
      <Description>
        <h2>{title}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem labore,
          corrupti itaque dolor, facilis eligendi eius placeat facere similique,
          inventore ex ratione quasi consequatur. Excepturi debitis nemo
          veritatis commodi architecto.
        </p>
        <NoteItem title="Ficção Científica"></NoteItem>
        <NoteItem title="Drama"></NoteItem>
        <NoteItem title="Família"></NoteItem>
      </Description>
    </Container>
  )
}
