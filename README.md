# New TypeScript project

## Clone

1. Create a new repo for your project, and clone it.
2. Clone: `https://github.com/andraaspar/new-typescript-project.git`.
3. Copy all except `.git` into the new project’s folder.

## Set up Eclipse project

1. Install Node.js, Grunt.js, Bower.
2. In Eclipse, install [Palantir’s TypeScript plugin](https://github.com/palantir/eclipse-typescript).
3. Create a new `Static Web Project`, matching the name of the folder you cloned into, and set the `web content folder name` to `build`.
4. Do `Project > Right click > Configure > Enable TypeScript Builder`.
5. In `Project Properties > TypeScript` set `Source folder(s)` to `lib;src;test`.

## Install NPM dependencies

### Install `npm-check-updates`

```
npm install npm-check-updates -g
```

### Update package versions to latest

```
npm-check-updates -u
```

### Install

```
npm install
```

## Update `Gruntfile.js`

## Replace `README.md`

Bye.
