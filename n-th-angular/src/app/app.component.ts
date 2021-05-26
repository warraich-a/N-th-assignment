import { DialogProvideNumberComponent } from './dialog-provide-number/dialog-provide-number.component';
import { HttpRequestsService } from './api/http-requests.service';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'n-th-angular';
  history: any;
  constructor(private service:HttpRequestsService,
    public dialog: MatDialog){
      this.openDialogAddNumber();
  }

  getHistory(){
    this.service.getHistory().subscribe(
      data=>{
        this.history= data;
        console.log(data);
    },
    error=>{
      console.log(error)
    }
    );
  }
  openDialogAddNumber(): void {
    const dialogRef = this.dialog.open(DialogProvideNumberComponent,{
      width: '70%',
      panelClass: ['custom-modalbox','animate__animated','animate__slideInLeft']
    }); 
    dialogRef.afterClosed( )
      .subscribe(res => {
        // this.getAllPatients();
        // this.ngOnInit();
    });
  }


  ngOnInit(): void {
    this.getHistory();
  }
}
