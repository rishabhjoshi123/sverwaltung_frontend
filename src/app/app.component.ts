import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './_services/auth.service';
import { StorageService } from './_services/storage.service';
import { EventBusService } from './_shared/event-bus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn = false;
  username?: string;
  title = 'Schülerverwaltung';

  eventBusSub?: Subscription;

  constructor(
    private authenticationService: StorageService,
    private authService: AuthService,
    private eventBusService: EventBusService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.authService.getUser();
      this.username = user.username;
    }

    this.eventBusSub = this.eventBusService.on('logout', () => {
      this.logout();
    });
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: (res: any) => {
        console.log(res);
        this.authService.clean();

        window.location.reload();
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }
}
