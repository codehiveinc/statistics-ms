import { Event } from "./Event";
import { AggregatedData } from "./AggregatedData";

export class StaticsService { 
    handleEvent(event: Event): void {
        // Do something with the event
    }

    getAggregatedData(): AggregatedData[] {
        // Return some aggregated data
        return [];
    }
}