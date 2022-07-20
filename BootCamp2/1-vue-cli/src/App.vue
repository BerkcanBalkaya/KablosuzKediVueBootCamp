<template>
<app-header/>
<div class="container">
  <h3> Bu benim ilk Vue CLI uygulamam</h3>
  <p>Bugün component ve Vue CLI konularını görüyoruz</p>

</div>
<!-- İsim çevirimini otomatik olarak vue cli bizim için yapıyor yani farklı casingler çalışır =<counter-item>, <counterItem> da çalışır burada ve <counter-item/> yani self closing de çalışır -->
<!-- <CounterItem></CounterItem> -->
<CounterItem/>
</template>

<script>
import CounterItem from "@/components/CounterItem"
export default {
  components : {
    // key- value kullanımı burada. value yukarıda importladığımız yerden geliyor
    // key value aynı ise direk olarak CounterItem yazıp da bırakabiliriz burayı
    // Özel isim vermek için "özel-isim" : CounterItem gibi de kullanabiliriz. Bunu babel sağlar bize 
    CounterItem: CounterItem,
  }
}
</script>
