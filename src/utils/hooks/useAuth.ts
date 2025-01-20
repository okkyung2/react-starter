import { useNavigate } from "@tanstack/react-router"

type Status = 'success' | 'failed'

function useAuth() {
  const navigate = useNavigate();

  const signIn = async (
    values: any
  ): Promise<
    | {
    status: Status
    message: string
  }
    | undefined
  > => {
    try {
      // const resp = await AuthService.signIn(values.email, values.password)
     
      // const redirectUrl = query.get(REDIRECT_URL_KEY)
      navigate({ to: "/app/dashboard" })
      return {
        status: 'success',
        message: ''
      }
    } catch (errors: any) {
      return {
        status: 'failed',
        message: errors?.response?.data?.description || errors.toString()
      }
    }
  }

  const signOut = async () => {
    // await apiSignOut()
    // handleSignOut()
  }

  return {
    // authenticated: token && signedIn,
    signIn,
  }
}

export default useAuth
