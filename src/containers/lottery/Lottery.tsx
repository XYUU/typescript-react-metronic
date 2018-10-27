import * as React from 'react';
import { RouteComponentProps } from '@reach/router';
import { Roulette, easeOutSine } from '../../components/roulette/Roulette';

export interface LotteryProps extends RouteComponentProps {

}

export interface LotteryStates {

}

export class Lottery extends React.Component<LotteryProps, LotteryStates> {
    constructor(props?: LotteryProps, context?: any) {
        super(props, context);
    }

    render() {
        const awards = ["谢谢参与","100现金券", "200元现金券", "300元现金券", "400元现金券", "500元现金券"];
        return (
            <Roulette angle={0} animateTo={360 * 6 + 60} duration={3200} easing={easeOutSine} awards={awards} />
        );
    }
}