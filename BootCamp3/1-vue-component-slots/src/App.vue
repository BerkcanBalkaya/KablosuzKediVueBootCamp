<template>
  <!-- <Modal :on-save="onSave" :title="'Modal Title'" :content="content" /> -->
  <Modal>
    <template #title>
      <h3>Slot ile gelen title bilgisi</h3>
    </template>
    <!-- Burada #content yerine v-slot:content de yazılabilirdi aynı şeyler -->
    <template #content>
      <p class="green">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut totam
        consequatur exercitationem molestiae modi deleniti laborum quisquam
        corporis similique culpa. Mollitia deserunt qui aliquid animi autem
        earum eaque eligendi dolorem.
      </p>
    </template>
    <template #default> Bu default olarak gösterilecek yazıdır. </template>
  </Modal>
</template>
<script>
import Modal from "@/components/ModalComponent";
export default {
  components: {
    Modal,
  },
  data() {
    return {
      content: `<h3 class = "text-red">title</h3> `,
    };
  },
  methods: {
    onSave() {
      alert("Saved");
    },
  },
};
</script>
