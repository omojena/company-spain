import React from 'react';
import {Feature1Animation} from "./animation/feature1";
import {Feature2Animation} from "./animation/feature2";
import {Feature3Animation} from "./animation/feature3";
import {Feature4Animation} from "./animation/feature4";

export const FeatureComponent = ({ icon })=> {
    const renderTitle = () => {
        switch (icon) {
            case 'fa fa-comments-o':
                return <Feature1Animation/>;
            case 'fa fa-bullhorn':
                return <Feature2Animation/>;
            case 'fa fa-group':
                return <Feature3Animation/>;
            default:
                return <Feature4Animation/>;
        }
    };

    return <>{renderTitle()}</>;
}