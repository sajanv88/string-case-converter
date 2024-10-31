import { assertEquals } from "@std/assert";
import { 
  toCamelCase, toConstantCase, toCustomCase, toKebabCase, toPascalCase, toSnakeCase } from "./mod.ts";

  Deno.test("toCamelCase should convert to camelCase", () => {
    assertEquals(toCamelCase("hello world example"), "helloWorldExample");
    assertEquals(toCamelCase("HELLO WORLD EXAMPLE"), "helloWorldExample");
    assertEquals(toCamelCase("héllo wôrld éxample", "fr"), "hélloWôrldÉxample");
  });
  
  // Test toPascalCase function
  Deno.test("toPascalCase should convert to PascalCase", () => {
    assertEquals(toPascalCase("hello world example"), "HelloWorldExample");
    assertEquals(toPascalCase("HELLO WORLD EXAMPLE"), "HelloWorldExample");
    assertEquals(toPascalCase("héllo wôrld éxample", "fr"), "HélloWôrldÉxample");
  });
  
  // Test toSnakeCase function
  Deno.test("toSnakeCase should convert to snake_case", () => {
    assertEquals(toSnakeCase("hello world example"), "hello_world_example");
    assertEquals(toSnakeCase("HELLO WORLD EXAMPLE"), "hello_world_example");
    assertEquals(toSnakeCase("héllo wôrld éxample", "fr"), "héllo_wôrld_éxample");
  });
  
  // Test toKebabCase function
  Deno.test("toKebabCase should convert to kebab-case", () => {
    assertEquals(toKebabCase("hello world example"), "hello-world-example");
    assertEquals(toKebabCase("HELLO WORLD EXAMPLE"), "hello-world-example");
    assertEquals(toKebabCase("héllo wôrld éxample", "fr"), "héllo-wôrld-éxample");
  });
  
  // Test toConstantCase function
  Deno.test("toConstantCase should convert to CONSTANT_CASE", () => {
    assertEquals(toConstantCase("hello world example"), "HELLO_WORLD_EXAMPLE");
    assertEquals(toConstantCase("héllo wôrld éxample", "fr"), "HÉLLO_WÔRLD_ÉXAMPLE");
  });
  
  // Test toCustomCase function
  Deno.test("toCustomCase should convert to custom delimiter case", () => {
    assertEquals(toCustomCase("hello world example", " "), "hello world example");
    assertEquals(toCustomCase("hello world example", " ", true), "Hello World Example");
    assertEquals(toCustomCase("héllo wôrld éxample", "-", true, "fr"), "Héllo-Wôrld-Éxample");
  });