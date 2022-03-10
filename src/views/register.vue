<template>
  <div class="container px-6 w-full">
    <div>
      <h1>회원가입</h1>
    </div>
    <div class="align-middle text-center">
      <div>
        <label>이름</label>
        <input type="text" v-model="name" placeholder="이름을 입력해주세요."/>
      </div>
      <div>
        <label>Email</label>
        <input type="email" v-model="email" placeholder="이메일을 입력해주세요."/>
      </div>
      

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>