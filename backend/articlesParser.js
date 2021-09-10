const got = require('got');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const getArticleDetails = (request, response) => {
    const id = request.params.id;
	const url = `https://pubmed.ncbi.nlm.nih.gov/${id}`;

	got(url)
		.then((htmlResponse) => {
			const dom = new JSDOM(htmlResponse.body);
			response
				.status(200)
				.json({ request: id, abstract: dom.window.document.querySelector("[id='enc-abstract']").textContent.trim() });
		})
		.catch((err) => {
			console.log(err);
		});
};

module.exports = {
	getArticleDetails,
};
