export class SearchCriteria {
  constructor(
    public jobName:string[]|null=[],
    public result:string|null=null,
    public fromDate:Date|null=null,
    public toDate:Date|null=null,
    public pageNum:number=0,
    public pageSize:number=37
  ) {}
}

export interface JobRunStatus {
  id:number,
  date:Date,
  duration:number,
  result:string,
  remarks:string|null,
  jobName:string,
  selected:boolean
}
