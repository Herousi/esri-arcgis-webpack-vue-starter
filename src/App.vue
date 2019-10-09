<template>
  <div id="app">
    <router-view />
    <v-btn>123</v-btn>
    <div id="mapViewDiv"></div>

  </div>
</template>

<script>
import Map from 'esri/Map'
import MapView from 'esri/views/MapView'
export default {
  methods: {
    loadMap () {
      var map = new Map({
        basemap: 'oceans'
      })
      // View
      var mapView = new MapView({
        container: 'mapViewDiv',
        map: map,
        center: [-107.8, 37.3],
        zoom: 11,
        padding: {
          top: 50,
          bottom: 0
        },
        ui: { components: [] }
      })

      // this.$parent.mapView = mapView;
      // //this.mapView = mapView;
      //
      // // Popup and panel sync
      // //mapView.when(function(){
      // //  CalciteMapArcGISSupport.setPopupPanelSync(mapView);
      // //});
      //
      // // Search - add to navbar
      // var searchWidget = new Search({
      //   container: "searchWidgetDiv",
      //   view: mapView
      // });
      // CalciteMapArcGISSupport.setSearchExpandEvents(searchWidget);
      //
      // // Map widgets
      // var home = new Home({
      //   view: mapView
      // });
      // mapView.ui.add(home, "top-left");
      //
      // var zoom = new Zoom({
      //   view: mapView
      // });
      // mapView.ui.add(zoom, "top-left");
      //
      // var compass = new Compass({
      //   view: mapView
      // });
      // mapView.ui.add(compass, "top-left");
      //
      // var basemapToggle = new BasemapToggle({
      //   view: mapView,
      //   container: document.createElement("div"),
      //   secondBasemap: "satellite"
      // });
      //
      // var expandBasemapToggler = new Expand({
      //   view: mapView,
      //   name: "basemap",
      //   content: basemapToggle.domNode,
      //   expandIconClass: "esri-icon-basemap"
      // });
      //
      // mapView.ui.add(expandBasemapToggler, "top-right");
      //
      // //mapView.ui.add(basemapToggle, "bottom-right");
      //
      // var scaleBar = new ScaleBar({
      //   view: mapView
      // });
      // mapView.ui.add(scaleBar, "bottom-left");
      //
      // var attribution = new Attribution({
      //   view: mapView
      // });
      // mapView.ui.add(attribution, "manual");
    }
  },
  watch: {},
  mounted: function () {
    // console.log('Map Component Mounted');
    this.loadMap()
  }
}
</script>

<style lang="scss">
</style>
