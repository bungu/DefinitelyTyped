import { BoundFunctions, Queries } from './get-queries-for-element';
import { QueryMap } from './queries';

export type Screen<Q extends Queries = QueryMap> = BoundFunctions<Q>;

export const screen: Screen;
