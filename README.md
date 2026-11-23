<div align="center">

# 🧾 JSON Basics

### My first `.json` file: all six data types in one object

*Strings, numbers, booleans, null, arrays, and nested objects, plus a preview of how JavaScript reads them.*

</div>

---

## 📖 About This Project

JSON (**J**ava**S**cript **O**bject **N**otation) is a plain-text format for storing and sending data. Almost every web API speaks it.

This folder holds my first JSON file, `first.json`. It is one object that uses **every JSON data type**:

- a **string** (`name`)
- a **number** (`score`)
- a **boolean** (`isAdmin`)
- **null** (`license`)
- an **array** (`shopitem`)
- a **nested object** (`myobj`)

There is no script and no HTML page here. A `.json` file only holds data. Code reads it. To see the data in action, the [Preview](#-preview-reading-first-json-from-javascript) section loads it with Node.js, and the [Practice Tasks](#-practice-tasks) section gives you exercises to try yourself.

> 📝 **Disclaimer:** This is a learning project written while studying the basics. The code examples were run in Node.js and the outputs shown are real.

---

## 📑 Table of Contents

1. [Project Structure](#-project-structure)
2. [What Is JSON?](#-what-is-json)
3. [The File: `first.json`](#-the-file-firstjson)
4. [The Six Data Types](#-the-six-data-types)
5. [JSON vs a JavaScript Object](#-json-vs-a-javascript-object)
6. [Preview: Reading `first.json` from JavaScript](#-preview-reading-firstjson-from-javascript)
7. [Practice Tasks](#-practice-tasks)
8. [Common Mistakes](#-common-mistakes)
9. [Try It Yourself](#-try-it-yourself)
10. [How to Run](#-how-to-run)
11. [Cheat Sheet](#-cheat-sheet)
12. [Key Takeaways](#-key-takeaways)
13. [Roadmap](#-roadmap)

---

## 📂 Project Structure

```
js-fundamentals/
│
└── 05-json/
    ├── first.json     # one object that uses all six JSON data types
    └── read.js        # optional: a script that reads it (see Preview, create it yourself)
```

> 💡 Rename the folder to match your own layout. `read.js` doesn't exist yet. It is where the code from the [Preview](#-preview-reading-firstjson-from-javascript) section goes.

---

## 💡 What Is JSON?

<table>
  <tr>
    <th>Question</th>
    <th>Answer</th>
  </tr>
  <tr>
    <td><b>What is it?</b></td>
    <td>A text format for data, written as <code>key: value</code> pairs.</td>
  </tr>
  <tr>
    <td><b>Why use it?</b></td>
    <td>It is small, easy for people to read, and every language can parse it.</td>
  </tr>
  <tr>
    <td><b>Where is it used?</b></td>
    <td>APIs, config files (<code>package.json</code>), saving app data, and sending data between a server and a browser.</td>
  </tr>
  <tr>
    <td><b>File extension</b></td>
    <td><code>.json</code></td>
  </tr>
  <tr>
    <td><b>Is it code?</b></td>
    <td>No. It is only data. It has no functions, no variables, and no logic.</td>
  </tr>
</table>

---

## 📄 The File: `first.json`

```json
{
    "name": "Ahmad",
    "score": 11.75,
    "isAdmin": false,
    "license": null,
    "shopitem": ["food", "clothes", "sunflower oil"],
    "myobj": {
        "name": "nested",
        "marks": 45
    }
}
```

### Line-by-line breakdown

<table>
  <tr>
    <th>Line</th>
    <th>Code</th>
    <th>What it does</th>
  </tr>
  <tr>
    <td>1</td>
    <td><code>{</code></td>
    <td>Opens the <b>root object</b>. The whole file is one object.</td>
  </tr>
  <tr>
    <td>2</td>
    <td><code>"name": "Ahmad"</code></td>
    <td>A key with a <b>string</b> value.</td>
  </tr>
  <tr>
    <td>3</td>
    <td><code>"score": 11.75</code></td>
    <td>A key with a <b>number</b> value. No quotes, and decimals are fine.</td>
  </tr>
  <tr>
    <td>4</td>
    <td><code>"isAdmin": false</code></td>
    <td>A key with a <b>boolean</b> value. Lowercase, no quotes.</td>
  </tr>
  <tr>
    <td>5</td>
    <td><code>"license": null</code></td>
    <td>A key with <b>no value on purpose</b>. Lowercase, no quotes.</td>
  </tr>
  <tr>
    <td>6</td>
    <td><code>"shopitem": [...]</code></td>
    <td>A key whose value is an <b>array</b> of three strings.</td>
  </tr>
  <tr>
    <td>7 to 10</td>
    <td><code>"myobj": { ... }</code></td>
    <td>A key whose value is another <b>object</b> (nested), with its own keys.</td>
  </tr>
  <tr>
    <td>11</td>
    <td><code>}</code></td>
    <td>Closes the root object. There is <b>no comma</b> after the last entry.</td>
  </tr>
</table>

---

## 🧩 The Six Data Types

<table>
  <tr>
    <th>Type</th>
    <th>Key in my file</th>
    <th>Value</th>
    <th>Rule to remember</th>
  </tr>
  <tr>
    <td><b>String</b></td>
    <td><code>name</code></td>
    <td><code>"Ahmad"</code></td>
    <td>Always <b>double quotes</b>.</td>
  </tr>
  <tr>
    <td><b>Number</b></td>
    <td><code>score</code></td>
    <td><code>11.75</code></td>
    <td>No quotes. Integers and decimals are the same type.</td>
  </tr>
  <tr>
    <td><b>Boolean</b></td>
    <td><code>isAdmin</code></td>
    <td><code>false</code></td>
    <td>Only <code>true</code> or <code>false</code>, in lowercase.</td>
  </tr>
  <tr>
    <td><b>Null</b></td>
    <td><code>license</code></td>
    <td><code>null</code></td>
    <td>"No value." Different from <code>false</code> and from <code>0</code>.</td>
  </tr>
  <tr>
    <td><b>Array</b></td>
    <td><code>shopitem</code></td>
    <td><code>["food", "clothes", "sunflower oil"]</code></td>
    <td>Square brackets, comma-separated, indexes start at 0.</td>
  </tr>
  <tr>
    <td><b>Object</b></td>
    <td><code>myobj</code></td>
    <td><code>{ "name": "nested", "marks": 45 }</code></td>
    <td>Curly braces, <code>"key": value</code> pairs. Can hold any type, including more objects.</td>
  </tr>
</table>

### 🔍 `false` vs `null`

These two look similar but mean different things.

<table>
  <tr>
    <th>Value</th>
    <th>Meaning</th>
    <th>Example from my file</th>
  </tr>
  <tr>
    <td><code>false</code></td>
    <td>A real answer: <b>no</b>.</td>
    <td><code>"isAdmin": false</code> means the user is <i>not</i> an admin.</td>
  </tr>
  <tr>
    <td><code>null</code></td>
    <td><b>Nothing is here</b> (no value was given).</td>
    <td><code>"license": null</code> means there is no license to show.</td>
  </tr>
</table>

### 🪆 Nesting

An object can sit inside another object. The same key name can be used at different levels, because each object has its own keys.

```
root
├── name       → "Ahmad"
├── score      → 11.75
├── isAdmin    → false
├── license    → null
├── shopitem   → [ "food", "clothes", "sunflower oil" ]
└── myobj
    ├── name   → "nested"      ← a different "name" from the top one
    └── marks  → 45
```

---

## ⚖️ JSON vs a JavaScript Object

JSON was inspired by JavaScript objects, so they look alike. They are **not** the same thing, and JSON is stricter.

<table>
  <tr>
    <th>Feature</th>
    <th>JavaScript object</th>
    <th>JSON</th>
  </tr>
  <tr>
    <td>Keys</td>
    <td><code>name: "Ahmad"</code> (quotes optional)</td>
    <td><code>"name": "Ahmad"</code> (double quotes required)</td>
  </tr>
  <tr>
    <td>Strings</td>
    <td>Single, double, or backtick quotes</td>
    <td>Double quotes only</td>
  </tr>
  <tr>
    <td>Comments</td>
    <td>Allowed</td>
    <td>Not allowed</td>
  </tr>
  <tr>
    <td>Trailing comma</td>
    <td>Allowed</td>
    <td>Not allowed</td>
  </tr>
  <tr>
    <td>Functions</td>
    <td>Allowed as values</td>
    <td>Not allowed</td>
  </tr>
  <tr>
    <td><code>undefined</code></td>
    <td>Allowed</td>
    <td>Not a JSON type</td>
  </tr>
  <tr>
    <td>It is...</td>
    <td>Code, living in memory</td>
    <td>Text, stored in a file or sent over a network</td>
  </tr>
</table>

---

## 🔬 Preview: Reading `first.json` from JavaScript

> A JSON file does nothing on its own. This section is a preview of the next step: loading the file and using the data. Create `read.js` next to `first.json` and try each part.

### 1️⃣ Load and parse the file

```js
const fs = require("fs");

const text = fs.readFileSync("first.json", "utf8"); // the file as plain text
const data = JSON.parse(text);                      // text → JavaScript object
```

`JSON.parse` turns the text into a real object. Without it, `text` is just one long string.

### 2️⃣ Read each value

```js
console.log(data.name);          // Ahmad
console.log(data["score"]);      // 11.75
console.log(data.isAdmin);       // false
console.log(data.license);       // null
console.log(data.shopitem[2]);   // sunflower oil
console.log(data.shopitem.length); // 3
console.log(data.myobj.marks);   // 45
```

- Use **dot notation** (`data.name`) or **bracket notation** (`data["name"]`).
- Arrays use an index: `shopitem[0]` is `"food"`, `shopitem[2]` is `"sunflower oil"`.
- To go inside a nested object, chain the keys: `data.myobj.marks`.

### 3️⃣ Check the types

```js
console.log(typeof data.name);               // string
console.log(typeof data.score);              // number
console.log(typeof data.isAdmin);            // boolean
console.log(typeof data.license);            // object  ← a famous JavaScript quirk!
console.log(typeof data.shopitem);           // object
console.log(Array.isArray(data.shopitem));   // true
console.log(typeof data.myobj);              // object
```

> ⚠️ `typeof null` returns `"object"`. It is a long-standing quirk in JavaScript, not a mistake in the JSON. Use `data.license === null` to test for null. Arrays also report `"object"`, so use `Array.isArray()` to tell an array apart.

### 4️⃣ List the keys

```js
console.log(Object.keys(data));
// [ 'name', 'score', 'isAdmin', 'license', 'shopitem', 'myobj' ]

for (const key in data) {
  console.log(key);
}
// name
// score
// isAdmin
// license
// shopitem
// myobj
```

### 5️⃣ Change the data and turn it back into JSON text

```js
data.score = 12.5;
data.shopitem.push("rice");

console.log(JSON.stringify(data));
// {"name":"Ahmad","score":12.5,"isAdmin":false,"license":null,"shopitem":["food","clothes","sunflower oil","rice"],"myobj":{"name":"nested","marks":45}}

console.log(JSON.stringify(data.myobj, null, 2));
// {
//   "name": "nested",
//   "marks": 45
// }
```

- `JSON.stringify(value)` turns an object **into** JSON text.
- The extra arguments `null, 2` mean "pretty-print with 2 spaces of indentation".
- The output above was produced by running the code. Your key order will match the file.

### 🔁 `parse` vs `stringify`

<table>
  <tr>
    <th>Method</th>
    <th>Direction</th>
    <th>Input</th>
    <th>Output</th>
  </tr>
  <tr>
    <td><code>JSON.parse()</code></td>
    <td>text → object</td>
    <td>A JSON string</td>
    <td>A JavaScript value</td>
  </tr>
  <tr>
    <td><code>JSON.stringify()</code></td>
    <td>object → text</td>
    <td>A JavaScript value</td>
    <td>A JSON string</td>
  </tr>
</table>

<details>
<summary><b>🧪 Extra experiments I tried (click to expand)</b></summary>

<br>

```js
// Broken JSON throws an error instead of returning something half-right
try { JSON.parse("{'name': 'Ahmad'}"); } catch (e) { console.log(e.name); } // SyntaxError (single quotes)
try { JSON.parse('{"a": 1,}'); }        catch (e) { console.log(e.name); } // SyntaxError (trailing comma)

// Valid JSON does not have to be an object
console.log(JSON.parse("null"), JSON.parse("true"), JSON.parse("[1,2]"));
// null true [ 1, 2 ]

// stringify silently drops values JSON can't represent
console.log(JSON.stringify({ a: undefined, b: () => 1, c: 1 }));
// {"c":1}
```

**What I learned:** `undefined` and functions disappear when you stringify. That is why they are not JSON types.

</details>

---

## 🏋️ Practice Tasks

Try each task in your own `.json` or `.js` file first, then check the hints and the answers.

<table>
  <tr>
    <th>#</th>
    <th>Task</th>
    <th>Concept</th>
  </tr>
  <tr><td>1</td><td>Create <code>student.json</code> with <code>name</code>, <code>age</code>, <code>isEnrolled</code>, <code>email</code> (set it to <code>null</code>), <code>subjects</code> (array of 3), and <code>address</code> (object with <code>city</code> and <code>country</code>).</td><td>All six types</td></tr>
  <tr><td>2</td><td>Print the second subject from <code>student.json</code>.</td><td>Array index</td></tr>
  <tr><td>3</td><td>Print the <code>city</code> from the nested <code>address</code>.</td><td>Chained access</td></tr>
  <tr><td>4</td><td>Add a new subject to the array, then print how many subjects there are.</td><td><code>push</code>, <code>length</code></td></tr>
  <tr><td>5</td><td>Loop over <code>subjects</code> and print each one on its own line.</td><td><code>for...of</code></td></tr>
  <tr><td>6</td><td>Print every key of the top-level object.</td><td><code>Object.keys</code></td></tr>
  <tr><td>7</td><td>Print <code>"No email on file"</code> if <code>email</code> is <code>null</code>, otherwise print the email.</td><td><code>=== null</code></td></tr>
  <tr><td>8</td><td>Change <code>isEnrolled</code> to the opposite value and print the result as pretty JSON.</td><td><code>!</code>, <code>stringify</code></td></tr>
  <tr><td>9</td><td>Make a JSON file called <code>shop.json</code> with an array of 3 product objects (<code>id</code>, <code>title</code>, <code>price</code>). Print the total price.</td><td>Array of objects</td></tr>
  <tr><td>10</td><td>Print the title of every product that costs more than 100.</td><td>Loop + condition</td></tr>
</table>

<details>
<summary><b>👀 Show answers</b></summary>

<br>

**Task 1: `student.json`**

```json
{
    "name": "Sara",
    "age": 20,
    "isEnrolled": true,
    "email": null,
    "subjects": ["Maths", "Physics", "English"],
    "address": {
        "city": "Lahore",
        "country": "Pakistan"
    }
}
```

**Tasks 2 to 8: `practice.js`**

```js
const fs = require("fs");
const student = JSON.parse(fs.readFileSync("student.json", "utf8"));

console.log(student.subjects[1]);          // Physics
console.log(student.address.city);         // Lahore

student.subjects.push("Chemistry");
console.log(student.subjects.length);      // 4

for (const subject of student.subjects) {
  console.log(subject);
}
// Maths
// Physics
// English
// Chemistry

console.log(Object.keys(student));
// [ 'name', 'age', 'isEnrolled', 'email', 'subjects', 'address' ]

if (student.email === null) {
  console.log("No email on file");         // No email on file
} else {
  console.log(student.email);
}

student.isEnrolled = !student.isEnrolled;
console.log(JSON.stringify(student, null, 2));
```

**Tasks 9 and 10: `shop.json` and `shop.js`**

```json
[
    { "id": 1, "title": "Keyboard", "price": 150 },
    { "id": 2, "title": "Mouse", "price": 40 },
    { "id": 3, "title": "Monitor", "price": 300 }
]
```

```js
const fs = require("fs");
const products = JSON.parse(fs.readFileSync("shop.json", "utf8"));

let total = 0;
for (const product of products) {
  total += product.price;
}
console.log(total);                        // 490

for (const product of products) {
  if (product.price > 100) {
    console.log(product.title);
  }
}
// Keyboard
// Monitor
```

**Notes:** A JSON file can start with `[` instead of `{`. The root can be an array. Each object in the array uses the same keys, which is how real API responses look.

</details>

<details>
<summary><b>🎯 More ideas to try (no answers)</b></summary>

<br>

- Add a `"hobbies"` array to `first.json` and print the last hobby without hard-coding its index.
- Write a function `getValue(data, key)` that returns the value for a key, or `"Not found"` if the key is missing.
- Count how many keys in `first.json` hold a string value.
- Change `"license": null` to a real license string and make your script print a different message.
- Save the modified object back to a new file using `fs.writeFileSync("second.json", JSON.stringify(data, null, 2))`.

</details>

---

## 🐞 Common Mistakes

<table>
  <tr>
    <th>#</th>
    <th>Broken JSON</th>
    <th>Problem</th>
    <th>Fix</th>
  </tr>
  <tr>
    <td>1</td>
    <td><code>{ 'name': 'Ahmad' }</code></td>
    <td>Single quotes</td>
    <td><code>{ "name": "Ahmad" }</code></td>
  </tr>
  <tr>
    <td>2</td>
    <td><code>{ name: "Ahmad" }</code></td>
    <td>Key has no quotes</td>
    <td><code>{ "name": "Ahmad" }</code></td>
  </tr>
  <tr>
    <td>3</td>
    <td><code>{ "a": 1, }</code></td>
    <td>Trailing comma</td>
    <td><code>{ "a": 1 }</code></td>
  </tr>
  <tr>
    <td>4</td>
    <td><code>{ "score": "11.75" }</code></td>
    <td>Number stored as a string (valid JSON, but a different type)</td>
    <td><code>{ "score": 11.75 }</code></td>
  </tr>
  <tr>
    <td>5</td>
    <td><code>{ "isAdmin": False }</code></td>
    <td>Wrong case</td>
    <td><code>{ "isAdmin": false }</code></td>
  </tr>
  <tr>
    <td>6</td>
    <td><code>{ "a": 1 // note }</code></td>
    <td>Comments are not allowed</td>
    <td>Delete the comment, or add a <code>"note"</code> key instead</td>
  </tr>
  <tr>
    <td>7</td>
    <td><code>{ "a": 1 "b": 2 }</code></td>
    <td>Missing comma</td>
    <td><code>{ "a": 1, "b": 2 }</code></td>
  </tr>
</table>

<details>
<summary><b>🔍 Things in my own file worth knowing (click to expand)</b></summary>

<br>

My `first.json` is valid. These are notes, not errors:

<table>
  <tr>
    <th>#</th>
    <th>Observation</th>
    <th>Why it matters</th>
  </tr>
  <tr>
    <td>1</td>
    <td>The key <code>name</code> appears twice (top level and inside <code>myobj</code>).</td>
    <td>That is allowed, since they are in different objects. Duplicate keys in the <i>same</i> object are legal JSON syntax, but only the last one is kept, so avoid them.</td>
  </tr>
  <tr>
    <td>2</td>
    <td>The key <code>shopitem</code> holds several items.</td>
    <td>Arrays are usually named in the plural (<code>shopItems</code>). It is only a style choice.</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Keys use mixed styles: <code>isAdmin</code> (camelCase), <code>shopitem</code> (all lowercase).</td>
    <td>Pick one style, such as camelCase, and keep it everywhere.</td>
  </tr>
  <tr>
    <td>4</td>
    <td><code>"license": null</code> has no real license value.</td>
    <td>Good use of <code>null</code>: the key exists, but the data isn't known yet.</td>
  </tr>
</table>

</details>

---

## 🎮 Try It Yourself

<details>
<summary><b>Click to expand the experiments</b></summary>

<br>

1. **Break it on purpose.** Replace `"Ahmad"` with `'Ahmad'` in `first.json` and run `read.js`. Read the `SyntaxError`.
2. **Add a trailing comma** after the `myobj` block and run again. See the error.
3. **Change a type.** Make `score` the string `"11.75"` and print `typeof data.score`.
4. **Go deeper.** Add an object inside `myobj` and read its value with three chained keys.
5. **Paste it into a validator.** Copy the file into any online JSON validator and see how it points to the exact error.
6. **Check a real file.** Open the `package.json` of any Node project and find all six types in it.

</details>

---

## 🚀 How to Run

You need [Node.js](https://nodejs.org) installed.

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/<your-repo-name>.git

# 2. Move into the project
cd <your-repo-name>/05-json

# 3. Run the reading script (after you create read.js from the Preview section)
node read.js
```

**Just want to check that the file is valid?** Run this one-liner. If it prints the object, the JSON is valid. If not, it prints a `SyntaxError`.

```bash
node -e "console.log(JSON.parse(require('fs').readFileSync('first.json','utf8')))"
```

💡 **Tip:** VS Code colors `.json` files and underlines mistakes, such as a missing comma, as you type.

---

## 📝 Cheat Sheet

### The shape of a JSON file

```json
{
    "string": "text",
    "number": 42,
    "boolean": true,
    "nothing": null,
    "array": [1, 2, 3],
    "object": { "key": "value" }
}
```

### Read and write

```js
const data = JSON.parse(text);             // text → object
const text = JSON.stringify(data);         // object → text
const pretty = JSON.stringify(data, null, 2); // pretty-printed

data.key;            // dot notation
data["key"];         // bracket notation
data.list[0];        // array item
data.obj.inner;      // nested value
Object.keys(data);   // all keys
```

### Rules in one line

> **Double quotes everywhere, no comments, no trailing commas, only six types.**

---

## 🎓 Key Takeaways

<table>
  <tr>
    <td>✅</td>
    <td>JSON is a <b>text format for data</b>, not a programming language.</td>
  </tr>
  <tr>
    <td>✅</td>
    <td>There are exactly <b>six types</b>: string, number, boolean, null, array, and object.</td>
  </tr>
  <tr>
    <td>✅</td>
    <td>Keys and strings need <b>double quotes</b>. Numbers, booleans, and <code>null</code> do not.</td>
  </tr>
  <tr>
    <td>✅</td>
    <td><b>No comments and no trailing commas.</b> One mistake makes the whole file unreadable.</td>
  </tr>
  <tr>
    <td>✅</td>
    <td>Objects can be <b>nested</b> inside objects and arrays, so one file can describe complex data.</td>
  </tr>
  <tr>
    <td>✅</td>
    <td><code>null</code> means "no value", which is different from <code>false</code> and <code>0</code>.</td>
  </tr>
  <tr>
    <td>✅</td>
    <td><code>JSON.parse()</code> reads JSON text into an object. <code>JSON.stringify()</code> writes an object back to text.</td>
  </tr>
  <tr>
    <td>✅</td>
    <td>Dot notation, array indexes, and loops from earlier days all work on parsed JSON data.</td>
  </tr>
</table>

---

## 🗺️ Roadmap

- [x] Variables: `var`, `let`, `const`
- [x] Operators, `if / else`, and the ternary operator
- [x] Loops and functions
- [x] JSON: the six data types and nesting
- [ ] Solve the [practice tasks](#-practice-tasks)
- [ ] Use `JSON.parse` and `JSON.stringify` in my own scripts
- [ ] Arrays in depth, with `map`, `filter`, and `reduce`
- [ ] Objects and methods, and what `this` means
- [ ] Fetch JSON from a real API with `fetch()`
- [ ] DOM manipulation: connect JavaScript to my CSS projects

---

<div align="center">

### ⭐ If this helped you, give the repo a star!

*Made while learning JavaScript, one small file at a time.*

</div>
