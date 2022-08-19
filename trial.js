let cases = {
  cases_time_series: [
    {
      dailyconfirmed: "1",
      dailydeceased: "0",
      dailyrecovered: "0",
      date: "30 January 2020",
      dateymd: "2020-01-30",
      totalconfirmed: "1",
      totaldeceased: "0",
      totalrecovered: "0",
    },
    {
      dailyconfirmed: "0",
      dailydeceased: "0",
      dailyrecovered: "1",
      date: "31 January 2020",
      dateymd: "2020-01-31",
      totalconfirmed: "1",
      totaldeceased: "0",
      totalrecovered: "0",
    },
  ],
}
function dataFetching(cases) {
  let array = []
  for (let i = 0; i < cases.cases_time_series.length; i++) {
    if (cases.cases_time_series[i].dailyrecovered > 0) {
      array.push(cases.cases_time_series[i].dailyrecovered)
    }
  }
  return array
}
console.log(dataFetching(cases))
