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

      markers: [
        {
          latitude: 43.9632 ,
          longitude: 12.4403 ,
          icon: 'img/transparent.gif' ,
        },
        
           // ==================== Venice ====================== 
        { 
            latitude: 45.4333, 
            longitude: 12.3167, 
            title: 'marker title 1',
            id: 'imgFiche2', 
        },
           // ==================== Florence ====================== 

           // ==================== Rome ====================== 
           {  
            latitude: 41.8902, 
            longitude: 12.4923, 
            title: 'Colosseum',
            id: 'Colosseum',
        }

        ],
        icon: 'img/Tag-01.png',

    }); 

// a = {"id1", id2"};
//for(i : a){}

//idarray = {"imgFiche", "imgTwo"};

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

        $(".City").click(function(){
          $(".City").removeClass("ActiveCity");
          $(this).addClass("ActiveCity");
          return true;
     });

   // ==================== Listeners for each Marker ======================     

   $.goMap.createListener({type:'marker', marker:'Colosseum'}, 'click', function() { 
      $('#Colosseum').nmCall();
    }); 
   $.goMap.createListener({type:'marker', marker:'imgFiche2'}, 'click', function() { 
      $('#imgFiche2').nmCall();
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



