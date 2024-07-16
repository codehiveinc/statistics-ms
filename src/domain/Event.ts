export class  Event{
    constructor(
        public serviceName : string,
        public eventType : string,
        public eventTimestamp : Date,
        public metaData : any
    ){}
}