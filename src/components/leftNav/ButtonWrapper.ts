import { Component } from "../../core/core";
import Button from '../common/Button';
import { BTN_COLOR } from '../../const/consts';
export default class ButtonWrapper extends Component {
    render() {
        const addProjectBtn = new Button({ message: '프로젝트 추가', width: '100%', height: '42px', color: BTN_COLOR.CORAL }).el;
        const addToDo = new Button({ message: '할일 추가', width: '102px', height: '42px', color: BTN_COLOR.CORAL }).el;
        const addEvent = new Button({ message: '이벤트 추가', width: '102px', height: '42px', color: BTN_COLOR.CORAL }).el;

        const smallBtnWrapper = document.createElement('div');
        smallBtnWrapper.classList.add('small-btn-wrapper');
        smallBtnWrapper.append(addToDo, addEvent);

        this.el.classList.add('btn-wrapper');
        this.el.append(addProjectBtn, smallBtnWrapper);
    }
}