import { Link } from 'react-router-dom'
import '../css/page.css'


export default function Notfound () {
    return (
        <>
       <h1 className='error'>SAYFA BULUNAMADI !<Link className='goHome' to="/"><p className='goHome'>Ana Sayfaya Dön</p></Link> </h1>
        </>
    )
}