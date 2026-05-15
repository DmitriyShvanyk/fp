module.exports = {
    plugins: [
        require('autoprefixer')({
            overrideBrowserslist: [
                '> 1%',
                'last 2 versions',
                'Safari >= 14',
                'iOS >= 14',
                'not dead'
            ]
        })
    ]
};