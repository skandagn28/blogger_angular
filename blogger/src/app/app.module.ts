import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FeedsComponent } from "./feeds/feeds.component";
import { LatestblogsComponent } from "./latestblogs/latestblogs.component";
import { SubscriptionComponent } from "./subscription/subscription.component";
import { AuthorprofileComponent } from "./authorprofile/authorprofile.component";
import { ViewblogComponent } from "./viewblog/viewblog.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { UnsubscribeComponent } from "./unsubscribe/unsubscribe.component";
import { NewpostComponent } from "./newpost/newpost.component";
import { BookmarksComponent } from "./bookmarks/bookmarks.component";
import { RecommendedComponent } from "./recommended/recommended.component";
import { HomeComponent } from "./home/home.component";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { FormsModule } from "@angular/forms";

import { MessageDialog, ApiService } from "./api.service";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { HttpClientModule } from "@angular/common/http";
import { CookieService } from "../../node_modules/ngx-cookie-service";

@NgModule({
  declarations: [
    AppComponent,
    FeedsComponent,
    LatestblogsComponent,
    SubscriptionComponent,
    AuthorprofileComponent,
    ViewblogComponent,
    LoginComponent,
    SignupComponent,
    UnsubscribeComponent,
    NewpostComponent,
    BookmarksComponent,
    RecommendedComponent,
    HomeComponent,
    MessageDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: MatDialogRef, useValue: {} },
    ApiService,
    CookieService
  ],
  bootstrap: [AppComponent],
  entryComponents: [MessageDialog]
})
export class AppModule {}
