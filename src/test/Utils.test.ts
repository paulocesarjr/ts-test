/** @format */
import { Utils } from "../app/Utils"

describe("Utils test suite", () => {
  // executa antes de todo mundo
  beforeAll(() => {
    console.log("Bom dia")
  })

  // executa depois de todo mundo
  afterAll(() => {
    console.log("Até mais!")
  })

  // será pulado
  test.skip("transform text to uppercase", () => {
    const result = Utils.toUpperCase("abc")
    expect(result).toBe("ABC")
  })

  test("parse simple URL", () => {
    const parsedUrl = Utils.parseUrl("http://localhost:8080/login")

    expect(parsedUrl.href).toBe("http://localhost:8080/login")
    expect(parsedUrl.port).toBe("8080")
    expect(parsedUrl.protocol).toBe("http:")
    expect(parsedUrl.query).toEqual({})

    // toBe - compara tipos primitivos de dados
    // toEqual - compara objetos
  })

  test("parse URL with query", () => {
    const parseUrl = Utils.parseUrl(
      "http://localhost:8080/login?user=tainhaplay&password=123"
    )
    const expectedQuery = {
      user: "tainhaplay",
      password: "123"
    }

    expect(parseUrl.query).toEqual(expectedQuery)
  })

  test("test invalid URL", () => {
    expect(() => {
      Utils.parseUrl("")
    }).toThrowError("Empty URL")
  })

  test.only("test invalid URL with try catch", () => {
    try {
      Utils.parseUrl("")
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
      expect(error).toHaveProperty("message", "Empty URL")
    }
  })

  // markdown para futuros testes
  test.todo("test to do in future")
})
