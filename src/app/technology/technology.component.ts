import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-technology",
  templateUrl: "./technology.component.html",
  styleUrls: ["./technology.component.scss"],
})
export class TechnologyComponent implements OnInit {
  technologies = [
    "Java (Java Spring Java ee)",
    "Angular",
    "TypeScript",
    "Node.js",
    "React.js",
    "React Native",
    "Kotlin",
    "JavaScript",
    "SQL(MySQL PostgreSQL)",
    "NoSQL(MongoDB)",
    "Docker",
    "HTML5",
  ];

  activeTechnology = "";

  setTechnologyAsActive(technology) {
    this.activeTechnology = technology;
  }

  formatClassNames(string) {
    return string.replace(/[()\.]/g, "").split(" ").join("");
  }

  constructor() {}

  ngOnInit(): void {}
}
