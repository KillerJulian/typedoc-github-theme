import { DefaultThemeRenderContext } from 'typedoc';
import { footer } from './partials/footer';

export class GitHubThemeContext extends DefaultThemeRenderContext {
	override footer = () => footer(this);
}
