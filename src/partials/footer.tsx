import { JSX } from 'typedoc';
import { GitHubThemeContext } from '../GitHubThemeContext';

export function footer(context: GitHubThemeContext) {
	return (
		<footer>
			{context.hook('footer.begin', context)}
			{generatorDisplay(context)}
			{customFooterDisplay(context)}
			{context.hook('footer.end', context)}
		</footer>
	);
}

function generatorDisplay(context: GitHubThemeContext) {
	if (context.options.getValue('hideGenerator')) {
		return <></>;
	}

	return (
		<p class="tsd-generator">
			{'Generated using '}
			<a href="https://typedoc.org/" target="_blank">
				TypeDoc
			</a>
			{' with '}
			<a href="https://github.com/KillerJulian/typedoc-github-theme" target="_blank">
				typedoc-github-theme
			</a>
		</p>
	);
}

function customFooterDisplay(context: GitHubThemeContext) {
	const customFooterHtml = context.options.getValue('customFooterHtml');

	if (!customFooterHtml) {
		return <></>;
	}

	if (context.options.getValue('customFooterHtmlDisableWrapper')) {
		return <JSX.Raw html={customFooterHtml} />;
	}

	return (
		<p>
			<JSX.Raw html={customFooterHtml} />
		</p>
	);
}
