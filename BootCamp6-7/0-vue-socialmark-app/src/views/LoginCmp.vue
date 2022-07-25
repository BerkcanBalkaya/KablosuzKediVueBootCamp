<template>
  <div class="login_register_container">
    <h3 class="text-2xl text-center mb-3">Login</h3>
    <input v-model="userData.username" type="text" placeholder="Kullanıcı Adı" class="input mb-3" />
    <input v-model="userData.password" type="password" placeholder="Şifre" class="input mb-3" />
    <button class="default-button" @click="onSubmit">Giriş yap</button>
    <span class="text-center mt-3 text-sm">
      Üye değilim,
      <router-link :to="{ name: 'RegisterPage' }" class="text-red-900 hover:text-black">Üye olmak istiyorum!</router-link>
    </span>
  </div>
</template>
<script>
import CryptoJS from "crypto-js";
export default {
  data() {
    return {
      userData: {
        username: null,
        password: null,
      },
    };
  },
  methods: {
    onSubmit() {
      // typicode json-server da varolan bir kullanıcı kontrolü için get ile yapabiliriz ama normalde bizim normal şifreyi alıp enc liyip sonra karşılaştırmamız falan lazım biz onu yapmıcaz şimdilik
      const password = CryptoJS.HmacSHA1(this.userData.password, this.$store.getters._saltKey).toString();
      this.$appAxios
        .get(`/users?username=${this.userData.username}&password=${password}`)
        .then((login_response) => {
          // burada kısaca eğer login response datası varsa yani bizim senaryomuzda doğru giriş yaptıysak ve kullanıcı döndüyse state tarafındaki kullanıcıya dönen kullanıcı setlenir.
          if (login_response?.data?.length > 0) {
            this.$store.commit("setUser", login_response?.data[0]);
            this.$router.push({ name: "HomePage" });
          } else {
            alert("Böyle bir kullanıcı bulunamadı ...");
          }
          console.log(login_response);
        })
        .catch((e) => console.log(e));
      // .finally(()=> this.loader=false);
      // finally ile bu istek bittiğinde bir şey çalıştıracaksak belirtebiliriz.
    },
  },
};
</script>
