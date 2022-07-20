<template>
  <div class="container">
    <UserSection />
  </div>
</template>

<script>
import UserSection from "@/components/UserSection";
export default {
  components: {
    UserSection,
  },
  data() {
    return {
      providedData: {
        userList: ["Berkcan", "Batu", "Ogün", "Mert"],
      },
    };
  },
  methods: {
    newItem(item) {
      this.providedData.userList.push(item);
    },
  },
  provide() {
    return {
      userList: this.providedData.userList,
      newItem: this.newItem,
    };
  },
};
</script>
