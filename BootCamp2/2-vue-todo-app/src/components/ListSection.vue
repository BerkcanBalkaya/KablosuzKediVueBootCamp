<template>
  <ResultBar :itemCount="provided.todoList.length" />
</template>
<script>
export default {
  inject: ["providedData"],
};
</script>
