import { useState } from "react"

export const Login = () => {

  const [email, setEmail] = useState('teste')
  const [password, setPassword] = useState('')

  const handleLogin = () => {console.log(email, password)}

  return (
    <div>
      <form>
        <label>
          <span>Email</span>
          <input value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
          <span>Senha</span>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <button type="button" onClick={handleLogin}>
          Entrar
        </button>
      </form>
    </div>
  )
}
