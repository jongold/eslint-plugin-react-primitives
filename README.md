TODO:
- [ ] stop it from working on comment
- [ ] write docs/rules/no-react-native-imports.md
- [ ] write README.md
- [ ] add travis config
- [ ] add badges
- [ ] publish


# eslint-plugin-react-primitives

Eslint rules for using React Primitives

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-react-primitives`:

```
$ npm install eslint-plugin-react-primitives --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-react-primitives` globally.

## Usage

Add `react-primitives` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "react-primitives"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "react-primitives/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





