/// <reference types="@types/google.maps" />
import { User } from "./User";
import { Company } from "./Company";

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


    async addUserMarker(user: User): Promise<void> {
        const userPosition = { lat: user.location.lat, lng: user.location.lng };
        const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
        const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;
        const marker = new AdvancedMarkerElement({
            map: this.googleMap,
            position: userPosition,
            title: 'user'
        });
    };
    

    async addCompanyMarker(company: Company): Promise<void> {
        const comPosition = { lat: company.location.lat, lng: company.location.lng };
        const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
        const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;
        const marker = new AdvancedMarkerElement({
            map: this.googleMap,
            position: comPosition,
            title: 'company'
        });
    };
}