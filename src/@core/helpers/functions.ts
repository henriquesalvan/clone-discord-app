export function __isNull(object: any): boolean {
    return object === null;
}

export function __isUndefined(object: any): boolean {
    return object === undefined;
}

export function __isNullOrUndefined(object: any): boolean {
    return __isNull(object) || __isUndefined(object);
}

export function __isBoolean(object: any): boolean {
    return !__isUndefined(object) && typeof object === "boolean";
}

export function __isFunction(object: any): boolean {
    return !__isUndefined(object) && typeof object === "function";
}

export function __isNumber(object: any): boolean {
    return !__isUndefined(object) && typeof object === "number";
}

export function __isString(object: any): boolean {
    return !__isUndefined(object) && typeof object === "string";
}

export function __nativeWindow(): any {
    return window;
}
