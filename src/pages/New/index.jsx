import { Header } from '../../Components/Header'
import { Container, Form, Textarea, Highlighter, Buttons } from './styles'
import { Input } from '../../Components/Input'
import { Tag } from '../../Components/Tag'
import { LinkBack } from '../../Components/LinkBack'
import { Button } from '../../Components/Button'

export function New() {
  return (
    <Container>
      <Header />
      <main>
        <LinkBack to="/" title="Voltar" />
        <h2>Novo filme</h2>
        <Form>
          <Input placeholder="Título" />
          <Input placeholder="Sua nota (de 0 a 5)" type="number" />
          <Textarea placeholder="Observações"></Textarea>

          <Highlighter>
            <h3>Marcadores</h3>
            <div>
              <Tag value="React" isNew={false} />
              <Tag placeholder="Novo marcador" isNew />
            </div>
          </Highlighter>
          <Buttons>
            <Button title="Excluir filme" link="#" Delete />
            <Button title="Salvar alterações" />
          </Buttons>
        </Form>
      </main>
    </Container>
  )
}
