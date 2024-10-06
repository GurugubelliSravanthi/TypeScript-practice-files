class type{
  private a: number
   private b: string
  
public getmeth(): number{
   return this.a
  }
 public setmeth(a :number): void{
    this.a=a
  }

}
class script extends type{
  public assam(): void{
    console.log("ikuuuu")
  }
}
let obj = new script()
obj.setmeth(5)
obj.assam()
console.log(obj.getmeth())