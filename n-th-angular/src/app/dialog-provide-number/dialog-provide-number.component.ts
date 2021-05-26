import { HttpRequestsService } from './../api/http-requests.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-dialog-provide-number',
  templateUrl: './dialog-provide-number.component.html',
  styleUrls: ['./dialog-provide-number.component.css']
})
export class DialogProvideNumberComponent implements OnInit {
  numberToAdd ={num: 1 };
  
  fibonacci = [0,1];
  num : any;
  constructor(private httpService: HttpRequestsService,  
    public dialogRef: MatDialogRef<DialogProvideNumberComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: HttpRequestsService,
    private _snackBar: MatSnackBar) { }
    CloseDialog(){
      this.dialogRef.close();
    }
    
    onSubmitNumber(data:any){
      this.numberToAdd =  data;
      console.log(this.numberToAdd);
     this.listFibonacci(this.numberToAdd.num);
     this._snackBar.open(this.fibonacci.toString(), 'End now', {
      duration: 5000,
      });

      // too add number in database through
     this.service.addNumber(this.numberToAdd).subscribe(
       data=>{
        console.log("done");
       },
       error=>{
         console.log(error);
       })
    }
    
    
    listFibonacci(num: number) {
    // starting at array index 1, and push current index + previous index to the array
        for (let i = 1; i < num; i++) {
            this.fibonacci.push(this.fibonacci[i] + this.fibonacci[i - 1]);
        }
        console.log(this.fibonacci);
    }
    
    
  ngOnInit(): void {
  }

}
