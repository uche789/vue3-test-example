import { mount } from "@vue/test-utils";
import SearchComponent from "@/components/Search.vue";

describe("components/book", () => {
  it("should display book details", async () => {
    const wrapper = mount(SearchComponent);

    // use await to make sure that the DOM has been rendered
    const searchInput = await wrapper.find("[data-id=search-input] input");
    const searchSubmitButton = await wrapper.find(
      "[data-id=search-submit-button]"
    );

    expect(searchInput.exists()).toBeTruthy();
    expect(searchSubmitButton.exists()).toBeTruthy();

    await searchInput.setValue("web development");
    await searchSubmitButton.trigger("click");
    await expect(wrapper.emitted().searchTerm[0]).toEqual(["web development"]);
  });
});
