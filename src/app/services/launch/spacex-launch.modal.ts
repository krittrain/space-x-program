export class SpaceXLaunch {
    flight_number: number;
    launch_success: boolean;
    launch_year: string;
    links: any;
    mission_name: string;
    mission_id: Array<string>;

    constructor() {}

    processResponse(launchResponse: any): SpaceXLaunch {
        this.flight_number = launchResponse.flight_number;
        this.launch_success = launchResponse.launch_success;
        this.launch_year = launchResponse.launch_year;
        this.links = launchResponse.links;
        this.mission_name = launchResponse.mission_name;
        this.mission_id = launchResponse.mission_id;
        return this;
    }
}
