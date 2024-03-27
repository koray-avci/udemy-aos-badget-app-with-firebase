import {useEffect} from 'react'
import styles from './Home.module.css'
import { useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import GirisForm from './GirisForm'
import { son10IslemGetir } from '../../features/islem/islemSlice'

const Home = () => {

  const {user}=useSelector((state)=>state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {islemler} = useSelector((state)=>state.islem)

  useEffect(() => {
    if(!user){
      navigate('/login')
    }

    if(user){
      dispatch(son10IslemGetir(user.email))
    }
  }, [user,navigate])
  

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {islemler && islemler.map(i=>(
          <div style={{display:'flex',justifyContent:'space-between'}}>
          <div key={i.id}>{i.isim}:</div>
          <div>{i.deger}</div>
          </div>
        ))}
      </div>
      <div className={styles.sidebar}>
        <GirisForm />
      </div>
    </div>
  )
}

export default Home
