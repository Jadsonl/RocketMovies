import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  color: ${({ theme }) => theme.COLORS.PINK};
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 70px;
`
