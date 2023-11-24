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
<script src="https://cdn.jsdelivr.net/npm/jilto@1.1.0/jilto.min.js"></script>
```

# Usage

Below are some examples of how jilto can be used to generate various HTML elements:

Generating a List

```code
const jilto = require('jilto');
const htmlList = jilto.generateList(["Item 1", "Item 2", "Item 3"], "my-ul-class", "my-li-class");
console.log(htmlList);

```


Generating a Table

```code
const htmlTable = jilto.generateTable([[1, 2], [3, 4]], "my-table-class");
console.log(htmlTable);
```


Generating a Paragraph

```code
const htmlParagraph = jilto.generateParagraph("This is a paragraph.", "my-p-class");
console.log(htmlParagraph);
```


Generating a Navbar
```code
const links = [{ href: '/home', text: 'Home' }, { href: '/about', text: 'About' }];
const htmlNavbar = jilto.generateNavbar(links, "my-nav-class", "my-link-class");
console.log(htmlNavbar);
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