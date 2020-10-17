"use strict";

const { RuleTester } = require("eslint");
const rule = require("../../../lib/rules/func-style");
const { messages } = rule.meta;

new RuleTester({ parser: require.resolve("@typescript-eslint/parser"), parserOptions: { ecmaVersion: 2015, sourceType: "module" } }).run("func-style", rule, {
    valid: [
        {
            code: "function foo() {}",
            options: ["declaration"]
        },
        {
            code: "const foo = () => {}",
            options: ["arrow"]
        },
        {
            code: "() => {};",
            options: ["arrow"]
        },
        {
            code: "const foo = function(){};",
            options: ["expression"]
        },
        {
            code: "function foo() {const bar = () => {};}",
            options: ["arrow", { topLevelStyle: "declaration" }]
        },
        {
            code: "const foo = () => {function bar(){}};",
            options: ["declaration", { topLevelStyle: "arrow" }]
        },
        {
            code: "const foo = function(){const bar = () => {}};",
            options: ["arrow", { topLevelStyle: "expression" }]
        },
        {
            code: "function foo() {const bar = function(){};}",
            options: ["expression", { topLevelStyle: "declaration" }]
        },
        {
            code: "export default function foo() {const bar = () => {};}",
            options: ["arrow", { topLevelStyle: "arrow", allowExportDefaultFunctionDeclaration: true }]
        }
    ],
    invalid: [
        {
            code: "const foo = (bar: Bar, h=null) => {};",
            output: "function foo(bar: Bar, h=null){};",
            options: ["declaration"],
            errors: [{ message: messages["declaration-in-top-level"] }]
        },
        {
            code: "const foo = () => {};",
            output: "function foo(){};",
            options: ["declaration"],
            errors: [{ message: messages["declaration-in-top-level"] }]
        },
        {
            code: "function foo() {}",
            output: "var foo = function(){}",
            options: ["expression"],
            errors: [{ message: messages["expression-in-top-level"] }]
        },
        {
            code: "const foo = function(){};",
            output: "function foo(){};",
            options: ["declaration"],
            errors: [{ message: messages["declaration-in-top-level"] }]
        },
        {
            code: "function foo() {const bar = function(){};}",
            output: "function foo() {const bar = () =>{};}",
            options: ["arrow", { topLevelStyle: "declaration" }],
            errors: [{ message: messages.arrow }]
        },
        {
            code: "function foo() {const bar = () => {};}",
            output: "function foo() {const bar = function(){};}",
            options: ["expression", { topLevelStyle: "declaration" }],
            errors: [{ message: messages.expression }]
        },
        {
            code: "function foo() {const bar = () => {};}",
            output: "function foo() {function bar(){};}",
            options: ["declaration"],
            errors: [{ message: messages.declaration }]
        },
        {
            code: "async function foo() {const bar = function(){};}",
            output: "var foo = async () =>{const bar = () =>{};}",
            options: ["arrow"],
            errors: [{ message: messages["arrow-in-top-level"] }, { message: messages.arrow }]
        }
    ]
});
