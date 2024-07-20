import { cpSync } from 'fs';
import { resolve } from 'path';
import { DefaultTheme, JSX, PageEvent, Reflection, RendererEvent } from 'typedoc';
import { GitHubThemeContext } from './GitHubThemeContext';

export class GitHubTheme extends DefaultTheme {
	initialize() {
		super.initialize();

		// copy the complete assets
		this.application.renderer.on(RendererEvent.END, () => {
			const from = resolve(__dirname, '../src/assets/');
			const to = resolve(this.application.options.getValue('out'), 'assets/');

			cpSync(from, to, { recursive: true });
		});

		// link the css file
		this.application.renderer.hooks.on('head.end', (event) => (
			<>
				<link rel="stylesheet" href={event.relativeURL('assets/typedoc-github-style.css')} />
			</>
		));
	}

	getRenderContext(pageEvent: PageEvent<Reflection>) {
		return new GitHubThemeContext(this, pageEvent, this.application.options);
	}
}
