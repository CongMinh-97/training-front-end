import { Component, OnInit, Inject , AfterViewInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataCustomerService } from '../../services/data-customers.service';
import { MatDialog } from '@angular/material/dialog';
import { AddEditComponent } from '../../dialogs/customer-dialog/add-edit/add-edit.component';
import { EditAddComponent } from '../../dialogs/customer/edit-add/edit-add.component';
import { DeleteComponent } from '../../dialogs/customer/delete/delete.component';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss']
})
export class ListCustomersComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'code', 'domain', 'phone','email','status','actions'];
  dataSource: MatTableDataSource<any>;

  listCustomers:any;
  aCustomerEdit:any;
  aCustomserDel:any;
  isShowSpinner:boolean = false;

  isCheckShowFilter:boolean =false;
  filterStatus:string = "";
  valueFilter ='';
  listFilterOption = [];
  

  keyword:string = '';
  isClickSearch:boolean = false;
  isCheckShowSearch:boolean=false;
  dataStatus =[
    {id:1, status: "Chưa kích hoạt", isChecked: false},
    {id:2, status: "Đang sử dụng", isChecked: false},
    {id:3, status: "Hết hạn sử dụng", isChecked: false},
    {id:4, status: "Hết hạn dùng thử", isChecked: false},
    {id:5, status: "Dùng thử",isChecked: false},
    {id:6, status: "Khác", isChecked: false},
  ]
  dataFilter = [];
  selectedValue:string;
  isColorOption:number;
  
  p:number =1;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    public dialog: MatDialog,
    private dataCustomerService: DataCustomerService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getAllData();
  }

  ngAfterViewInit() {
    
  }
  //show or hide search input
  showInputSearch() {
    this.isCheckShowSearch= !this.isCheckShowSearch; 
 }
  //show or hide filter option
  showOptionFilter() {
    this.isCheckShowFilter= !this.isCheckShowFilter; 
 }

// change select
 changeOption(event, id){
  this.isColorOption= event.target.value;
  console.log(this.isColorOption);
  // document.getElementById('select-status').className='';
  // document.getElementById('select-status').classList.add(`select-status-${this.isColorOption}`);
  let list = document.querySelectorAll("#select-status"); 
  for(let i=1; i<this.listCustomers.length+1;i++){
    if(i==id) {
      console.log(list[i]);
      console.log(id);
      list[i-1].className='';
      list[i-1].classList.add(`select-status-${this.isColorOption}`);
    }
  }
 }
 
 //get list
  getAllData() :void{
    this.dataCustomerService.getAllData().subscribe(
      (res) => {
        this.listCustomers= res;
        console.log(this.listCustomers);
        this.dataSource = new MatTableDataSource(this.listCustomers);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (err) => {

      }
    );    
  }
  getDataById(id:string) {
    this.dataCustomerService.getById(id).subscribe(
      (res) => {
        this.listCustomers= res;
        console.log(this.listCustomers);
        this.dataSource = new MatTableDataSource(this.listCustomers);
        this.ngAfterViewInit();
      }
    );
  }

  //edit-add
  getDataUpdate(value) {
    this.aCustomerEdit = value; 
    console.log(this.aCustomerEdit);
      
  }
  openEditAddCustomer(isAdd: boolean): void {
    console.log("open");
    const dialogRef = this.dialog.open(EditAddComponent, {
      width: '50%',
      data: {dataCustomer: isAdd ? [] : this.aCustomerEdit, status: isAdd}
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.isShowSpinner= true;
        if(isAdd) {
          setTimeout(() => {
            this.isShowSpinner= false;
            this.getAllData();           
            this._snackBar.open("Add Seccess!",'', {
              duration: 500,
            });
          }, 500); 
        } else {
          setTimeout(() => {
            this.isShowSpinner= false;
            this.getAllData();
            this._snackBar.open("Update Seccess!",'', {
              duration: 500,
            });
          }, 500); 
        }        
      } else {
        console.log('failse');       
      } 
    });
  }

  //delete
  getDataDelete(value){
    this.aCustomserDel = value; 
  }
  openDeleteCustomer(isAdd: boolean): void {
    console.log("open");
    const dialogRef = this.dialog.open(DeleteComponent, {
      width: '50%',
      data: this.aCustomserDel
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        setTimeout(() => {
          this.isShowSpinner= false;
          this.getAllData();
          this._snackBar.open("Delete Seccess!",'', {
            duration: 500,
          });
        }, 500); 
      }    
    });
  }
  
  //search by name or userCode of customer
  searchByKeyword(value:string){
    //let dataSearch = this.listCustomers.filter(item => item.includes(value));  
    this.keyword =value; 
      // this.dataCustomerService.search(this.keyword).subscribe(
      //   (res) => {
      //     this.listCustomers = res;
      //     console.log(this.listCustomers);
      //     this.dataSource = new MatTableDataSource(this.listCustomers);
      //     this.ngAfterViewInit();
      //     this.isClickSearch = true;
      //     this.keyword = '';
      //   }
      // );
      let resultSearch:any = []; 
      this.listCustomers.forEach(e => {
        if(e.name.toLowerCase().trim().search(this.keyword.toLowerCase().trim())>=0 || e.userCode == Number(this.keyword)) {  
          resultSearch.push(e);   
        }         
      });
      this.dataSource = new MatTableDataSource(resultSearch);
      // this.keyword = '';
      // let resultSearch = this.listCustomers.filter( item => {
      //   item.name.search(this.keyword) >=0
      //     //item.name.search(this.keyword) >=0 || item.userCode == Number(this.keyword)
      //   }     
      // )   
  }
  getOption(index:number){
    let data = [];// array chứa các id của các option đã click vào
    this.dataStatus[index].isChecked = !this.dataStatus[index].isChecked; // click vào thì đổi trang thái của option điđi
    this.dataStatus.forEach(item => {
      // nếu trạng thái của option lọc là true thì push vào mảng
      if(item.isChecked === true) {
        data.push(item.id);
      }
    });
    console.log(data);
    return this.dataFilter = data;   
  }
  filter(event) {  
    let resultFilter = [];
    this.listCustomers.forEach(
      item => {      
        this.dataFilter.forEach(el => { 
          if( item.status == el){
            resultFilter.push(item);
          }          
        });
      }
    );
    console.log(this.dataFilter);
    if(this.dataFilter.length==0) {
      this.dataSource = new MatTableDataSource(this.listCustomers);
      return;
    }
    this.dataSource = new MatTableDataSource(resultFilter);
    
  }
}
