import { Routes, Route } from 'react-router-dom'

import { New } from '../pages/New'
import { Home } from '../pages/Home'
import { Profile } from '../pages/Profile'
import { Notes } from '../pages/Notes'

export function AppRoutes() {
  return (
    <Routes>
      <Route path={('/home', '/')} element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/notes" element={<Notes title="Interstellar" />} />
    </Routes>
  )
}
