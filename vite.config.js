import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	base: '/',

	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@css': path.resolve(__dirname, './src/css'),
			'@js': path.resolve(__dirname, './src/js'),
			'@utils': path.resolve(__dirname, './src/js/utils'),
			'@modules': path.resolve(__dirname, './src/js/modules'),
			'@services': path.resolve(__dirname, './src/js/services'),
			'@lib': path.resolve(__dirname, './src/js/lib'),
			'@assets': path.resolve(__dirname, './src/assets'),
		},
	},

	css: {
		devSourcemap: true,
	},

	server: {
		port: 5173,
		open: true,
	},

	preview: {
		port: 4173,
		open: true,
	},

	build: {
		target: ['es2022', 'chrome89', 'edge89', 'firefox89', 'safari15'],
		outDir: 'dist',
		assetsDir: 'assets',
		assetsInlineLimit: 4096,
		cssCodeSplit: true,
		cssMinify: false,
		sourcemap: process.env.NODE_ENV === 'production' ? 'hidden' : true,
		minify: 'esbuild',
		chunkSizeWarningLimit: 500,
	},
});
