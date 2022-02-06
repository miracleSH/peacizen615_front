<template>
  <div class="container ml-4 w-full">
    <div class="justify-center w-96 mx-auto text-gray-400">
      <ul class="flex flex-row gap-x-3 mt-10 justify-center items-center border-b-2 border-gray-300">
        <li>
          <button @click="_goTo('introduce')">평화통일시민행동은</button>
        </li>
        <li>
          <button @click="_goTo('history')">연혁</button>
        </li>
        <li>
          <button @click="_goTo('welcome')">대표인사말</button>
        </li>
        <li>
          <button @click="_goTo('introduceActivity')">사업소개</button>
        </li>
      </ul>
    </div>
    <div v-if="pageName === 'introduce'">
      <div>
        <div class="justify-center mt-16">
          <h1 class="text-4xl text-center font-bold font-sans">평화통일시민행동은</h1>
        </div>
        <div class="mt-6 pl-4 w-full h-full justify-center">
          <img src="../assets/introduce.png" alt="introduce" />
        </div>
        <div class="w-16 border-t-2 border-black mx-auto"></div>
        <div class="justify-center text-center font-semibold text-3xl mt-10">
          <div>자주, 평화, 통일의 미래를</div>
          <div>우리 손으로 만들어 갑시다.</div>
        </div>
        <div class="mt-4 px-6 text-center text-gray-400">
          <div class="">
            평화통일시민행동은 7.4공동성명과 6.15공동선언에 담긴 평화통일을 위한 남북의 합의정신을 지키고 그 실현을 위해 온 힘을 다하고 있습니다.
          </div>
          <div>남북간 대결을 부추기며 평화적 통일을 방해하는 세력과 그들의 논리를 시민들과 함께 배격해 나갈 것입니다.</div>
          <div>시민 스스로가 남북교류협력의 주인이 되어 통일의 새역사를 직접 써 나갈수 있도록 평화통일시민행동이 앞장서겠습니다.</div>
          <div>대결과 적대, 분단의 역사를 끝내고 화해와 평화 번영의 통일조국의 미래를 만들어 가는 길에 평화통일시민행동과 함께 해 주세요.</div>
        </div>
      </div>
      <div class="flex flex-row mx-16 px-6 mt-10 justify-center text-center">
        <div class="border-r-2 w-full">
          <div class="font-semibold text-gray-300 text-5xl">01</div>
          <div class="text-2xl font-medium mt-2">행동</div>
          <div class="px-7">촛불광장의 시민이 희망입니다.</div>
        </div>
        <div class="border-r-2 w-full">
          <div class="font-semibold text-gray-300 text-5xl">02</div>
          <div class="text-2xl font-medium mt-2">배움</div>
          <div class="px-6">평화통일의 해법을 찾아 스스로 연구하고 공부합니다.</div>
        </div>
        <div class="border-r-2 w-full">
          <div class="font-semibold text-gray-300 text-5xl">03</div>
          <div class="text-2xl font-medium mt-2">청춘</div>
          <div class="px-6">청춘의 열정으로 멈춤 없이 전진합니다.</div>
        </div>
        <div class="border-r-2 w-full">
          <div class="font-semibold text-gray-300 text-5xl">04</div>
          <div class="text-2xl font-medium mt-2">우리민족</div>
          <div class="px-6">8천만 민족이 통일의 주인입니다.</div>
        </div>
      </div>
    </div>
    <welcome v-if="pageName === 'welcome'"></welcome>
    <history v-if="pageName === 'history'"></history>
    <activity v-if="pageName === 'introduceActivity'" />
  </div>
</template>
<script>
export default {
  components: {
    welcome: () => import("../views/welcome.vue"),
    history: () => import("../views/history.vue"),
    activity: () => import("../views/activity.vue"),
  },
  data() {
    return {
      pageName: "introduce",
    };
  },
  methods: {
    _goTo(name) {
      this.pageName = name;
    },
  },
};
</script>
