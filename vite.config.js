export default {
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'MultiWorker',
      formats: ['umd'],
      fileName: () => 'multiworker.js',
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
