interface JSON {
  /**
   * Converts a JavaScript value to a JavaScript Object Notation (JSON) string or undefined.
   * @param value A JavaScript value, usually an object or array, to be converted.
   * @param replacer A function that transforms the results.
   * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
   */
  //undefined, functions, symbols → `undefined`
  stringify(
    value: undefined | ((..._: any) => any) | symbol,
    replacer?: (this: any, key: string, value: any) => any,
    space?: string | number,
  ): undefined;

  // JSON-serialisable primitives, objects, `null` → `string`
  stringify(
    value: string | number | boolean | bigint | object | null,
    replacer?: (this: any, key: string, value: any) => any,
    space?: string | number,
  ): string;

  // Fallback
  stringify(
    value: any,
    replacer?: (this: any, key: string, value: any) => any,
    space?: string | number,
  ): string | undefined;

  /**
   * Converts a JavaScript value to a JavaScript Object Notation (JSON) string or undefined.
   * @param value A JavaScript value, usually an object or array, to be converted.
   * @param replacer An array of strings and numbers that acts as an approved list for selecting the object properties that will be stringified.
   * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
   */
  //undefined, functions, symbols → `undefined`
  stringify(
    value: undefined | ((..._: any) => any) | symbol,
    replacer?: (number | string)[] | null,
    space?: string | number,
  ): undefined;

  // JSON-serialisable primitives, objects, `null` → `string`
  stringify(
    value: string | number | boolean | bigint | object | null,
    replacer?: (number | string)[] | null,
    space?: string | number,
  ): string;

  // Fallback
  stringify(
    value: any,
    replacer?: (number | string)[] | null,
    space?: string | number,
  ): string | undefined;
}
