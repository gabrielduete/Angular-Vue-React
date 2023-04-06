import { Component, OnInit, Input } from "@angular/core"

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  @Input() msg: string | undefined
  legenda: string = "Estou no Angular"

  constructor() {}

  ngOnInit(): void {
    throw new Error("Method not implemented.")
  }

  resetLegenda(): void {
    this.legenda = "Estou no Angular"
  }
}
