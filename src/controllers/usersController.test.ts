import { Request } from 'express';
import { makeMockResponse } from '../mocks/mockResponse';
import { UsersController } from './usersController';


describe('Users Controller', () => {
    const usersController = new UsersController();

    const mockRequest = {} as Request
    const mockResponse = makeMockResponse()
    it ('Listar Usuários', () => {
        usersController.listarUsuario(mockRequest, mockResponse);   
        expect(mockResponse.state.status).toBe(200);
        expect(mockResponse.state.json).toHaveLength(4);
    })

    it ('Criar novo Usuário', () => {
        mockRequest.body = {
            name: 'Leonardo',
        }
        usersController.criarUsuario(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(201);
        expect(mockResponse.state.json).toMatchObject({'mensagem': `Usuário Leonardo criado.`})
    })

    it('Não criar Usuário em branco', () => {
        mockRequest.body = {
            name: ''
        }
        usersController.criarUsuario(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(403);
        expect(mockResponse.state.json).toMatchObject({mensagem: 'Não é possível criar usuário sem nome!'})


    })   


})