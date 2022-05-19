import Vue from "vue";
import Vuetify from "vuetify";
import { createLocalVue, shallowMount } from "@vue/test-utils";
import PlatformEmblemPage from "@/components/PlatformEmblemPage.vue";

Vue.use(Vuetify);

const localVue = createLocalVue();

describe("PlatformEmblemPage.vue", () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("Эмблема Платформы КУРС", () => {
    const wrapper = shallowMount(PlatformEmblemPage, {
      localVue,
      vuetify,
    });
    expect(wrapper.html()).toContain("platform-emblem");
  });
});
