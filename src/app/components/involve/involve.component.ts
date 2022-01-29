import { JobService } from './../../services/job.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SalaryService } from './../../services/salary.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-involve',
  templateUrl: './involve.component.html',
  styleUrls: ['./involve.component.scss']
})
export class InvolveComponent implements OnInit {

  formInvolve: FormGroup;
  jobId: any;
  job: any;
  loading: boolean = true;

  constructor(
    private fb: FormBuilder,
    private salaryService: SalaryService,
    private router: Router,
    private route: ActivatedRoute,
    private jobService: JobService
  ) { 
    this.formInvolve = fb.group({
      juniorSalary: new FormControl(null),
      seniorSalary: new FormControl(null),
      expertSalary: new FormControl(null),
    })

    if (this.route.snapshot.paramMap.get("jobId") != null) {
      this.jobId = this.route.snapshot.paramMap.get("jobId");

      // get job by id
      this.jobService.getJobById({jobId: this.jobId}).subscribe((data)=> {
        this.job = data;
        this.loading = false;
      });
    }

  }

  ngOnInit(): void {
  }

  onPublish(jobId: string) {
    this.salaryService.addNewSalary({
      jobId: jobId,
      juniorSalary: this.formInvolve.value.juniorSalary,
      seniorSalary: this.formInvolve.value.seniorSalary,
      expertSalary: this.formInvolve.value.expertSalary,
    }).subscribe((data) => {
      console.log(data);
    })
    this.router.navigate(["trending"]);
  }
}
