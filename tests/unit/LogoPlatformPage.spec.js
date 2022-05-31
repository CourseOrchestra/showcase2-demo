import Vue from "vue";
import Vuetify from "vuetify";
import { createLocalVue, shallowMount } from "@vue/test-utils";
import LogoPlatformPage from "@/components/LogoPlatformPage.vue";

Vue.use(Vuetify);

import { showcase2 } from "showcase2";
Vue.use(showcase2);

const localVue = createLocalVue();

describe("LogoPlatformPage.vue", () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("Логотип КУРСа", () => {
    const wrapper = shallowMount(LogoPlatformPage, {
      localVue,
      vuetify,
    });
    expect(wrapper.html()).toContain("logo-platform");
  });
});
