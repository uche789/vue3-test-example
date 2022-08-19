import { mount } from "@vue/test-utils";
import BookComponent from "@/components/Book.vue";
import { Book } from "@/services/bookService";

const mockBook: Book = {
  id: 1,
  title: "Test Driven Development: By Example",
  authors: ["Kent Beck"],
  pageCount: 0,
  categories: ["Software development"],
  status: "PUBLISHED",
  longDescription:
    "Clean code that works--now. This is the seeming contradiction that lies behind much of the pain of programming. Test-driven development replies to this contradiction with a paradox--test the program before you write it. A new idea? Not at all. Since the dawn of computing, programmers have been specifying the inputs and outputs before programming precisely. Test-driven development takes this age-old idea, mixes it with modern languages and programming environments, and cooks up a tasty stew guaranteed to satisfy your appetite for clean code that works--now.",
};

describe.skip("components/book", () => {
  it("should display book details", () => {
    const wrapper = mount(BookComponent, {
      props: {
        book: mockBook,
      },
    });

    expect(wrapper.find(".book-item__thumb").exists()).toBeTruthy();
    expect(wrapper.find(".book-item__title").text()).toBe(mockBook.title);
    expect(wrapper.find(".book-item__authors").text()).toBe("Kent Beck");
  });
});
