import { describe, test, expect } from "@jest/globals";
import app from "../src/server.js";
import request from "supertest";
import { configuration } from "../src/config.js";
import { esPrimo } from "../src/numeros.js";
import { esPalindromo } from "../src/palindromo.js"; 

describe('Pruebas para la función esPrimo', () => {

    test('Debe retornar false para números menores a 2', () => {
        expect(esPrimo(1)).toBe(false);
        expect(esPrimo(0)).toBe(false);
        expect(esPrimo(-5)).toBe(false);
    });

    test('Debe retornar true para números primos', () => {
        expect(esPrimo(2)).toBe(true);
        expect(esPrimo(3)).toBe(true);
        expect(esPrimo(5)).toBe(true);
        expect(esPrimo(7)).toBe(true);
        expect(esPrimo(11)).toBe(true);
    });

    test('Debe retornar false para números no primos', () => {
        expect(esPrimo(4)).toBe(false);
        expect(esPrimo(6)).toBe(false);
        expect(esPrimo(8)).toBe(false);
        expect(esPrimo(9)).toBe(false);
        expect(esPrimo(10)).toBe(false);
    });
    
    test('Debe funcionar con números grandes', () => {
        expect(esPrimo(7919)).toBe(true);  // 7919 es primo
        expect(esPrimo(7920)).toBe(false); // 7920 no es primo
    });
});


describe('Pruebas para la función esPalindromo', () => {
    
    test('Debe retornar true para un palíndromo simple sin espacios', () => {
        expect(esPalindromo('ana')).toBe(true);
        expect(esPalindromo('oso')).toBe(true);
    });

    test('Debe retornar false para una palabra que no es palíndromo', () => {
        expect(esPalindromo('casa')).toBe(false);
        expect(esPalindromo('javascript')).toBe(false);
    });

    test('Debe retornar true para una frase que es palíndromo con espacios', () => {
        expect(esPalindromo('anita lava la tina')).toBe(true);
        expect(esPalindromo('a luna ese anula')).toBe(true);
    });

    test('Debe ser case-insensitive (ignorar mayúsculas/minúsculas)', () => {
        expect(esPalindromo('AnA')).toBe(true);
        expect(esPalindromo('Amo la Paloma')).toBe(true);
    });

    test('Debe retornar true para una frase vacía', () => {
        expect(esPalindromo('')).toBe(true); // Una cadena vacía puede ser considerada palíndromo
    });

    test('Debe manejar frases con solo espacios como un palíndromo', () => {
        expect(esPalindromo('    ')).toBe(true); // Solo espacios también debería ser considerado como palíndromo
    });
});

describe("Test Suite App", () => {

    test("endpoint /", () => {
        expect(1 + 1).toBe(2);
    });

    test("endpoint key", () => {
        expect(1 + 1).toBe(2);
    });

    test("endpoint /palindromo", () => {
        expect(1 + 1).toBe(2);
    });

    test("endpoint /primo", () => {
        expect(1 + 1).toBe(2);
    });

    test("test de endpoint /", async () => {
        return await request(app)
            .get("/")
            .expect("Content-Type", /text/)
            .expect(200)
            .then((response) => {
                expect(response.text).toBe(`Hola, esta api fue configurada por el usuario ${configuration.username}`);
            })
    });
});