import { Component, Inject } from "@angular/core";
import { ApiService } from "./api.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(
    @Inject(ApiService) private apiService: ApiService,
    private router: Router
  ) {}
  title = "blogger";
  logged_items = this.apiService.isLoggedIn();
  selectedmenu = 1;
  logged_out_menu: object[] = [
    { path: "login", name: "LOGIN" },
    { path: "register", name: "REGISTER" }
  ];
  logged_in_menu: object[] = [
    { path: "bookmarks", name: "Bookmarks" },
    { path: "recharge", name: "Subscriptions" },
    { path: "plans", name: "Feeds" },
    { path: "offers", name: "My profile" }
  ];

  ishome() {
    return this.router.url.split("/")[1] == "";
  }

  logout() {
    this.apiService.logout().subscribe(
      data => {
        console.log(data);
        if (data == "success") {
          this.apiService.unsetLogin();
          this.apiService.messageDialog(
            "Successfully logged out! Redirecting to home ..."
          );
          setTimeout(function() {
            location.href = "/";
          }, 3000);
        } else {
          this.apiService.messageDialog("Error! Try after sometime.");
        }
      },
      error => {
        this.apiService.messageDialog("Error! Try after sometime.");
      }
    );
  }

  selectMenu(index: number) {
    console.log(index);
    this.selectedmenu = index;
  }
}
