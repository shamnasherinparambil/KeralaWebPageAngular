import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyButtonComponent } from "./ui/my-button/my-button.component";
import { MyCarosalComponent } from "./ui/my-carosal/my-carosal.component";
import { MyCardsComponent } from "./ui/my-cards/my-cards.component";
import { NavbarComponent } from "./ui/navbar/navbar.component";


@Component({               //decorator
  selector: 'app-root',
  standalone: true,
  imports: [MyButtonComponent, MyCarosalComponent,MyCardsComponent,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  cardContent=[
  {
    id:1,
    image:"https://media1.thrillophilia.com/filestore/5m1zl0ci043sj8vfsqrrztdg03m4_1552979277_hosdurg_fort.png?w=753&h=450&dpr=2.0",
    districtName:"Kasargod",
    discription:" A coastal district with rich cultural diversity, beautiful beaches, and historic temples."
  },
  {
    id:2,
    image:"https://www.holidify.com/images/cmsuploads/compressed/1024px-Payyambalam_Beach_Back_Water_20180425181108.jpg",
    districtName:"Kannur",
    discription:"Known for its pristine beaches, historical forts, and the traditional Theyyam performances."
  },
  {
    id:3,
    image:"https://aftertherains.in/blog/wp-content/uploads/2022/06/Wayanad_Churam_thamarasseri-1024x682-1.jpg",
    districtName:"Wayanad",
    discription:" A picturesque district known for its wildlife sanctuaries, waterfalls, and misty mountains."
  },
  {
    id:4,
    image:"https://www.keralatourism.org/images/enchanting_kerala/large/payyoli_beach_kozhikode20230307122403_1280_1.jpg",
    districtName:"Kozhikode",
    discription:"Famous for its historic connection to Vasco da Gama, Calicut Beach, and delectable Malabar cuisine."
  },
  {
    id:5,
    image:"https://lh3.googleusercontent.com/proxy/Q22r089cI5Py97QhDjF4WPBeIxASaD5_AEJbjZOgGbcz2pqGDROzU-wIj0tPA2pJK2OwvMStaiubbvB-hK2b7SQHkC0OasY",
    districtName:"Malappuram",
    discription:"A district known for its scenic beauty, cultural heritage, and as the birthplace of several poets."
  },
  {
    id:6,
    image:"https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/15/82dad96fa9e73adb0007320de793f191_1000x1000.jpg",
    districtName:"Palakkad",
    discription:"Known as the Gateway to Kerala with its rich history, scenic landscapes."
  },
  {
    id:7,
    image:"https://2.imimg.com/data2/AS/SM/MY-3205896/kerala-kerala-tourism-thrissur.jpg",
    districtName:"Trissur",
    discription:"Known for the Thrissur Pooram festival, cultural heritage, and the Vadakkunnathan Temple."
  },
  {
    id:8,
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/INS_Vikrant_under_construction_at_Cochin_Shipyard.png/300px-INS_Vikrant_under_construction_at_Cochin_Shipyard.png",
    districtName:"Ernakulam",
    discription:"The commercial capital of Kerala, known for its bustling city life, Cochin Port, and cultural landmarks."
  },
  {
    id:9,
    image:"https://content3.jdmagicbox.com/comp/idukki/t7/9999p4863.4863.141213105936.j3t7/catalogue/idukki-dam-idukki-tourist-attraction-3277a8o.png",
    districtName:"Idukki",
    discription:"Famous for its lush green hills, wildlife sanctuaries, and Idukki Dam."
  },
  {
    id:10,
    image:"https://www.keralatourism.org/images/picture/large/Marmala_Stream_Kottayam_2497.jpg",
    districtName:"Kottayam",
    discription:"Known for its backwaters, rubber plantations, and as a hub for Malayalam literature."
  },
  {
    id:11,
    image:"https://facts.net/wp-content/uploads/2023/07/31-facts-about-alappuzha-1688802937.jpg",
    districtName:"Alappuzha",
    discription:"Known for its backwaters and houseboat cruises, it's also known as the Venice of the East."
  },
  {
    id:12,
    image:"https://media-cdn.tripadvisor.com/media/photo-c/1280x250/11/17/fb/80/perunthenaruvi-waterfall.jpg",
    districtName:"Pathanamthitta",
    discription:"Famous for its religious sites, especially the Sabarimala Temple, and its lush green forests."
  },
  {
    id:13,
    image:"https://keralatourism.travel/images/destinations/places-to-visit/kollam/thangassery-kollam-kerala-tourism-entry-fee-timings-holidays-reviews-small.jpg",
    districtName:"Kollam",
    discription:"Known for its backwaters, beaches, and the historic Ashtamudi Lake. It is an ancient seaport "
  },
  {
    id:14,
    image:"https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/15/16de14d7a016d424fa5a0944b0fb055a_1000x1000.jpg",
    districtName:"Thiruvananthapuram",
    discription:"The capital of Kerala, known for its rich cultural heritage, beaches, and the Padmanabhaswamy Temple."
  }
  ]
}
