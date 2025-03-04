import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Residence } from 'src/app/core/models/residence';
import { ResidenceService } from 'src/app/core/residence.service';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent implements OnInit {

  id!: number;
  residence: Residence | undefined;
  constructor(private act: ActivatedRoute, private rs: ResidenceService) {}

  ngOnInit() {
    // this.id = this.act.snapshot.params['id'];
    this.act.paramMap.subscribe((param) => {
      this.id = Number(param.get('id'));
    });
    this.rs
      .getResidenceById(this.id)
      .subscribe((residence) => (this.residence = residence));
    console.log(this.residence);
  }

}
