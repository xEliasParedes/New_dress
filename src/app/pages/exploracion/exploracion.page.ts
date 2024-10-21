import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exploracion',
  templateUrl: './exploracion.page.html',
  styleUrls: ['./exploracion.page.scss'],
})
export class ExploracionPage implements OnInit {

 images: any =[];


  

  constructor() {

    this.images = [
      'https://i.pinimg.com/enabled_lo/236x/b8/b7/06/b8b706343c8129e428ebaf6264a1336b.jpg',
      'https://i.pinimg.com/enabled_lo/474x/9f/90/f4/9f90f456b3060bff0c90025854b5dc6d.jpg',
      'https://i.pinimg.com/enabled_lo/236x/e7/d2/2f/e7d22fd6eedfab1127d496228fdda203.jpg',
      'https://i.pinimg.com/enabled_lo/236x/0f/2d/cb/0f2dcbd6b6eb71b7383af28e63f96f63.jpg',
      'https://i.pinimg.com/enabled_lo/236x/64/6b/e5/646be577a129f243f8459c90d670b1c8.jpg',
      'https://i.pinimg.com/enabled_lo/236x/12/43/8d/12438d4c5d038a9f9153027c4a60c858.jpg',
      'https://i.pinimg.com/enabled_lo/236x/cc/9d/80/cc9d80c9acf2309729f6759d46b587a0.jpg',
      'https://i.pinimg.com/enabled_lo/236x/52/ec/8a/52ec8a2b51749088c6b9ce0761ba54fb.jpg',
      'https://i.pinimg.com/enabled_lo/236x/dc/2e/c7/dc2ec7306e9dddea1cf20ebab9578a2f.jpg',
      'https://i.pinimg.com/enabled_lo/564x/0c/a7/c9/0ca7c9243f84eeb013ff19b5a0b5cd42.jpg',
      'https://i.pinimg.com/enabled_lo/236x/53/3b/9c/533b9ce584c7b2738eca0e9cd63e4cf3.jpg'
    ]


      
    
   }

  ngOnInit() {
  }

}
