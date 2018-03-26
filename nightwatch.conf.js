module.exports = (function(settings) {
    settings.test_workers = false;
    settings.page_objects_path = "./pages";
    return settings;
})(require('./nightwatch.json'));