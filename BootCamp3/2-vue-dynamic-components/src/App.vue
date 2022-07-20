<template>
  <div class="container">
    <div class="d-flex justify-content-between">
      <button class="red" @click="activeComponent = 'Red'">Red</button>
      <button class="blue" @click="activeComponent = 'Blue'">Blue</button>
      <button class="green" @click="activeComponent = 'Green'">Green</button>
    </div>
    <!-- <Red v-if="activeComponent == 'Red'" class="mb-2" />
    <Blue v-if="activeComponent == 'Green'" class="mb-2" />
    <Green v-if="activeComponent == 'Blue'" class="mb-2" /> -->
    <!-- Aşağının türkçesi = burada olacak component budur diyip :is ile gösteriyoruz -->
    <!-- <component :is="activeComponent" /> -->
    <!-- Mesela altta props ile çalışan red componentini nasıl kullanacağımız var -->
    <keep-alive>
      <component :is="activeComponent" msg="Red Component 2">
        <h3 class="bg-green text-white">Green Component</h3>
      </component>
    </keep-alive>
  </div>
</template>
<script>
import Red from "@/components/Red";
import Green from "@/components/Green";
import Blue from "@/components/Blue";
export default {
  components: {
    Red,
    Blue,
    Green,
  },
  data() {
    return {
      activeComponent: "Red",
    };
  },
};
</script>

Sadece component taglari kullanılırsa her bir component geçişinde önceki
component kaldırılacağı için state bilgisi tutulmaz. keep alive taglari
kullanırsak ise tekrar mounted etmez ama bu da bize life cycle kaybı yaşatır.
bundan kurtulmak için bize aslında keep alive 2 tane life cycle hook verir
bunlar activated ve deactivated
