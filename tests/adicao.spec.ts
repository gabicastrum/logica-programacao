import { adicao } from '../src/adicao';
describe('adicao', () => {
  it('deve retornar 5 para 2 + 3', () => {
    expect(adicao(2, 3)).toBe(5);
  });

});
