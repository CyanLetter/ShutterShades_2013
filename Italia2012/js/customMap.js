var myMarkers = [
{
  latitude: 43.9632 ,
  longitude: 12.4403 ,
  icon: 'img/transparent.gif',
  id: 'transparent'
},

   // ==================== Venice ====================== 
{ 
    latitude: 45.4345, 
    longitude: 12.33969, 
    title: 'San Marc Bascilica',
    id: 'SMarc', 
},
{ 
    latitude: 45.4339, 
    longitude: 12.34009, 
    title: 'Doge Palace',
    id: 'DogePalace', 
},
{ 
    latitude: 45.4336, 
    longitude: 12.33719, 
    title: 'Correr Museums',
    id: 'Correr', 
},
{ 
    latitude: 45.4340, 
    longitude: 12.33889, 
    title: 'Bell Tower',
    id: 'BellTower', 
},
{ 
    latitude: 45.4381, 
    longitude: 12.33569, 
    title: 'Rialto',
    id: 'Rialto', 
},
/*{ 
    latitude: 45.4317, 
    longitude: 12.32899, 
    title: 'Accademia Bridge',
    id: 'AccademiaBridge', 
},*/
   // ==================== Florence ====================== 
{ 
    latitude: 43.776907, 
    longitude: 11.258475, 
    title: 'Accademia Gallery',
    id: 'AccademiaGallery', 
},
{ 
    latitude: 43.773232, 
    longitude: 11.255992, 
    title: 'Duomo',
    id: 'Duomo', 
},
{ 
    latitude: 43.773224, 
    longitude: 11.254602, 
    title: 'Baptistry',
    id: 'Baptistry', 
},
{ 
    latitude: 43.77289, 
    longitude: 11.255235, 
    title: 'Giotto\'s Campanile',
    id: 'GiottoCampanile', 
},
{ 
    latitude: 43.7704, 
    longitude: 11.2584, 
    title: 'Bargello',
    id: 'Bargello', 
},
{ 
    latitude: 43.769315, 
    longitude: 11.256174, 
    title: 'Palazzo Vecchio',
    id: 'PalazzoVecchio', 
},
{ 
    latitude: 43.768888, 
    longitude: 11.250277, 
    title: 'Ponte della S Trinita',
    id: 'PonteTrinita', 
},
{ 
    latitude: 43.7648, 
    longitude: 11.2501, 
    title: 'Pitti Palace',
    id: 'PittiPalace', 
},
/*{ 
    latitude: 43.7751, 
    longitude: 11.2536, 
    title: 'Medici Chapel',
    id: 'SMarc', 
}, */
{ 
    latitude: 43.7746, 
    longitude: 11.2493, 
    title: 'Curch of Santa Maria Novella',
    id: 'SMariaNovella', 
},

   // ==================== Rome ====================== 
   {  
    latitude: 41.8902, 
    longitude: 12.4923, 
    title: 'Colosseum',
    id: 'Colosseum'
},
{ 
    latitude: 41.9009, 
    longitude: 12.4832, 
    title: 'Trevi Fountain',
    id: 'TreviFountain', 
},
{ 
    latitude: 41.9060, 
    longitude: 12.4832, 
    title: 'Spanish Steps',
    id: 'SpanishSteps', 
},
{ 
    latitude: 41.9041, 
    longitude: 12.4486, 
    title: 'Vatican Museum',
    id: 'VaticanMuseum', 
},
{ 
    latitude: 41.9022, 
    longitude: 12.4533, 
    title: 'Basilica St Peter',
    id: 'BasilicaSPeter', 
},
{ 
    latitude: 41.8989, 
    longitude: 12.4731, 
    title: 'Navona Square',
    id: 'NavonaSquare', 
},
];

/*
    var listone = ["thing1", "thing2"];
    for (i = 0; i < listone.length; i++) {
      alert(listone[i]);
    }
*/


function createListenerFunction(i){
  var t = i;
  return function() { 
      //var t = ;
      //alert('#' + myMarkers[t].id);
      $('#' + myMarkers[t].id).nmCall();
  }
}



$(document).ready(function() { 
  $("#map").goMap({
    maptype: 'ROADMAP',
    latitude: 43.9632, 
    longitude: 11.4403, 
    zoom: 7,
    navigationControl: true, 
    navigationControlOptions: { 
          position: 'BOTTOM', 
          style: 'ANDROID' 
      },
    mapTypeControl: false,

    markers: myMarkers,
      icon: 'img/Tag-01.png'
}); 


  for (var i = 0; i < myMarkers.length; i++) {
    //alert('#' + myMarkers[i].id);
    $.goMap.createListener({type:'marker', marker:myMarkers[i].id}, 'click', createListenerFunction(i));
  }
//idarray = {"imgFiche", "imgTwo"};

   // ==================== Listeners for each Marker ======================     



   // ==================== Header Navigation ====================== 

        $("#veniceLink").click(function(){  
        $.goMap.setMap({latitude:'45.4343', longitude:'12.3177', zoom: 14}); 
    });

        $("#firenzeLink").click(function(){  
        $.goMap.setMap({latitude:'43.7717', longitude:'11.2536', zoom: 14}); 
    });

        $("#romaLink").click(function(){  
        $.goMap.setMap({latitude:'41.9000', longitude:'12.5000', zoom: 14}); 
    });
        $("#aboutLink").click(function(){
          $('#aboutPage').nmCall();
    }); 
        $(".City").click(function(){
          $(".City").removeClass("ActiveCity");
          $(this).addClass("ActiveCity");
          return true;
     });





/*

    var styles = [
  {
    "featureType": "poi.sports_complex",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "poi.business",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "transit",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "road.highway",
    "stylers": [
      { "visibility": "on" },
      { "lightness": 1 },
      { "hue": "#11ff00" },
      { "saturation": -81 }
    ]
  },{
    "featureType": "road.arterial",
    "stylers": [
      { "hue": "#11ff00" },
      { "lightness": -2 },
      { "saturation": -75 }
    ]
  },{
    "featureType": "landscape.natural",
    "stylers": [
      { "saturation": -38 },
      { "hue": "#00ff33" }
    ]
  },{
    "featureType": "road.local",
    "stylers": [
      { "hue": "#ff7700" },
      { "saturation": 15 }
    ]
  }
];

map.setOptions({styles: styles});

*/

 }); 



