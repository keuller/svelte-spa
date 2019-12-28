module.exports = {
    transform: {
        "^.+\\.js$": "babel-jest",
        "^.+\\.svelte$": "jest-transform-svelte"
    },
    moduleFileExtensions: [ "js", "svelte" ],
    testPathIgnorePatterns: ["node_modules"],
    bail: false,
    transformIgnorePatterns: ["node_modules"],
    setupFilesAfterEnv: [ "@testing-library/jest-dom/extend-expect" ]
}