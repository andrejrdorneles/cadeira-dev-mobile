import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'appupercase' })
export class CustomUpercasePipe implements PipeTransform{
    transform(value: string) {
        return value?.toLocaleUpperCase() || ""
    }

}