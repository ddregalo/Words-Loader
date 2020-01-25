import { shallowMount } from "@vue/test-utils";
import WordsLoader from "@/components/WordLoader.vue";

describe("WordLoader Component", () => {
  it("renders props.msg when passed", () => {
    const words = ["hold", "touch", "dream", "fall", "drift", "sway"];
    const wrapper = shallowMount(WordsLoader, {
      propsData: { words }
    });

    words.forEach(word => {
      expect(wrapper.text()).toContain(word);
    });
  });
});
