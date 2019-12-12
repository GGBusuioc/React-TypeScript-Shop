import { required, IValues } from "./Form";

describe("required", () => {
  test("When required is called with empty title, 'This must be populated' should be returned", () => {
    // todo implement test
    const values: IValues = {
      title: ""
    };
    const result = required("title", values);
    // todo check the result is correct
    expect(result).toBe("This must be populated");
  });
});
