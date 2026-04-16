import { Navigate } from "react-router-dom"

export default function ProtectedRoute() {
    const token=localStorage.getItem("token")
  return token? childern:<Navigate to="/login" replace/>
}