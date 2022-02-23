const client = require('../routes/config/elastic')

exports.get = (req, res, next) => {
	const text = req.query.text
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
		let results = []
		const hits = response.body.hits.hits
		hits.map(item => {
			results.push(item._source)
		})

		return res.send(results)
	})
	.catch(err => {
		console.log(err)
		return res.status(500).json({"message": err})
	})
}