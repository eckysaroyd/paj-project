import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  devices: any[] = [];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.apiService.getDevices().subscribe({
      next: (response: any) => {
        console.log('Response:', response); // Logging to confirm the structure
        this.devices = response.success || []; // Assigning the 'success' array to devices
      },
      error: (error) => {
        console.error('Error fetching devices:', error);
      }
    });
  }
  

  goToMap(device: any) {
    this.router.navigate(['/map', device.id]);
  }
}
