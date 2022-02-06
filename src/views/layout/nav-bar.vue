<template>
  <div class="fixed flex flex-col w-56 h-full left-0 border-r-2 border-gray-400">
    <div>
      <div class="h-30">
        <router-link to="/">
          <img src="../../assets/logo.png" alt="logo" />
        </router-link>
      </div>
      <ul class="flex flex-col ustify-center items-start px-6 text-base font-bold gap-y-6">
        <li>
          <router-link to="/introduce" replace>평화통일시민행동은</router-link>
        </li>
        <li>
          <router-link to="/board/activity-group" replace>활동소모임</router-link>
        </li>
        <li>
          <router-link to="/board/seminar" replace>강연회</router-link>
        </li>
        <li>
          <router-link to="/board/study-group" replace>연구소모임</router-link>
        </li>
        <li>
          <router-link to="/board/library" replace>자료실</router-link>
        </li>
      </ul>
    </div>

    <div class="bg-blue-400 text-white px-6 py-10 mt-6 h-full">
      <div>
        <span class="font-bold text-sm">평화통일 시민행동</span>
        <ul class="flex flex-col text-xs mt-4 gap-y-2">
          <li>
            <a target="_blank" href="https://www.youtube.com/channel/UCZt-1PiEY-6736W_buoBwAw">유튜브 채널</a>
          </li>
          <li>
            <a target="_blank" href="https://view.hyosungcms.co.kr/shorten-url/2s9Y6jJ3vt">정기후원</a>
          </li>
          <li>
            <router-link to="/register">회원가입</router-link>
          </li>
        </ul>
      </div>

      <div class="mt-6">
        <span class="font-bold text-sm">Community</span>
        <ul class="flex flex-col text-xs mt-4 gap-y-2">
          <li>
            <router-link to="/welcome">대표인사말</router-link>
          </li>
          <li>
            <router-link to="/introduce/activity">사업소개</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
