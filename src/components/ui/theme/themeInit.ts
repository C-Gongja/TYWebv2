// theme-init.ts (또는 _app.tsx / useEffect 등에서 실행)
const applyTheme = () => {
	const savedTheme = localStorage.getItem('theme');

	if (savedTheme === 'dark') {
		document.documentElement.classList.add('dark');
	} else if (savedTheme === 'light') {
		document.documentElement.classList.remove('dark');
	} else {
		// system preference
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}
};

applyTheme();
