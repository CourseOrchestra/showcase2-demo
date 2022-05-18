import Vue from "vue";
import Vuetify from "vuetify";
import { createLocalVue, shallowMount } from "@vue/test-utils";
import PlatformEmblem from "@/components/PlatformEmblem.vue";

Vue.use(Vuetify);

const localVue = createLocalVue();

describe("PlatformEmblem.vue", () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("Эмблема Платформы КУРС", () => {
    const wrapper = shallowMount(PlatformEmblem, {
      localVue,
      vuetify,
    });
    expect(wrapper.html()).toContain("curs.ru");
  });
});
