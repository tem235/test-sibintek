import {createServer} from "miragejs"

let server = function () {
    createServer({
        routes() {
            this.get("/api/skills", () => ({
                skills: [
                    {id: 1, text: "Adaptive and responsive layout"},
                    {id: 2, text: "Figma"},
                    {id: 3, text: "Git"},
                    {id: 4, text: "Lol"},
                    {id: 5, text: "Kek"},
                ],
            }))
        },
    })
}

export default server;