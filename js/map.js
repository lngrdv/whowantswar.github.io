$(document).ready(function() {
  var bubble_map = new Datamap({
    element: document.getElementById("container"),
    geographyConfig: {
      popupOnHover: false,
      highlightOnHover: false
    },
    fills: {
      defaultFill: '#bccdc6d3',
    }
  });

  var new_clients = [
    { 
    	name: 'Australia',
    	centered: 'AUS', 
    	radius: 469 / 100, 
    	totalAmount: 469, 
    	index: '+15%', 
    	mainClients: ["United States", "<br>Indonesia", "<br>Oman"] 
    },
    { 
    	name: 'Belarus',
    	centered: 'BLR', 
    	radius: 653 / 150, 
    	totalAmount: 653, 
    	index: '+12%', 
    	mainClients: ["Viet Nam", "<br>China", "<br>Sudan(1)"] 
    },
    { 
    	name: 'Brazil',
    	centered: 'BRA', 
    	radius: 279 / 100, 
    	totalAmount: 279, 
    	index: '-20%', 
    	mainClients: ["Afghanistan(1)", "<br>Indonesia", "<br>Angola"] 
    },
    { 
    	name: 'Canada',
    	centered: 'CAN', 
    	radius: 1095 / 190, 
    	totalAmount: 1095, 
    	index: '-18%', 
    	mainClients: ["Saudi Arabia(1)", "<br>India", "<br>United States"]
    },
    { 
    	name: 'China',
    	centered: 'CHN', 
    	radius: 8312 / 600, 
    	totalAmount: 8312, 
    	index: '+38%', 
    	mainClients: ["Pakistan(1)", "<br>Bangladesh(1)", "<br>Algeria(1)"]
    },
    { 
    	name: 'Czech Republic',
    	centered: 'CZE', 
    	radius: 448 / 100, 
    	totalAmount: 448, 
    	index: '+467%', 
    	mainClients: ["Iraq(1)", "<br>United States", "<br>Viet Nam"]
    },
    { 
    	name: 'Finland',
    	centered: 'FIN', 
    	radius: 313 / 100, 
    	totalAmount: 313, 
    	index: '-5,7%', 
    	mainClients: ["Poland", "<br>Sweden", "<br>Saudi Arabia(1)"]
    },
    { 
    	name: 'France',
    	centered: 'FRA', 
    	radius: 9706 / 600, 
    	totalAmount: 9706, 
    	index: '+27%', 
    	mainClients: ["Egypt(1)", "<br>China", "<br>India"]
    },
    { 
    	name: 'Germany',
    	centered: 'DEU', 
    	radius: 8469 / 600, 
    	totalAmount: 8469, 
    	index: '-14%', 
    	mainClients: ["South Korea", "<br>Greece", "<br>Israel(1)"]
    },
    { 
    	name: 'Israel',
    	centered: 'ISR', 
    	radius: 4248 / 350, 
    	totalAmount: 4248, 
    	index: '+55%', 
    	mainClients: ["India", "<br>Azerbaijan(1)", "<br>Viet Nam"]
    },
    { 
    	name: 'Italy',
    	centered: 'ITA', 
    	radius: 3590 / 300, 
    	totalAmount: 3590, 
    	index: '+13%', 
    	mainClients: ["UAE", "<br>Turkey(1)", "<br>Algeria(1)"]
    },
    { 
    	name: 'South Korea',
    	centered: 'KOR', 
    	radius: 1784 / 200, 
    	totalAmount: 1784, 
    	index: '+65%', 
    	mainClients: ["Indonesia", "<br>Iraq(1)", "<br>Philippines"]
    },
    { 
    	name: 'Netherlands',
    	centered: 'NLD', 
    	radius: 3101 / 300, 
    	totalAmount: 3101, 
    	index: '+14%', 
    	mainClients: ["Jordan", "<br>Indonesia", "<br>United States"]
    },
    { 
    	name: 'Norway',
    	centered: 'NOR', 
    	radius: 862 / 150, 
    	totalAmount: 862, 
    	index: '+14%', 
    	mainClients: ["Finland", "<br>Oman", "<br>United States"]
    },
    { 
    	name: 'Portugal',
    	centered: 'PRT', 
    	radius: 253 / 100, 
    	totalAmount: 253, 
    	index: '+74%', 
    	mainClients: ["Romania", "<br>Belgium", "<br>Uruguay"]
    },
    { 
    	name: 'Russia',
    	centered: 'RUS', 
    	radius: 31722 / 800, 
    	totalAmount: 31722, 
    	index: '-7,1%', 
    	mainClients: ["India", "<br>China", "<br>Viet Nam"]
    },
    { 
    	name: 'South Africa',
    	centered: 'ZAF', 
    	radius: 356 / 100, 
    	totalAmount: 356, 
    	index: '-51%', 
    	mainClients: ["UAE", "<br>India", "<br>Nigeria(1)"]
    },
    { 
    	name: 'Spain',
    	centered: 'ESP', 
    	radius: 4262 / 350, 
    	totalAmount: 4262, 
    	index: '+12%', 
    	mainClients: ["Australia", "<br>Turkey(1)", "<br>Saudi Arabia(1)"]
    },
    { 
    	name: 'Sweden',
    	centered: 'SWE', 
    	radius: 1256 / 200, 
    	totalAmount: 1256, 
    	index: '-53%', 
    	mainClients: ["UAE", "<br>Thailand", "<br>Saudi Arabia(1)"]
    },
    { 
    	name: 'Switzerland',
    	centered: 'CHE', 
    	radius: 1322 / 200, 
    	totalAmount: 1322, 
    	index: '-11%', 
    	mainClients: ["Saudi Arabia(1)", "<br>China", "<br>United States"]
    },
    { 
    	name: 'Turkey',
    	centered: 'TUR', 
    	radius: 1164 / 200, 
    	totalAmount: 1164, 
    	index: '+135%', 
    	mainClients: ["Turkmenistan", "<br>UAE", "<br>Saudi Arabia(1)"]
    },
    { 
    	name: 'UAE',
    	centered: 'ARE', 
    	radius: 319 / 100, 
    	totalAmount: 319, 
    	index: '+320%', 
    	mainClients: ["Egypt(1)", "<br>Jordan", "<br>Kuwait"]
    },
    { 
    	name: 'United Kingdom',
    	centered: 'GBR', 
    	radius: 6952 / 500, 
    	totalAmount: 6952, 
    	index: '+37%', 
    	mainClients: ["Saudi Arabia(1)", "<br>Oman", "<br>Indonesia"]
    },
    { 
    	name: 'Ukraine',
    	centered: 'UKR', 
    	radius: 2481 / 300, 
    	totalAmount: 2481, 
    	index: '-26%', 
    	mainClients: ["Russia", "<br>China", "<br>Thailand"]
    },
    { 
    	name: 'United States',
    	centered: 'USA', 
    	radius: 50062 / 800, 
    	totalAmount: 50062, 
    	index: '+25%', 
    	mainClients: ["Saudi Arabia(1)", "<br>UAE", "<br>Australia"]
    }
  ]

  bubble_map.bubbles(new_clients, {
    popupTemplate: function(geo, data) {
      return `<div class="hoverinfo">

                <h3 style="margin:0">${data.name}</h3>
                ${data.totalAmount}<br>
                ${data.index}

                <p>Main Clients:<br>
                ${data.mainClients}</p>
              </div>`
    }
  });


})
