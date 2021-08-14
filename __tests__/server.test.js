'use strict';
const server = require('../server');
// I do not have to run it
const supertest = require('supertest');
const request = supertest(server.app);

//add the name of the module that I am testing 
describe('my API Server', ()=> {

    beforeEach(()=> {
        jest.spyOn(console, 'log').mockImplementation();
    })

    // add scenarios & test cases 
    it('handles not found request', async () => {
        // add test
        const response = await request.get('/asd'); // async
        expect(response.status).toEqual(404);
    });

    //  1. callbacks ---> Promises (Promise.then() ) ----> Async/Await
    
   
    
    it('get data from /animal ', async () => {
        const response = await request.get('/animal'); // async
        expect(response.status).toEqual(200);
        expect(typeof response.body).toEqual('object'); // superagent is behind this 
    });

    it('get data from /animal/:id ', async () => {
        const response = await request.get('/animal/:id'); // async
        expect(response.status).toEqual(200);
        expect(typeof response.body).toEqual('object'); // superagent is behind this 
    });

    it('delete data from /animal/:id ', async () => {
        const response = await request.delete('/animal/1'); // async
        expect(response.status).toEqual(204);
        expect(typeof response.body).toEqual('object'); // superagent is behind this 
    });

    it('update data from /animal/:id ', async () => {
        const response = await request.get('/animal/1'); // async
        expect(response.status).toEqual(200);
        expect(typeof response.body).toEqual('object'); // superagent is behind this 
    });


    //********************************************************** */


    it('get data from /order ', async () => {
        const response = await request.get('/order'); // async
        expect(response.status).toEqual(200);
        expect(typeof response.body).toEqual('object'); // superagent is behind this 
    });

    it('get data from /order/:id ', async () => {
        const response = await request.get('/order/:id'); // async
        expect(response.status).toEqual(200);
        expect(typeof response.body).toEqual('object'); // superagent is behind this 
    });

    it('delete data from /order/:id ', async () => {
        const response = await request.delete('/order/1'); // async
        expect(response.status).toEqual(204);
        expect(typeof response.body).toEqual('object'); // superagent is behind this 
    });

    it('update data from /order/:id ', async () => {
        const response = await request.get('/order/1'); // async
        expect(response.status).toEqual(200);
        expect(typeof response.body).toEqual('object'); // superagent is behind this 
    });
    
    it('/ route works', async () => {
        const response = await request.get('/'); // async
        expect(response.status).toEqual(200);
        console.log(response.text);
        expect(response.text).toEqual('hello');
    });
   


});