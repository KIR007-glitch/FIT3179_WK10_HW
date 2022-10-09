// TO DO
// 3. Add filled dot points to indicate clearly where to use the tooltip to the user.
// 4. Add figure Ground so that it is clear which line he is looking at.

const VegaLiteSpec1 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Google's stock price over time.",
      "width": 800,
      "height": 450,
        "title":  "Lewis Hamilton Vs Max Verstappen Season Points",
          "data": {
            "url": "data/2021_driver_data.csv",
              "format":{"type":"csv"}
          },
  
    "layer": [
      {
        "mark": { "type": "line", "strokeWidth": 6 },
        "encoding": {
          "x": { "field": "name", "type": "ordinal","title":"Grand Prix Name","sort":null},
          "y": { "field": "season_points", "type": "quantitative", "title":"Total Points" },
             "color": {
              "field": "surname",
              "title":"Driver Name",
              "type": "nominal",
              "scale": {
                  "domain": ["Verstappen","Hamilton"],
                  "range": ["blue", "black"],
                  "type": "nominal",
              },
          },
          "tooltip": [
              { "field": "surname", "type": "nominal", "title": "Name" },
              { "field": "name", "type": "nominal", "title": "GrandPrix" },
              { "field": "season_points", "type": "ordinal", "title": "total_points" },
          ]
        }
      },
      {
        "data": {"values": [{}]},
        "mark": {
          "type": "text",
          "align": "left",
          "baseline": "bottom",
          "text": ["Both Hamilton and Verstappen failed "],
          "dx": -140,
          "dy": 120,
          "fontSize":14,
        }
      },
          {
        "data": {"values": [{}]},
        "mark": {
          "type": "text",
          "align": "left",
          "baseline": "bottom",
          "text": ["to gain points in the Azerbaijan Grand Prix"],
          "dx": -140,
          "dy": 135,
          "fontSize":14,
        }
      },
              {
        "data": {"values": [{}]},
        "mark": {
          "type": "text",
          "align": "left",
          "baseline": "bottom",
          "text": ["Hamilton and Verstappen Crash out"],
          "dx": 150,
          "dy": -10,
          "fontSize":14,
        }
      },
                  {
        "data": {"values": [{}]},
        "mark": {
          "type": "text",
          "align": "left",
          "baseline": "bottom",
          "text": ["going wheel to wheel in the Italian Grand Prix"],
          "dx": 150,
          "dy": 5,
          "fontSize":14,
        }
      },
      {
        "data": { "values": [{}]},
  
    "mark": {
      "type": "text", 
      "angle": 10,
       "text": ["___ "],
       "dx": -150,
       "dy": 130,
      "fontSize": 35},
  
      },
      {
        "data": { "values": [{}]},
  
    "mark": {
      "type": "text", 
      "angle": 10,
       "text": ["___ "],
       "dx": 120,
       "dy": -50,
      "fontSize": 35},
  
      }
  
    ],
    "config": {
          "text": { "font": "Open Sans" },
          "title": { "font": "monospace", "fontSize": 15, "fontWeight": "normal" },
      },
  }

vegaEmbed("#vis1",VegaLiteSpec1);