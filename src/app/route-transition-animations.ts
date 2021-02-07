import {animate, group, query, style, transition, trigger} from "@angular/animations";

export const routeTransitionAnimations = trigger("routeAnimations", [
    transition("login => register, login => chat", [
        query(":enter", [style({opacity: 0, "margin-left": "0px"})]),
        group([
            query(":leave", [animate("0.2s ease-out", style({opacity: 0, "margin-left": "-500px"}))]),
            query(":enter", [animate("0.2s ease-out", style({opacity: 1, "margin-left": "-250px",}))]),
        ]),
    ]),
    transition("register => login, chat => login", [
        query(":enter", [style({opacity: 0, "margin-left": "-500px"})]),
        group([
            query(":leave", [animate("0.2s ease-out", style({opacity: 0, "margin-left": "0px"}))]),
            query(":enter", [animate("0.2s ease-out", style({opacity: 1, "margin-left": "-250px",}))]),
        ]),
    ])
]);
