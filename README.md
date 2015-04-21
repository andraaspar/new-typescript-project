# New TypeScript project

## Clone

1. Create a new repo for your project, and clone it into your Eclipse workspace (maybe using [TortoiseGit](https://github.com/TortoiseGit/TortoiseGit)).
2. Clone: `https://github.com/andraaspar/new-typescript-project.git`.
3. Copy all except `.git` into your project’s folder.

## Set up Eclipse project

1. Install [Node.js](https://nodejs.org/), [grunt-cli](https://github.com/gruntjs/grunt-cli), [Bower](http://bower.io/).
2. In Eclipse, install [Palantir’s TypeScript plugin](https://github.com/palantir/eclipse-typescript).
3. Create a new `Static Web Project`, matching the name of the folder you cloned into, and set the `web content folder name` to `build`.
4. Do `Project > Right click > Configure > Enable TypeScript Builder`.
5. In `Project > Properties > TypeScript` set `Source folder(s)` to `lib;src;test`.

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

You may need to resolve some dependency conflicts. Usually `npm install <name>@<version>` does the trick.

## Download dependencies

```
grunt update
```

## Test

Build the project with:

```
grunt
```

## Update `Gruntfile.js`

1. Review `Variables to check` section near the top.
2. Check `compile` task near the bottom to see if it does what you want.

## Replace `README.md`

Bye.
