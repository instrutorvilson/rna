import { render, fireEvent } from '@testing-library/react-native'
import Cadastro from '../src/componentes/cadastro'
describe('Teste de cadastro', () => {
    test('verificar placeholder NOME', () => {
        //A -> arrange
        const { getByPlaceholderText } = render(<Cadastro />)
        //A -> act
        const inputNome = getByPlaceholderText('Nome')
        //A ->assert
        expect(inputNome.props.placeholder).toBeTruthy()
    })

    test('verificar testID input-name', () => {
        //A -> arrange
        const { getByTestId } = render(<Cadastro />)
        //A -> act
        const x = getByTestId('input-name')
        //A ->assert
        expect(x.props.placeholder).toBeTruthy()
    })

    test('verificar se existe botão gravar', () => {
        //A -> arrange
        const { getByTestId } = render(<Cadastro />)
        //A -> act
        const x = getByTestId('bt-gravar')
        //A ->assert
         expect(x.props.testID).toBeTruthy()
    })

    test('verificar botão gravar foi clicado', () => {
        //A -> arrange
        const { getByTestId } = render(<Cadastro />)
        //A -> act
        const x = getByTestId('bt-gravar')
        //A ->assert
        fireEvent.press(x)
    })

    test('verificar se trocou texto no componente Nome', () => {
        //A -> arrange
        const { getByTestId, getAllByText } = render(<Cadastro />)
        //A -> act
        const x = getByTestId('input-name')
        
        fireEvent.changeText(x,'maria')
        fireEvent.press(getByTestId('bt-gravar'))
        //A ->assert
        const nomes = getByTestId('input-name')
        expect(nomes.props.value).toEqual('maria')
    })
})