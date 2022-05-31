import Vue from "vue";
import Vuetify from "vuetify";
import { createLocalVue, shallowMount } from "@vue/test-utils";
import LogoCursPage from "@/components/LogoCursPage.vue";

Vue.use(Vuetify);

import { showcase2 } from "showcase2";
Vue.use(showcase2);

const localVue = createLocalVue();

describe("LogoCursPage.vue", () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("Логотип КУРСа", () => {
    const wrapper = shallowMount(LogoCursPage, {
      localVue,
      vuetify,
    });
    expect(wrapper.html()).toContain("logo-curs");
  });
});
