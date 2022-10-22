/** @format */

import type { Config } from "@jest/types"

const config: Config.InitialOptions = {
  roots: ["<rootDir>/src"], // diretório para procurar os arquivos
  transform: {
    "^.+\\.tsx?$": "ts-jest" // etender arquivos ts
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$", // regex para detectar arquivos de test
  moduleFileExtensions: ["ts", "tsx", "js", "json", "node"], // suporte aos módulos que o projeto usa
  verbose: true,
  collectCoverage: true, // coleta e informa estatíticas de cobertura dos testes
  collectCoverageFrom: ["<rootDir>/src/app/**/*.ts"] // escopo de classes para verificar cobertura
}

export default config
