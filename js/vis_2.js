const VegaLiteSpec2 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "width": 800,
    "height": 450,
    "title":  "2021 Season Top 10 Drivers",
    params: [{
        name: "Driver_selection",
        bind: {
            input: "select",
            options: [
                null,
                "Verstappen",
                "Hamilton",
                "Bottas",
                "PÃ©rez",
                "Sainz",
                "Norris",
                "Leclerc",
                "Ricciardo",
                "Gasly",
                "Alonso"
            ],
            labels: [
                "All",
                "Verstappen",
                "Hamilton",
                "Bottas",
                "Perez",
                "Sainz",
            ],
            name: "Select Driver"
        }
    }],
        "data": {
          "url": "https://raw.githubusercontent.com/KIR007-glitch/FIT3179_WK10_HW/main/data/2021_driver_data.csv",
            "format":{"type":"csv"}
        },
        transform: [{
            filter: "Driver_selection == null || (datum.surname == Driver_selection)"
        }],

  
  "mark": { "type": "line", "strokeWidth": 6 },

        "encoding": {
           "x": { "field": "name", "type": "ordinal","title":"Grand Prix Name","sort":null},
           "y": { "field": "season_points", "type": "quantitative", "title":"Total Points" },
   "color": {
            "field": "surname",
            "title":"Driver Name",
            "type": "nominal",
            "scale": {
                "domain": ["Verstappen","Hamilton","Bottas","PÃ©rez","Sainz","Norris","Leclerc","Ricciardo","Gasly","Alonso"],
                "range": ["#1B0BF5", "#0A0A0A","#0A0A0A","#1B0BF5","#FB270A","#F1B906","#FB270A","#F1B906","#07CEE4","#AD79FF"],
                "type": "nominal",

            },
        },
        "tooltip": [
            { "field": "surname", "type": "nominal", "title": "Name" },
            { "field": "name", "type": "nominal", "title": "GrandPrix" },
            { "field": "season_points", "type": "ordinal", "title": "Total Points", },
        ]
    },
    "config": {
        "text":  { "font": "Open Sans" },
        "title": { "font": "monospace", "fontSize": 15, "fontWeight": "bold" },
    },
}

vegaEmbed("#vis2",VegaLiteSpec2);