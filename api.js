let api = "https://data.covid19india.org/data.json"

function getData(api) {
  fetch(api)
    .then((res) => res.json()) //converted to object
    .then((res) => {
      console.log(res)
      let tableData = ""
      res.statewise.map((values) => {
        tableData += `<tr>
            <td>${values.state}</td>
            <td>${values.active}</td>
            <td>${values.confirmed}</td>
            <td>${values.recovered}</td>
          </tr>`
      })
      // res.map((values) => {
      //   tableData = `<h1>${values.statewise}</h1>`
      // })
      // <th scope="row">${i}</th>
      // <th scope="row">${i}</th>

      document.getElementById("table_body").innerHTML = tableData
    })
    .catch((err) => console.log(err))
}
getData(api)
