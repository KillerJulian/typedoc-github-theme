import { Application } from 'typedoc';
import { GitHubTheme } from './GitHubTheme';

/**
 * Called by TypeDoc when loading this theme as a plugin
 */
export function load(app: Application) {
	app.renderer.defineTheme('typedoc-github-theme', GitHubTheme);
}
