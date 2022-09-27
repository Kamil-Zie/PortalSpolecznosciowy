import React, {useContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom'

export const AuthContext = React.createContext()

export const AuthGuard = (props) => {

    const navigate = useNavigate();
    const [context, setContext] = useContext(AuthContext);

    useEffect(() => {
        if(!context.auth){
            navigate('/login')
        }
    }, [])
    
    return(
        <>{props.children}</>
    )
}