import { Matcher } from './matches';
import { QueryMap } from './queries';

export type BoundFunction<T> = T extends (
    attribute: string,
    element: HTMLElement,
    text: infer P,
    options: infer Q,
) => infer R
    ? (text: P, options?: Q) => R
    : T extends (a1: any, text: infer P, options: infer Q) => infer R
    ? (text: P, options?: Q) => R
    : never;
export type BoundFunctions<T> = { [P in keyof T]: BoundFunction<T[P]> };

export interface Query {
    <T = HTMLElement>(container: HTMLElement, ...args: any[]): Error | Promise<T[]> | Promise<T> | T[] | T | null;
}

export type Queries = {
    [T in keyof QueryMap]: QueryMap[T];
};

export function getQueriesForElement<T extends Queries = QueryMap>(
    element: HTMLElement,
    queriesToBind?: T,
): BoundFunctions<T>;
