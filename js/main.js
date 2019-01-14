$(document).ready(function() {
	$('#fullpage').fullpage({
		autoScrolling: true,
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['Who Wants War?', 'Trump', 'Introduction', 'Data Collection Method', 'Who Are the Exporters?', 'Top 25 Largest Exporters', 'Exported Weapons', 'Who Are the Importers?', 'Top 25 Largest Importers', 'Imported Weapons', 'Exports/Imports by Regions', 'Exports by Regions', 'Imports by Regions', 'Explore the Five-Year Trend', 'Five-Year Trend of Exports', 'About this Project'],
	});
	$.fn.fullpage.setAllowScrolling(true);
});