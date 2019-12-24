import { queries, screen, isInaccessible } from '@testing-library/dom';

const { getByText, queryByText, findByText, getAllByText, queryAllByText, findAllByText, queryByRole } = queries;

async function testQueries() {
    // element queries
    const element = document.createElement('div');
    getByText(element, 'foo');
    queryByText(element, 'foo');
    await findByText(element, 'foo');
    getAllByText(element, 'bar');
    queryAllByText(element, 'bar');
    await findAllByText(element, 'bar');

    // specified query result
    getByText<HTMLInputElement>(element, 'foo').value;
    const queryByTextResult = queryByText<HTMLInputElement>(element, 'foo');
    if (queryByTextResult) console.assert(queryByTextResult.value === 'foo');
    (await findByText<HTMLInputElement>(element, 'foo')).value;
    getAllByText<HTMLInputElement>(element, 'bar')[0].value;
    queryAllByText<HTMLInputElement>(element, 'bar')[0].value;
    (await findAllByText<HTMLInputElement>(element, 'bar'))[0].value;
    const queryByRoleResult = queryByRole<HTMLInputElement>(element, 'form');
    if (queryByRoleResult) console.assert(queryByRoleResult.value === 'foo');

    // screen queries
    screen.getByText('foo');
    screen.queryByText('foo');
    await screen.findByText('foo');
    screen.getAllByText('bar');
    screen.queryAllByText('bar');
    await screen.findAllByText('bar');

    // specified screen queries
    screen.getByText<HTMLInputElement>('foo').value;
    const screenQueryByTextResult = screen.queryByText('foo');
    if (screenQueryByTextResult) console.assert(screenQueryByTextResult.value === 'foo');
    (await screen.findByText('foo')).value;
    screen.getAllByText('bar')[0].value;
    screen.queryAllByText('bar')[0].value;
    (await screen.findAllByText('bar'))[0].value;
}

function testByRole() {
    const element = document.createElement('button');
    element.setAttribute('aria-hidden', 'true');

    console.assert(queryByRole(element, 'button') === null);
    console.assert(queryByRole(element, 'button', { hidden: true }) !== null);

    console.assert(screen.queryByRole('button') === null);
    console.assert(screen.queryByRole('button', { hidden: true }) !== null);
}

function testA11yHelper() {
    const element = document.createElement('svg');
    console.assert(!isInaccessible(element));
}
