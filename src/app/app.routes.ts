import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SamplepageComponent } from './samplepage/samplepage.component'; 

export const routes: Routes = [
    {
        path: '', title: 'Dashboard Page', component: DashboardComponent,
      },
      {
        path: 'samplepage', title: 'Sample Page', component: SamplepageComponent,
      },
];