import jsConvert from "js-convert-case"

export function convertToCamelCase(param: any): any {
    return jsConvert.camelKeys(param, { recursive: true, recursiveInArray: true })
}
export function convertToSnakeCase(param: any): any {
    return jsConvert.snakeKeys(param, { recursive: true, recursiveInArray: true })
}