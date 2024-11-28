import { DefaultThemeRenderContext } from 'typedoc';
import { footer } from './partials/footer.js';

export class GitHubThemeContext extends DefaultThemeRenderContext {
	override footer = () => footer(this);
}
