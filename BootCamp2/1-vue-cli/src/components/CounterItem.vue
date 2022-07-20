<template>
    <div class="container-sm">
        <h3>{{counter}}</h3>
        <button @click="counter--" class="red sm">-</button>
        <button @click="counter++" class="green sm">+</button>
  </div>
</template>

<script>
// Dışarıya açabilmek için export kullanıyoruz 
//Şu an gördüğümüz options.api bu arada
export default{
    data(){
        return {
            counter: 0,
        }
    }
}
</script>