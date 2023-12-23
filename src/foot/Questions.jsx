import '../css/page.css'

export default function Questions() {
    return (
        <>
            <h1 className="questionsMainHeader">Sıkça Sorulan Sorular ?</h1>
            <div className="questionscontainer">

                <h2 className='questionsHeader'>"Ne İstersin" nedir?  <p className='questions'>"Ne İstersin" , çeşitli ürün ve hizmetleri bulabileceğiniz bir çevrimiçi platformdur. İhtiyaçlarınızı karşılamak için geniş bir ürün ve hizmet yelpazesi sunar.</p></h2>

                <h2 className='questionsHeader'>Nasıl bir ürün veya hizmet bulabilirim?   <p className='questions'>Ana sayfada bulunan kategoriler sekmesini kullanarak ihtiyacınıza uygun ürünü  kolayca bulabilirsiniz.</p></h2>

                <h2 className='questionsHeader'>Nasıl bir sipariş verebilirim?  <p className='questions'>Kategoriler sayfasına giderek "Sepete Ekle" seçeneklerini kullanarak siparişinizi oluşturabilirsiniz.</p> </h2>

                <h2 className='questionsHeader'> Sipariş durumu nasıl takip edilir?  <p className='questions'>Hesabınıza giriş yaparak veya sipariş onay e-postanızdaki takip numarasını kullanarak sipariş durumunuzu kolayca takip edebilirsiniz.</p> </h2>
            </div>
        </>
    )


}