import React, {Component} from 'react';
import { 
    ApplicationScreen,
    BreadCrums, 
    ApplicationContextOperations, 
    IApplicationContext 
} from './applicationContext';


export class ApplicationContextImplimentation extends Component<{}, IApplicationContext> implements ApplicationContextOperations {

    constructor(props: {}) {
        super(props);
        this.state = {
            applicationState: {
                Screen: ApplicationScreen.Main,
                BreadCrums: []
            },
            operations: {
                getMobileNavigationBarVisible: this.getMobileNavigationBarVisible,
                setWorkflowBreadCrumbs: this.setWorkflowBreadCrumbs,
                setWorkflowScreen: this.setWorkflowScreen
            }
        }
    }

    public getMobileNavigationBarVisible = (): boolean => {
        return false
    }

    public setWorkflowBreadCrumbs = (crums: BreadCrums []) => {
        this.setState((prevState: IApplicationContext) =>{
            let newAppState = { ...prevState.applicationState};
            for(let current of crums) {
                newAppState.BreadCrums.push(current);
            }
            return { ... prevState, applicationState: newAppState}
        })
    };

    public setWorkflowScreen = (screen: ApplicationScreen) => {
        this.setState((prevState: IApplicationContext) => {
            let newAppState = { ...prevState.applicationState};
            newAppState.Screen = screen;
            return { ...prevState, applicationState: newAppState };
        })
    }
}