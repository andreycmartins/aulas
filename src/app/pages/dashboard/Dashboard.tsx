import { Link, useHistory } from "react-router-dom"

export const Dashboard = () => {

  const history = useHistory();

  const handleClick = () => {
    history.push("/pagina-inicial")
  }

  return (
    <div>
      <p>Dashboard</p>
      <Link to="/login">login</Link>
    </div>
  )
}
