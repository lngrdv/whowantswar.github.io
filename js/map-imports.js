$(document).ready(function() {
  var bubble_map = new Datamap({
    element: document.getElementById("container-imports"),
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
        name: 'Algeria(2)',
        centered: 'DZA', 
        radius: 5414 / 400, 
        totalAmount: 5414, 
        index: '+0,8%', 
        mainClients: ["Russia", "<br>China", "<br>Germany"] 
    },
    { 
        name: 'Australia',
        centered: 'AUS', 
        radius: 5558 / 400, 
        totalAmount: 5558, 
        index: '+7,5%', 
        mainClients: ["United States", "<br>Spain", "<br>France"] 
    },
    { 
        name: 'Azerbaijan(2)',
        centered: 'AZE', 
        radius: 1907 / 300, 
        totalAmount: 1907, 
        index: '+55%', 
        mainClients: ["Russia", "<br>Israel", "<br>Turkey"] 
    },
    { 
        name: 'Bangladesh(2)',
        centered: 'BGD', 
        radius: 2239 / 300, 
        totalAmount: 2239, 
        index: '+542%', 
        mainClients: ["China", "<br>Russia", "<br>United States"]
    },
    { 
        name: 'China',
        centered: 'CHN', 
        radius: 5786 / 400, 
        totalAmount: 5786, 
        index: '-19%', 
        mainClients: ["Russia", "<br>France", "<br>Ukraine"]
    },
    { 
        name: 'Egypt(2)',
        centered: 'EGY', 
        radius: 6573 / 400, 
        totalAmount: 6573, 
        index: '+215%', 
        mainClients: ["France", "<br>United States", "<br>Russia"]
    },
    { 
        name: 'India',
        centered: 'IND', 
        radius: 18049 / 700, 
        totalAmount: 18049, 
        index: '+24%', 
        mainClients: ["Russia", "<br>United States", "<br>Israel"]
    },
    { 
        name: 'Indonesia',
        centered: 'IDN', 
        radius: 4014 / 350, 
        totalAmount: 4014, 
        index: '+193%', 
        mainClients: ["United Kingdom", "<br>United States", "<br>South Korea"]
    },
    { 
        name: 'Iraq(2)',
        centered: 'IRQ', 
        radius: 4928 / 400, 
        totalAmount: 4928, 
        index: '+118%', 
        mainClients: ["United States", "<br>Russia", "<br>South Korea"]
    },
    { 
        name: 'Israel(2)',
        centered: 'ISR', 
        radius: 2474 / 300, 
        totalAmount: 2474, 
        index: '+125%', 
        mainClients: ["United States", "<br>Germany", "<br>Italy"]
    },
    { 
        name: 'Italy',
        centered: 'ITA', 
        radius: 2043 / 270, 
        totalAmount: 2043, 
        index: '+111%', 
        mainClients: ["United States", "<br>Germany", "<br>Israel"]
    },
    { 
        name: 'Japan',
        centered: 'JPN', 
        radius: 1805 / 250, 
        totalAmount: 1805, 
        index: '-19%', 
        mainClients: ["United States", "<br>United Kingdom", "<br>Sweden"]
    },
    { 
        name: 'South Korea',
        centered: 'KOR', 
        radius: 3239 / 300, 
        totalAmount: 3239, 
        index: '+50%', 
        mainClients: ["United States", "<br>Germany", "<br>Israel"]
    },
    { 
        name: 'Oman',
        centered: 'OMN', 
        radius: 2546 / 230, 
        totalAmount: 2546, 
        index: '+655%', 
        mainClients: ["United Kingdom", "<br>United States", "<br>Norway"]
    },
    { 
        name: 'Pakistan(2)',
        centered: 'PAK', 
        radius: 4147 / 350, 
        totalAmount: 4147, 
        index: '-36%', 
        mainClients: ["China", "<br>United States", "<br>Russia"]
    },
    { 
        name: 'Qatar(2)',
        centered: 'QAT', 
        radius: 2212 / 200, 
        totalAmount: 2212, 
        index: '+166%', 
        mainClients: ["United States", "<br>Germany", "<br>Switzerland"]
    },
    { 
        name: 'Saudi Arabia(2)',
        centered: 'SAU', 
        radius: 14805 / 700, 
        totalAmount: 14805, 
        index: '+225%', 
        mainClients: ["United States", "<br>United Kingdom", "<br>France"]
    },
    { 
        name: 'Singapore',
        radius: 2149 / 300, 
        totalAmount: 2149, 
        index: '-60%', 
        mainClients: ["United States", "<br>France", "<br>Italy"],
        latitude: 1.29,
        longitude: 103.85
    },
    { 
        name: 'Taiwan',
        centered: 'TWN', 
        radius: 2864 / 300, 
        totalAmount: 2846, 
        index: '+261%', 
        mainClients: ["United States", "<br>Germany", "<br>Italy"]
    },
    { 
        name: 'Turkey(2)',
        centered: 'TUR', 
        radius: 3539 / 300, 
        totalAmount: 3539, 
        index: '-14%', 
        mainClients: ["United States", "<br>Spain", "<br>Italy"]
    },
    { 
        name: 'UAE',
        centered: 'ARE', 
        radius: 6370 / 400, 
        totalAmount: 6370, 
        index: '+51%', 
        mainClients: ["United States", "<br>France", "<br>Italy"]
    },
    { 
        name: 'United Kingdom',
        centered: 'GBR', 
        radius: 2260 / 270, 
        totalAmount: 2260, 
        index: '-1,5%', 
        mainClients: ["United States", "<br>South Korea", "<br>Israel"]
    },
    { 
        name: 'United States',
        centered: 'USA', 
        radius: 2930 / 300, 
        totalAmount: 2930, 
        index: '-44%', 
        mainClients: ["Germany", "<br>Netherlands", "<br>France"]
    },
    { 
        name: 'Venezuela',
        centered: 'VEN', 
        radius: 1533 / 220, 
        totalAmount: 1533, 
        index: '-40%', 
        mainClients: ["Russia", "<br>China", "<br>Ukraine"]
    },
    { 
        name: 'Viet Nam',
        centered: 'VNM', 
        radius: 3990 / 350, 
        totalAmount: 3990, 
        index: '+81%', 
        mainClients: ["Russia", "<br>Israel", "<br>Belarus"]
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
