/** @format */
import { UrlWithParsedQuery, parse } from "url"

export class Utils {
  public static toUpperCase(arg: string) {
    return arg.toUpperCase()
  }

  public static parseUrl(url: string): UrlWithParsedQuery {
    if (!url) {
      throw new Error("Empty URL")
    }

    return parse(url, true)
  }
}
