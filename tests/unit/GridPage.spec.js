import Vue from "vue";
import Vuetify from "vuetify";
import { createLocalVue, shallowMount } from "@vue/test-utils";
import GridPage from "@/components/GridPage.vue";

Vue.use(Vuetify);

const localVue = createLocalVue();

describe("GridPage.vue", () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("Навигатор", () => {
    const wrapper = shallowMount(GridPage, {
      localVue,
      vuetify,
    });
    expect(wrapper.html()).toContain("itemsperpage");
  });
});
