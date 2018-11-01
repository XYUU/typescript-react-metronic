import React from 'react';
import './style.scss';

export interface RouletteProps {
    awards: string[]
    angle: number
    animateTo: number
    duration: number
    easing?(x: number, t: number, b: number, c: number, d: number): number
}

export interface RouletteStates {
    angle: number
}

export const easeOutSine = (e, f, a, h, g) => h * Math.sin(f / g * (Math.PI / 2)) + a;
// export const defaultEasing = (x, t, b, c, d) => -c * ((t = t / d - 1) * t * t * t - 1) + b;

export class Roulette extends React.Component<RouletteProps, RouletteStates> {

    timer: any
    canvas: React.RefObject<HTMLCanvasElement>;
    centerX: number;
    centerY: number;
    radius: number;
    angle: number;

    constructor(props?: RouletteProps, context?: any) {
        super(props, context);
        this.state = { angle: props.angle };
        this.canvas = React.createRef<HTMLCanvasElement>();
    }

    start = () => {
        const startTime = new Date().getTime(),
            { easing, angle, animateTo, duration, awards } = this.props,
            endTime = startTime + duration,
            centerX = 254, centerY = 254, radius = 245,
            e = 360 / awards.length,
            { canvas, drawCircle, drawSector } = this,
            ctx = canvas.current.getContext("2d");
        this.timer = setInterval(() => {
            const actualTime = new Date().getTime();
            if (actualTime > endTime) {
                clearInterval(this.timer);
            } else {
                let _angle = easing(0, actualTime - startTime, angle, animateTo - angle, duration);
                ctx.clearRect(0, 0, 508, 508);
                drawCircle(ctx, centerX, centerY, radius, awards.length);
                drawSector(ctx, centerX, centerY, radius, _angle, _angle + e);
            }
        }, 5);
    }

    componentDidMount() {
        const { canvas, drawCircle, drawSector } = this, { awards } = this.props,
            centerX = 254, centerY = 254, radius = 245,
            ctx = canvas.current.getContext("2d");
        drawCircle(ctx, centerX, centerY, radius, awards.length);
        drawSector(ctx, centerX, centerY, radius, 0, 360 / awards.length);
    }

    drawCircle(ctx: CanvasRenderingContext2D, centerY: number, centerX: number, radius: number, length: number) {
        ctx.lineWidth = 4;
        ctx.lineCap
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        ctx.stroke();
        for (let i = 0; i < length; i++) {
            const angle = 360 / length * i * Math.PI / 180;
            ctx.moveTo(centerX + radius * Math.cos(angle), centerY + radius * Math.sin(angle));
            ctx.lineTo(centerX, centerY);
            ctx.stroke();
        }
        ctx.closePath();
    }

    drawSector(ctx: CanvasRenderingContext2D, centerY: number, centerX: number, radius: number, startAngle: number, endAngle: number) {
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius - 2, startAngle * Math.PI / 180, endAngle * Math.PI / 180, false);
        ctx.closePath();
        ctx.fillStyle = "rgb(201,0,38)";
        ctx.fill();
    }

    componentWillUnmount() {
        this.timer && clearInterval(this.timer);
    }

    render() {
        const { start, canvas } = this, { awards } = this.props,
            du = 360 / awards.length, r = 508 / 2 - 100;
        return (
            <div className="turntable" style={{ width: 508, height: 508 }}>
                <canvas width={508} height={508} ref={canvas}></canvas>
                {awards.map((item, index) => {
                    const hudu = (2 * Math.PI / 360) * (du * index + 90),
                        top = Math.sin(hudu) * r + r + 50,
                        left = Math.cos(hudu) * r + r + 50;
                    return (
                        <div className="turntable-info" style={{ top: top, left: left }} key={index}>
                            <img src="assets/turntable/turn_icon.png" />
                            <div className="turntable-text">{item}</div>
                        </div>
                    )
                })}
                <img className="turntable-button-start" src="assets/turntable/button_start.png" onClick={start} />
            </div>
        );
    }
}