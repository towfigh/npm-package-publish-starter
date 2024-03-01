# npm-package-publish-starter

Start coding instantly with a pre-configured environment that adheres to best practices.

This package is a streamlined boilerplate designed to help developers quickly create and publish UI component packages to npm. This starter kit includes essential configurations and a sample component to kickstart your development process. With `npm-package-publish-starter`, you can focus on building unique and reusable UI components without worrying about the initial setup.

## Prerequisites

This project requires NodeJS (version 8 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ node -v
v18.18.2
$ npm -v
9.8.1
```

## Features

- Pre-configured with Webpack and Babel for bundling.
- Includes a sample React component.
- Ready-to-use npm scripts for easy build and publish.

## Getting Started

Start with cloning this repo on your local machine:

```sh
$ git clone https://github.com/ORG/PROJECT.git
$ cd PROJECT
```

To install and set up the library, run:

```sh
$ npm install
```

Or if you prefer using Yarn:

```sh
$ yarn
```

## Usage

### Watch live changes

```sh
$ npm run storybook
```

### Building a distribution version

```sh
$ npm run build
```

This task will create a distribution version of the project
inside your local `dist/` folder.

## Publish

- Change `package.json` configs as you want:

```json
"name": "YOUR PACKAGE NAME",
"version": "XX.YY.ZZ",
"description": "YOUR PACKAGE DESCRIPTION",
"author": "YOUR NAME",
"keywords": ["YOUR" , "KEY" , "WORDS"],
```

- Build the project:

```sh
$ npm run build
```

- Login to npm with:

```sh
$ npm login
```

- Publish your package:

```sh
$ npm publish
```

## Contributing

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Add your changes: `git add .`
4.  Commit your changes: `git commit -m 'Add some feature'`
5.  Push to the branch: `git push origin my-new-feature`
6.  Submit a pull request!

## Built With

- react
- rollup
- storybook
- Love

## Authors

- **Tofigh Nazari** - [github](https://github.com/towfigh)
