import { describe, expect, it } from "vitest"
import init from "./index"

describe("{{name}}", () => {
  it("index", () => {
    expect(init()).toBe("ok")
  })
})
