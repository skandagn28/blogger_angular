import { Injectable } from "@angular/core";
import { Component, OnInit, Inject, AfterViewInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { CookieService } from "../../node_modules/ngx-cookie-service";

export interface MessageData {
  message: "";
}
@Component({
  selector: "message-example",
  templateUrl: "message.html"
})
export class MessageDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: MessageData) {}
}

@Injectable({
  providedIn: "root"
})
export class ApiService {
  public paymentData: object = { phText: "", circleText: "", amountText: "" };
  constructor(
    private http: HttpClient,
    public dialog: MatDialog,
    public cookie: CookieService
  ) {}

  isLoggedIn(): Boolean {
    if (this.cookie.get("userData")) {
      return true;
    } else {
      return false;
    }
  }

  resetpass(email) {
    const body = { email: email };
    const h: Object = { responseType: "text" };
    return this.http.post<any>(
      "http://127.0.0.1:8000/auth/resetpass/",
      body,
      h
    );
  }

  setLogin(userData) {
    this.cookie.set("userData", userData);
  }

  unsetLogin() {
    this.cookie.delete("userData");
  }

  messageDialog(message) {
    this.dialog.open(MessageDialog, {
      width: "350px",
      data: {
        message: message
      }
    });
  }

  login(us: string, ps: string): Observable<any> {
    const body = { username: us, password: ps };
    const h: Object = { responseType: "text" };
    return this.http.post<any>("http://127.0.0.1:8000/auth/login/", body, h);
  }

  logout(): Observable<any> {
    const h: Object = { responseType: "text" };
    return this.http.get<any>("http://127.0.0.1:8000/auth/logout/", h);
  }

  register(formData: FormData): Observable<any> {
    const h: Object = { responseType: "text" };
    let headers = new HttpHeaders();
    headers.append("Content-Type", "multipart/form-data");
    headers.append("Accept", "application/json");
    headers.append("response-type", "text");

    return this.http.post<any>(
      "http://127.0.0.1:8000/users/doRegister/",
      formData,
      {
        headers: headers
      }
    );
  }

  getProfile(): Observable<any> {
    return this.http.post<any>("http://127.0.0.1:8000/users/getUser/", {
      userid: this.cookie.get("userData")
    });
  }

  changepassword(oldpass, newpass): Observable<any> {
    const h: Object = { responseType: "text" };

    return this.http.post<any>(
      "http://127.0.0.1:8000/users/changepassword/",
      {
        oldpass: oldpass,
        newpass: newpass,
        userid: this.cookie.get("userData")
      },
      h
    );
  }
}
