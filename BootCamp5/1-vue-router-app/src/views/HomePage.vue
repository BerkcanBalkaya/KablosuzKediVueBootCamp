<template>
  <div class="card border p-2">
    <div class="d-flex justify-content-end">
      <button class="btn btn-primary btn-sm" @click="$router.push({ name: 'NewBookmark' })">+ Yeni Ekle</button>
    </div>
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Başlık</th>
          <th scope="col">Url</th>
          <th scope="col">Açıklama</th>
          <th scope="col">Sil</th>
        </tr>
      </thead>
      <tbody>
        <!-- eğer id yerine index numarası istiyorsak v-for="(bookmark, index) in bookmarkList diyip altta {{index}} olarak kullanabiliriz." -->
        <tr v-for="bookmark in bookmarkList" :key="bookmark.id">
          <th scope="row">{{ bookmark.id }}</th>
          <td>{{ bookmark.title }}</td>
          <td>
            <a :href="bookmark.url" target="_blank">{{ bookmark.url }}</a>
          </td>
          <td>{{ bookmark.description }}</td>
          <td>
            <button @click="deleteBookmark(bookmark)" class="btn btn-sm btn-danger">Sil</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookmarkList: [],
    };
  },
  created() {
    this.$appAxios.get("/bookmarks").then((bookmarks_list_response) => {
      this.bookmarkList = bookmarks_list_response.data || [];
      console.log(bookmarks_list_response);
    });
  },
  methods: {
    deleteBookmark(bookmark) {
      this.$appAxios.delete(`/bookmarks/${bookmark.id}`).then((delete_response) => {
        console.log("delete_response :>> ", delete_response);
        if (delete_response.status == 200) {
          this.bookmarkList = this.bookmarkList.filter((b) => b.id != bookmark.id);
        }
      });
    },
  },
};
</script>
