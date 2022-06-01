<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" md="4">
        <v-text-field
          readonly
          outlined
          v-model="appVersion"
          hint="Версия клиентской части"
          label="Версия клиентской части"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img :src="require('../assets/welcome.png')" contain />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import packageInfo from "@/../package";

export default {
  name: "WelcomePage",

  data: () => ({
    appVersion: packageInfo.version,
  }),
};
</script>
