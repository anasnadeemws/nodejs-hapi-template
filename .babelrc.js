module.exports = {
    presets: ['@babel/preset-env', '@babel/preset-flow', '@babel/preset-react'],
    plugins: [
        '@babel/plugin-proposal-throw-expressions',
        '@babel/plugin-proposal-class-properties',
        '@babel/transform-runtime',
        '@babel/plugin-syntax-import-assertions'
    ]
};
