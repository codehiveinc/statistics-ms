import { StaticsService } from "../domain/StaticsService";
import { Event } from "../domain/Event";
import { AggregatedData } from "../domain/AggregatedData";

export class StaticsUseCase {
    constructor(private staticsService: StaticsService) {}

    handleEvent(event: Event): void {
        this.staticsService.handleEvent(event);
    }

    getAggregatedData(): AggregatedData[] {
        return this.staticsService.getAggregatedData();
    }
}