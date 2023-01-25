import { useEffect, useState } from "react"

export const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const emailLenght = email.length 

  useEffect(() => {
    console.log(email)
  }, [email])
  useEffect(() => {
    console.log(password)
  }, [password])

  const handleLogin = () => {
    console.log(email, password)
  }

  return (
    <div>
      <form>
        <p>Quantidade de caracteres no email: {email.length}</p>
        <label>
          <span>Email</span>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          <span>Senha</span>
          <input type="password" onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="button" onClick={handleLogin}>
          Entrar
        </button>
      </form>
    </div>
  )
}
