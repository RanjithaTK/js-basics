let api = "https://data.covid19india.org/state_district_wise.json"

function getData(api) {
  fetch(api)
    .then((res) => res.json())
    .then((res) => {
      let c = 1
      for (let i in res) {
        for (j in res[i].districtData) {
          var state = i
          var district = j
          var recovered = res[i].districtData[j].active
          var active = res[i].districtData[j].recovered
          var confirmed = res[i].districtData[j].confirmed
          let tableData = ""
          tableData = `<tr>
             <td>${state}</td>
             <td>${district}</td>
             <td>${active}</td>
          <td>${confirmed}</td>
             <td>${recovered}</td>
      </tr>`
          if (recovered != 0) {
            document.getElementById("table_body").innerHTML += tableData
          }
          c++
        }
      }
    })
}

getData(api)
