import { Request , Response } from "express";
import { StaticsUseCase } from "../../application/StaticsUseCase";
import { Event } from "../../domain/Event";

export class StaticsController {
    constructor (private staticsUseCase : StaticsUseCase) {}

    handleEvent(req: Request, res: Response): void {    
        const {serviceName , eventType , eventTimestamp , metaData} = req.body;
        const event = new Event(serviceName , eventType , new Date (eventTimestamp) , metaData);
        this.staticsUseCase.handleEvent(event);
        res.status(200).send();
    }

    getAggregatedData(req: Request, res: Response): void {
        const data = this.staticsUseCase.getAggregatedData();
        res.status(200).send(data);
    }   
}