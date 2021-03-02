import React from 'react';

export enum ApplicationScreen {
    Main = 0, 
    Projects = 1
}

export interface BreadCrums {
    text: string;
    href: string;
}

export interface ApplicationState {
    
    Screen: ApplicationScreen;

    BreadCrums: BreadCrums [];
}

export interface ApplicationContextOperations {

    getMobileNavigationBarVisible: () => boolean;
    
    setWorkflowScreen: (screen: ApplicationScreen) => void;
    setWorkflowBreadCrumbs: (crumbs: BreadCrums []) => void;
}

export interface IApplicationContext {

    applicationState: ApplicationState;
    operations : ApplicationContextOperations
}

function BuildDefaultApplicationContext(): IApplicationContext {

    return {
        applicationState: {
            Screen: ApplicationScreen.Main,
            BreadCrums: []
        },
        operations: {
            getMobileNavigationBarVisible: () => {
                return false;
            },
            setWorkflowScreen: (screen: ApplicationScreen) => {/**/ },
            setWorkflowBreadCrumbs: (breadcums: BreadCrums[]) => {/**/ }
        }
    };
}

export const ApplicationContext = React.createContext(BuildDefaultApplicationContext());