## About

This is a simple doc website created with [Docute](https://docute.org)!

Let me introduce Docute to you..

Docute(https://docute.org/) was invented by egoist(https://github.com/egoist, https://egoist.sh/, https://egoist.moe/)

Docute Github: https://github.com/egoist/docute

Docute is one of the fastest ways to create a documentation site for your project.

It is basically a JavaScript file that fetches Markdown files and renders them as a single-page application.

It's totally **runtime-driven** so there's **no server-side** components involved which also means there's **no build process**. You only need to create an HTML file and a bunch of Markdown documents and your website is almost ready!

You can serve this folder as a static website on your machine using:

- Node.js: `npm i -g serve && serve .`
- Python: `python -m SimpleHTTPServer`
- Golang: `caddy`
- ..or whatever static web server

Docute comes with a set of built-in **Vue components**.

## `<Badge>`

A small count and labeling component.

| Prop     | Type                                       | Default | Description             |
| :------- | :----------------------------------------- | :------ | :---------------------- |
| type     | `'tip' | 'success' | 'warning' | 'danger'` | N/A     | Badge type              |
| color    | `string`                                   | N/A     | Custom background color |
| children | `string`                                   | N/A     | Badge text              |

Example:

```markdown
- Feature 1 <Badge>Badge</Badge>
- Feature 2 <Badge type="tip">Tip</Badge>
- Feature 3 <Badge type="success">Success</Badge>
- Feature 4 <Badge type="warning">Warning</Badge>
- Feature 5 <Badge type="danger">Danger</Badge>
- Feature 6 <Badge color="magenta">Custom Color</Badge>
```

- Feature 1 <Badge>Badge</Badge>
- Feature 2 <Badge type="tip">Tip</Badge>
- Feature 3 <Badge type="success">Success</Badge>
- Feature 4 <Badge type="warning">Warning</Badge>
- Feature 5 <Badge type="danger">Danger</Badge>
- Feature 6 <Badge color="magenta">Custom Color</Badge>

## `<Note>`

Colored note blocks, to emphasize part of your page.

| Prop     | Type                                       | Default             | Description                                       |
| :------- | :----------------------------------------- | :------------------ | :------------------------------------------------ |
| type     | `'tip' | 'warning' | 'danger' | 'success'` | N/A                 | Note type                                         |
| label    | `string` `boolean`                         | The value of `type` | Custom note label text, use `false` to hide label |
| children | `string`                                   | N/A                 | Note content                                      |

Examples:

```markdown
<Note>

This is a note that details something important.<br>
[A link to helpful information.](https://docute.org)

</Note>

<!-- Tip Note -->
<Note type="tip">

This is a tip for something that is possible.

</Note>

<!-- Warning Note -->
<Note type="warning">

This is a warning for something very important.

</Note>

<!-- Danger Note -->
<Note type="danger">

This is a danger for something to take action for.

</Note>
```

<Note>

This is a note that details something important.<br>
[A link to helpful information.](https://docute.org)

</Note>

<!-- Tip Note -->
<Note type="tip">

This is a tip for something that is possible.

</Note>

<!-- Warning Note -->
<Note type="warning">

This is a warning for something very important.

</Note>

<!-- Danger Note -->
<Note type="danger">

This is a danger for something to take action for.

</Note>

## `<Gist>`

Embed [GitHub Gist ](https://gist.github.com/) into your Markdown documents.

| Prop | Type     | Default | Description |
| :--- | :------- | :------ | :---------- |
| id   | `string` | N/A     | Gist ID     |

Example:

```markdown
<Gist id="71b8002ecd62a68fa7d7ee52011b2c7c" />
```

<Gist id="71b8002ecd62a68fa7d7ee52011b2c7c" />

## `<docute-select>`

A customized `<select>` component:

<!-- prettier-ignore -->
````vue
<docute-select :value="favoriteFruit" @change="handleChange">
  <option value="apple" :selected="favoriteFruit === 'apple'">Apple</option>
  <option value="banana" :selected="favoriteFruit === 'banana'">Banana</option>
  <option value="watermelon" :selected="favoriteFruit === 'watermelon'">Watermelon</option>
</docute-select>

Your favorite fruit: {{ favoriteFruit }}

​```js {mixin: true}
module.exports = { 
  data() { 
    return { 
      favoriteFruit: 'banana' 
    }
  }, 
  methods: {
    handleChange(value) { 
      this.favoriteFruit = value
    } 
  }
}
```
````
<docute-select @change="handleChange" :value="favoriteFruit">
  <option value="apple" :selected="favoriteFruit === 'apple'">Apple</option>
  <option value="banana" :selected="favoriteFruit === 'banana'">Banana</option>
  <option value="watermelon" :selected="favoriteFruit === 'watermelon'">Watermelon</option>
</docute-select>

Your favorite fruit: {{ favoriteFruit }}

​```js {mixin: true}
{
  data() {
    return {
      favoriteFruit: 'banana'
    }
  },
  methods: {
    handleChange(value) {
      this.favoriteFruit = value
    }
  }
}
```

## ~~\<ImageZoom>~~

Use medium-style zoom effect to display certain image.

| Prop   | Type      | Default | Description              |
| :----- | :-------- | :------ | :----------------------- |
| src    | `string`  | N/A     | URL to image             |
| title  | `string`  | N/A     | Image title              |
| alt    | `string`  | N/A     | Placeholder text         |
| border | `boolean` | `false` | Show border around image |
| width  | `string`  | N/A     | Image width              |

Example:

```markdown
<ImageZoom 
  src="https://i.loli.net/2018/09/24/5ba8e878850e9.png" 
  :border="true" 
  width="300"
/>
```

## FAQ

Children in children not working #274

https://github.com/egoist/docute/issues/274

Multi-level menu #277

This could probably be fixed by adding a `SideBarItem` if it detects that the item has children:

```html
<div
      class="ItemChildren"
      v-if="children && (open || item.collapsable === false)"
    >

      <div class="ItemChild" v-for="(link, index) of children" :key="index">
        ...

        <sidebar-item
          v-if="link.children"
          :item="link"
          :open="closedItems.indexOf(index) === -1"
          @toggle="toggleItem(index)"
        />
      </div>
</div>
```