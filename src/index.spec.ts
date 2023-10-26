import { describe, expect, it } from "vitest"
import main from "./index"

describe("{{name}}", () => {
  it("index", async () => {
    expect(await main([])).toBe("ok")
  })
})
