
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: "Welcome to re-tracing Magellan's Voyage!" });
};