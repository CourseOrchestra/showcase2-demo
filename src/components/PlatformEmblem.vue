<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <a
          id="platform-emblem"
          href="https://share.curs.ru/platformcourse/doc/1/general.html"
          target="_blank"
        >
          <v-img
            :src="require('../assets/kurs.png')"
            class="my-3"
            contain
            height="200"
          />
        </a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "PlatformEmblem",

  data: () => ({}),
};
</script>
