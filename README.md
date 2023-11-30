# jilto
JavaScript Isomorphic Literal Template Objects (jilto) is a lightweight JavaScript library designed for creating HTML content using template literals. It simplifies the process of generating dynamic, isomorphic HTML content, making it easier for developers to write clean and maintainable code for both server-side and client-side rendering in web applications.

## Features
- **Isomorphic Rendering**: Works seamlessly in both server-side (Node.js) and client-side environments.
- **Simple Syntax**: Utilizes JavaScript template literals for intuitive and readable HTML generation.
- **Lightweight**: Minimal overhead, focusing solely on HTML generation.
- **Flexible**: Easily integrate with existing JavaScript projects or frameworks.

## Installation
Install `jilto` via npm:

```bash
npm install jilto
```

# CDN

```code
<script src="https://cdn.jsdelivr.net/npm/jilto@2.0.5"></script>
```

# Usage

Below are some examples of how jilto can be used to generate various HTML elements:


createElement

```code
const element = createElement('div', { class: 'my-class', id: 'my-id' }, 'Hello World!');
console.log(element);  // Output: <div class="my-class" id="my-id">Hello World!</div>

```

generateList

```code
const list = generateList({
    items: [{ content: 'Item 1', id: 'item1' }, { content: 'Item 2', id: 'item2' }],
    ulClass: 'my-ul-class',
    liClass: 'my-li-class',
    ulId: 'my-ul-id'
});
console.log(list);  // Output: <ul class="my-ul-class" id="my-ul-id"><li class="my-li-class" id="item1">Item 1</li><li class="my-li-class" id="item2">Item 2</li></ul>


```


generateTable

```code
const table = generateTable({
    data: [['Cell 1', 'Cell 2'], ['Cell 3', 'Cell 4']],
    tableClass: 'my-table-class',
    tableId: 'my-table-id'
});
console.log(table);  // Output: <table class="my-table-class" id="my-table-id"><tr><td>Cell 1</td><td>Cell 2</td></tr><tr><td>Cell 3</td><td>Cell 4</td></tr></table>

```


generateParagraph

```code
const paragraph = generateParagraph({ text: 'This is a paragraph.', pClass: 'my-p-class', pId: 'my-p-id' });
console.log(paragraph);  // Output: <p class="my-p-class" id="my-p-id">This is a paragraph.</p>

```


generateLinks
```code
const links = generateLinks({
    lstLinks: [{ href: '/home', text: 'Home', id: 'link1' }, { href: '/about', text: 'About', id: 'link2' }],
    linkClass: 'my-link-class',
    containerId: 'my-container-id'
});
console.log(links);  // Output: <div class="my-link-class" id="my-container-id"><a href="/home" class="my-link-class" id="link1">Home</a><a href="/about" class="my-link-class" id="link2">About</a></div>
```


generateHref
```code
const href = generateHref({ url: '/home', text: 'Home', linkClass: 'my-href-class', linkId: 'my-href-id' });
console.log(href);  // Output: <a href="/home" class="my-href-class" id="my-href-id">Home</a>
```

generateNavbar
```code
const navbar = generateNavbar({
    links: [{ href: '/home', text: 'Home', id: 'navlink1' }, { href: '/about', text: 'About', id: 'navlink2' }],
    navClass: 'my-nav-class',
    linkClass: 'my-nav-link-class',
    navId: 'my-nav-id'
});
console.log(navbar);  // Output: <nav class="my-nav-class" id="my-nav-id"><a href="/home" class="my-nav-link-class" id="navlink1">Home</a><a href="/about" class="my-nav-link-class" id="navlink2">About</a></nav>
```

generateDiv

```code
const div = generateDiv({ content: 'This is a div.', divClass: 'my-div-class', divId: 'my-div-id' });
console.log(div);  // Output: <div class="my-div-class" id="my-div-id">This is a div.</div>
```

generateInput

```code
const input = generateInput({
    inputType: 'text',
    inputName: 'myInput',
    inputValue: 'Hello',
    inputClass: 'my-input-class',
    placeholder: 'Enter text',
    inputId: 'my-input-id'
});
console.log(input);  // Output: <input type="text" name="myInput" value="Hello" class="my-input-class" placeholder="Enter text" id="my-input-id">
```

generateHtmlPage

```code
const htmlPage = generateHtmlPage({
    pageTitle: 'My Page',
    headHtml: '<link rel="stylesheet" href="style.css">',
    contentHtml: '<h1>Welcome to My Page</h1>'
});
console.log(htmlPage);
/* Output:
<!DOCTYPE html>
<html>
<head>
    <title>My Page</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Welcome to My Page</h1>
</body>
</html>
*/
```


# API Reference

jilto provides the following functions for HTML generation:

generateList(items, ulClass, liClass): Creates an unordered list (ul) with list items (li). Each item in the items array will be a list item.
generateTable(data, tableClass): Generates a table (table) from a two-dimensional array. Each sub-array in data represents a row, with its elements representing cells.
generateParagraph(text, pClass): Produces a paragraph (p) with the provided text.
generateNavbar(links, navClass, linkClass): Constructs a navigation bar (nav) using an array of link objects. Each link object should have href and text properties.


# Contributing

Contributions to jilto are welcome! If you have suggestions, bug reports, or improvements, please feel free to fork the repository and submit a pull request. Ensure your contributions are well-documented and follow the existing coding style.

# License

jilto is open source and is available under the GNU GENERAL PUBLIC LICENSE. See the LICENSE file in the repository for more details.