import Vue from "vue";
import Vuetify from "vuetify";
import { createLocalVue, shallowMount } from "@vue/test-utils";
import UrlStatePage from "@/components/UrlStatePage.vue";

Vue.use(Vuetify);

const localVue = createLocalVue();

describe("UrlStatePage.vue", () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("Навигатор", () => {
    const wrapper = shallowMount(UrlStatePage, {
      localVue,
      vuetify,
    });
    expect(wrapper.html()).toContain("Демонстрация состояния в url");
  });
});
