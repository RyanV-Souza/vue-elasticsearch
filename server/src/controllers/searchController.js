const client = require('../routes/config/elastic')

exports.get = (req, res, next) => {
	const text = req.query.text
	console.log(req.query.text)

	client.search({
		body: {
			query: {
				fuzzy: {
					nmLogradouro: {
						value: text
					}
				}
			}
		}
	})
	.then(response => {
		return res.json(response.body.hits.hits)
	})
	.catch(err => {
		return res.status(500).json({"message": err})
	})
}