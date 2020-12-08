import { EventService } from '../../core/services/events/event.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {

  specialEvents = [];
  constructor(private eventsService: EventService) { }

  ngOnInit(): void {
    this.eventsService.getSpecialEvents().subscribe(
      res => this.specialEvents = res,
      err => console.log(err)
    );
  }

}
