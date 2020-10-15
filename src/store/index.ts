import {observable, action, makeObservable, runInAction} from 'mobx';

import server from "../server";

server()


class Store {
    @observable
    skills: object[] = [
        {id: 1, text: "Adaptive and responsive layout"},
        {id: 2, text: "Figma"},
        {id: 3, text: "Git"},
        {id: 4, text: "JavaScript"},
        {id: 5, text: "Laravel"},
        {id: 6, text: "Development and reengineering of business processes"},
        {id: 7, text: "manage life cycle of development"},
        {id: 8, text: "Vue (Nuxt.js, Vuex)"},
        {id: 9, text: "WebSockets"},
        {id: 10, text: "Webpack"},
    ]

    constructor() {
        makeObservable(this);
    }

    async getSkills() {
        const res = await fetch('/api/skills')
        const {skills} = await res.json()
        runInAction(() => {
            this.skills = skills;
        })
    }


}

export default Store