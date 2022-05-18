import Vue from "vue";
import Vuetify from "vuetify";
import { createLocalVue, shallowMount } from "@vue/test-utils";
import NavigatorPage from "@/components/NavigatorPage.vue";

Vue.use(Vuetify);

const localVue = createLocalVue();

describe("NavigatorPage.vue", () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("Навигатор", () => {
    const wrapper = shallowMount(NavigatorPage, {
      localVue,
      vuetify,
    });
    expect(wrapper.html()).toContain("Демонстрация навигатора");
  });
});
