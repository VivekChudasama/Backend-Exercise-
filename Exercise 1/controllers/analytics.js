const reqCount = require('../services/analytics')

exports.analytics = (req, res, next) => {
    res.status(200).json({
        reqCount : reqCount.getTotalAnalytics(),
        individualRequestCount : reqCount.getIndividualRequest(),
        totalAvgTime : reqCount.getTotaltime()
    });
}