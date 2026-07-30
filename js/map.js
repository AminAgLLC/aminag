mapboxgl.accessToken = 'pk.eyJ1IjoidHVuZ3N0ZW5hZHZlcnRpc2luZyIsImEiOiJja2dsZGNyZjAwMXltMnNqbzNrYTIwb210In0.PFX4yyFsRcpGMyQJV3uOkA';
// Here we don't use the second argument to map, since that would automatically
// load in non-clustered markers from the layer. Instead we add just the
// backing tileLayer, and then use the featureLayer only for its data.
var farms = {
  "type":"FeatureCollection",
  "features": [
  {
    "type": "Feature",
    "properties": {
      "id": "marker-ipmpomy50",
      "title": "Alborz Farms",
      "grossacres": "320",
      "location": "Kern County",
      "crop": "Pistachios",
      "pistachios": true,
      "almonds": false,
      "walnuts": false,
      "image": "images/alborz.webp",
      "marker-color": "#1087bf",
      "marker-symbol": ""
    },
    "geometry": {
      "coordinates": [-119.366455, 35.365535],
      "type": "Point"
    }
  },
  {
    "type": "Feature",
    "properties": {
      "id": "marker-ipmqi6op9",
      "title": "Dixieland Farms",
      "grossacres": "1167",
      "location": "Solano County",
      "crop": "Almonds/Walnuts",
      "pistachios": false,
      "almonds": true,
      "walnuts": true,
      "image": "images/dixieland.webp",
      "marker-color": "#1087bf",
      "marker-symbol": ""
    },
    "geometry": {
      "coordinates": [-121.873769, 38.457311],
      "type": "Point"
    }
  },
  {
    "type": "Feature",
    "properties": {
      "id": "marker-ipmqpjl2c",
      "title": "Farazad Ranch",
      "grossacres": "1815",
      "location": "Merced County",
      "crop": "Pistachios",
      "pistachios": true,
      "almonds": false,
      "walnuts": false,
      "image": "images/farazad.webp",
      "marker-color": "#1087bf",
      "marker-symbol": ""
    },
    "geometry": {
      "coordinates": [-120.564433, 37.156605],
      "type": "Point"
    }
  },
  {
    "type": "Feature",
    "properties": {
      "id": "marker-ipmqrew2d",
      "title": "Karun Farm",
      "grossacres": "1175",
      "location": "Fresno County",
      "crop": "Almonds/Pistachios/Open",
      "pistachios": true,
      "almonds": true,
      "walnuts": false,
      "image": "images/karun.webp",
      "marker-color": "#1087bf",
      "marker-symbol": ""
    },
    "geometry": {
      "coordinates": [-120.022675, 36.16003],
      "type": "Point"
    }
  },
  {
    "type": "Feature",
    "properties": {
      "id": "marker-ipmqe9ej8",
      "title": "Kingman Ranch",
      "grossacres": "2198",
      "location": "Mohave County",
      "crop": "Pistachios",
      "pistachios": true,
      "almonds": false,
      "walnuts": false,
      "image": "images/kingman.webp",
      "marker-color": "#1087bf",
      "marker-symbol": ""
    },
    "geometry": {
      "coordinates": [-114.058727, 35.501153],
      "type": "Point"
    }
  },
  {
    "type": "Feature",
    "properties": {
      "id": "marker-ipmq7elp5",
      "title": "Lone Palm Ranch",
      "grossacres": "643",
      "location": "Tulare County",
      "crop": "Pistachios",
      "pistachios": true,
      "almonds": false,
      "walnuts": false,
      "image": "images/lone-palm.webp",
      "marker-color": "#1087bf",
      "marker-symbol": ""
    },
    "geometry": {
      "coordinates": [-119.491536, 36.029105],
      "type": "Point"
    }
  },
  {
    "type": "Feature",
    "properties": {
      "id": "marker-ipmqn2v4b",
      "title": "Mersal Farm",
      "grossacres": "1220",
      "location": "Merced County",
      "crop": "Almonds",
      "pistachios": false,
      "almonds": true,
      "walnuts": false,
      "image": "images/mersal.webp",
      "marker-color": "#1087bf",
      "marker-symbol": ""
    },
    "geometry": {
      "coordinates": [-120.506619, 37.251277],
      "type": "Point"
    }
  },
  {
    "type": "Feature",
    "properties": {
      "id": "marker-ipmqtg9ae",
      "title": "Meymand Farm",
      "grossacres": "321",
      "location": "Fresno/Kings Counties",
      "crop": "Pistachios",
      "pistachios": true,
      "almonds": false,
      "walnuts": false,
      "image": "images/meymand.webp",
      "marker-color": "#1087bf",
      "marker-symbol": ""
    },
    "geometry": {
      "coordinates": [-120.026694, 36.130877],
      "type": "Point"
    }
  },
  // {
  //   "type": "Feature",
  //   "properties": {
  //     "id": "marker-ipmqx4i5g",
  //     "title": "Nilufarm",
  //     "grossacres": "743",
  //     "location": "Madera County",
  //     "crop": "Pistachios",
  //     "pistachios": true,
  //     "almonds": false,
  //     "walnuts": false,
  //     "image": "images/nilufarm.webp",
  //     "marker-color": "#1087bf",
  //     "marker-symbol": ""
  //   },
  //   "geometry": {
  //     "coordinates": [-120.249455, 36.800077],
  //     "type": "Point"
  //   }
  // },
  {
    "type": "Feature",
    "properties": {
      "id": "marker-ipmq12ly2",
      "title": "Paariz Farm",
      "grossacres": "961",
      "location": "Kern County",
      "crop": "Pistachios",
      "pistachios": true,
      "almonds": false,
      "walnuts": false,
      "image": "images/paariz.webp",
      "marker-color": "#1087bf",
      "marker-symbol": ""
    },
    "geometry": {
      "coordinates": [-119.446075, 35.712147],
      "type": "Point"
    }
  },
  {
    "type": "Feature",
    "properties": {
      "id": "marker-ipmq4e1t3",
      "title": "Payvand Farms",
      "grossacres": "640",
      "location": "Kern County",
      "crop": "Pistachios",
      "pistachios": true,
      "almonds": false,
      "walnuts": false,
      "image": "images/payvand.webp",
      "marker-color": "#1087bf",
      "marker-symbol": ""
    },
    "geometry": {
      "coordinates": [-119.4028444, 35.7397528],
      "type": "Point"
    }
  },
  {
    "type": "Feature",
    "properties": {
      "id": "marker-ipmq8o636",
      "title": "Raaviz Farms",
      "grossacres": "758",
      "location": "Kern County",
      "crop": "Pistachios",
      "pistachios": true,
      "almonds": false,
      "walnuts": false,
      "image": "images/raaviz.webp",
      "marker-color": "#1087bf",
      "marker-symbol": ""
    },
    "geometry": {
      "coordinates": [-119.392525, 35.370152],
      "type": "Point"
    }
  },
  {
    "type": "Feature",
    "properties": {
      "id": "marker-ipmq66xg4",
      "title": "Saty Farm",
      "grossacres": "235",
      "location": "Kern County",
      "crop": "Pistachios",
      "pistachios": true,
      "almonds": false,
      "walnuts": false,
      "image": "images/saty.webp",
      "marker-color": "#1087bf",
      "marker-symbol": ""
    },
    "geometry": {
      "coordinates": [-119.430677, 35.692361],
      "type": "Point"
    }
  },
  {
    "type": "Feature",
    "properties": {
      "id": "marker-ipmqv05zf",
      "title": "Seanaria Farms",
      "grossacres": "2075",
      "location": "Madera County",
      "crop": "Almonds/Pistachios",
      "pistachios": true,
      "almonds": true,
      "walnuts": false,
      "image": "images/seanaria.webp",
      "marker-color": "#1087bf",
      "marker-symbol": ""
    },
    "geometry": {
      "coordinates": [-120.291225, 36.858372],
      "type": "Point"
    }
  },
  {
    "type": "Feature",
    "properties": {
      "id": "marker-ipmpyg871",
      "title": "Shasti Farm",
      "grossacres": "922",
      "location": "Kern County",
      "crop": "Pistachios",
      "pistachios": true,
      "almonds": false,
      "walnuts": false,
      "image": "images/shasti.webp",
      "marker-color": "#1087bf",
      "marker-symbol": ""
    },
    "geometry": {
      "coordinates": [-119.591388, 35.628891],
      "type": "Point"
    }
  },
  {
    "type": "Feature",
    "properties": {
      "id": "marker-ipmql5s8a",
      "title": "Tranquility Orchards",
      "grossacres": "1080",
      "location": "Solano/Yolo Counties",
      "crop": "Almonds/Walnuts",
      "pistachios": false,
      "almonds": true,
      "walnuts": true,
      "image": "images/tranquility.webp",
      "marker-color": "#1087bf",
      "marker-symbol": ""
    },
    "geometry": {
      "coordinates": [-121.866016, 38.426855],
      "type": "Point"
    }
  },
  {
    "type": "Feature",
    "properties": {
      "id": "marker-ipmqgg538",
      "title": "Vista Orchards North",
      "grossacres": "485",
      "location": "Colusa/Glenn Counties",
      "crop": "Almonds/Walnuts",
      "pistachios": false,
      "almonds": true,
      "walnuts": true,
      "image": "images/vista-north.webp",
      "marker-color": "#1087bf",
      "marker-symbol": ""
    },
    "geometry": {
      "coordinates": [-121.988997, 39.446133],
      "type": "Point"
    }
  },
  {
    "type": "Feature",
    "properties": {
      "id": "marker-ipmqe9ej7",
      "title": "Vista Orchards South",
      "grossacres": "396",
      "location": "Kern County",
      "crop": "Pistachios",
      "pistachios": true,
      "almonds": false,
      "walnuts": false,
      "image": "images/vista-south.webp",
      "marker-color": "#1087bf",
      "marker-symbol": ""
    },
    "geometry": {
      "coordinates": [-118.806777, 35.039244],
      "type": "Point"
    }
  },
  {
    "type": "Feature",
    "properties": {
      "id": "yucca-marker",
      "title": "Yucca Ranch",
      "crop": "Pistachios",
      "grossacres": "1905",
      "location": "Mohave County",
      "pistachios": true,
      "almonds": false,
      "walnuts": false,
      "image": "images/yucca.webp",
      "marker-color": "#1087bf",
      "marker-symbol": ""
    },
    "geometry": {
      "coordinates": [ -113.915557, 35.33682 ],
      "type": "Point"
    }
  },
  {
    "type": "Feature",
    "properties": {
      "id": "marker-ipmqmettler1", // unique id
      "title": "Mettler Farm",
      "grossacres": "421",
      "location": "Kern County",
      "crop": "Almonds",
      "pistachios": false,
      "almonds": true,
      "walnuts": false,
      "image": "images/MettlerFarm.jpg",
      "marker-color": "#1087bf",
      "marker-symbol": ""
    },
    "geometry": {
      "coordinates": [-118.959660, 35.045000], // placeholder coordinates, update if needed
      "type": "Point"
    }
  }
]
};
farms.features.sort((a, b) => a.properties.title.localeCompare(b.properties.title));
farms.features.forEach((farm, index) => farm.properties.index = index);

const farmListingContainer = document.querySelector('.farms-listing');
const sidePanel = document.querySelector('.sidepanel');
const mobileListingToggle = document.querySelector('#mobile-listing-toggle');

function removeOpenPopups(){
  const popUps = document.getElementsByClassName('mapboxgl-popup');
  /** Check if there is already a popup on the map and if so, remove it */
  if (popUps[0]) popUps[0].remove();
}

function jumpTo(currentLocation){
  map.flyTo({
    center: currentLocation.geometry.coordinates,
    duration: 2000,
    zoom: 10
  });
}


function removeActiveClass(){
  let farmsListingItem = document.querySelectorAll('.farms-listing-item');
  farmsListingItem.forEach(el => el.classList.remove('active'))
  let allMarkers = document.querySelectorAll('.marker');
  allMarkers.forEach(el => el.classList.remove('active'))

}

// build location list from data, both for sidebar and for the map
// then data could be changed and passed into the function again for building another set of locations
function buildLocationList(locations, initial) {
  // clear the listing
  let initialBuild = initial;
  farmListingContainer.innerHTML = '';

  // clear all markers
  let allMarkers = document.querySelectorAll('.marker');
  allMarkers.forEach(marker=>marker.remove())



  for (const feature of locations) {

    const popup = new mapboxgl.Popup({ offset: 45, focusAfterOpen: false })
      .setHTML(`
        <h3>${feature.properties.title}</h3>
        <div class="flex items-center" style="padding: 15px;">
          <div class="description">
            <div class="location">${feature.properties.location}</div>
            <div class="crop">Crop: <br> <b>${feature.properties.crop}</b></div>
            <div class="acres">Acres: <br> <b>${feature.properties.grossacres}</b></div>
          </div>
          <img class="image" width="170" height="130" src=${feature.properties.image} />
        </div>
      `)
      // .on('close', function(){
      //   removeActiveClass();
      // })
      // .on('open', function(){
      //   markerEl.classList.add('active');
      //   document.getElementById(`farm-listing-item-${feature.properties.id}`).classList.add('active');
      // })

    // create Sidebar Listing for All Farms

    let farmListingItem = document.createElement('a');
    farmListingItem.className = `farms-listing-item ${initialBuild == true ? 'animate-listing-item' : '' }`;
    farmListingItem.style.setProperty('--animate-delay', `${feature.properties.index * 100}ms`);
    farmListingItem.innerText = `${feature.properties.title}`;
    farmListingItem.id = `farm-listing-item-${feature.properties.id}`;
    farmListingItem.addEventListener('mouseenter', ({ target }) => {
      if (target.id == `farm-listing-item-${feature.properties.id}`) {
        removeActiveClass();
        removeOpenPopups();
        target.classList.add('active')
        document.getElementById(`${feature.properties.id}`).classList.add('active');
        popup.setLngLat(feature.geometry.coordinates).addTo(map);
        target.addEventListener('click', ()=>{
          sidePanel.classList.remove('openListing');
          jumpTo(feature)
        }, { once: true })
        target.addEventListener('mouseleave', ()=>{
          removeActiveClass();
          removeOpenPopups();
        }, { once: true })
      }
    })
    farmListingContainer.appendChild(farmListingItem)

    // create a Marker element for each feature
    const markerEl = document.createElement('div');
    markerEl.className = 'marker';
    const innerMarker = document.createElement('div');
    innerMarker.className = `marker-icon ${initialBuild == true ? 'markerEntrance' : '' }`
    innerMarker.style.setProperty('--animate-delay', `${feature.properties.index * 100}ms`);
    markerEl.insertAdjacentElement("beforeend", innerMarker)
    markerEl.id = `${feature.properties.id}`;

    const marker = new mapboxgl.Marker(markerEl)
    marker.setLngLat(feature.geometry.coordinates).addTo(map);



    innerMarker.addEventListener('mouseenter', ({ target })=>{
      removeActiveClass();
      removeOpenPopups();
      popup.setLngLat(feature.geometry.coordinates).addTo(map);
      target.addEventListener('click', ()=>{
        jumpTo(feature);
        popup.setLngLat(feature.geometry.coordinates).addTo(map);
      })
    })
    innerMarker.addEventListener('mouseleave', ({  })=>{
      removeOpenPopups();
      removeActiveClass();
    })
    innerMarker.addEventListener('touchend', (e)=>{
      e.preventDefault();
      removeOpenPopups();
      popup.setLngLat(feature.geometry.coordinates).addTo(map);
    })
  }
}

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/tungstenadvertising/ckgs7i7zr03o819o0apqv1bhu',
  center: [244, 35],
  zoom: 4,
  scrollZoom: false
});

// media queries
const xsMobile = window.matchMedia( "(max-width: 420px)" ).matches;
const mobile = window.matchMedia( "(min-width: 421px) and (max-width: 575px)" ).matches;
const tablet = window.matchMedia( "(min-width: 576px) and (max-width: 992px)" ).matches;
const desktop = window.matchMedia( "(min-width: 993px)" ).matches;


map.on('load', (e) =>{

  let zoom;
  if(xsMobile) {
    zoom = 4.5;
  }else if (mobile){
    zoom = 5;
  } else if (tablet) {
    zoom = 5;
  } else if(desktop) {
    zoom = 6;
  }

  map.easeTo({
    center: [242, 36],
    zoom: zoom,
    duration: 3000
  });

  // mapFitBounds();
  map.addControl(nav, 'bottom-right');
  buildLocationList(farms.features, true)

});

function mapFitBounds(features, padding) {
  var bounds = new mapboxgl.LngLatBounds();
  features.forEach( (feature) => {
      bounds.extend(feature.geometry.coordinates);
  });
  map.fitBounds(bounds, {padding: padding});
}







const nav = new mapboxgl.NavigationControl({
  showCompass: false
});







const resetMap = document.querySelector('#reset_map')
resetMap.addEventListener('click', (e)=>{
  // map.easeTo({
  //   center: [242, 36],
  //   zoom: 4.5,
  //   duration: 3000
  // });
  e.preventDefault();
  mapFitBounds(farms.features, 70);
  removeOpenPopups();
  removeActiveClass();
})


const filterItems = document.querySelectorAll('.filter-item');
const allOrhards = filterItems[0];

filterItems.forEach((filter)=>{
  filter.addEventListener('click', (e)=>{
    e.preventDefault()
    if(e.target.classList.contains('active')) {
      return;
    }
    removeOpenPopups();
    removeActiveClass();
    filterItems.forEach(el=>el.classList.remove('active'))
    e.target.classList.add('active')

    let filterExpr = e.target.dataset.filter;
    let padding;

    if (filterExpr == 'all') {
      buildLocationList(farms.features, false)

      if(desktop) {
        padding = 300;
      } else if (mobile) {
        padding = 70;
      } else if (tablet) {
        padding = 50;
      } else if (xsMobile) {
        padding = 40;
      }

      mapFitBounds(farms.features, padding);
      return;
    }
    if(filterExpr == 'pistachios') {
      if(desktop) {
        padding = 200;
      } else if (mobile) {
        padding = 70;
      } else if (tablet) {
        padding = 50;
      } else if (xsMobile) {
        padding = 40;
      }
    }
    if(filterExpr == 'walnuts') {
      if(desktop) {
        padding = 200;
      } else if (mobile) {
        padding = 220;
      } else if (tablet) {
        padding = 50;
      } else if (xsMobile) {
        padding = 150;
      }
    }
    if(filterExpr == 'almonds') {
      if(desktop) {
        padding = 200;
      } else if (mobile) {
        padding = 70;
      } else if (tablet) {
        padding = 50;
      } else if (xsMobile) {
        padding = 40;
      }
    }

    let filteredFarms = {
      "type":"FeatureCollection",
      "features": farms.features.filter(farm=>farm.properties[filterExpr])
    }
    buildLocationList(filteredFarms.features, false)
    mapFitBounds(filteredFarms.features, padding);
  })
})




mobileListingToggle.addEventListener('click', ({ target })=>{
  sidePanel.classList.toggle('openListing')
})
