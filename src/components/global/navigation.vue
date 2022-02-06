<template>
  <div>
    <ul class="flex flex-row">
      <li v-for="(name, index) in listNames" :key="index">{{ name }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    listNames: {
      type: Array,
      required: true,
    },
  },
};
</script>
