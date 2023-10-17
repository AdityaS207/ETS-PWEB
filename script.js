const data = document.getElementById("output");

function newtable(nama, id) {
    const outerDiv = document.createElement("div");
    outerDiv.className = "col-lg-2 col-md-3 col-sm-12 col-12 mb-3";
    outerDiv.style.marginTop = "25px";

    const card = document.createElement("div");
    card.className = `card border-left-primary shadow h-100 py-2`;
    card.style.borderRadius = "10px";

    const table = document.createElement("div");
    table.className = "card-body";

    const row = document.createElement("div");
    row.className = "row no-gutters align-items-center";

    const coll = document.createElement("div");
    coll.className = "col mr-2";

    const tittle = document.createElement("div");
    tittle.className = "text-xs font-weight-bold text-primary text-uppercase mb-2";
    tittle.textContent = nama
    tittle.style.marginRight = "20px"

    const value = document.createElement("div");
    value.className = "h4 mb-0 font-weight-normal text-gray-800";
    value.textContent = id

    coll.appendChild(tittle);
    coll.appendChild(value);
    row.appendChild(coll);
    table.appendChild(row);
    card.appendChild(table);
    outerDiv.appendChild(card);

    data.appendChild(outerDiv);
}

$.ajax({
    type: "GET",
    url: "http://159.223.51.203/api/bio",
    dataType: "json",
    crossDomain: true,
    success: function (response) {
        for (let index = 0; index < 11; index++) {
            var nama = response[index].name
            var id = response[index].id
            newtable(nama, id);
        }
    },
});
