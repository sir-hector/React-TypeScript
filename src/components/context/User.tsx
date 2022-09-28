import { useContext } from "react"
import { UserContext } from "./UserContext"

export const User = () => {
    const userContext = useContext(UserContext)
    const handleLogin = () => {
        if(userContext) {
            userContext.setUser(null)
        }
    }
    const handleLogout = () => {
        userContext.setUser({
            name: 'Karol',
            email: 'kraus'
        })
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {userContext.user?.name}</div>
        </div>
    )
}