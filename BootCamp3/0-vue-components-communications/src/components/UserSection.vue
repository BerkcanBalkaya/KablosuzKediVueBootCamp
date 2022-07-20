<template>
  <ListSection />
  <AddSection @new-item="$emit('new-item', $event)" />
</template>
<script>
import ListSection from "@/components/ListSection";
import AddSection from "@/components/AddSection";
export default {
  // Props ile aldığın bir değeri array ise mesela birinci seviyede de değeri değişeceği için biz yukarıda değer değişimi yapamayız uyarı verir (push yapma diyo yani )
  props: ["userList"],
  // yeni eklenen bir özellik emit ile çıkartılan emitsleri dökümante etmemizi anlar
  emits: ["new-item"],
  components: {
    AddSection,
    ListSection,
  },
};
</script>
