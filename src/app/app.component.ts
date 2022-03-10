import { Component } from '@angular/core';
import { assetUrl } from 'src/single-spa/asset-url';

@Component({
  selector: 'continents-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'continents';
  // Works great with single-spa
  europeImage = assetUrl('europe.jpeg');
  africaImage = assetUrl('africa.jpeg');
  americaImage = assetUrl('america.jpg');

  ngOnInit() {}
}
