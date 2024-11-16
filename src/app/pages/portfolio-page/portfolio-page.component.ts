import { Component } from '@angular/core';
import { cardItems } from '../../interface/bootstrapCards';
import { MyCardsComponent } from '../../ui/my-cards/my-cards.component';
import { MyContactComponent } from '../../ui/my-contact/my-contact.component';

@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [MyCardsComponent,MyContactComponent],
  templateUrl: './portfolio-page.component.html',
  styleUrl: './portfolio-page.component.scss'
})
export class PortfolioPageComponent {
projectCard:cardItems[]=[
  {
    id:1,
    image:"/images/tictactoe.png",
    districtName:"TIC TAC TOE Game",
    discription:"Responsive Tic Tac Toe game using React Real-time game updates and dynamic user interfaces"
  },
  {
    id:2,
    image:"/images/react.png",
    districtName:"React Essential Dynamic Web page",
    discription:"Created and developed a responsive and user-friendly essential web page using React."
  },
  {
    id:3,
    image:"/images/potfolio.png",
    districtName:"Portfolio Website",
    discription:" Designed and developed Portfolio website using React JS"
  },
  {
    id:4,
    image:"/images/todoList.png",
    districtName:"TODO App",
    discription:"Engineered a task management solution by developing a Todo app using HTM, CSS and JS"
  },


]
academicCard:cardItems[]=[
  {
    id:1,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ClxqoR3t2ONs6LgZ0eC6pff7DzSqfNCIrw&s",
    districtName:"Government Engineering College Wayanad",
    discription:"Btech in Computer Science & engineering, 2018-22"
  },
  {
    id:2,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTO-TfSwlNzM6chNZrizLWdu6QYHEeGBT2vw&s",
    districtName:"AKMHSS Kottoor, Kottakkal, Malappuram",
    discription:"Plus One & Plus Two PCMB, 2015-17"
  },
  {
    id:3,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn4wDqQlR0BSgVWdYr8DREbO6oCAbMkI91JQ&s",
    districtName:"PKMMHSS Edarikkode, Kottakkal, Malappuram",
    discription:" SSLC, Kerala Board of Public Examinations , 2015"
  }

]
  cardContent:cardItems[]=[
    {
      id:1,
      image:"https://www.gisma.com/uploads/sites/5/2023/09/BEng-SE-GettyImages-1224500457.jpg?w=1920&h=1080&crop=1",
      districtName:"Programming",
      discription:"Java, Python, C/C++ "
    },
    {
      id:2,
      image:"https://www.uplers.com/wp-content/uploads/2021/10/img2.jpg",
      districtName:"Front End",
      discription:"HTML, CSS, JS, React JS, Bootstrap"
    },
    {
      id:3,
      image:"https://www.exasol.com/app/uploads/2024/10/thumbnail-blog-what-is-a-relational-database.webp",
      districtName:"Data Base",
      discription:" MySQL, PSQL, Firebase"
    },
    {
      id:4,
      image:"https://img-c.udemycdn.com/course/750x422/2759300_c11c_4.jpg",
      districtName:"UI and Prototyping",
      discription:"Figma"
    },
    {
      id:5,
      image:"https://www.bleepstatic.com/content/hl-images/2021/04/02/github-arctic-vault-bg.jpg",
      districtName:"Familiar With",
      discription:"Git and Github"
    },
    {
      id:6,
      image:"https://www.techsplace.com/wp-content/uploads/2020/02/Learn-Android-Development.jpg",
      districtName:"Application Development",
      discription:"Android Studio"
    }
  ]
}
