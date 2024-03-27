import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login, reset } from '../../features/auth/authSlice'
import {toast} from 'react-toastify'
import styles from './Login.module.css'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

  useEffect(()=>{

    if(isError){
      toast.error(message)
    }

    if(isSuccess || user){
      navigate('/')
    }

    dispatch(reset())

  },[user,isError,isSuccess,isLoading,message,navigate,dispatch])

  const handleSubmit = (e) => {
    e.preventDefault()

    const userData={
      email,password
    }

    dispatch(login(userData))
  }

  return (
    <form className={styles['login-form']} onSubmit={handleSubmit}>
      <h2>Giriş Sayfası</h2>
      <label>
        <span>Email : </span>
        <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
      </label>
      <label>
        <span>Parola : </span>
        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
      </label>

      <button className='btn'>Giriş Yap</button>
    </form>
  )
}

export default Login
