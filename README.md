# VSCode plugin for EO

[![Build](https://github.com/objectionary/eo-vscode/actions/workflows/build.yml/badge.svg)](https://github.com/objectionary/eo-vscode/actions/workflows/build.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=EOLangVSCode_eo-vscode&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=EOLangVSCode_eo-vscode)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=EOLangVSCode_eo-vscode&metric=coverage)](https://sonarcloud.io/summary/new_code?id=EOLangVSCode_eo-vscode)
![GitHub](https://img.shields.io/github/license/objectionary/eo-vscode)

This is the VSCode plugin for [EO](https://github.com/objectionary/eo).
It provides semantic highlighting, parsing error checking and EO file
icon for your .eo files.

To install it, launch VS Code Quick Open (Ctrl+P), paste the following
command, and press enter:

```text
ext install eolang.eo
```

You can also install it from [its page](https://marketplace.visualstudio.com/items?itemName=eolang.eo)
at Visual Studio Marketplace.

## Structure

This extension is written in **TypeScript**, was developed with **Node 16**
and has two primary components:

- **Client**: The source code is located in `client/src`.
- **Server**: We're using the [eo-lsp-server](https://github.com/objectionary/eo-lsp-server)
as the server.

Publishing the extension is done with [Rultor](https://github.com/yegor256/rultor)
(see `.rultor.yml`).

## How to Contribute

Read the [code documentation](https://www.objectionary.com/eo-vscode/).

Clone the repository. Install node modules with:

```bash
npm install
```

Make changes on a new branch. You can run an instance of VSCode with the
extension running by hitting F5 in the code editor. After modifications,
test your code with:

```bash
npm run end-to-end-test
```

If you have modified any of the code documentation, generate new documentation
files with:

```bash
npm run generate-docs
```

Create a pull request. To avoid frustration, run:

```bash
npm run lint
npm run compile
```

before committing.
