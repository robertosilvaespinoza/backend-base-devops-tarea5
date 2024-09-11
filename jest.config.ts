import { Config } from "jest";

const config: Config = {
  preset: "ts-jest", // Usa ts-jest para trabajar con TypeScript
  testEnvironment: "node", // Define el entorno de pruebas
  moduleFileExtensions: ["ts", "js"], // Extensiones que Jest debe reconocer
  transform: {
    "^.+\\.ts$": "ts-jest", // Usa ts-jest para transformar los archivos .ts
  },
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1", // Elimina la extensión .js de los imports
  },
  testMatch: ["**/__tests__/**/*.ts", "**/?(*.)+(spec|test).ts"], // Incluye archivos de pruebas con extensión .ts
};

export default config;
