#!/usr/bin/env node --experimental-specifier-resolution=node

/**
 * @packageDocumentation
 * This is a hello world
 */

/**
 * Hello
 */
class Hello {
  private hello() {
    const msg = "Hello World"
    console.log(msg)
  }
}

export default Hello
