<template>
  <AppHeader />
  <div class="flex flex-row">
    <Sidebar @category-changed="updateBookmarkList" />
    <app-bookmark-list v-if="bookmarkList.length > 0" :items="bookmarkList" />
    <div v-else>bookmark bulunmamaktadır</div>
  </div>
</template>
<script>
import Sidebar from "@/components/Home/SidebarCmp";
export default {
  components: {
    Sidebar,
  },
  data() {
    return {
      bookmarkList: [],
    };
  },
  created() {
    // Burada expand category bize şunu sağlıyor. bookmarkları çekiyoruz ama category isimli arkadaşı da expand et diyoruz bunu yaparken
    // Bunu kullanırken isimlendirme categoryId şeklinde olmalı öteki tarafta id belirlendirken ötekisi de categories olucak gibi ama zaten bu fake api üzerinde fazla kasma
    this.$appAxios.get("/bookmarks?_expand=category&_expand=user").then((bookmark_list_response) => {
      console.log(bookmark_list_response);
      this.bookmarkList = bookmark_list_response?.data || [];
    });
  },
  methods: {
    updateBookmarkList(categoryId) {
      const url = categoryId ? `/bookmarks?_expand=category&_expand=user&categoryId=${categoryId}` : `/bookmarks?_expand=category&_expand=user`;
      this.$appAxios.get(url).then((bookmark_list_response) => {
        this.bookmarkList = bookmark_list_response?.data || [];
      });
    },
  },
};
</script>
