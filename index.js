// Generic function to create HTML elements
function createElement(tagName, attributes = {}, content = '') {
    const attrs = Object.entries(attributes)
                        .map(([key, value]) => `${key}="${value}"`)
                        .join(' ');
    return `<${tagName} ${attrs}>${content}</${tagName}>`;
}

// Function to generate a list
function generateList(items, ulClass = "", liClass = "") {
    const listItems = items.map(item => createElement('li', { class: liClass }, item)).join('');
    return createElement('ul', { class: ulClass }, listItems);
}

// Function to generate a table
function generateTable(data, tableClass = "") {
    const rows = data.map(row => 
        createElement('tr', {}, row.map(cell => createElement('td', {}, cell)).join(''))
    ).join('');
    return createElement('table', { class: tableClass }, rows);
}

// Function to generate a paragraph
function generateParagraph(text, pClass = "") {
    return createElement('p', { class: pClass }, text);
}

// Function to generate a navbar
function generateNavbar(links, navClass = "", linkClass = "") {
    const navItems = links.map(link => 
        createElement('a', { href: link.href, class: linkClass }, link.text)
    ).join('');
    return createElement('nav', { class: navClass }, navItems);
}

// Export the functions
module.exports = {
    createElement,
    generateList,
    generateTable,
    generateParagraph,
    generateNavbar
};
