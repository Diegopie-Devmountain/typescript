# TypeScript

## Install

If you want to commit to using TS, it's better to install the compiler globally
`npm i -g typescript`

run the compiler using `tcs`, such as `tsc -v`
You can manually compile files by running `tsc path-to-file`

## inline type annotation

`let age: number = 10;`

`tsc --init`

https://www.npmjs.com/package/ts-node#overview# typescript


## React

### Config

Honestly, the best place to start is to make a new Vite app using TypeScript. Then compare the package JSON and use `npm uninstall` to remove packages that are not needed an `npm i packageName@versionNumber` (`npm i react-dom@6.26`) to install the specific version.
Update the scripts to match the new Vite app since TS will need to be compiled and double check your Tailwind config ensure it is looking at tsx files.
If you keep getting conflicts, you will have to manually check which packages are conflicting or use an AI

### Update storeReducer

We can now change the file to .ts instead of .js and we will create an `interface` for our state. 
An interface is used to define Types of objects. It differs from a Type in that it can be extended like a class, so it is common to see in OOP projects.

```js
interface ItemData {
    itemId: number,
    itemName: string,
    itemDescription: string,
    itemPrice: number,
    imageUrl: string,
    quantity: number,
    isSpecialItem: boolean
}
```

Now we can create the line item using the previous interface, this would work with Types as well

```js
interface CartLineItem {
    cartItemKey: ItemData,
    quantity: number,
    total: number,
    id: number
}
```

Now we can make an interface for our state, which we can use on our initialState variable, our state parameter in the reducer, and the storeReducer function

```js
interface State {
    cartItems: CartLineItem[]
}

const initialState: State = {
    cartItems: []
};
```

Now lets rewrite one of our reducers and see how TS makes this much more intuitive to know what objects we are working with


## Custom Types

That is great an all, but we use these same data structure all over our app, from the front end to the back end. So let's make it accessible anywhere we need it

* Make a new folder in the root called `types`.
* Make a file called `item.d.ts`
  * This is a declaration file so ts can see all types declared in these files anywhere in you app
  * You can add these files to the global types folder or add them to a component folder if you only want to use them there
* Paste in your interfaces in this file
* In both the `tsconfig.app.json` and `tsconfig.node.json`:
  * Add `"composite": true,` property and set `noEmit` to `false`
* In `tsconfig.json`, add `"include": ["**/*.d.ts"]` property

Now we can delete the types from the cartStore and we will still have access to them!

## Using the server

We have a few setup steps here:

* npm install -D @types/express @types/node @types/nodemon tsx
  * tsx is a replacement for ts-node
* Add tsconfig.server.ts to the server and update tsconfig.json

 ```js
 {
  "extends": "../tsconfig.json", 
  "compilerOptions": {
    "target": "es2017",
    "composite": true,
    "module": "ESNext",
    "outDir": "../dist", // Output directory for compiled server code
    "lib": ["ES2023"],   // Libraries for Node.js environment
    // Add other server-specific options if needed
  },
  "include": ["./**/*", "../scripts/**/*"] // Include all files in the server folder
}
```

* `{ "path": "./server/tsconfig.server.json" },`

## Using JSX

Let's update CartDrawer.jsx
(edit a jsx key to be `itemId` to show how TS will find bugs without having to discover them in the browser)
