
import { useState,useEffect } from "react";
import {aylarGetir,reset,yillarGetir,islemEkle} from '../../features/islem/islemSlice'
import { useSelector,useDispatch } from "react-redux";


const GirisForm = () => {

    const [isim,setIsim]=useState('')
    const [deger,setDeger]=useState('')
    const [tip,setTip]=useState('gelir')
    const [secilenAy,setSecilenAy]=useState('Ocak')
    const [secilenYil,setSecilenYil]=useState('2023')

    const {aylar,yillar}=useSelector((state)=>state.islem)
    const {user}=useSelector((state)=>state.auth)

    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(aylarGetir())
      dispatch(yillarGetir())
      dispatch(reset())
    }, [])
    

    const handleSubmit = async(e)=>{
        e.preventDefault();

        await dispatch(islemEkle({
            isim,
            deger,
            tip,
            secilenAy,
            secilenYil,
            email:user.email
        }))

        setIsim('')
        setDeger('')
    }

  return (
    <>
    <h3>
        Bütçe için Giriş İşlemi
        <br />
        <br />
        <form onSubmit={handleSubmit}>
            <label>
                <span>İşlem İsmi: </span>
                <input type="text" required onChange={(e)=>setIsim(e.target.value)} value={isim} />
            </label>

            <label>
                <span>Değer: </span>
                <input type="number" required onChange={(e)=>setDeger(e.target.value)} value={deger} />
            </label>

            <label>
                <span>Tip: </span>
                <select onChange={(e)=>setTip(e.target.value)}>
                    <option value="gelir">Gelir</option>
                    <option value="gider">Gider</option>
                </select>
            </label>

            <label>
                <span>Aylar: </span>
                <select onChange={(e)=>setSecilenAy(e.target.value)}>
                    {aylar && aylar.map(ay=>(
                        <option key={ay.id} value={ay.ad}>{ay.ad}</option>
                    ))}
                </select>
            </label>

            <label>
                <span>Yıllar: </span>
                <select onChange={(e)=>setSecilenYil(e.target.value)}>
                    {yillar && yillar.map(yil=>(
                        <option key={yil.id} value={yil.ad}>{yil.ad}</option>
                    ))}
                </select>
            </label>

            <button>İşlem Ekle</button>
        </form>
    </h3>
    </>
  )
}

export default GirisForm
