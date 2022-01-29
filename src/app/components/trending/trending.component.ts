import { JobService } from './../../services/job.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {

  jobs: any;
  loading: boolean = true;

  constructor(
    private router: Router,
    private jobService: JobService
  ) {
    this.jobService.getAllJobs().subscribe((data: any) => {
      this.jobs = data;
      this.loading = false;
    })
   }

  ngOnInit(): void {
  }

  onClickInvolve(jobId: String) {
    this.router.navigate([`involve/${jobId}`]);
  }

}
