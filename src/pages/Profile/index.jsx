import { Button } from '../../Components/Button'
import { Input } from '../../Components/Input'
import { LinkBack } from '../../Components/LinkBack'
import { Container, Form, Avatar } from './styles'
import { FiCamera, FiLock, FiMail, FiUser } from 'react-icons/fi'

export function Profile() {
  return (
    <Container>
      <header>
        <LinkBack to="/" title="Voltar" />
      </header>
      <Form>
        <Avatar>
          <img src="https://github.com/Jadsonl.png" alt="" />
          <label htmlFor="file-upload">{<FiCamera />}</label>
          <input type="file" id="file-upload" />
        </Avatar>
        <Input value="Jadson Santana" icon={FiUser} type="text" />
        <Input value="jadsonunico90@gmail.com" icon={FiMail} type="e-mail" />
        <Input placeholder="Senha atual" icon={FiLock} type="password" />
        <Input placeholder="Nova senha" icon={FiLock} type="password" />
        <Button title="Salvar" />
      </Form>
    </Container>
  )
}
