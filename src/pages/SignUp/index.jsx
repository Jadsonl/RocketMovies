import { Input } from '../../Components/Input'
import { Button } from '../../Components/Button'
import { Container, Form, Background } from './styles'
import { FiLock, FiMail, FiUser } from 'react-icons/fi'
import { LinkBack } from '../../Components/LinkBack'

export function SignUp() {
  return (
    <Container>
      <Background />
      <Form>
        <h1>Movie</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Crie sua conta</h2>
        <Input type="text" icon={FiUser} placeholder="name" />
        <Input type="email" icon={FiMail} placeholder="E-mail" />
        <Input type="password" icon={FiLock} placeholder="Senha" />

        <Button class="buttonCadastrar" title="Cadastrar" />

        <LinkBack title="Voltar para o login" to="/" />
      </Form>
    </Container>
  )
}
