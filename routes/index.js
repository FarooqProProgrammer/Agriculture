var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});

router.get('/blogs', function(req, res, next) {
  res.render('blogs', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

router.get('/farmer-details', function(req, res, next) {
  res.render('farmer-details', { title: 'Express' });
});

router.get('/farmer', function(req, res, next) {
  res.render('farmer', { title: 'Express' });
});

router.get('/project-detail', function(req, res, next) {
  res.render('project-detail', { title: 'Express' });
});

router.get('/project', function(req, res, next) {
  res.render('project', { title: 'Express' });
});

router.get('/service', function(req, res, next) {
  res.render('service', { title: 'Express' });
});

router.get('/service-detail', function(req, res, next) {
  res.render('service-detail', { title: 'Express' });
});

router.get('/shop', function(req, res, next) {
  res.render('shop', { title: 'Express' });
});

router.get('/shop-single', function(req, res, next) {
  res.render('shop-single', { title: 'Express' });
});

router.get('*', function(req, res, next) {
  res.render('404', { title: 'Express' });
});

module.exports = router;
