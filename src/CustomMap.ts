/// <reference types="@types/google.maps" />

export interface Mappable {
    location: {
        lat: number;
        lng: number;
    };
    markerContent(): string;
}


export class CustomMap {
    
    private googleMap: google.maps.Map;
    
    constructor(divId: string) {
        
        this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
            zoom:1,
            center: {
                lat: 0,
                lng: 0
            },
            mapId: 'demo_app',
        });
    }


    async addMarker(mappable: Mappable): Promise<void> {
        const mapPosition = { lat: mappable.location.lat, lng: mappable.location.lng };
        const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
        const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;
        const marker = new AdvancedMarkerElement({
            map: this.googleMap,
            position: mapPosition,
        });

        marker.addListener('click', ()=>{
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            });

            infoWindow.open(this.googleMap, marker);
        });
    };
    
}