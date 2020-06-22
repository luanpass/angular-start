import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(http:HttpClient){
    console.log(http);
  }
  
  spider = [
    {
      title: "Spider-man esmurrando um gordin",
      url: "https://s2.glbimg.com/cEWK_yCySFHJJyLCfTeeKFcgoFQ=/0x0:3840x2036/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2018/K/z/pkhHNGRuqCqiMcb0prvg/msm-screen-ps4pro-4k-legal-e32018-00002.jpg",
      alt: "Spider-man"
    },
    {
      title: "Homem jogando Spider-man",
      url: "https://s2.glbimg.com/lUmI_hTBe1vQAqoKeY4q4qH0lsU=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2018/K/U/miLhz8SheNLBg9nzLrxA/spider.jpg",
      alt: "Homem jogando Spider-man"
    }
  ];

  batman = [
    {
      title: "Todos os batmans",
      url: "https://cdn.pocket-lint.com/r/s/970x/assets/images/149433-tv-feature-what-order-should-you-watch-the-batman-movies-and-shows-image1-gyquc3whrm-jpg.webp?v1",
      alt: "Todos os batmans"
    },
    {
      title: "Batman e Robin",
      url: "https://cdn.pocket-lint.com/r/s/660x/assets/images/149433-tv-feature-what-order-should-you-watch-the-batman-movies-and-shows-image2-a9q4twke8g-jpg.webp?v1",
      alt: "Batman e Robin"
    },
    {
      title: "Atores do batman",
      url: "https://www.hastelavista.com.br/wp-content/uploads/2017/09/17-batman.w529.h352.jpg",
      alt: "Atores do batman"
    }
  ];
}
