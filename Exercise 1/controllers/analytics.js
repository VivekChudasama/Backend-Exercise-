const reqCount = require('./user')

exports.analytics = (req, res, next) => {
    res.json({
        reqCount : reqCount.getTotalAnalytics(),
        totalAvgTime : reqCount.getTotaltime()
    });
}