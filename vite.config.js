const extensions = {
  umd: '.min.js',
  cjs: '.cjs',
};
export default {
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'MultiWorker',
      formats: ['cjs', 'umd'],
      fileName: (format) => `multiworker${extensions[format]}`,
    },
    sourcemap: true,
    minify: 'terser',
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      },
    },
  },
};
