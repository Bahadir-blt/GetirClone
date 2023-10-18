import '../css/Page.css'


export default function Page() {
    return (
        <>
            <div className="leftBar">
       
                <ul >
                 <p className='PageCategories'> Kategoriler </p>
                 <hr />
                    <li><img src="src/image/Page Image/domatis.png" alt="" /><a href="#">Yeni Ürünler</a></li>
                    <li> <img src="src/image/Page Image/domatis.png" alt="" /><a href="">İndirimler</a></li>
                    <li><a href="">Su & İçecek</a></li>


                </ul>
            </div>
        </>
    )
}