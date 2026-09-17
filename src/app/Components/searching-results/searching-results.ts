import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
imports: [RouterLink],
selector: 'app-searching-results',
styleUrl: './searching-results.css',
templateUrl: './searching-results.html',
})
export class SearchingResults {
eventInformation = [
{
id: 1,
category: 'Kategoria',
name: 'Nazwa',
date: '17.09.2026 - 19.09.2026',
time: '8:00 - 9:00',
location: 'Warszawa',
},
{
id: 2,
category: 'Kategoria',
name: 'Nazwa',
date: '17.09.2026 - 19.09.2026',
time: '8:00 - 9:00',
location: 'Warszawa',
},
{
id: 3,
category: 'Kategoria',
name: 'Nazwa',
date: '17.09.2026 - 19.09.2026',
time: '8:00 - 9:00',
location: 'Warszawa',
},
{
id: 4,
category: 'Kategoria',
name: 'Nazwa',
date: '17.09.2026 - 19.09.2026',
time: '8:00 - 9:00',
location: 'Warszawa',
},
{
id: 5,
category: 'Kategoria',
name: 'Nazwa',
date: '17.09.2026 - 19.09.2026',
time: '8:00 - 9:00',
location: 'Warszawa',
},
];
}
