import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import bg from "../../assets/images/BG.png";

//const [display, setDisplay] = useState('');: Aqui, useState é um Hook do React que permite adicionar o estado a um componente funcional. Ele retorna um array onde o primeiro elemento (display) é o estado atual e o segundo elemento (setDisplay) é uma função que pode ser usada para atualizar esse estado. Nesse caso, display é o estado que armazena o valor exibido na calculadora. const [resultado, setResultado] = useState('');: Similar ao primeiro useState, isso define o estado para o resultado da calculadora.
export default function Calculadora() {
    const [display, setDisplay] = useState('');
    const [resultado, setResultado] = useState('');

    //const adicionarDigito = (digito) => { setDisplay(display + digito); };: Aqui, adicionarDigito é uma função que recebe um argumento digito e o adiciona ao estado display. Ou seja, esta função é chamada quando um dígito é pressionado na calculadora.
    const adicionarDigito = (digito) => {
        setDisplay(display + digito);
    };

    //const limparDisplay = () => { setDisplay(''); setResultado(''); };: Esta função limparDisplay limpa tanto o estado display quanto o estado resultado, deixando a calculadora pronta para uma nova operação.
    const limparDisplay = () => {
        setDisplay('');
        setResultado('');
    };

    //const calcularResultado = () => { ... }: Esta função calcularResultado é chamada quando o usuário pressiona o botão de igual na calculadora. Ela utiliza a função eval para avaliar a expressão contida no estado display e atualiza o estado resultado com o resultado da expressão. Se ocorrer algum erro durante a avaliação da expressão, ele define o estado resultado como 'Erro'.

    //const resultado = eval('2 + 2');
    //console.log(resultado); // Saída: 4
    //     Neste exemplo, a função eval avalia a string '2 + 2' como uma expressão matemática e retorna o resultado, que é 4.
    // No seu código da calculadora, a função calcularResultado usa eval para avaliar a expressão contida no estado display. Se o estado display contiver uma expressão matemática válida, eval calculará o resultado dessa expressão e o armazenará no estado resultado. Por exemplo, se display for '2 + 3', eval calculará o resultado 5 e o armazenará em resultado.
    // É importante notar que o uso de eval pode apresentar alguns riscos de segurança, especialmente se a string a ser avaliada for gerada dinamicamente com entrada do usuário. Isso ocorre porque eval executa o código como JavaScript e pode permitir a execução de código malicioso. Portanto, deve-se ter cuidado ao usar eval, especialmente em situações onde a string a ser avaliada não é controlada ou confiável.
    const calcularResultado = () => {
        try {
            const resultadoCalculado = eval(display);
            setResultado(resultadoCalculado.toString());
        } catch (error) {
            setResultado('Erro');
        }
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={bg} style={styles.bg}>
                <Text style={styles.titulo1}>Calculadora</Text>
                <Text style={styles.titulo2}>Pousada do Lago</Text>
                <View style={styles.display}>
                    <Text style={styles.displayText}>{display}</Text>
                    <Text style={styles.resultado}>{resultado}</Text>
                </View>
                <View style={styles.containerow}>
                    <TouchableOpacity
                        style={styles.botao}
                        onPress={() => adicionarDigito('7')}>
                        <Text style={styles.textoBotao}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.botao}
                        onPress={() => adicionarDigito('8')}>
                        <Text style={styles.textoBotao}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.botao}
                        onPress={() => adicionarDigito('9')}>
                        <Text style={styles.textoBotao}>9</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.botao}
                        onPress={() => adicionarDigito('/')}>
                        <Text style={styles.textoBotao}>/</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.containerow}>
                    <TouchableOpacity
                        style={styles.botao}
                        onPress={() => adicionarDigito('4')}>
                        <Text style={styles.textoBotao}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.botao}
                        onPress={() => adicionarDigito('5')}>
                        <Text style={styles.textoBotao}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.botao}
                        onPress={() => adicionarDigito('6')}>
                        <Text style={styles.textoBotao}>6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.botao}
                        onPress={() => adicionarDigito('*')}>
                        <Text style={styles.textoBotao}>x</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.containerow}>
                    <TouchableOpacity
                        style={styles.botao}
                        onPress={() => adicionarDigito('1')}>
                        <Text style={styles.textoBotao}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.botao}
                        onPress={() => adicionarDigito('2')}>
                        <Text style={styles.textoBotao}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.botao}
                        onPress={() => adicionarDigito('3')}>
                        <Text style={styles.textoBotao}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.botao}
                        onPress={() => adicionarDigito('-')}>
                        <Text style={styles.textoBotao}>-</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.containerow}>
                    <TouchableOpacity
                        style={styles.botao}
                        onPress={limparDisplay}>
                        <Text style={styles.textoBotao}>C</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.botao}
                        onPress={() => adicionarDigito('0')}>
                        <Text style={styles.textoBotao}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.botao}
                        onPress={calcularResultado}>
                        <Text style={styles.textoBotao}>=</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.botao}
                        onPress={() => adicionarDigito('+')}>
                        <Text style={styles.textoBotao}>+</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bg: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    titulo1: {
        fontSize: 30,
        marginBottom: 6,
        fontWeight: "bold",
        letterSpacing: 3,
    },
    titulo2: {
        fontSize: 19,
        marginBottom: 25,
        color: "gray",
        fontWeight: "bold",
    },
    display: {
        alignItems: 'flex-end',
        marginBottom: 10,
        borderWidth: 1,
        padding: 10,
        width: 234,
        borderRadius: 20,
        borderColor: '#4e575c',
        backgroundColor: '#fff'
    },
    displayText: {
        fontSize: 14,
        fontWeight: '400',
        color: '#4e575c',
        paddingHorizontal: 10,
    },
    resultado: {
        fontSize: 30,
        fontWeight: '600',
        paddingHorizontal: 10,
    },
    containerow: {
        flexDirection: 'row',
    },
    botao: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 10,
        elevation: 4,
        borderColor: '#4e575c',
        borderWidth: 1,
        margin: 4,
        alignSelf: 'center',
    },
    textoBotao: {
        fontSize: 20,
        color: '#4e575c',
    },
});


