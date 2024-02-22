export class SearchCriteria {
  constructor(
    public jobName:string[]=[],
    public result:string|null=null,
    public fromDate:Date|null=null,
    public toDate:Date|null=null,
    public pageNum:number=0,
    public pageSize:number=37
  ) {}

  reset() {
    this.jobName = [] ;
    this.result = null ;
    this.fromDate = null ;
    this.toDate = null ;
    this.pageNum = 0 ;
    this.pageSize = 37 ;
  }
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
