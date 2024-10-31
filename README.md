# String Case Converter

A flexible and customizable string case converter for JavaScript and TypeScript that supports various case styles, including `camelCase`, `PascalCase`, `snake_case`, `kebab-case`, `CONSTANT_CASE`, and custom delimiter-based formats. The converter is also locale-aware, allowing accurate handling of accented characters and different language conventions.

## Features

- Convert strings to popular case styles like camelCase, PascalCase, snake_case, and more.
- Custom delimiter support to create any case style you need.
- Locale support for accurate transformations in non-English languages.
- Lightweight and easy to use with clear, documented functions.


```bash
//  npm
npx jsr add @sajanv/string-case-converter

// bun
bunx jsr add @sajanv/string-case-converter

// pnpm
pnpm dlx jsr add @sajanv/string-case-converter

// deno
deno add jsr:@sajanv/string-case-converter

```

## Usage
Here's a quick guide on how to use each function in this package.

### Importing the Functions
Import the functions you need from the package:

```ts
import {
  toCamelCase,
  toPascalCase,
  toSnakeCase,
  toKebabCase,
  toConstantCase,
  toCustomCase,
} from '@sajanv/string-case-converter';


toCamelCase("hello world example"); // Output: "helloWorldExample"
toCamelCase("héllo wôrld éxample", "fr"); // Output: "hélloWôrldÉxample"

toPascalCase("hello world example"); // Output: "HelloWorldExample"
toPascalCase("héllo wôrld éxample", "fr"); // Output: "HélloWôrldÉxample"

toSnakeCase("hello world example"); // Output: "hello_world_example"
toSnakeCase("héllo wôrld éxample", "fr"); // Output: "héllo_wôrld_éxample"

toKebabCase("hello world example"); // Output: "hello-world-example"
toKebabCase("héllo wôrld éxample", "fr"); // Output: "héllo-wôrld-éxample"

toConstantCase("hello world example"); // Output: "HELLO_WORLD_EXAMPLE"
toConstantCase("héllo wôrld éxample", "fr"); // Output: "HÉLLO_WÔRLD_ÉXAMPLE"

toCustomCase("hello world example", " "); // Output: "hello world example"
toCustomCase("hello world example", " ", true); // Output: "Hello World Example"
toCustomCase("héllo wôrld éxample", "-", true, "fr"); // Output: "Héllo-Wôrld-Éxample"


```

## Locale Support
Each function accepts an optional locale parameter, which allows for locale-specific handling of accented characters and language conventions. By default, locale is set to English (en), but you can specify other locales as needed.

For example, to correctly handle French accents:

```ts
toCamelCase("héllo wôrld éxample", "fr"); // Output: "hélloWôrldÉxample"

```

## Testing
This package includes Deno tests to verify its functionality. To run the tests, use the following command:

```ts
deno task dev
```
### Example output
```bash
Task dev deno test --watch mod_test.ts
Watcher Test started.
running 6 tests from ./mod_test.ts
toCamelCase should convert to camelCase ... ok (0ms)
toPascalCase should convert to PascalCase ... ok (0ms)
toSnakeCase should convert to snake_case ... ok (0ms)
toKebabCase should convert to kebab-case ... ok (0ms)
toConstantCase should convert to CONSTANT_CASE ... ok (0ms)
toCustomCase should convert to custom delimiter case ... ok (0ms)

ok | 6 passed | 0 failed (1ms)

Watcher Test finished. Restarting on file change...

```

## Contributing
Contributions are welcome! Please feel free to submit a pull request with enhancements or bug fixes.

- Fork the repository.
   - Create a new branch for your feature or bug fix.
   - Submit a pull request with a detailed description of the changes.
   

## License
This project is licensed under the
MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.