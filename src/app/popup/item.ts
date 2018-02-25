export class Item {
  constructor(
    public priority: number,
    public title:string,
    public description:string,
    public estimate:number,
    public create_date:Date,
    public state:number
  ) { }
}
