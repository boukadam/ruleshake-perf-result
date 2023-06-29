var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "13522",
        "ok": "13521",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "21",
        "ok": "85",
        "ko": "21"
    },
    "maxResponseTime": {
        "total": "15077",
        "ok": "15077",
        "ko": "21"
    },
    "meanResponseTime": {
        "total": "4848",
        "ok": "4848",
        "ko": "21"
    },
    "standardDeviation": {
        "total": "4140",
        "ok": "4140",
        "ko": "0"
    },
    "percentiles1": {
        "total": "4388",
        "ok": "4388",
        "ko": "21"
    },
    "percentiles2": {
        "total": "8745",
        "ok": "8745",
        "ko": "21"
    },
    "percentiles3": {
        "total": "11232",
        "ok": "11232",
        "ko": "21"
    },
    "percentiles4": {
        "total": "12418",
        "ok": "12418",
        "ko": "21"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 4055,
    "percentage": 30
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 298,
    "percentage": 2
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 9168,
    "percentage": 68
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 1,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "133.881",
        "ok": "133.871",
        "ko": "0.01"
    }
},
contents: {
"req_test-assurance--a1a6c": {
        type: "REQUEST",
        name: "test-assurance-auto",
path: "test-assurance-auto",
pathFormatted: "req_test-assurance--a1a6c",
stats: {
    "name": "test-assurance-auto",
    "numberOfRequests": {
        "total": "13522",
        "ok": "13521",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "21",
        "ok": "85",
        "ko": "21"
    },
    "maxResponseTime": {
        "total": "15077",
        "ok": "15077",
        "ko": "21"
    },
    "meanResponseTime": {
        "total": "4848",
        "ok": "4848",
        "ko": "21"
    },
    "standardDeviation": {
        "total": "4140",
        "ok": "4140",
        "ko": "0"
    },
    "percentiles1": {
        "total": "4387",
        "ok": "4388",
        "ko": "21"
    },
    "percentiles2": {
        "total": "8745",
        "ok": "8745",
        "ko": "21"
    },
    "percentiles3": {
        "total": "11232",
        "ok": "11232",
        "ko": "21"
    },
    "percentiles4": {
        "total": "12418",
        "ok": "12418",
        "ko": "21"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 4055,
    "percentage": 30
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 298,
    "percentage": 2
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 9168,
    "percentage": 68
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 1,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "133.881",
        "ok": "133.871",
        "ko": "0.01"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
