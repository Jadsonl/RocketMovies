import { Input } from '../../Components/Input'
import { Button } from '../../Components/Button'
import { Container, Form, Background } from './styles'
import { Link } from 'react-router-dom'
import { FiLock, FiMail } from 'react-icons/fi'

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>Log</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>
        <Input type="email" icon={FiMail} placeholder="E-mail" />
        <Input type="password" icon={FiLock} placeholder="Senha" />
        <Button title="Entrar" />
        <Link to="/register">Criar conta</Link>
      </Form>
      <Background />
    </Container>
  )
}
