import { doNotExecute, Equal, Expect } from "./utils";

doNotExecute(() => {
  const map = new Map();

  const result = map.get("foo");

  type test = [Expect<Equal<typeof result, unknown>>];
});

doNotExecute(() => {
  const map = new Map();

  map.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });

  const result = map.has("Jessie");

  type test = [Expect<Equal<typeof result, boolean>>];
});

doNotExecute(() => {
  const map = new Map();

  map.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });

  const result = map.get("Jessie");

  type test = [Expect<Equal<typeof result, unknown>>];
});

doNotExecute(() => {
  const map = new Map();

  map.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });

  const result = map.delete("Jessie");

  type test = [Expect<Equal<typeof result, boolean>>];
});

doNotExecute(() => {
  const map = new Map();

  map.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });
  map.set("Hilary", { phone: "617-555-4321", address: "321 S 2nd St" });

  const size = map.size;

  type testSize = [Expect<Equal<typeof size, number>>];
});

doNotExecute(() => {
  const map = new Map();

  map.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });
  map.set("Hilary", { phone: "617-555-4321", address: "321 S 2nd St" });

  const cleared = map.clear();

  type testClear = [Expect<Equal<typeof cleared, void>>];
});

doNotExecute(() => {
  const map = new Map() satisfies Map<string, boolean>;
  type test = [Expect<Equal<typeof map, Map<string, boolean>>>];
});

doNotExecute(() => {
  const map: Map<string, boolean> = new Map();
  type test = [Expect<Equal<typeof map, Map<string, boolean>>>];
});

doNotExecute(() => {
  function expectsBooleanMap(map: Map<string, boolean>) {
    return map;
  }
  const map = expectsBooleanMap(new Map());
  type test = [Expect<Equal<typeof map, Map<string, boolean>>>];
});

doNotExecute(() => {
  const map = new Map([
    ["foo", 1],
    ["bar", 2],
  ]);
  type test = [Expect<Equal<typeof map, Map<string, number>>>];
});
