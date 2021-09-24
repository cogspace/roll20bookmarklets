uglify: {
    dev: {
        // <-- include a target object
        files: [
            {
                expand: true,
                src: ["src/**/*.js"],
                dest: "dist/",

                cwd: ".",
                //   rename: function (dst, src) {
                //     return src;
                //   }
            },
        ];
    }
}
