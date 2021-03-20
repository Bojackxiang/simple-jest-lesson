import { fetchData, returnPromise, notFoundTest } from "./index";

test("fetch data", (done) => {
  fetchData((data) => {
    expect(data).not.toBeUndefined();
    done();
  });
});

test("promise", () => {
  return returnPromise().then((data) => {
    expect(data).not.toBeUndefined();
  });
});

test("404 test", () => {
  expect.assertions(1);
  return notFoundTest().catch((e) => {
    expect(e.message.indexOf("404") > -1).toBe(true);
  });
});

test("resolve test", () => {
  expect.assertions(1);
  return expect(returnPromise()).resolves.toMatchObject({
    data: {
      id: 1, // if contains id is good enough
    },
  });
});

test("404 test", () => {
  return expect(notFoundTest()).rejects.toThrow();
});

test("Await test", async () => {
  await expect(returnPromise()).resolves.toMatchObject({
    data: {
      id: 1, // if contains id is good enough
    },
  });
});

test("Await test", async () => {
  const response = await returnPromise();
  expect(response.data).toMatchObject({
    id: 1,
  });
});

test("Await test", async () => {
  const response = await returnPromise();
  expect(response.data).toMatchObject({
    id: 1,
  });
});

test("Await test 2", async () => {
  // expect.assertions(1);
  try {
    await notFoundTest();
  } catch (error) {
    const msg = error.message;
    expect(msg.indexOf(404) > -1).toBeFalsy();
  }
});
