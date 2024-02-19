export class SearchCriteria {
  constructor( public jobName?:string,
               public result?:string,
               public fromDate?:Date,
               public toDate?:Date,
               public pageNum?:number,
               public pageSize?:number){}
}

export class JobRunStatus {
  constructor( public id:number,
               public date:Date,
               public duration:number,
               public result:string,
               public remarks:string|null,
               public jobName:string ) {
  }
}
