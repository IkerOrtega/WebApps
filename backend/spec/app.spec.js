var Request = require("request");

describe("App", () => {
    let app;
    let firstPostId;
    beforeAll(() => {
        app = require("../app");
    });
    afterAll(() => {});
    describe("GET /api/users/", () => {
        let data = {};
        // add a new post to our database
        beforeAll((done) => {
            Request.get("http://localhost:3000/api/users", (err, response, body) => {
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                done();
            })
        });
        it("status 200", () => {
            expect(data.status).toBe(200);
        });
        it("check body", () => {
            expect(data.body.message).toBe("Users");
        });
    });
    describe("POST /api/posts", () => {
        let data = {};
        // add a new post to our database
        beforeAll((done) => {
            Request({
                method: 'POST',
                uri: `http://localhost:3000/api/posts`,
                json: true,
                body: {
                    title: "salt",
                    body: "bodyyyyy",
                }
            }, (error, response, body) => {
                data.status = response.statusCode;
                data.body = body;
                done();
            }).auth(null, null, true, process.env.TEST_VALID_TOKEN);
        });
        it("status 200", () => {
            expect(data.status).toBe(200);
        });
        it("check body", () => {
            console.log(data.body);
            expect(data.body.author.username).toBe("iker3");
            expect(data.body.title).toBe("salt");
            expect(data.body.text).toBe("bodyyyyy");
            expect(data.body._id).toBeDefined();

        });
    });
   
  
});