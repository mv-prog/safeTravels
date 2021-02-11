import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'showstars'
})

export class ShowstarsPipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
    // for (const val of value){
        for (let i = 0; i < value; i++){
        // return '<mat-icon class=\'material-icons yellow-star\'>star_rate</mat-icon>';
        return '<span class="material-icons yellow-text yellowstar">star_rate</span>';
    }
    }
}
