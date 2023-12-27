import React, { useState, useEffect } from 'react';
import fruitsData from '../api/categoriespage/fruits.json';
import "../css/Basket.css"

// Basket adında bir fonksiyon oluşturuluyor. Bu bileşen, sepette bulunan ürünleri ve sepeti temizleme fonksiyonunu alır.
const Basket = ({ cart, clearCart }) => {
  const totalAmount = cart.reduce((total, item) => total + (item.price || 0), 0);
  // Sepetteki ürünlerin toplam tutarını hesaplamak için reduce fonksiyonu kullanılır.
  // Her bir ürünün fiyatını toplam tutara ekler, eğer fiyat bilgisi yoksa 0 olarak kabul eder.
  // Başlangıç değeri 0'dır.


  return (
    <div className="fbasketContainer">
      <h3 className='basket'>Sepetim</h3>
      <ul className='basket-list'>
        {cart.map(item => (
          <li key={item.id} className='basket-item'>
            <span className='itemName'>{item.title}</span>
            <span className='itemPrice'>{item.price} TL</span>
          </li>
        ))}
      </ul>
      <hr className='basket-divider' />
      <p className='basketTotal'>Toplam Tutar: {totalAmount} TL</p>
      <button className='basketClear' onClick={clearCart}>Sepeti Boşalt</button>
    </div>
  );
};

// Fruits adında bir fonksiyon oluşturuluyor.
// State hook'ları kullanılarak meyve listesi ve sepet bilgilerini saklamak üzere state'ler tanımlanıyor.
const Fruits = () => {
  const [fruits, setFruits] = useState([]);
  const [cart, setCart] = useState([]);


 // useEffect hook'u, component yüklendiğinde çalışacak işlemleri içerir.
   //Datadan veriler çağırılır
  useEffect(() => {
    setFruits(fruitsData);
  }, []);

   // setCart fonksiyonu, önceki sepet bilgisine yeni ürünü ekler.
  const addToCart = (product) => {
    setCart([...cart, product]);
  };
// setCart fonksiyonu, sepet bilgisini boş bir diziyle günceller, yani sepeti temizler.
  const clearCart = () => {
    setCart([]);
  };

  return (
    <>
      <div className="watercontainer">
        <div className='data'>
          {fruits.length && fruits.map(product => (
            <div className='cartDetail' key={product.id}>
              <button className='pageButton' onClick={() => addToCart(product)}>+</button>
              <img className='pageImage' src={product.image} alt="" />
              <h3 className='dataTitle'>{product.price} TL </h3>
              <h3 className='pageTitle'>{product.title}</h3>
              <h3 className='pageDesc'> {product.description} </h3>
            </div>
          ))}
        </div>
      </div>

      <div className="cart">
        <Basket cart={cart} clearCart={clearCart} />
      </div>
    </>
  );
};

//map fonksiyonu, bir dizi içindeki her eleman üzerinde belirtilen bir işlemi gerçekleştirmek için kullanılır. Bu fonksiyon, orijinal diziyi değiştirmez ve döndürülen değeri yeni bir dizi olarak verir. map fonksiyonunun kullanımı, 
//her bir eleman üzerinde belirli bir işlem yapmak ve bu işlemin sonucunu yeni bir diziye eklemek için oldukça yaygındır.
export default Fruits;
