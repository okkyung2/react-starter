import { createFileRoute, redirect } from '@tanstack/react-router'
const isAuthenticated = false;

export const Route = createFileRoute('/')({
  beforeLoad: ({}) => {
    if (!isAuthenticated) {
      throw redirect({
        to: '/auth/signin',
      })
    }
    else {
      throw redirect({
        to: '/app/dashboard',
      })
    }
  },
})