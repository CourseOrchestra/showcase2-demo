<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="16" sm="12" md="8">
        <platform-emblem id="emblem1"></platform-emblem>
        <platform-emblem id="emblem2"></platform-emblem>
      </v-col>
      <v-col cols="16" sm="12" md="8">
        <platform-emblem id="emblem3"></platform-emblem>
        <platform-emblem id="emblem4"></platform-emblem>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PlatformEmblem from "showcase2/src/components/PlatformEmblem";

export default {
  name: "PlatformEmblemPage",

  components: {
    PlatformEmblem,
  },

  data: () => ({}),
};
</script>
