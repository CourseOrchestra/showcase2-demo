import Vue from "vue";
import Vuetify from "vuetify";
import { createLocalVue, shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/PlatformEmblem.vue";

Vue.use(Vuetify);

const localVue = createLocalVue();

describe("PlatformEmblem.vue", () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("renders props.msg when passed", () => {
    const msg = "Welcome to Vuetify";
    const wrapper = shallowMount(HelloWorld, {
      localVue,
      vuetify,

      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
