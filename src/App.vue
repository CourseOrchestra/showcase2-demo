<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-btn href="/" text>
        <span class="mr-2">Welcome</span>
      </v-btn>
      <v-btn href="/logocurs" text>
        <span class="mr-2">Логотип КУРСа</span>
      </v-btn>
      <v-btn href="/navigator" text>
        <span class="mr-2">Навигатор</span>
      </v-btn>
      <v-btn href="/grid" text>
        <span class="mr-2">Грид</span>
      </v-btn>
      <v-btn href="/urlstate" text>
        <span class="mr-2">Состояние в url</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style>
.v-btn {
  text-transform: none !important;
}
</style>
