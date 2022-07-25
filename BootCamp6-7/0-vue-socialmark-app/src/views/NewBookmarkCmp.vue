<template>
  <div class="login_register_container">
    <h3 class="text-2xl text-center mb-3">Yeni Ekle</h3>
    <!-- burada eklenen autofocus sayfa yenilenmesi anında cursor gelmesi, ref ile de kaydettikten sonra tekrar inputa gelmesi için -->
    <input ref="title" v-model="userData.title" type="text" placeholder="Başlık" class="input mb-3" />
    <input v-model="userData.url" type="text" placeholder="URL" class="input mb-3" />
    <select v-model="userData.categoryId" class="input mb-3">
      <option disabled value="" selected>Kategori</option>
      <option v-for="category in categoryList" :key="category.id" :value="category.id">{{ category.name }}</option>
    </select>
    <textarea v-model="userData.description" placeholder="Açıklama" class="input mb-3" cols="30" rows="10"></textarea>
    <div class="flex items-center justify-end gap-x-1">
      <button @click="$router.push({ name: 'HomePage' })" class="secondary-button">İptal</button>
      <button @click="onSave" class="default-button">Kaydet</button>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      categoryList: [],
      // Burada userData dediğimiz olay user etkileşimi yapılan data anlamında yani user verisi değil
      userData: {
        title: null,
        url: null,
        categoryId: null,
        description: null,
      },
    };
  },
  methods: {
    onSave() {
      console.log(this.userData);
      console.log(this._getCurrentUser);
      const saveData = {
        ...this.userData,
        userId: this._getCurrentUser?.id,
        created_at: new Date(),
      };
      this.$appAxios.post("/bookmarks", saveData).then((save_bookmark_response) => {
        console.log(save_bookmark_response);
        // this.userData = {
        //   title: null,
        //   url: null,
        //   categoryId: null,
        //   description: null,
        // };
        // Yukarıdaki de yapılabilir formu boşaltmak için ya da şu da yapılabilir
        Object.keys(this.userData)?.forEach((field) => (this.userData[field] = null));
        this.$router.push({ name: "HomePage" });
      });
    },
  },
  mounted() {
    this.$appAxios.get("/categories").then((category_response) => {
      // console.log(category_response);
      // console.log(this._getCurrentUser);

      this.categoryList = category_response?.data || [];
    });
    // burada inputta kullanılan refin mounted tarafında yapılabilmesi created tarafında yapılamamasının sebebi lifecycle da html elementlerinin renderlanıp koyulması gerektiğindendir
    // bazı durumlarda mounted olduğunda refs ile elementimize erişemeyiz bug gibi bir şey bu durumlarda minik bir gecikme veya vue.js de olan this.$nextTick(()=> {}) kullanılabilir
    console.dir(this.$refs.title);
    // bu tarz ref neden = bazen inputun içerisinde bir bilgiye erişmek istersek dinamik durumlarda query ile almak zor olacağından ref ile isimlendirip oradan erişmek daha kolay olur.
    this.$refs.title.focus();
  },
  computed: {
    ...mapGetters(["_getCurrentUser"]),
  },
};
</script>
