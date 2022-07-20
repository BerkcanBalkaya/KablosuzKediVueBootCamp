<template>
  <!-- <p>
    {{ $store.state.user }}
    {{ $store.state.permissions }} -->
  <!-- <ul>
    <li v-for="permission in $store.state.permissions" :key="permission">
      {{ permission }}
    </li>
  </ul> -->
  <!-- <ul>
    <li v-for="user in $store.state.userList" :key="user">
      {{ user }}
    </li>
  </ul> -->
  <!-- <ul> -->
  <!-- $store diye uzun uzun yazabileceğimiz gibi computed ile de bu işi gerçekleştirebiliriz. -->
  <!-- <li v-for="(item, index) in $store.getters.woodItems" :key="index"> -->
  <!-- <li v-for="(item, index) in mobilyaElemanlari" :key="index"> -->
  <!-- Aşağıdaki gibi woodItems kullanımı da mapGetters sayesinde gerçekleşmektedir. -->
  <!-- <li v-for="(item, index) in woodItems" :key="index">
      {{ item.title }}
    </li>
  </ul> -->
  <!-- {{$store.state.fullName}} -->
  <!-- <button @click="updateName" >FullName bilgisini değiştir .. </button> -->
  <!-- </p> -->
  <UserList />
  <NewUser />
</template>

<script>
// import { mapGetters } from "vuex";
import UserList from "@/components/UserList";
import NewUser from "@/components/NewUser";
export default {
  name: "App",
  components: {
    UserList,
    NewUser,
  },
  created() {
    // console.log(this.$store);
    // console.log(this.$store.state.user);
    // console.log(this.$store.state.itemList.filter((i) => i.type == "Mobilya"));
    // console.log(this.$store.getters._woodItems);
    // //Öteki tarafta passwordu silinmiş halini gönderiyoruz gibi düşün bu sayede yani veri manipüle edilmiş oluyor.
    // // console.log(this.$store.getters.activeUser);
    // console.log("this.activeUser :>> ", this.activeUser);
  },
  methods: {
    // updateName(){
    //   this.$store.state.fullName="Batuhan Balkaya";
    //   // Bu tarafta push yaptığımızda store.js tarafında getters otomatik olarak tekrar çalışıyor ve filtreleme işini yapıp woodItems'ı geri döndürüyor yani reactif
    //   this.$store.state.itemList.push({
    //     id: 6,
    //     title: "Raf",
    //     type: "Mobilya",
    //   })
    // }
  },
  // computed:{
  // Computed dışında maplemeyi de yapabiliriz
  // mobilyaElemanlari(){
  //   return this.$store.getters.woodItems
  // }
  // },
  // computed : mapGetters(["woodItems","activeUser"])
  // Normalde computed burada mapGetters ile birlikte kullanıldığı için kendi custom computedlarımızı yazamayacaktık. Bu durumu düzeltmek için şöyle kullanılır
  computed: {
    // ...mapGetters(["woodItems", "activeUser"]),
    // //map getirsin başka bir syntaxı da şudur
    // ...mapGetters({
    //   woodItems: "_woodItems",
    //   activeUser: "_activeUser",
    // }),
    // customComputed(){}
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
