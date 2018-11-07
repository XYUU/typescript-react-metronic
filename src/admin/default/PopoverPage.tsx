import React from 'react';
import { SubHeader } from './subheader/SubHeader';
import { RouteComponentProps } from '@reach/router';
import { Row, Col, Popover, PopoverHeader, PopoverBody, Button } from 'reactstrap';
import { Portlets } from '../../framework/components/general/portlets/Portlets';
import { Section, SectionSub, SectionHeader, SectionContent } from '../../framework/components/general/typography/Section';
import { Separator } from '../../framework/components/general/typography/Separator';
import { Content } from './base/Content';

export interface PopoverPageProps extends RouteComponentProps {

}
export interface PopoverPageStates {
    btn1?: boolean
}
export class PopoverPage extends React.Component<PopoverPageProps, PopoverPageStates> {
    constructor(props?: PopoverPageProps, context?: any) {
        super(props, context);
        this.state = {};
    }

    toggle = () => {
        const { btn1 } = this.state;
        this.setState({ btn1: !btn1 });
    }

    render() {
        const { toggle } = this, { btn1 } = this.state;
        return (
            <React.Fragment>
                <SubHeader title="Popover" items={[{ to: "", text: "Base" }, { to: "", text: "Popover" }]}>
                    <div>
                        <div className="m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push" m-dropdown-toggle="hover" aria-expanded="true">
                            <a href="#" className="m-portlet__nav-link btn btn-lg btn-secondary  m-btn m-btn--outline-2x m-btn--air m-btn--icon m-btn--icon-only m-btn--pill  m-dropdown__toggle">
                                <i className="la la-plus m--hide" />
                                <i className="la la-ellipsis-h" />
                            </a>
                            <div className="m-dropdown__wrapper">
                                <span className="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust" />
                                <div className="m-dropdown__inner">
                                    <div className="m-dropdown__body">
                                        <div className="m-dropdown__content">
                                            <ul className="m-nav">
                                                <li className="m-nav__section m-nav__section--first m--hide">
                                                    <span className="m-nav__section-text">Quick Actions</span>
                                                </li>
                                                <li className="m-nav__item">
                                                    <a href="" className="m-nav__link">
                                                        <i className="m-nav__link-icon flaticon-share" />
                                                        <span className="m-nav__link-text">Activity</span>
                                                    </a>
                                                </li>
                                                <li className="m-nav__item">
                                                    <a href="" className="m-nav__link">
                                                        <i className="m-nav__link-icon flaticon-chat-1" />
                                                        <span className="m-nav__link-text">Messages</span>
                                                    </a>
                                                </li>
                                                <li className="m-nav__item">
                                                    <a href="" className="m-nav__link">
                                                        <i className="m-nav__link-icon flaticon-info" />
                                                        <span className="m-nav__link-text">FAQ</span>
                                                    </a>
                                                </li>
                                                <li className="m-nav__item">
                                                    <a href="" className="m-nav__link">
                                                        <i className="m-nav__link-icon flaticon-lifebuoy" />
                                                        <span className="m-nav__link-text">Support</span>
                                                    </a>
                                                </li>
                                                <li className="m-nav__separator m-nav__separator--fit">
                                                </li>
                                                <li className="m-nav__item">
                                                    <a href="#" className="btn btn-outline-danger m-btn m-btn--pill m-btn--wide btn-sm">Submit</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SubHeader>
                <Content>
                    <Row>
                        <Col lg={6}>
                            <Portlets title="Basic Examples">
                                <Section>
                                    <SectionHeader>Basic Usage</SectionHeader>
                                    <SectionSub>Click below button to toggle popover:</SectionSub>
                                    <SectionContent>
                                        <Button id="btn1" color="danger">Click me</Button>
                                        <Popover className="m-popover" target="btn1">
                                            <PopoverHeader>Popover title</PopoverHeader>
                                            <PopoverBody>And here's some amazing content. It's very engaging. Right?</PopoverBody>
                                        </Popover>
                                    </SectionContent>
                                </Section>
                                <Separator />
                                <Section>
                                    <SectionHeader>Directions</SectionHeader>
                                    <SectionSub>Four direction options are available: top, right, bottom, and left aligned:</SectionSub>
                                    <SectionContent className="m-demo-buttons">
                                        <Button id="btn2" color="brand">Popover on top</Button>
                                        <Popover className="m-popover" placement="top" target="btn2">
                                            <PopoverBody>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</PopoverBody>
                                        </Popover>
                                        <Button id="btn3" color="primary">Popover on right</Button>
                                        <Popover className="m-popover" placement="right" target="btn3">
                                            <PopoverBody>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</PopoverBody>
                                        </Popover>
                                        <Button id="btn4" color="warning">Popover on bottom</Button>
                                        <Popover className="m-popover" placement="bottom" target="btn4">
                                            <PopoverBody>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</PopoverBody>
                                        </Popover>
                                        <Button id="btn5" color="success">Popover on left</Button>
                                        <Popover className="m-popover" placement="left" target="btn5">
                                            <PopoverBody>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</PopoverBody>
                                        </Popover>
                                    </SectionContent>
                                </Section>
                                <Separator />
                                <Section>
                                    <SectionHeader>Dismiss on next click</SectionHeader>
                                    <SectionSub>Use the focus trigger to dismiss popovers on the next click that the user makes.</SectionSub>
                                    <SectionContent>
                                        <Button tag="a" id="btn6" color="success">Dismissible popover</Button>
                                        <Popover className="m-popover" target="btn6">
                                            <PopoverHeader>Dismissible popover</PopoverHeader>
                                            <PopoverBody>And here's some amazing content. It's very engaging. Right?</PopoverBody>
                                        </Popover>
                                    </SectionContent>
                                </Section>
                            </Portlets>
                        </Col>
                        <Col lg={6}>
                            <Portlets title="Advanced Examples">
                                <Section>
                                    <SectionHeader>HTML Content</SectionHeader>
                                    <SectionSub>Insert HTML into the popover:</SectionSub>
                                    <SectionContent>
                                        <Button id="btn7" color="primary">Click me</Button>
                                        <Popover className="m-popover" target="btn7">
                                            <PopoverHeader>Popover title</PopoverHeader>
                                            <PopoverBody>And here's some amazing<b>HTML</b>content. It's very <code>engaging</code>. Right?</PopoverBody>
                                        </Popover>
                                    </SectionContent>
                                </Section>
                                <Separator />
                                <Section>
                                    <SectionHeader>Offset</SectionHeader>
                                    <SectionSub>Offset of the popover relative to its target. For more information refer to<a className="m-link" href="http://tether.io/#offset" target="_blank">Tether's offset docs.</a></SectionSub>
                                    <SectionContent className="m-demo-buttons">
                                        <Button id="btn8" color="brand">Example 1</Button>
                                        <Popover className="m-popover" data-offset="20px 20px" placement="top" target="btn8">
                                            <PopoverBody>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</PopoverBody>
                                        </Popover>
                                        <Button id="btn9" color="success">Example 2</Button>
                                        <Popover className="m-popover" data-offset="-20px -20px" placement="top" target="btn9">
                                            <PopoverBody>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</PopoverBody>
                                        </Popover>
                                        <Button id="btn10" color="danger">Example 3</Button>
                                        <Popover className="m-popover" data-offset="60px 0px" placement="top" target="btn10">
                                            <PopoverBody>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</PopoverBody>
                                        </Popover>
                                    </SectionContent>
                                </Section>
                                <Separator />
                                <Section>
                                    <SectionHeader>Skin</SectionHeader>
                                    <SectionSub>Use <code>data-skin="light"</code> or <code>data-skin="dark"</code>parameters to set popover skin. Default skin is light.</SectionSub>
                                    <SectionContent className="m-demo-buttons">
                                        <Button id="btn11" color="brand">Light skin</Button>
                                        <Popover className="m-popover" data-offset="20px 20px" placement="top" target="btn11">
                                            <PopoverHeader>Default light skin</PopoverHeader>
                                            <PopoverBody>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</PopoverBody>
                                        </Popover>
                                        <Button id="btn12" color="success" onClick={toggle}>Dark skin</Button>
                                        <Popover className="m-popover m-popover--skin-dark" data-skin="dark" placement="bottom" target="btn12" isOpen={btn1} toggle={toggle}>
                                            <PopoverHeader>Dark skin</PopoverHeader>
                                            <PopoverBody>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</PopoverBody>
                                        </Popover>
                                    </SectionContent>
                                </Section>
                            </Portlets>
                        </Col>
                    </Row>
                </Content>
            </React.Fragment>
        );
    }
}