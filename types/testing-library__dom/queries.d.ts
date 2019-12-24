import { Matcher, MatcherOptions } from './matches';
import { SelectorMatcherOptions } from './query-helpers';
import { WaitForElementOptions } from './wait-for-element';

export interface QueryByBoundAttribute {
    <T = HTMLElement>(container: HTMLElement, id: Matcher, options?: MatcherOptions): T | null;
}

export interface AllByBoundAttribute {
    <T = HTMLElement>(container: HTMLElement, id: Matcher, options?: MatcherOptions): T[];
}

export interface FindAllByBoundAttribute {
    <T = HTMLElement>(
        container: HTMLElement,
        id: Matcher,
        options?: MatcherOptions,
        waitForElementOptions?: WaitForElementOptions,
    ): Promise<T[]>;
}

export interface GetByBoundAttribute {
    <T extends HTMLElement = HTMLElement>(container: HTMLElement, id: Matcher, options?: MatcherOptions): T;
}

export interface FindByBoundAttribute {
    <T = HTMLElement>(
        container: HTMLElement,
        id: Matcher,
        options?: MatcherOptions,
        waitForElementOptions?: WaitForElementOptions,
    ): Promise<T>;
}

export interface QueryByText {
    <T = HTMLElement>(container: HTMLElement, id: Matcher, options?: SelectorMatcherOptions): T | null;
}

export interface AllByText {
    <T = HTMLElement>(container: HTMLElement, id: Matcher, options?: SelectorMatcherOptions): T[];
}

export interface FindAllByText {
    <T = HTMLElement>(
        container: HTMLElement,
        id: Matcher,
        options?: SelectorMatcherOptions,
        waitForElementOptions?: WaitForElementOptions,
    ): Promise<T[]>;
}

export interface GetByText {
    <T = HTMLElement>(container: HTMLElement, id: Matcher, options?: SelectorMatcherOptions): T;
}

export interface FindByText {
    <T = HTMLElement>(
        container: HTMLElement,
        id: Matcher,
        options?: SelectorMatcherOptions,
        waitForElementOptions?: WaitForElementOptions,
    ): Promise<T>;
}

export interface ByRoleOptions extends MatcherOptions {
    /**
     * If true includes elements in the query set that are usually excluded from
     * the accessibility tree. `role="none"` or `role="presentation"` are included
     * in either case.
     * @default false
     */
    hidden?: boolean;
}

export interface AllByRole {
    <T = HTMLElement>(container: HTMLElement, role: Matcher, options?: ByRoleOptions): T[];
}

export interface GetByRole {
    <T = HTMLElement>(container: HTMLElement, role: Matcher, options?: ByRoleOptions): T;
}

export interface QueryByRole {
    <T = HTMLElement>(container: HTMLElement, role: Matcher, options?: ByRoleOptions): T | null;
}

export interface FindByRole {
    <T = HTMLElement>(
        container: HTMLElement,
        role: Matcher,
        options?: ByRoleOptions,
        waitForElementOptions?: WaitForElementOptions,
    ): Promise<T>;
}

export interface FindAllByRole {
    <T = HTMLElement>(
        container: HTMLElement,
        role: Matcher,
        options?: ByRoleOptions,
        waitForElementOptions?: WaitForElementOptions,
    ): Promise<T[]>;
}

export type QueryMap = {
    [key: string]:
        | QueryByBoundAttribute
        | AllByBoundAttribute
        | FindAllByBoundAttribute
        | GetByBoundAttribute
        | FindByBoundAttribute
        | QueryByText
        | AllByText
        | FindAllByText
        | GetByText
        | FindByText
        | AllByRole
        | GetByRole
        | QueryByRole
        | FindByRole
        | FindAllByRole;
};

export const getByLabelText: GetByText;
export const getAllByLabelText: AllByText;
export const queryByLabelText: QueryByText;
export const queryAllByLabelText: AllByText;
export const findByLabelText: FindByText;
export const findAllByLabelText: FindAllByText;
export const getByPlaceholderText: GetByBoundAttribute;
export const getAllByPlaceholderText: AllByBoundAttribute;
export const queryByPlaceholderText: QueryByBoundAttribute;
export const queryAllByPlaceholderText: AllByBoundAttribute;
export const findByPlaceholderText: FindByBoundAttribute;
export const findAllByPlaceholderText: FindAllByBoundAttribute;
export const getByText: GetByText;
export const getAllByText: AllByText;
export const queryByText: QueryByText;
export const queryAllByText: AllByText;
export const findByText: FindByText;
export const findAllByText: FindAllByText;
export const getByAltText: GetByBoundAttribute;
export const getAllByAltText: AllByBoundAttribute;
export const queryByAltText: QueryByBoundAttribute;
export const queryAllByAltText: AllByBoundAttribute;
export const findByAltText: FindByBoundAttribute;
export const findAllByAltText: FindAllByBoundAttribute;
export const getByTitle: GetByBoundAttribute;
export const getAllByTitle: AllByBoundAttribute;
export const queryByTitle: QueryByBoundAttribute;
export const queryAllByTitle: AllByBoundAttribute;
export const findByTitle: FindByBoundAttribute;
export const findAllByTitle: FindAllByBoundAttribute;
export const getByDisplayValue: GetByBoundAttribute;
export const getAllByDisplayValue: AllByBoundAttribute;
export const queryByDisplayValue: QueryByBoundAttribute;
export const queryAllByDisplayValue: AllByBoundAttribute;
export const findByDisplayValue: FindByBoundAttribute;
export const findAllByDisplayValue: FindAllByBoundAttribute;
export const getByRole: GetByRole;
export const getAllByRole: AllByRole;
export const queryByRole: QueryByRole;
export const queryAllByRole: AllByRole;
export const findByRole: FindByRole;
export const findAllByRole: FindAllByRole;
export const getByTestId: GetByBoundAttribute;
export const getAllByTestId: AllByBoundAttribute;
export const queryByTestId: QueryByBoundAttribute;
export const queryAllByTestId: AllByBoundAttribute;
export const findByTestId: FindByBoundAttribute;
export const findAllByTestId: FindAllByBoundAttribute;
