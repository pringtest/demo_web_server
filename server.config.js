module.exports = {
	apps: [
		{
			name: 'NextJs',
			script: 'npm start',
			instances: 0,
			exec_mode: 'fork',
			watch: true,
			env: {
				NODE_ENV: 'production',
				PORT: '3000'
			}
		}
	]
};