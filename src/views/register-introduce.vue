<template>
  <div class="container px-6 w-full">
    <div class="mx-auto mt-10">
      <h1 class="text-left font-bold text-2xl">평화통일 시민행동의 회원이 되어주세요!</h1>
    </div>
    <div class="mx-auto">
      <div class="align-middle text-left">
        <div> 평화통일 시민행동은 한반도의 평화와 통일을 함께 만들어갈 분들을 찾고 있습니다. </div>
        <div>통일은 우리에게 어떤 의미일까요.~~</div>
      </div>
      <div>
        <label>개인정보 수집동의</label>
        <input type="checkbox" v-model="isPrivacyAgree"/>
        <button @click="goToRegister">계정 생성</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      isPrivacyAgree : false
    }
  },
  methods: {
    goToRegister(){
      if(!this.isPrivacyAgree){
        alert("개인정보 수집동의를 해주세요.")
        return
      }
      this.$router.push({name : 'register'})
    }
  }
}
</script>

<style></style>
