// import { Component, OnInit } from '@angular/core';
// import { DemoService } from './service/demo.service';
// // import {  DemoService } from './service/myservice.service';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent  implements OnInit {
//   parantToChild: string=`I am coming from parant `;
//   posts = [
//     {
//       title: 'Pam Tree',
//       content: 'I love this tree'
//     },
//     {
//       title: 'Mango Tree',
//       content: 'I love this tree'
//     }
//   ]
  
//   // title = 'angularapp';
//   name = `Assignment `;
// empcount;
// data={
//   name: `Akash`,
//   calss: `Btech`,
// }

// imageUrl = 'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg';
// // private myservice: MyserviceService private
// // products={};
// Users:any;
//   constructor(private demoService: DemoService ){
// // this.getvaluefromserver();

//   }
//   ngOnInit(): void {
//     // this.products = this.myservice.products;
//     // this.demoService.Users().subscribe(res => {
//     //   console.log('user api results', res);
//     // }, err => {
//     //   console.log(err);
//     // })
//     this.demoService.Users().subscribe((data)=>{
//       console.log('data',data);
//       this.Users=data;      
//     })
//   }
// //   getvaluefromserver(){
// // this.empcount = 100;
// //   }
// //   currenttime=new Date();
// //   testnew(){
// //     alert`event raise`
// //   }
// }



import { Component, OnInit } from '@angular/core';
import { DemoService } from './service/demo.service';
// import { DemoService } from './services/demo.service';
// import { MyserviceService } from './services/myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  products={};
  getUsers:any;
  myservice: any;
  constructor(private demoService: DemoService ){
    // demoService.Users().subscribe((data)=>{
    //   console.log('data',data);
    //   this.Users=data;      
    // })

  }
  ngOnInit(): void {
    // this.products = this.myservice.products;
    // this.demoService.Users().subscribe(res => {
    //   console.log('user api results', res);
    // }, err => {
    //   console.log(err);
    // })
    // this.demoService.Users().subscribe((data)=>{
    //   console.log('data',data);
    //   this.Users=data;      
    // })
    this.demoService.getUsers().subscribe(res => {

      console.log('user api results', res);

    }, err => {

      console.log(err);

    })
  }
  
  // array=["akash","suhas","ashitosh","prathmesh"];

  // parentToChild: string = "I am From Parent";
 

  posts = [
    {
      title: 'pam tree',
      content: 'i love pam tree'
    },
    {
      title: 'mango tree',
      content: 'i love mango tree'
    }

  ]


  title = ' ';
  name = 'Akash';
  data = {
    name: 'Akash',
    dept: 'MECH'
  }
  imageUrl = 'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg';
  now = new Date();

  onParent(val) {
    console.log('from Parent', val);

  }
  name1='';
  name2='';
  name3='';
  name4='';
  fromParent(val1){
    
  console.log('from the child to parent',val1);
    this.name1=val1.name;
    this.name2=val1.last;
    this.name4=val1.age;
    this.name3=val1.dept;
  }

}