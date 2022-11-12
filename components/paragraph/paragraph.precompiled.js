(function () {
	var template = Handlebars.template,
		templates = (Handlebars.templates = Handlebars.templates || {});
	templates["paragraph"] = template({
		compiler: [8, ">= 4.3.0"],
		main: function (container, depth0, helpers, partials, data) {
			var helper,
				alias1 = depth0 != null ? depth0 : container.nullContext || {},
				alias2 = container.hooks.helperMissing,
				alias3 = "function",
				alias4 = container.escapeExpression,
				lookupProperty =
					container.lookupProperty ||
					function (parent, propertyName) {
						if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
							return parent[propertyName];
						}
						return undefined;
					};

			return (
				"<div>\n    <h3>" +
				alias4(
					((helper =
						(helper =
							lookupProperty(helpers, "headingText") ||
							(depth0 != null
								? lookupProperty(depth0, "headingText")
								: depth0)) != null
							? helper
							: alias2),
					typeof helper === alias3
						? helper.call(alias1, {
								name: "headingText",
								hash: {},
								data: data,
								loc: {
									start: { line: 2, column: 8 },
									end: { line: 2, column: 23 },
								},
						  })
						: helper)
				) +
				"</h3>\n    <p>" +
				alias4(
					((helper =
						(helper =
							lookupProperty(helpers, "contentText") ||
							(depth0 != null
								? lookupProperty(depth0, "contentText")
								: depth0)) != null
							? helper
							: alias2),
					typeof helper === alias3
						? helper.call(alias1, {
								name: "contentText",
								hash: {},
								data: data,
								loc: {
									start: { line: 3, column: 7 },
									end: { line: 3, column: 22 },
								},
						  })
						: helper)
				) +
				"</p>\n</div>\n"
			);
		},
		useData: true,
	});
})();
