(function(){
    var s_val = [15,34,56,78,34,52,24,12,74,21,89,43];

    let min = d3.min(s_val);
    let max = d3.max(s_val);
    let extent = d3.extent(s_val);
    let sum = d3.sum(s_val);
    let mean = d3.mean(s_val);
    let median = d3.median(s_val);
    let quantile = d3.quantile(s_val);
    let varience = d3.variance(s_val);
    let deviation = d3.deviation(s_val);

    d3.selectAll("#Statistics > .panel-body")
        .html(`<div class="clearfix">
            <p>Values : ${s_val}</p>
            <p><strong>Min - </strong>${min}</p>
            <p><strong>Max - </strong>${max}</p>
            <p><strong>Extent - </strong>${extent}</p>
            <p><strong>Sum - </strong>${sum}</p>
            <p><strong>Mean - </strong>${mean}</p>
            <p><strong>Median - </strong>${median}</p>
            <p><strong>Quantile - </strong>${quantile}</p>
            <p><strong>Varience - </strong>${varience}</p>
            <p><strong>Deviation - </strong>${deviation}</p>
        </div>`);
})();