import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		coverage: {
			provider: 'v8',
			include: ['src/**/*.ts'],
			exclude: ['src/**/*.spec.ts'],
			reporter: ['text', 'lcov'],
			thresholds: {
				branches: 80,
				functions: 90,
				lines: 90,
				statements: 90,
			},
		},
	},
});
