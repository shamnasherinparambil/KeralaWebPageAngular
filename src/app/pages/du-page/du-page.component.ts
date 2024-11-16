import { Component } from '@angular/core';
import { cardItems } from '../../interface/bootstrapCards';
import { MyCardsComponent } from '../../ui/my-cards/my-cards.component'

@Component({
  selector: 'app-du-page',
  standalone: true,
  imports: [MyCardsComponent],
  templateUrl: './du-page.component.html',
  styleUrl: './du-page.component.scss'
})
export class DuPageComponent {
  cardContent:cardItems[]=[
    {
      id:1,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTztaUihOWF-RQU-i7mJghhmjQiVGkpoSNdQw&s",
      districtName:"DU 1",
      discription:" A coastal district with rich cultural diversity, beautiful beaches, and historic temples."
    },
    {
      id:2,
      image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEglJa2AO2mPvNwWf0Kr3yUidOszH9ROFp4WB3-7F7A1F-18aNFYBuCg84TSw5al-LcJ3lqBSPWwXixGxoy9daihnz9mwugdn4K9GQ_4zAbdXAciMHIJYk14Cxqz0psmLBnBj2LIJRSMH80/s398/04272021+-+1.jpg",
      districtName:"DU 2",
      discription:"Known for its pristine beaches, historical forts, and the traditional Theyyam performances."
    },
    {
      id:3,
      image:"https://t3.ftcdn.net/jpg/08/28/70/38/360_F_828703809_Vxfp40zgeAZlyaxjGNuA7aU2Un5XNGgx.jpg",
      districtName:"DU 3",
      discription:" A picturesque district known for its wildlife sanctuaries, waterfalls, and misty mountains."
    },
    {
      id:4,
      image:"https://kathleenallen.net/wp-content/uploads/2018/09/AdobeStock_185169046-pdf-300x300.jpg",
      districtName:"DU 4",
      discription:"Famous for its historic connection to Vasco da Gama, Calicut Beach, and delectable Malabar cuisine."
    },
    {
      id:5,
      image:"https://www.shutterstock.com/image-vector/infographic-template-organization-chart-business-260nw-2460072323.jpg",
      districtName:"DU 5",
      discription:"A district known for its scenic beauty, cultural heritage, and as the birthplace of several poets."
    },
    {
      id:6,
      image:"https://www.digital-adoption.com/wp-content/uploads/2021/03/Cio-organization-structure.jpg",
      districtName:"DU 6",
      discription:"Known as the Gateway to Kerala with its rich history, scenic landscapes."
    },
    {
      id:7,
      image:"https://t4.ftcdn.net/jpg/07/35/70/17/360_F_735701707_5OAUH00OPWLlYPMFBO2dBFuPAravLaJ6.jpg",
      districtName:"DU 7",
      discription:"Known for the Thrissur Pooram festival, cultural heritage, and the Vadakkunnathan Temple."
    },
    {
      id:8,
      image:"https://static.vecteezy.com/system/resources/thumbnails/021/056/941/small/businessman-holding-hr-human-people-icon-on-the-graph-screen-of-a-media-screen-technology-process-system-business-with-recruitment-hiring-team-building-organization-structure-concept-photo.jpg",
      districtName:"DU 8",
      discription:"The commercial capital of Kerala, known for its bustling city life, Cochin Port, and cultural landmarks."
    }
    ]

}
