module.exports = {    
    "extends": [
        "eslint:recommended",
        "plugin:import/errors",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended"
    ],
    "plugins": ["react", "import", "jsx-a11y", "@typescript-eslint"],
    "rules": {
        "react/prop-types": "off",
        "linebreak-style": 1,
        "quotes": ["error", "double"],
        "@typescript-eslint/no-var-requires": 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
    "overrides": [{
        "files": ['*.ts', '*.tsx'],
        "rules": {
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/explicit-module-boundary-types": "off",
            "@typescript-eslint/explicit-function-return-type": ["error"]
        }
      }],
    "parserOptions": {
        "ecmaVersion": 2021,
        "sourceType": "module",
        "ecmaFeatures": {
        "jsx": true
        }
    },
    'parser': '@typescript-eslint/parser',
    "env": {
        "es6": true,
        "browser": true,
        "node": true
    },
    "settings": {
        "import/resolver": {
            "typescript": {}
            },
        "react": {
            "version": "detect"
        }
    }
}
