import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'secToHrsMins'
})

export class SecToHrsMinsPipe implements PipeTransform {
    // tslint:disable-next-line: typedef
    transform(value: any, ...args: any[]) {
        const toHoursMinutesSeconds = totalSeconds => {
            const hours = Math.floor(totalSeconds / 3600);
            const minutes = Math.floor((totalSeconds % 3600) / 60);
            const seconds = totalSeconds % 60;
            let result = `${minutes
                .toString()
                .padStart(1, '0')}:${seconds.toString().padStart(2, '0')}`;
            if (!!hours) {
                result = `${hours.toString()}:${minutes
                    .toString()
                    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            }
            return result;
        };
    }
}

