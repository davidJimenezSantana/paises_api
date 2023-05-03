import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'search-box',
    templateUrl: 'searchBox.component.html',
    styleUrls:[
        'searchBox.component.css'
    ]
})
export class searchBoxComponent{

    @Input()
    public pHolder: string = "";

    @Output()
    public emitirvalor = new EventEmitter<string>();

    enviar(valor:string):void{
        this.emitirvalor.emit (valor);
    }
}