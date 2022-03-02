<template>
  <div class="w-full px-6">
    <div>
      <div>우리가 지켜가야할 평화</div>
      <div>우리가 만들어 가야 할 통일입니다.</div>
      
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      name : ''
    }
  },
  methods: {
    test(){
      this.$axios.get(`/test`).then(_res=>{
        console.log(_res)
      })
    }
  }
};
</script>
