import { action, observable } from "mobx";

export class UI {
    @observable
    mediaQuery = {
        isMobile: false,
        isDesktop: true
    };

    tabIndex = 1;

    @action
    setTabIndex(value) {
        this.tabIndex = value;
    }

    @action
    setMediaQuery(data) {
        if (this.mediaQuery.isDesktop !== data.isDesktop || this.mediaQuery.isMobile !== data.isMobile) {
            this.mediaQuery = data;
        }
    };
}


// import {action, makeAutoObservable, observable} from "mobx";

// export class UI {
//     mediaQuery = {
//         isMobile: false,
//         isDesktop: true
//     };

//     testValue = "Test Mobx";

//     constructor(ctx) {
//         this.ctx = ctx;
//         makeAutoObservable(this);
//     }

//     setTestValue() {
//         this.testValue = "yo dayo";
//     }

//     setMediaQuery(data) {
//         if (this.mediaQuery.isDesktop !== data.isDesktop || this.mediaQuery.isMobile !== data.isMobile) {
//             this.mediaQuery = data;
//         }
//     };
// }
