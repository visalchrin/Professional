import { Router } from '@angular/router';
import { JobService } from './../../services/job.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.scss']
})
export class CreateJobComponent implements OnInit {

  formCreateJob: FormGroup;
  constructor(
    private fb: FormBuilder,
    private jobService: JobService,
    private router: Router
  ) { 
    this.formCreateJob = fb.group({
      jobTitle: new FormControl(null),
      industry: new FormControl(null),
      imageJunior: new FormControl(null),
      junior: new FormControl(null),
      imageSenior: new FormControl(null),
      senior: new FormControl(null),
      imageExpert: new FormControl(null),
      expert: new FormControl(null)
    })
  }

  ngOnInit(): void {
  }

  onCreateJob() {
    this.jobService.addNewJob({
      jobTitle: this.formCreateJob.value.jobTitle,
      industry: this.formCreateJob.value.industry,
      juniorImage: this.formCreateJob.value.imageJunior,
      junior: this.formCreateJob.value.junior,
      seniorImage: this.formCreateJob.value.imageSenior,
      senior: this.formCreateJob.value.senior,
      expertImage: this.formCreateJob.value.imageExpert,
      expert: this.formCreateJob.value.expert
    }).subscribe((data) => {
      console.log(data);
    })

    this.formCreateJob.reset();
    this.router.navigate(["trending"]);

  }
}
