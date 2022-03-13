<template>
  <div class="container mx-auto w-full h-full pl-6">
    <div class="justify-center w-3/5">
      <form class="grid grid-flow-row" @submit.prevent="register">
        <label>이름</label>
        <input class="border rounded-md" type="text" v-model="name" />
        <label>Email</label>
        <input class="border rounded-md" type="email" v-model="email" />
        <label>비밀번호</label>
        <input class="border rounded-md" type="password" v-model="password" />
        <label>전화번호</label>
        <input class="border rounded-md" type="text" v-model="phoneNumber" />
        <label>주소</label>
        <input class="border rounded-md" type="text" v-model="address" />
        <button class="w-20 border rounded-md mt-4">가입</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      name: "",
      email: "",
      password: "",
      phoneNumber: "",
      address: ""
    }
  },
  methods:{
    register(){
      let registerRequest = {
        name : this.name,
        email : this.email,
        password: this.password,
        phoneNumber: this.phoneNumber,
        address: this.address
      }
      this.$axios.post("/user/register", registerRequest).then(_res=>{
        console.log(_res)
      })
    }
  }
}
</script>

<style>

</style>