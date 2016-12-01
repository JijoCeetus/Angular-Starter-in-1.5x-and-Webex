export class RouteConfig {

    constructor(private $stateProvider: ng.ui.IStateProvider, private $urlRouterProvider: ng.ui.IUrlRouterProvider) {
        this.init();
    }

    private init(): void {
        this.$stateProvider.state("myapp", RouteConfig.defaultState());
        this.$stateProvider.state("dep.look-up", RouteConfig.lookUp());
        this.$urlRouterProvider.otherwise('/myapp/home');
    }

    private static defaultState(): ng.ui.IState {
        return {
            url: "/myapp/home",
            template: "<home></home>"
        }
        //Specify templateUrl to load a page
    }

    private static lookUp(): ng.ui.IState{
        return {
            url:"^/myapp/look-up",
            template:"<lookup></lookup>"
        }
    }
}



