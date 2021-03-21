import Counter from "./index";

let counter = null;
describe("test the counter", () => {
  console.log(1);
  beforeAll(() => {
    console.log(2);
    console.log("test is starting ...");
  });

  beforeEach(() => {
    console.log(3);
    counter = new Counter();
  });

  test("Initialization ", () => {
    expect(counter.number).toBe(0);
  });

  test("add", () => {
    counter.add();
    expect(counter.number).toBe(1);
  });

  test("minus", () => {
    counter.minus();
    expect(counter.number).toBe(-1);
  });

  test("should return 2", () => {
    counter.addTwo();
    expect(counter.number).toBe(2);
  });

  test("should return -2", () => {
    counter.minusTwo();
    expect(counter.number).toBe(-2);
  });

  afterAll(() => {
    console.log("test is ending ...");
  });
});
