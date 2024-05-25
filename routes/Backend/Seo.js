const express = require('express');
const { createOrUpdateSeo } = require('../../controller/Seo');
const SeoRoutes = express()


SeoRoutes.post('/add-seo',createOrUpdateSeo)

module.exports = SeoRoutes;