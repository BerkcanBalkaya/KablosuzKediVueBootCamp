<template>
  <div class="container">
    <h3>Alışveriş listesi</h3>
    <hr />
    <div class="my-2">
      <input type="text" placeholder="ne alacaksın" @keydown.enter="onSave" />
    </div>
    <ul v-if="itemCount > 0">
      <li v-for="item in itemList" :key="item.id" class="d-flex justify-content-between align-items-center">
        <span>{{ item.title }}</span>
        <button @Click="onDelete(item)" class="sm red">Sil</button>
      </li>
    </ul>
    <div v-else class="bg-blue p-3 text-white">Herhangi bir ürün yoktur</div>
    <small class="text-blue d-flex justify-content-end align-items-center">{{ itemCount }} Adet ürün alınacaktır.</small>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      itemList: [],
    };
  },
  mounted() {
    axios.get("http://localhost:3000/items").then((item_response) => {
      console.log("item_response :>> ", item_response);
      // eğer item_response da bir sorun varsa boş bir array göndermesi için ya da kullanıldı aşağıda
      this.itemList = item_response.data || [];
    });
  },
  methods: {
    onSave(e) {
      const saveObject = {
        title: e.target.value,
        created_at: new Date(),
        completed: false,
      };
      axios.post("http://localhost:3000/items", saveObject).then((save_response) => {
        console.log(save_response);
        this.itemList.push(save_response.data);
        e.target.value = "";
      });
    },
    onDelete(item) {
      axios.delete(`http://localhost:3000/items/${item.id}`).then((delete_response) => {
        console.log("delete_response :>> ", delete_response);
        this.itemList = this.itemList.filter((i) => i.id != item.id);
      });
    },
  },
  computed: {
    itemCount() {
      return this.itemList.length || 0;
    },
  },
};
</script>

then ile geriye dönen responsu console üzerinde gösteriyoruz. id otomatik olarak verilir o yüzden vermemiz gerekmez
