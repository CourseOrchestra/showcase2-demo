import Vue from "vue";
import Vuetify from "vuetify";
import { createLocalVue, shallowMount } from "@vue/test-utils";
import UrlState from "@/components/UrlState.vue";

Vue.use(Vuetify);

const localVue = createLocalVue();

describe("UrlState.vue", () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("Навигатор", () => {
    const wrapper = shallowMount(UrlState, {
      localVue,
      vuetify,
    });
    expect(wrapper.html()).toContain("Демонстрация состояния в url");
  });
});
