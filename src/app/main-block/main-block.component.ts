import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-block',
  templateUrl: './main-block.component.html',
  styleUrls: ['./main-block.component.less']
})
export class MainBlockComponent implements OnInit {

  newsTitleArr=[' Cейчас в СМИ ', 
 ' В Москве ',
' Интересное ',
' Коронавирус ']

  newsArr = [
     'Путин ударил кулаком по столу во время доклада главы Минтруда о зарплатах шахтеров',
   'Глава МИД России Лавров назвал угрозу Нуланд ввести новые санкции тупиковым путем',
    'Белоруссия пообещала ответить на санкции ЕС асимметрично, но адекватно',
    'Кулеба: Лукашенко своим заявлением о Крыме сжег мосты в отношениях с Украиной',
    'Сергей Велигодский из Сбербанка предупредил о риске остаться без жилья из-за мошенников'
 ]
  constructor() { }

  ngOnInit(): void {
  }

}
