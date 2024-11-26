import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://connect.paj-gps.de/api/v1';

  constructor(private http: HttpClient) {}

  // Login method
  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password }).pipe(
      catchError(error => {
        console.error('Login error:', error);
        return throwError(() => new Error('Login failed. Please try again.'));
      })
    );
  }

  // Helper function to set authorization headers
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    console.log('Retrieved token:', token); // Check token retrieval
    if (!token) {
      console.error('Authorization token not found in localStorage');
      throw new Error('Authorization token is missing');
    }
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }
  

  // Get all devices
  getDevices(): Observable<any> {
    return this.http.get(`${this.apiUrl}/device`, { headers: this.getHeaders() }).pipe(
      catchError(error => {
        console.error('Error fetching devices:', error);
        return throwError(() => new Error('Failed to fetch devices.'));
      })
    );
  }

  // Get tracking data for a specific device
  getDeviceTracking(deviceID: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/trackerdata/${deviceID}/last_points?lastPoints=50`, {
      headers: this.getHeaders()
    }).pipe(
      catchError(error => {
        console.error(`Error fetching tracking data for device ${deviceID}:`, error);
        return throwError(() => new Error('Failed to fetch device tracking data.'));
      })
    );
  }
}
