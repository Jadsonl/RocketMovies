import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'
import { Routes, Route } from 'react-router-dom'

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
    </Routes>
  )
}
