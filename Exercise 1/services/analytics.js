let requests = [];
let individualRequest = {};
let totalTime = 0;
let totalAvgTime = 0;

// Middleware to count every  request
exports.countRequests = (req, res, next) => {
    let apiName = `${req.method} ${req.url}`;

    requests.push({
        apiName
    });
    next();
};

// Middleware to count every individual request
exports.countindividualRequests = (req, res, next) => {
    let apiName = `${req.method} ${req.url}`

    if (!individualRequest[apiName]) {
        individualRequest[apiName] = 0
    }

    individualRequest[apiName] += 1

    next();
};

//return the length of the array to get total request.
exports.getTotalAnalytics = () => {
    return {
        totalRequests: requests.length
    };
};


exports.getIndividualRequest = () => {
    return {
        individualRequest: individualRequest
    }
}

//Middleware to count Average time
exports.getDurationInMilliseconds = (start) => {
    const NS_PER_SEC = 1e9
    const NS_TO_MS = 1e6
    const diff = process.hrtime(start)

    const totalRequests = requests.length

    totalTime += ((diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MS)

    totalAvgTime = totalTime / totalRequests

    return (diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MS
}

exports.getTotaltime = () => {
    return {
        totalAvgTime
    }
}
