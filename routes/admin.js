const express = require('express');

const adminRoutes = express();



adminRoutes.get('/admin', async (req, res) => {
    res.render('admin/index', { layout: 'admin' })
})



module.exports = adminRoutes