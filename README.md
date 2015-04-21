# New TypeScript project

The proper way to set up a TypeScript project with Eclipse. Or without.

## Clone

1. Create a new repo for your project, and clone it into your Eclipse workspace (maybe using [TortoiseGit](https://github.com/TortoiseGit/TortoiseGit)).
2. Clone: `https://github.com/andraaspar/new-typescript-project.git`.
3. Copy all except `.git` into your project’s folder.

## Set up Eclipse project

1. Install [Node.js](https://nodejs.org/), [grunt-cli](https://github.com/gruntjs/grunt-cli) (globally), [Bower](http://bower.io/) (globally).
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

You may need to resolve some dependency conflicts. Usually `npm install --save-dev <name>@<version>` does the trick.

## Download dependencies

```
grunt update
```

## Test

Build the project with:

```
grunt
```

1. Create a symbolic link to the `build` folder in your local web server’s folder. On Windows, this is easier with [Double Commander](http://doublecmd.sourceforge.net/).
2. Check the page in a browser. It should have no errors.

## Set up build with Eclipse

1. `External Tools Configurations... > New launch configuration`.
2. `Main` tab:
  * `Location:` on Windows: `C:\Users\<user-name>\AppData\Roaming\npm\grunt.cmd`
  * `Working Directory > Browse Workspace...` and select the project.
  * `Arguments:`
    * `--no-color` or install the [ANSI Escape in Console plugin](http://marketplace.eclipse.org/content/ansi-escape-console).
    * `debug` if you want to disable uglifying the JS and compressing the CSS.
3. `Run`

## Review `.gitignore`

You may want to uncomment some lines in there.

## Update `bower.json`

1. Provide the `name` of your project.
2. Add some other dependencies?

## Update `Gruntfile.js`

1. Review `Variables to check` section near the top.
2. Check `compile` task near the bottom to see if it does what you want.
3. Other customizations?

## Replace `README.md` & start coding!

Bye.
