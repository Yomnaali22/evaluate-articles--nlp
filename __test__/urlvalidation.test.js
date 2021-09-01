import { validateUrl } from "../src/client/js/urlValidation"



describe("Testing the validateUrl existence ", () => {
  test("Testing validateUrl() function", () => {
      expect(validateUrl).toBeDefined();
})});


describe("Testing the validateUrl if it's a function or not", () => {
  test("Testing validateUrl() function", () => {
      expect(typeof(validateUrl)).toBe("function");
})});

describe("Testing the URL", () => {
      test("Testing validateUrl() function", () => {
          const url = "https://patthomson.net/2020/11/30/plan-to-write/";
      expect(validateUrl(url)).toBeTruthy();
})});