<template>
  <div class="container">
    <div class="header">
      <slot name="title" />
      <!-- <h1>{{ title }}</h1> -->
    </div>
    <hr />
    <slot name="content" />
    <!-- <div class="content" v-html="content"></div> -->
    <hr />
    <!-- Default olarak gösterilecek yazı app de ayarlandığı için böyle bırakırsak o yazı çıkıyor. -->
    <slot />
    <div class="footer text-right">
      <button class="mr-2">Kapat</button>
      <button @click="onSave" class="green">Kaydet</button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["onSave", "title", "content"],
};
</script>
