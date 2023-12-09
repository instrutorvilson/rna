import { render, fireEvent } from '@testing-library/react-native'
import Calculadora from '../src/componentes/calculadora'

describe('teste de calculadora',()=>{
    test('Verificar se N1 existe', ()=>{
        const { getAllByPlaceholderText } = render(<Calculadora />)
        expect(getAllByPlaceholderText('N1')).toBeTruthy()
    })

    test('Verificar se N2 existe', ()=>{
        const { getAllByPlaceholderText } = render(<Calculadora />)
        expect(getAllByPlaceholderText('N2')).toBeTruthy()
    })

    test('Verificar se botão calcular existe', ()=>{
        const { getAllByText } = render(<Calculadora />)
        expect(getAllByText('Calcular')).toBeTruthy()
    })

    test('Verificar se botão calcular foi clicado', ()=>{
        const { getByText, getByPlaceholderText } = render(<Calculadora />)
        fireEvent.changeText(getByPlaceholderText('N1'),20)
        fireEvent.changeText(getByPlaceholderText('N2'),30)

        fireEvent.press(getByText('Calcular'))
        expect(getByText("50")).toBeTruthy()

    })
})