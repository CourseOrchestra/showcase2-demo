<template>
  <v-container>
    <br />
    <br />
    <v-row>
      <v-col class="font-weight-bold">
        <h2>Версии</h2>
        <br />
        <v-text-field
          readonly
          outlined
          v-model="libVersion"
          label="showcase2"
        ></v-text-field>
        <v-text-field
          readonly
          outlined
          v-model="appVersion"
          label="showcase2-demo"
        ></v-text-field>
      </v-col>
      <br />
      <v-col>
        <v-img :src="require('../assets/welcome.png')" contain />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import appPackageInfo from "@/../package";
import libPackageInfo from "showcase2/package";
import { setTitle } from "@/utils/common";

export default {
  name: "WelcomePage",

  data: () => ({
    appVersion: appPackageInfo.version,
    libVersion: libPackageInfo.version,
  }),

  created() {
    setTitle("Welcome");
  },
};
</script>

<style lang="scss" scoped>
.v-text-field ::v-deep label {
  font-size: 1.4em;
}
</style>
