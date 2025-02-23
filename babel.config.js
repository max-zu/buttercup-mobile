module.exports = {
    presets: ["module:metro-react-native-babel-preset"],
    plugins: [
        [
            "module-resolver",
            {
                alias: {
                    buttercup: "buttercup/web"
                }
            },
            "react-native-reanimated/plugin" // keep last
        ]
    ]
};
