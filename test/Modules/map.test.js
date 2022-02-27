describe("Testing the map class", () => {
  let m = new Map();
  test("Should set(), get(), size(), has(), clear() methods work as expected", () => {
    expect(m.size).toBe(0);

    m.set("one", 1);
    m.set("two", 2);
    expect(m.size).toBe(2);

    // this will change the value associated with a value key
    m.set("one", true);
    expect(m.size).toBe(2);

    expect(m.has("one")).toBe(true);

    expect(m.delete("one")).toBe(true);

    expect(m.size).toBe(1);

    m.clear();
    expect(m.size).toBe(0);
  });
});
