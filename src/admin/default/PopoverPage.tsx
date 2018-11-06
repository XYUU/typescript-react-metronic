import React from 'react';
import { SubHeader } from './subheader/SubHeader';
import { RouteComponentProps } from '@reach/router';
import { Popover } from '../../framework/vendors/bootstrap/extend/Popover';
import { Portlets } from '../../framework/components/general/portlets/Portlets';
import { Section } from '../../framework/components/general/typography/Section';
import { Separator } from '../../framework/components/general/typography/Separator';

export interface PopoverPageProps extends RouteComponentProps {

}
export interface PopoverPageStates {

}
export class PopoverPage extends React.Component<PopoverPageProps, PopoverPageStates> {
    constructor(props?: PopoverPageProps, context?: any) {
        super(props, context);

    }
    render() {
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
                <div className="m-content">
                    <div className="row">
                        <div className="col-lg-6">
                            <Portlets title="Basic Examples">
                                <Section title="Basic Usage" subTitle="Click below button to toggle popover:">
                                    <Popover title="Popover title" content="And here's some amazing content. It's very engaging. Right?">
                                        <button type="button" className="btn btn-danger">Click me</button>
                                    </Popover>
                                </Section>
                                <Separator />
                                <Section className="m-demo-buttons" title="Directions" subTitle="Four direction options are available: top, right, bottom, and left aligned:">
                                    <Popover container="body" placement="top" content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                                        <button type="button" className="btn btn-brand">Popover on top</button>
                                    </Popover>
                                    <Popover container="body" placement="right" content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                                        <button type="button" className="btn btn-primary">Popover on right</button>
                                    </Popover>
                                    <Popover container="body" placement="bottom" content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                                        <button type="button" className="btn btn-warning">Popover on bottom</button>
                                    </Popover>
                                    <Popover container="body" placement="left" content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                                        <button type="button" className="btn btn-success">Popover on left</button>
                                    </Popover>
                                </Section>
                                <Separator />
                                <Section title="Dismiss on next click" subTitle="Use the focus trigger to dismiss popovers on the next click that the user makes.">
                                    <Popover trigger="focus" title="Dismissible popover" content="And here's some amazing content. It's very engaging. Right?">
                                        <a className="btn btn-success">Dismissible popover</a>
                                    </Popover>
                                </Section>
                            </Portlets>
                        </div>
                        <div className="col-lg-6">
                            <Portlets title="Advanced Examples">
                                <Section title="HTML Content" subTitle="Insert HTML into the popover:">
                                    <Popover trigger="focus" title="Popover title" content={"And here's some amazing" + <b>HTML</b> + "content. It's very " + <code>engaging</code> + ". Right?"}>
                                        <button type="button" className="btn btn-primary">Click me</button>
                                    </Popover>
                                </Section>
                                <Separator />
                                <Section className="m-demo-buttons" title="Offset" subTitle={"Offset of the popover relative to its target. For more information refer to" +
                                    <a className="m-link" href="http://tether.io/#offset" target="_blank">Tether's offset docs.</a>}>
                                    <Popover container="body" trigger="focus" data-offset="20px 20px" placement="top" content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                                        <button type="button" className="btn btn-brand">Example 1</button>
                                    </Popover>
                                    <Popover container="body" trigger="focus" data-offset="-20px -20px" placement="top" content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                                        <button type="button" className="btn btn-success">Example 2</button>
                                    </Popover>
                                    <Popover container="body" trigger="focus" data-offset="60px 0px" placement="top" content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                                        <button type="button" className="btn btn-danger">Example 3</button>
                                    </Popover>
                                </Section>
                                <Separator />
                                <Section className="m-demo-buttons" title="Skin" subTitle={"Use " + <code>data-skin="light"</code> + " or " + <code>data-skin="dark"</code> + "parameters to set popover skin. Default skin is light."}>
                                    <Popover container="body" trigger="focus" data-offset="20px 20px" placement="top" title="Default light skin" content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                                        <button type="button" className="btn btn-brand">Light skin</button>
                                    </Popover>
                                    <Popover container="body" trigger="click" data-skin="dark" placement="bottom" title="Dark skin" content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                                        <button type="button" className="btn btn-success">Dark skin</button>
                                    </Popover>
                                </Section>
                            </Portlets>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}